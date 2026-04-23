'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { type Mood, type MoodConfig, MOODS } from '@/lib/moods'

interface MoodContextValue {
  mood:            Mood | null
  config:          MoodConfig | null
  isTransitioning: boolean
  setMood:         (m: Mood) => void
  resetMood:       () => void
}

const MoodContext = createContext<MoodContextValue | null>(null)

export function useMood() {
  const ctx = useContext(MoodContext)
  if (!ctx) throw new Error('useMood must be used inside MoodProvider')
  return ctx
}

function applyAccent(config: MoodConfig) {
  const root = document.documentElement
  root.style.setProperty('--accent', config.accent)
  root.style.setProperty('--accent-rgb', config.accentRgb)
}

function clearAccent() {
  const root = document.documentElement
  root.style.setProperty('--accent', '#E8FF4D')
  root.style.setProperty('--accent-rgb', '232, 255, 77')
}

export function MoodProvider({ children }: { children: ReactNode }) {
  const [mood, setMoodState] = useState<Mood | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const saved = sessionStorage.getItem('portfolio-mood') as Mood | null
    if (saved && MOODS[saved]) {
      applyAccent(MOODS[saved])
      setMoodState(saved)
    }
  }, [])

  const setMood = useCallback((m: Mood) => {
    setIsTransitioning(true)
    applyAccent(MOODS[m])
    sessionStorage.setItem('portfolio-mood', m)
    setMoodState(m)
    setTimeout(() => setIsTransitioning(false), 900)
  }, [])

  const resetMood = useCallback(() => {
    sessionStorage.removeItem('portfolio-mood')
    clearAccent()
    setMoodState(null)
  }, [])

  return (
    <MoodContext.Provider
      value={{
        mood,
        config: mood ? MOODS[mood] : null,
        isTransitioning,
        setMood,
        resetMood,
      }}
    >
      {children}
    </MoodContext.Provider>
  )
}

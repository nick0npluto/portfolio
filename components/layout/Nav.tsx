'use client'

import { useEffect, useRef } from 'react'
import { useMood } from '@/components/providers/MoodProvider'

export function Nav() {
  const { config, resetMood } = useMood()
  const nameRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const el = nameRef.current
    if (!el) return

    const flash = (steps: [number, number][]) => {
      steps.forEach(([delay, opacity]) => {
        setTimeout(() => { el.style.opacity = String(opacity) }, delay)
      })
    }

    const flicker = () => {
      const type = Math.random()
      if (type < 0.4) {
        // Quick single blink
        flash([[0, 0], [60, 1]])
      } else if (type < 0.75) {
        // Double stutter
        flash([[0, 0], [50, 0.4], [90, 0], [140, 1]])
      } else {
        // Full broken-light sequence
        flash([[0, 0.1], [40, 1], [70, 0], [100, 0.6], [130, 0], [180, 1]])
      }
    }

    let timer: ReturnType<typeof setTimeout>
    const schedule = () => {
      const delay = 800 + Math.random() * 2200
      timer = setTimeout(() => { flicker(); schedule() }, delay)
    }

    schedule()
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5">
      <button
        ref={nameRef}
        onClick={resetMood}
        aria-label="Back to home"
        className="font-mono text-xs tracking-[0.2em] uppercase"
        style={{
          color: 'var(--accent)',
          textShadow: '0 0 8px var(--accent), 0 0 22px var(--accent)',
        }}
      >
        Nicholas Onafuye
      </button>

      {config && (
        <button
          onClick={resetMood}
          className="flex items-center gap-2 group"
          aria-label="Change perspective"
        >
          <span
            className="w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: 'var(--accent)' }}
          />
          <span className="font-mono text-xs tracking-[0.15em] text-muted uppercase group-hover:text-fg transition-colors duration-200">
            {config.label}
          </span>
        </button>
      )}
    </header>
  )
}

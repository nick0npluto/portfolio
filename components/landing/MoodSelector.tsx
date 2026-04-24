'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useMood } from '@/components/providers/MoodProvider'
import { type Mood } from '@/lib/moods'

const MOOD_OPTIONS: { id: Mood; label: string; description: string }[] = [
  { id: 'hire',        label: 'Hire Me',      description: 'You need someone to build.' },
  { id: 'collaborate', label: 'Collaborate',   description: 'You have an idea worth pursuing.' },
  { id: 'curious',     label: 'Just Curious',  description: 'You wandered in. Stay a while.' },
]

const BLOBS = [
  { size: 520, blur: 90, opacity: 0.13, speed: 0.05 },
  { size: 300, blur: 60, opacity: 0.16, speed: 0.09 },
  { size: 160, blur: 32, opacity: 0.24, speed: 0.15 },
]

function FluidBlobs() {
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  useEffect(() => {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const pos = BLOBS.map(() => ({ x: cx, y: cy }))
    const mouse = { x: cx, y: cy }
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const tick = () => {
      BLOBS.forEach((blob, i) => {
        pos[i].x += (mouse.x - pos[i].x) * blob.speed
        pos[i].y += (mouse.y - pos[i].y) * blob.speed
        const el = refs[i].current
        if (el) {
          el.style.transform = `translate(${pos[i].x}px, ${pos[i].y}px) translate(-50%, -50%)`
        }
      })
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          ref={refs[i]}
          aria-hidden
          style={{
            position:        'absolute',
            top:             0,
            left:            0,
            width:           blob.size,
            height:          blob.size,
            borderRadius:    '50%',
            background:      'var(--accent)',
            opacity:         blob.opacity,
            filter:          `blur(${blob.blur}px)`,
            pointerEvents:   'none',
            willChange:      'transform',
          }}
        />
      ))}
    </>
  )
}

export function MoodSelector() {
  const { setMood } = useMood()
  const [fading, setFading] = useState(false)

  const handleSelect = useCallback((id: Mood) => {
    if (fading) return
    setFading(true)
    setTimeout(() => setMood(id), 350)
  }, [fading, setMood])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-base z-50 overflow-hidden"
      style={{ transition: 'opacity 0.35s ease', opacity: fading ? 0 : 1 }}
    >
      <FluidBlobs />

      <div className="relative z-10 flex flex-col items-center gap-12 px-6 text-center max-w-2xl">
        <p
          className="font-mono text-xs tracking-[0.25em] uppercase transition-colors duration-300"
          style={{ color: 'var(--accent)' }}
        >
          Nicholas Onafuye
        </p>

        <h1
          className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] transition-colors duration-300"
          style={{ color: '#f0f0f0', textShadow: '0 0 40px rgba(8,8,8,0.9)' }}
        >
          What brings you here?
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {MOOD_OPTIONS.map((opt) => (
            <div key={opt.id} className="mood-btn-wrap flex-1">
              <button
                onClick={() => handleSelect(opt.id)}
                className="group flex flex-col items-start gap-1 px-8 py-5 rounded-[0.5rem] text-left w-full focus-visible:outline-none"
                style={{ backgroundColor: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(8px)' }}
              >
                <span className="text-lg font-semibold text-fg tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)]">
                  {opt.label}
                </span>
                <span className="text-sm font-mono text-muted transition-colors duration-200 group-hover:text-fg">
                  {opt.description}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

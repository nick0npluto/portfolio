'use client'

import { useEffect, useRef } from 'react'

export function CursorEffects() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cy', `${e.clientY}px`)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* Page-wide spotlight that follows the cursor */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-[30]"
        style={{
          background: 'radial-gradient(500px circle at var(--cx, -9999px) var(--cy, -9999px), rgba(var(--accent-rgb), 0.07) 0%, transparent 70%)',
        }}
      />
      {/* Accent dot cursor */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          width:           6,
          height:          6,
          borderRadius:    '50%',
          backgroundColor: 'var(--accent)',
          pointerEvents:   'none',
          zIndex:          9999,
          willChange:      'transform',
        }}
      />
    </>
  )
}

'use client'

import { useMood } from '@/components/providers/MoodProvider'

export function Nav() {
  const { config, resetMood } = useMood()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5">
      <button
        onClick={resetMood}
        aria-label="Back to home"
        className="name-flicker font-mono text-xs tracking-[0.2em] uppercase"
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

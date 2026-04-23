'use client'

import Image from 'next/image'
import { useMood } from '@/components/providers/MoodProvider'

export function Hero() {
  const { config } = useMood()
  if (!config) return null

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10 pt-24 pb-16 overflow-hidden">
      {/* Vertical rail label */}
      <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 items-center">
        <span
          className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase select-none"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Nicholas Onafuye — 2025
        </span>
        <div className="ml-3 w-px h-24 bg-border" />
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto md:pl-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-8 max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.92] tracking-tight text-fg anim-fade-up">
            {config.headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          <p
            className="font-mono text-sm text-muted max-w-lg leading-relaxed anim-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            {config.sub}
          </p>

          <div className="anim-fade-up" style={{ animationDelay: '0.25s' }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 border font-mono text-sm tracking-widest uppercase transition-all duration-300"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'var(--accent)'
                el.style.color = '#080808'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'transparent'
                el.style.color = 'var(--accent)'
              }}
            >
              {config.ctaLabel}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right: headshot */}
        <div className="hidden lg:block relative w-72 xl:w-80 aspect-[3/4] border border-border overflow-hidden flex-shrink-0 anim-fade-up" style={{ animationDelay: '0.1s' }}>
          <Image
            src="/headshot.png"
            alt="Nicholas Onafuye"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ backgroundColor: 'var(--accent)' }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in" style={{ animationDelay: '0.5s' }}>
        <span className="font-mono text-[9px] tracking-[0.3em] text-muted uppercase">scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  )
}

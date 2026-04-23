'use client'

import { useMood } from '@/components/providers/MoodProvider'
import { SKILLS } from '@/lib/moods'

const doubled = [...SKILLS, ...SKILLS]

export function About() {
  const { config } = useMood()
  if (!config) return null

  return (
    <section className="py-24 overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-6 mb-16">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">About</span>
            <h2 className="text-2xl font-black tracking-tight text-fg">The Human Behind It</h2>
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <p className="text-lg md:text-xl leading-[1.75] text-fg/80 font-light max-w-xl">
            {config.bio}
          </p>

          <div className="flex flex-col justify-center gap-6">
            {[
              { label: 'Based in',  value: 'United States' },
              { label: 'Available', value: 'Open to opportunities' },
              { label: 'Focus',     value: 'Data · Software · Architecture' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 border-l-2 pl-4" style={{ borderColor: 'var(--accent)' }}>
                <span className="font-mono text-[10px] tracking-widest text-muted uppercase">{label}</span>
                <span className="text-sm font-medium text-fg">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill ticker */}
      <div className="relative">
        <div className="flex overflow-hidden select-none py-4 border-y border-border">
          <div
            className="flex shrink-0 gap-4"
            style={{ animation: 'ticker 28s linear infinite' }}
          >
            {doubled.map((skill, i) => (
              <span
                key={i}
                className="font-mono text-xs tracking-widest uppercase whitespace-nowrap px-4 py-2 border border-border rounded-full text-muted hover:text-fg hover:border-[var(--accent)] transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

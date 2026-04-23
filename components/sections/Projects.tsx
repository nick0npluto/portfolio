'use client'

import { ProjectCard } from '@/components/sections/ProjectCard'
import { PROJECT_CARDS } from '@/lib/moods'

export function Projects() {
  return (
    <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto w-full">
      {/* Section header */}
      <div className="flex items-center gap-6 mb-12">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">Selected Work</span>
          <h2 className="text-2xl font-black tracking-tight text-fg">Projects</h2>
        </div>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Masonry columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {PROJECT_CARDS.map((card, i) => (
          <ProjectCard key={card.id} {...card} index={i} />
        ))}
      </div>
    </section>
  )
}

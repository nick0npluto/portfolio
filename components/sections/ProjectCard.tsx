'use client'

import Image from 'next/image'
import { type ProjectCard as ProjectCardType } from '@/lib/moods'
import { cn } from '@/lib/utils'

const HEIGHT_MAP = {
  small:  'h-32',
  medium: 'h-48',
  large:  'h-64',
}

interface ProjectCardProps extends ProjectCardType {
  index: number
}

export function ProjectCard({ title, tags, size, year, summary, href, image }: ProjectCardProps) {
  const Wrapper = href ? 'a' : 'div'
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="break-inside-avoid mb-4 bg-surface border border-border rounded-lg overflow-hidden hover:border-[var(--accent)] transition-colors duration-200 block"
    >
      {/* Preview area */}
      <div
        className={cn(
          'relative w-full bg-base border-b border-border overflow-hidden',
          HEIGHT_MAP[size],
        )}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
            <div className="w-10 h-10 border border-muted rounded" />
            <span className="font-mono text-[9px] tracking-widest text-muted uppercase">project preview</span>
          </div>
        )}
        <span className="absolute top-3 right-3 font-mono text-[9px] tracking-widest text-muted uppercase bg-base/70 px-1.5 py-0.5 rounded">
          {year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-base font-semibold text-fg leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed font-mono">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border uppercase"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

'use client'

import { useMood } from '@/components/providers/MoodProvider'

function SectionHeader() {
  return (
    <div className="flex items-center gap-6 mb-16">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">Contact</span>
        <h2 className="text-2xl font-black tracking-tight text-fg">Let&apos;s Talk</h2>
      </div>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

function HireContact() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-fg">
        Ready to build<br />something that lasts?
      </h3>
      <p className="font-mono text-sm text-muted leading-relaxed">
        I&apos;m available for full-time roles, consulting engagements, and high-impact projects.
        Response time is under 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:nicholasonafuye@gmail.com"
          className="group inline-flex items-center gap-3 px-8 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300"
          style={{ backgroundColor: 'var(--accent)', color: '#080808' }}
        >
          Book a call
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
        <a
          href="mailto:nicholasonafuye@gmail.com"
          className="group inline-flex items-center gap-3 px-8 py-4 border font-mono text-sm tracking-widest uppercase transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{ borderColor: '#1e1e1e', color: '#555' }}
        >
          nicholasonafuye@gmail.com
        </a>
        <a
          href="/nicholas-onafuye-resume.pdf"
          download
          className="group inline-flex items-center gap-3 px-8 py-4 border font-mono text-sm tracking-widest uppercase transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{ borderColor: '#1e1e1e', color: '#555' }}
        >
          Resume ↓
        </a>
      </div>
    </div>
  )
}

function CollaborateContact() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-fg">
        Got an idea?<br />Let&apos;s make it real.
      </h3>
      <form
        action="mailto:nicholasonafuye@gmail.com"
        method="get"
        className="flex flex-col gap-4"
      >
        <input
          name="from"
          type="text"
          placeholder="Your name"
          className="bg-surface border border-border text-fg font-mono text-sm px-5 py-4 outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-muted"
        />
        <input
          name="subject"
          type="text"
          placeholder="What are you building?"
          className="bg-surface border border-border text-fg font-mono text-sm px-5 py-4 outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-muted"
        />
        <textarea
          name="body"
          rows={5}
          placeholder="Tell me about the idea — the rough shape of it is enough."
          className="bg-surface border border-border text-fg font-mono text-sm px-5 py-4 outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-muted resize-none"
        />
        <button
          type="submit"
          className="group self-start inline-flex items-center gap-3 px-8 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300"
          style={{ backgroundColor: 'var(--accent)', color: '#080808' }}
        >
          Send it over
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </form>
    </div>
  )
}

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com',                    desc: 'Code, projects, and repos' },
  { label: 'LinkedIn', href: 'https://linkedin.com',                   desc: 'Professional background' },
  { label: 'Email',    href: 'mailto:nicholasonafuye@gmail.com',        desc: 'nicholasonafuye@gmail.com' },
  { label: 'Resume',   href: '/nicholas-onafuye-resume.pdf',            desc: 'Download PDF' },
]

function CuriousContact() {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-fg max-w-xl">
        The work speaks.<br />Here&apos;s where to find more.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col gap-2 p-5 border border-border hover:border-[var(--accent)] transition-colors duration-200"
          >
            <span className="font-semibold text-fg group-hover:text-[var(--accent)] transition-colors duration-200">
              {link.label}
            </span>
            <span className="font-mono text-xs text-muted">{link.desc}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export function Contact() {
  const { config } = useMood()
  if (!config) return null

  return (
    <section id="contact" className="px-6 md:px-10 py-24 max-w-7xl mx-auto w-full">
      <SectionHeader />
      {config.emphasis === 'skills'  && <HireContact />}
      {config.emphasis === 'process' && <CollaborateContact />}
      {config.emphasis === 'story'   && <CuriousContact />}

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted tracking-wider">
          © 2025 Nicholas Onafuye
        </span>
        <span className="font-mono text-xs text-muted tracking-wider">
          Me and a computer are a team with no limits.
        </span>
      </div>
    </section>
  )
}

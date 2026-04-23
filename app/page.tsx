'use client'

import { useMood } from '@/components/providers/MoodProvider'
import { MoodSelector } from '@/components/landing/MoodSelector'
import { Nav } from '@/components/layout/Nav'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function Page() {
  const { mood } = useMood()

  return (
    <main>
      {mood === null ? (
        <MoodSelector />
      ) : (
        <div className="anim-fade-in">
          <Nav />
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      )}
    </main>
  )
}

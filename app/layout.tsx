import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { MoodProvider } from '@/components/providers/MoodProvider'
import { CursorEffects } from '@/components/cursor/CursorEffects'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nicholas Onafuye',
  description: 'Me and a computer are a team with no limits.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-base text-fg antialiased">
        <MoodProvider>
          <CursorEffects />
          {children}
        </MoodProvider>
      </body>
    </html>
  )
}

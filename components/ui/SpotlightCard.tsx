import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children:   ReactNode
  className?: string
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      {children}
    </div>
  )
}

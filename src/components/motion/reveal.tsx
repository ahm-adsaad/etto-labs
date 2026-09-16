import { cn } from "@/lib/utils"

type RevealProps = {
  delay?: number
  y?: number
  className?: string
  children: React.ReactNode
}

/**
 * Server Component wrapper. Scroll motion uses CSS view timelines where
 * supported; no client JS on the critical path.
 */
export function Reveal({ children, className }: RevealProps) {
  return <div className={cn("reveal-view", className)}>{children}</div>
}

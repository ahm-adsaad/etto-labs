import { cn } from "@/lib/utils"

type StatCounterProps = {
  value: number
  className?: string
  durationMs?: number
}

/** Server-rendered final value — count-up is progressive enhancement via CSS/JS island. */
export function StatCounter({ value, className }: StatCounterProps) {
  return (
    <span className={cn("type-mono-data tabular-nums", className)}>{value}</span>
  )
}

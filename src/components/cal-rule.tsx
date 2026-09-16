import { cn } from "@/lib/utils"

export function CalRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("calrule w-full", className)}
      role="presentation"
      aria-hidden
    />
  )
}

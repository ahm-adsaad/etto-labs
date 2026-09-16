"use client"

import { Analytics } from "@vercel/analytics/react"

/** Only mounts when built on Vercel — avoids local 404 on /_vercel/insights. */
export function AnalyticsBeacon({ enabled }: { enabled: boolean }) {
  if (!enabled) return null
  return <Analytics />
}

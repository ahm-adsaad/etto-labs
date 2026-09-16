"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const CalEmbed = dynamic(
  () => import("@/components/cal-embed").then((m) => m.CalEmbed),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-[520px] items-center justify-center bg-g-50 text-sm text-g-500"
        aria-busy
      >
        Loading calendar…
      </div>
    ),
  }
)

/** Only mount the Cal embed once the booking section is near the viewport. */
export function CalEmbedLazy() {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: "200px 0px" }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="min-h-[520px]">
      {show ? (
        <CalEmbed />
      ) : (
        <div
          className="flex min-h-[520px] items-center justify-center bg-g-50 text-sm text-g-500"
          aria-hidden
        >
          Calendar loads when you scroll here
        </div>
      )}
    </div>
  )
}

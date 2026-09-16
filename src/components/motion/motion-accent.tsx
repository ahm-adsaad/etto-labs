"use client"

import { motion, useReducedMotion } from "motion/react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Deferred Framer island — loaded only with the measurement section. */
export function MotionAccent({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

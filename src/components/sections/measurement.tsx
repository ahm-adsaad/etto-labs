import dynamic from "next/dynamic"
import { CalRule } from "@/components/cal-rule"
import { Reveal } from "@/components/motion/reveal"
import { StatCounter } from "@/components/motion/stat-counter"
import { strings } from "@/lib/strings"

const MotionAccent = dynamic(
  () =>
    import("@/components/motion/motion-accent").then((m) => m.MotionAccent),
  { ssr: true }
)

export function Measurement() {
  const { measurement } = strings

  return (
    <section
      className="bg-white section-pad"
      aria-labelledby="measurement-heading"
    >
      <div className="container-etto">
        <Reveal>
          <h2 id="measurement-heading" className="type-h2 max-w-[20ch]">
            {measurement.header}
          </h2>
          <p className="type-lede mt-6">{measurement.body}</p>
        </Reveal>

        <MotionAccent>
          <div className="mt-14 grid gap-8 border border-g-200 bg-g-50 p-8 md:grid-cols-3 md:gap-4 md:p-10">
            {measurement.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <p className="font-display text-[48px] font-semibold leading-none tracking-[-0.04em] text-ink md:text-[56px]">
                  <StatCounter value={stat.value} />
                </p>
                <p className="mt-3 max-w-[20ch] text-[14px] leading-snug text-g-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </MotionAccent>
      </div>
      <div className="container-etto mt-16">
        <CalRule />
      </div>
    </section>
  )
}

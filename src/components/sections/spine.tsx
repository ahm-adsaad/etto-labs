import { CalRule } from "@/components/cal-rule"
import { Reveal } from "@/components/motion/reveal"
import { strings } from "@/lib/strings"

export function Spine() {
  const { spine } = strings

  return (
    <section
      id="how-it-works"
      className="bg-blue-50 section-pad scroll-mt-24"
      aria-labelledby="spine-heading"
    >
      <div className="container-etto">
        <Reveal>
          <h2 id="spine-heading" className="type-h2">
            {spine.header}
          </h2>
        </Reveal>

        <div className="mt-10 mb-10">
          <CalRule />
        </div>

        <ol className="grid gap-8 content-auto md:grid-cols-5 md:gap-5">
          {spine.phases.map((phase, i) => (
            <li key={phase.num} className="min-w-0">
              <Reveal delay={i * 0.05}>
                <div className="flex flex-col border-s border-g-300 ps-4 md:border-s-0 md:ps-0">
                  <span className="text-[13px] font-medium text-g-500">
                    {phase.num} · {phase.days}
                  </span>
                  <h3 className="type-h3 mt-2">{phase.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-g-600">
                    {phase.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

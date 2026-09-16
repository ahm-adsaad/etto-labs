import { CalRule } from "@/components/cal-rule"
import { Reveal } from "@/components/motion/reveal"
import { strings } from "@/lib/strings"

export function Problem() {
  const { problem } = strings

  return (
    <section className="bg-g-50 section-pad" aria-labelledby="problem-heading">
      <div className="container-etto">
        <Reveal>
          <h2 id="problem-heading" className="type-h2 max-w-[22ch]">
            {problem.header}
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-0">
          {problem.rows.map((row, i) => (
            <Reveal key={row.left} delay={i * 0.06}>
              <div className="grid gap-4 border-t border-g-200 py-8 md:grid-cols-2 md:gap-12">
                <p className="font-body text-[17px] italic leading-relaxed text-g-500">
                  &ldquo;{row.left}&rdquo;
                </p>
                <p className="font-body text-[17px] leading-relaxed text-ink">
                  {row.right}
                </p>
              </div>
            </Reveal>
          ))}
          <CalRule />
        </div>
      </div>
    </section>
  )
}

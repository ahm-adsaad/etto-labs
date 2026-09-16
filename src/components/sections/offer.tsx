import { CalRule } from "@/components/cal-rule"
import { Reveal } from "@/components/motion/reveal"
import { strings } from "@/lib/strings"

export function Offer() {
  const { offer } = strings

  return (
    <section
      id="the-offer"
      className="bg-white section-pad scroll-mt-24"
      aria-labelledby="offer-heading"
    >
      <div className="container-etto">
        <Reveal>
          <h2 id="offer-heading" className="type-h2 max-w-[22ch]">
            {offer.header}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offer.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <article className="flex h-full flex-col border border-g-200 bg-white p-6 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-g-300">
                <h3 className="type-h3">{step.title}</h3>
                <p className="mt-4 text-[15px] font-medium text-ink">
                  {step.price}
                </p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-g-600">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="container-etto mt-16">
        <CalRule />
      </div>
    </section>
  )
}

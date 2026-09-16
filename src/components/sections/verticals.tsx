import { CalRule } from "@/components/cal-rule"
import { Reveal } from "@/components/motion/reveal"
import { strings } from "@/lib/strings"

export function Verticals() {
  const { verticals } = strings

  return (
    <section
      id="verticals"
      className="bg-g-50 section-pad scroll-mt-24"
      aria-labelledby="verticals-heading"
    >
      <div className="container-etto">
        <Reveal>
          <h2 id="verticals-heading" className="type-h2">
            {verticals.header}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {verticals.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <article className="h-full border border-g-200 bg-white p-7 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-g-300">
                <h3 className="type-h3">{card.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-g-600">
                  {card.body}
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

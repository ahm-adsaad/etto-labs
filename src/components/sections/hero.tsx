import { CAL_LINK } from "@/lib/constants"
import { strings } from "@/lib/strings"

export function Hero() {
  const { hero } = strings

  return (
    <section
      id="top"
      className="relative min-h-[min(92vh,880px)] bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="container-etto relative pt-28 pb-20 md:pt-36 md:pb-28">
        <h1 id="hero-heading" className="type-hero max-w-[16ch]">
          {hero.headlineLines[0]}
          <br />
          {hero.headlineLines[1]}
          <br />
          {hero.headlineLines[2]}
        </h1>

        <p className="type-lede mt-8">{hero.subhead}</p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`https://cal.com/${CAL_LINK}`}
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius)] bg-ink px-6 text-sm font-medium text-white transition-colors duration-150 hover:bg-g-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius)] border border-ink px-6 text-sm font-medium text-ink transition-colors duration-150 hover:bg-g-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  )
}

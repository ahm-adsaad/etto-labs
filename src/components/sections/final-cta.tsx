import { Reveal } from "@/components/motion/reveal"
import { strings } from "@/lib/strings"
import { WHATSAPP_URL } from "@/lib/constants"
import { CalEmbedLazy } from "@/components/cal-embed-lazy"

export function FinalCta() {
  const { finalCta } = strings

  return (
    <section
      id="book"
      className="bg-blue-50 section-pad scroll-mt-24"
      aria-labelledby="cta-heading"
    >
      <div className="container-etto">
        <Reveal>
          <h2 id="cta-heading" className="type-h2 max-w-[18ch]">
            {finalCta.header}
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-g-600 link-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {finalCta.whatsapp}
          </a>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-g-200 bg-white">
          <CalEmbedLazy />
        </div>
      </div>
    </section>
  )
}

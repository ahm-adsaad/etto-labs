import { CalRule } from "@/components/cal-rule"
import { strings } from "@/lib/strings"

/** Native details/summary — zero JS, fully keyboard accessible. */
export function Faq() {
  const { faq } = strings

  return (
    <section
      id="faq"
      className="bg-white section-pad scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="container-etto max-w-[760px]">
        <h2 id="faq-heading" className="type-h2">
          {faq.header}
        </h2>

        <div className="mt-8">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group border-b border-g-200 open:pb-0"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 type-h3 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="mt-1 text-g-500 transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="pb-5 pe-8 text-[16px] leading-[1.6] text-g-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
      <div className="container-etto mt-16">
        <CalRule />
      </div>
    </section>
  )
}

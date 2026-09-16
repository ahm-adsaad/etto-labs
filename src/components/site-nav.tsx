import Link from "next/link"
import { Logo } from "@/components/logo"
import { CAL_LINK } from "@/lib/constants"
import { strings } from "@/lib/strings"

const links = [
  { href: "#how-it-works", label: strings.nav.howItWorks },
  { href: "#the-offer", label: strings.nav.theOffer },
  { href: "#verticals", label: strings.nav.verticals },
  { href: "#faq", label: strings.nav.faq },
] as const

const calHref = `https://cal.com/${CAL_LINK}`

/** Server-rendered sticky nav — no client JS on the critical path. */
export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-g-200/0 bg-white/90 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container-etto flex items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 rounded-[var(--radius)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          aria-label="Etto Labs home"
        >
          <Logo className="w-[130px]" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-g-600 transition-colors duration-150 hover:text-ink link-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={calHref}
            className="inline-flex h-9 items-center justify-center rounded-[var(--radius)] bg-ink px-3.5 text-[0.8125rem] font-medium text-white transition-colors duration-150 hover:bg-g-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {strings.nav.bookAudit}
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary
            className="flex size-10 list-none items-center justify-center rounded-[var(--radius)] border border-g-200 text-ink marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden"
            aria-label="Menu"
          >
            <span aria-hidden className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-full bg-ink" />
            </span>
          </summary>
          <div className="absolute end-0 top-[calc(100%+8px)] z-50 w-[min(100vw-2rem,20rem)] border border-g-200 bg-white p-4 shadow-sm">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-[var(--radius)] px-2 py-3 text-sm text-ink hover:bg-g-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={calHref}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-[var(--radius)] bg-ink px-5 text-sm font-medium text-white hover:bg-g-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {strings.nav.bookAudit}
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  )
}

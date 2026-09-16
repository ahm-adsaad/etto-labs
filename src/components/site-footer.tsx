import Link from "next/link"
import { Logo } from "@/components/logo"
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/constants"
import { strings } from "@/lib/strings"

const footerLinks = [
  { href: "#how-it-works", label: strings.nav.howItWorks },
  { href: "#the-offer", label: strings.nav.theOffer },
  { href: "#verticals", label: strings.nav.verticals },
  { href: "#faq", label: strings.nav.faq },
  { href: "#book", label: strings.nav.bookAudit },
] as const

export function SiteFooter() {
  const { footer } = strings

  return (
    <footer className="bg-ink text-white">
      <div className="container-etto py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo variant="reversed" className="w-[140px]" />
            <p className="mt-6 text-sm text-g-400">{footer.languageNote}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-g-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-sm text-g-400">{footer.contact}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-g-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-g-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              WhatsApp
            </a>
            <div className="mt-4 flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-g-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {footer.privacy}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-g-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {footer.terms}
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-14 text-sm text-g-400">{footer.copyright}</p>
      </div>
    </footer>
  )
}

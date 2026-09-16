import type { Metadata } from "next"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { strings } from "@/lib/strings"

export const metadata: Metadata = {
  title: "Privacy",
  description: strings.privacy.body,
}

export default function PrivacyPage() {
  const { privacy, footer } = strings

  return (
    <main className="min-h-screen bg-white">
      <div className="container-etto py-16 md:py-24">
        <Link
          href="/"
          className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <Logo className="w-[130px]" />
        </Link>
        <h1 className="type-h2 mt-12">{privacy.title}</h1>
        <p className="type-lede mt-6">{privacy.body}</p>
        <Link
          href="/"
          className="mt-10 inline-block text-sm text-g-600 link-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          ← Etto Labs
        </Link>
        <p className="mt-16 text-sm text-g-500">{footer.copyright}</p>
      </div>
    </main>
  )
}

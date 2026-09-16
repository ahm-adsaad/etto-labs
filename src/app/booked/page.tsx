import type { Metadata } from "next"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { strings } from "@/lib/strings"

export const metadata: Metadata = {
  title: "Booking confirmed",
  description: strings.booked.body,
  robots: { index: false, follow: false },
}

export default function BookedPage() {
  const { booked } = strings

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="container-etto flex flex-1 flex-col justify-center py-24">
        <Logo className="w-[130px]" />
        <h1 className="type-h2 mt-12 max-w-[16ch]">{booked.title}</h1>
        <p className="type-lede mt-6">{booked.body}</p>
        <Link
          href="/"
          className="mt-10 inline-flex h-11 w-fit items-center rounded-[var(--radius)] bg-ink px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-g-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {booked.back}
        </Link>
      </div>
    </main>
  )
}

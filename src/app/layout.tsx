import type { Metadata } from "next"
import {
  archivo,
  archivoSecondary,
  ibmPlexMono,
  ibmPlexSans,
  ibmPlexSansArabic,
} from "@/lib/fonts"
import { strings } from "@/lib/strings"
import { SITE_URL } from "@/lib/constants"
import { AnalyticsBeacon } from "@/components/analytics-beacon"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: strings.meta.title,
    template: "%s · Etto Labs",
  },
  description: strings.meta.description,
  applicationName: "Etto Labs",
  openGraph: {
    title: strings.meta.ogTitle,
    description: strings.meta.description,
    url: SITE_URL,
    siteName: "Etto Labs",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: strings.meta.ogTitle,
    description: strings.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${archivo.variable} ${archivoSecondary.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${ibmPlexSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-ink">
        {children}
        <AnalyticsBeacon enabled={process.env.VERCEL === "1"} />
      </body>
    </html>
  )
}

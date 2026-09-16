import { BelowFold } from "@/components/below-fold"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { Hero } from "@/components/sections/hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main" className="flex-1">
        <Hero />
        <BelowFold />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}

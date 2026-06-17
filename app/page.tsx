import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Characters } from "@/components/characters"
import { BookPreview } from "@/components/book-preview"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Showcase } from "@/components/showcase"
import { Collection } from "@/components/collection"
import { Materials } from "@/components/materials"
import { Creator } from "@/components/creator"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { SocialProof } from "@/components/social-proof"
import { Offer } from "@/components/offer"
import { Guarantee } from "@/components/guarantee"
import { Benefits } from "@/components/benefits"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteHeader />
      <main className="pb-24 sm:pb-0">
        <Hero />
        <Problem />
        <Solution />
        <Characters />
        <BookPreview />
        <Collection />
        <Materials />
        <Creator />
        <HowItWorks />
        <Benefits />
        <SocialProof />
        <Testimonials />
        <Showcase />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  )
}

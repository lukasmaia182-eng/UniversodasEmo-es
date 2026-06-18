import { SiteHeaderPv1 } from "@/components/pv1/site-header"
import { HeroPv1 } from "@/components/pv1/hero"
import { ProblemPv1 } from "@/components/pv1/problem"
import { ParaQuemPv1 } from "@/components/pv1/para-quem"
import { OQueEPv1 } from "@/components/pv1/o-que-e"
import { Characters } from "@/components/characters"
import { Caminho3cPv1 } from "@/components/pv1/caminho-3c"
import { MaterialsPv1 } from "@/components/pv1/materials"
import { BookPreview } from "@/components/book-preview"
import { QuandoUsarPv1 } from "@/components/pv1/quando-usar"
import { AntesDepoisPv1 } from "@/components/pv1/antes-depois"
import { BonusPv1 } from "@/components/pv1/bonus"
import { Creator } from "@/components/creator"
import { SocialProof } from "@/components/social-proof"
import { Testimonials } from "@/components/testimonials"
import { AncoragemPv1 } from "@/components/pv1/ancoragem"
import { Offer } from "@/components/offer"
import { Guarantee } from "@/components/guarantee"
import { FaqPv1 } from "@/components/pv1/faq"
import { FinalCtaPv1 } from "@/components/pv1/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"

export default function Pv1Page() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <SiteHeaderPv1 />
      <main className="pb-24 sm:pb-0">
        <HeroPv1 />
        <ProblemPv1 />
        <ParaQuemPv1 />
        <OQueEPv1 />
        <Characters />
        <Caminho3cPv1 />
        <MaterialsPv1 />
        <BookPreview />
        <QuandoUsarPv1 />
        <AntesDepoisPv1 />
        <BonusPv1 />
        <Creator />
        <SocialProof />
        <Testimonials />
        <AncoragemPv1 />
        <Offer />
        <Guarantee />
        <FaqPv1 />
        <FinalCtaPv1 />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  )
}

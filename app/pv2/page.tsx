import type { Metadata } from "next"
import { SiteHeaderPv2 } from "@/components/pv2/site-header"
import { HeroPv2 } from "@/components/pv2/hero"
import { ProblemPv2 } from "@/components/pv2/problem"
import { ParaQuemPv2 } from "@/components/pv2/para-quem"
import { OQueEPv2 } from "@/components/pv2/o-que-e"
import { CharactersPv2 } from "@/components/pv2/characters"
import { Caminho3cPv2 } from "@/components/pv2/caminho-3c"
import { MaterialsPv2 } from "@/components/pv2/materials"
import { BookPreviewPv2 } from "@/components/pv2/book-preview"
import { QuandoUsarPv2 } from "@/components/pv2/quando-usar"
import { AntesDepoisPv2 } from "@/components/pv2/antes-depois"
import { BonusPv2 } from "@/components/pv2/bonus"
import { CreatorPv2 } from "@/components/pv2/creator"
import { SocialProofPv2 } from "@/components/pv2/social-proof"
import { TestimonialsPv2 } from "@/components/pv2/testimonials"
import { AncoragemPv2 } from "@/components/pv2/ancoragem"
import { OfferPv2 } from "@/components/pv2/offer"
import { GuaranteePv2 } from "@/components/pv2/guarantee"
import { FaqPv2 } from "@/components/pv2/faq"
import { FinalCtaPv2 } from "@/components/pv2/final-cta"
import { SiteFooterPv2 } from "@/components/pv2/site-footer"
import { MobileCtaPv2 } from "@/components/pv2/mobile-cta"

export const metadata: Metadata = {
  title: "Universo de las Emociones™ | Educación emocional lúdica para niños",
  description:
    "Kit digital con más de 70 emociones ilustradas, historias, juegos y actividades listas para imprimir. Ayuda a tu hijo a entender y expresar lo que siente.",
}

export default function Pv2Page() {
  return (
    <div lang="es" className="min-h-screen overflow-x-clip bg-background">
      <SiteHeaderPv2 />
      <main className="pb-24 sm:pb-0">
        <HeroPv2 />
        <ProblemPv2 />
        <ParaQuemPv2 />
        <OQueEPv2 />
        <CharactersPv2 />
        <Caminho3cPv2 />
        <MaterialsPv2 />
        <BookPreviewPv2 />
        <QuandoUsarPv2 />
        <AntesDepoisPv2 />
        <BonusPv2 />
        <CreatorPv2 />
        <SocialProofPv2 />
        <TestimonialsPv2 />
        <AncoragemPv2 />
        <OfferPv2 />
        <GuaranteePv2 />
        <FaqPv2 />
        <FinalCtaPv2 />
      </main>
      <SiteFooterPv2 />
      <MobileCtaPv2 />
    </div>
  )
}

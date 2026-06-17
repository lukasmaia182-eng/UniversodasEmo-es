import type { Metadata } from "next"
import { AccessHeader } from "@/components/access/access-header"
import { AccessHero } from "@/components/access/access-hero"
import { AccessGuide } from "@/components/access/access-guide"
import { MaterialsCollection } from "@/components/access/materials-collection"
import { EmotionsCollection } from "@/components/access/emotions-collection"
import { AccessBonus } from "@/components/access/access-bonus"
import { Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Seu acesso · Universo das Emoções",
  description:
    "Área de acesso ao Universo das Emoções: 72 emoções ilustradas, linguagem simples para crianças e atividades práticas para fazer em família.",
  robots: { index: false, follow: false },
}

export default function SeuAcessoPage() {
  return (
    <div className="min-h-screen bg-background">
      <AccessHeader />
      <main>
        <AccessHero />
        <AccessGuide />
        <MaterialsCollection />
        <EmotionsCollection />
        <AccessBonus />

        <section className="bg-night py-14 text-center text-night-foreground">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sunny text-sunny-foreground">
              <Heart className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-balance font-heading text-2xl font-bold sm:text-3xl">
              Aproveitem cada emoção, no ritmo de vocês
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-night-muted">
              Não há pressa. O mais importante é o tempo de qualidade lendo,
              conversando e se conectando com seu filho. Boa jornada!
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="text-sm text-muted-foreground">
          Universo das Emoções · Material para uso familiar e educacional
        </p>
      </footer>
    </div>
  )
}

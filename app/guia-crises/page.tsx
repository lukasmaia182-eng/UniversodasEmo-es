import type { Metadata } from "next"
import { Sparkles, Clock, HeartHandshake, BookOpen } from "lucide-react"
import { AccessHeader } from "@/components/access/access-header"
import { PrintButton } from "@/components/access/print-button"
import { EbookPageCard } from "@/components/ebook/ebook-page"
import { ebookPages, totalPages } from "@/lib/ebook-crises-content"

export const metadata: Metadata = {
  title: "Guia Rápido: Crises Emocionais em 5 Minutos · Universo das Emoções",
  description:
    "eBook visual premium: um passo a passo simples para acolher seu filho durante crises emocionais em poucos minutos.",
  robots: { index: false, follow: false },
}

const perks = [
  { icon: Clock, label: "Leitura em poucos minutos" },
  { icon: BookOpen, label: `${totalPages} páginas ilustradas` },
  { icon: HeartHandshake, label: "Método simples em 5 passos" },
]

export default function GuiaCrisesPage() {
  return (
    <div className="min-h-screen bg-background">
      <AccessHeader />

      <main>
        {/* Intro / boas-vindas */}
        <section className="relative overflow-hidden bg-night text-night-foreground print:hidden">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-sunny px-4 py-1.5 text-sm font-extrabold text-sunny-foreground">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Bônus liberado
            </span>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Guia Rápido: Como Lidar com{" "}
              <span className="text-sunny">Crises Emocionais em 5 Minutos</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-night-muted">
              Um eBook visual e direto ao ponto. A cada página, uma imagem e uma
              ideia simples para você acolher seu filho com calma e conexão —
              mesmo no meio da crise.
            </p>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {perks.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-night-foreground/20 bg-night-foreground/5 px-4 py-2 text-sm font-semibold"
                >
                  <Icon className="h-4 w-4 text-mint" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#pagina-1"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunny px-6 py-3 text-sm font-extrabold text-sunny-foreground transition-transform hover:-translate-y-0.5"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Começar a leitura
              </a>
              <PrintButton
                label="Imprimir / Salvar PDF"
                className="inline-flex items-center gap-2 rounded-full border border-night-foreground/30 px-6 py-3 text-sm font-bold text-night-foreground transition-colors hover:bg-night-foreground/10"
              />
            </div>
          </div>
        </section>

        {/* Cabeçalho da versão impressa */}
        <section className="hidden px-4 pt-2 text-center print:block">
          <p className="font-heading text-2xl font-bold text-foreground">
            Guia Rápido: Crises Emocionais em 5 Minutos
          </p>
          <p className="text-sm text-muted-foreground">Universo das Emoções</p>
        </section>

        {/* Páginas do eBook */}
        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-8 print:gap-0">
            {ebookPages.map((page) => (
              <EbookPageCard key={page.n} page={page} />
            ))}
          </div>
        </section>

        {/* Fechamento */}
        <section className="bg-night py-14 text-center text-night-foreground print:hidden">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sunny text-sunny-foreground">
              <HeartHandshake className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-balance font-heading text-2xl font-bold sm:text-3xl">
              Guarde este guia por perto
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-night-muted">
              Imprima ou salve em PDF para ter sempre à mão nos momentos de
              crise. Respire, acolha e conecte — uma emoção de cada vez.
            </p>
            <div className="mt-6 flex justify-center">
              <PrintButton
                label="Imprimir / Salvar PDF"
                className="inline-flex items-center gap-2 rounded-full bg-sunny px-6 py-3 text-sm font-extrabold text-sunny-foreground transition-transform hover:-translate-y-0.5"
              />
            </div>
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

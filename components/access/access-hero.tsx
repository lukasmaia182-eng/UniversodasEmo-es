import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { PrintButton } from "@/components/access/print-button"

const highlights = [
  "72 emoções ilustradas, uma a uma",
  "Linguagem simples para crianças",
  "Atividades práticas para a família",
]

export function AccessHero() {
  return (
    <section className="relative overflow-hidden bg-night text-night-foreground">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sunny px-4 py-1.5 text-sm font-extrabold text-sunny-foreground">
            Bem-vindo(a)!
          </span>
          <h1 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl">
            Seu acesso ao <span className="text-sunny">Universo das Emoções</span> está liberado
          </h1>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-night-muted">
            Tudo pronto para vocês começarem essa jornada juntos. Explore as emoções
            no seu ritmo, leia as historinhas e faça as atividades em família.
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-sm font-semibold">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3 print:hidden">
            <a
              href="#emocoes"
              className="inline-flex items-center justify-center rounded-full bg-sunny px-6 py-3 text-sm font-extrabold text-sunny-foreground transition-transform hover:-translate-y-0.5"
            >
              Começar a leitura
            </a>
            <PrintButton className="inline-flex items-center gap-2 rounded-full border border-night-foreground/30 px-6 py-3 text-sm font-bold text-night-foreground transition-colors hover:bg-night-foreground/10" />
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
          <Image
            src="/hero-mockup.png"
            alt="Livro Universo das Emoções com os mascotes da turma"
            width={520}
            height={500}
            priority
            className="w-full max-w-sm drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { type EbookPage, totalPages } from "@/lib/ebook-crises-content"

const blockLabel: Record<EbookPage["block"], string> = {
  capa: "Guia Rápido",
  dor: "A dor",
  virada: "A virada",
  metodo: "O método",
  frases: "Frases que acolhem",
  erros: "O que evitar",
  resultado: "O resultado",
  final: "Final",
}

const accentChip: Record<NonNullable<EbookPage["accent"]>, string> = {
  sunny: "bg-sunny text-sunny-foreground",
  coral: "bg-coral text-coral-foreground",
  mint: "bg-mint text-mint-foreground",
  lavender: "bg-lavender text-lavender-foreground",
}

const accentText: Record<NonNullable<EbookPage["accent"]>, string> = {
  sunny: "text-sunny",
  coral: "text-coral",
  mint: "text-mint",
  lavender: "text-lavender",
}

export function EbookPageCard({ page }: { page: EbookPage }) {
  const centered = page.align === "center"
  const isCover = page.block === "capa"

  return (
    <article
      id={`pagina-${page.n}`}
      className="scroll-mt-24 print:break-before-page"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-night shadow-lg print:shadow-none">
          {/* Imagem dominante (70%) */}
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/11]">
            <Image
              src={page.image || "/placeholder.svg"}
              alt={page.alt}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
              priority={page.n <= 2}
            />

            {/* Gradiente para leitura do texto */}
            <div
              className={
                centered
                  ? "absolute inset-0 bg-gradient-to-t from-night/85 via-night/30 to-night/40"
                  : "absolute inset-0 bg-gradient-to-t from-night/90 via-night/35 to-transparent"
              }
              aria-hidden="true"
            />

            {/* Número da página */}
            <span className="absolute right-4 top-4 rounded-full bg-night/55 px-3 py-1 text-xs font-bold text-night-foreground backdrop-blur-sm">
              {page.n} / {totalPages}
            </span>

            {/* Selo do passo do método */}
            {page.step ? (
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-mint px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wide text-mint-foreground">
                Passo {page.step}
              </span>
            ) : null}

            {/* Texto (30%) */}
            <div
              className={
                "absolute inset-0 flex flex-col p-6 sm:p-10 " +
                (centered ? "items-center justify-center text-center" : "justify-end")
              }
            >
              <div className={centered ? "max-w-xl" : "max-w-lg"}>
                {(page.kicker || (!isCover && !page.step)) && (
                  <span
                    className={
                      "inline-flex items-center rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide " +
                      accentChip[page.accent]
                    }
                  >
                    {page.kicker ?? blockLabel[page.block]}
                  </span>
                )}

                <h2
                  className={
                    "text-balance font-heading font-bold leading-tight text-night-foreground " +
                    (isCover
                      ? "mt-4 text-4xl sm:text-6xl"
                      : centered
                        ? "mt-4 text-3xl sm:text-5xl"
                        : "mt-3 text-3xl sm:text-4xl")
                  }
                >
                  {isCover ? (
                    <>
                      <span className={"block text-lg font-extrabold uppercase tracking-[0.2em] sm:text-xl " + accentText[page.accent]}>
                        Guia Rápido
                      </span>
                      Como Lidar com Crises Emocionais em 5 Minutos
                    </>
                  ) : (
                    page.title
                  )}
                </h2>

                {page.subtitle ? (
                  <p
                    className={
                      "mt-3 text-pretty text-base leading-relaxed text-night-foreground/85 sm:text-lg " +
                      (centered ? "mx-auto max-w-md" : "max-w-md")
                    }
                  >
                    {page.subtitle}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  )
}

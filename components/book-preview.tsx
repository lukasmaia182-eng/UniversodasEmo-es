"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { BookPage } from "@/components/book-page"
import { bookPages as pages } from "@/lib/book-pages"

export function BookPreview() {
  const [active, setActive] = useState(Math.floor(pages.length / 2))

  const prev = () => setActive((i) => (i - 1 + pages.length) % pages.length)
  const next = () => setActive((i) => (i + 1) % pages.length)

  return (
    <section id="colecao" className="bg-night py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-mint-foreground">
              Conteúdo do livro
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight text-night-foreground md:text-5xl">
              Espie por dentro
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-night-muted">
              Conheça algumas das mais de 160 páginas deste material maravilhoso.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Carrossel em leque 3D */}
      <div className="relative mt-12 flex items-center justify-center">
        <div
          className="relative h-[340px] w-full sm:h-[420px] md:h-[500px]"
          style={{ perspective: "2200px" }}
        >
          {pages.map((page, i) => {
            const offset = i - active
            const abs = Math.abs(offset)
            const isActive = offset === 0
            const rotateY = Math.max(-58, Math.min(58, offset * -38))
            return (
              <button
                key={`${page.label}-${i}`}
                type="button"
                aria-label={`Ver página ${page.label}`}
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-1/2 origin-center cursor-pointer overflow-hidden rounded-xl bg-card shadow-2xl transition-all duration-500 ease-out"
                style={{
                  width: "min(46vw, 230px)",
                  aspectRatio: "3 / 4",
                  transform: `translate(-50%, -50%) translateX(${offset * 72}%) rotateY(${rotateY}deg) scale(${isActive ? 1.3 : 1 - abs * 0.045})`,
                  zIndex: pages.length - abs,
                  opacity: abs > 7 ? 0 : 1 - abs * 0.06,
                  pointerEvents: abs > 7 ? "none" : "auto",
                  filter: isActive
                    ? "drop-shadow(0 30px 40px rgba(0,0,0,0.4))"
                    : `brightness(${1 - abs * 0.08})`,
                }}
              >
                <BookPage data={page} />
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Página anterior"
          className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-lg transition-transform hover:scale-110 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima página"
          className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-lg transition-transform hover:scale-110 sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {pages.map((page, i) => (
          <button
            key={`dot-${page.label}-${i}`}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ir para página ${page.label}`}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-7 bg-mint" : "w-2.5 bg-night-muted/50 hover:bg-night-muted"
            }`}
          />
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col items-center gap-3 px-4">
          <p className="text-sm font-semibold text-night-muted">
            De <span className="line-through">R$ 97,00</span> por apenas{" "}
            <span className="font-bold text-night-foreground">R$ 19,90</span>
          </p>
          <CtaButton>Comprar com desconto</CtaButton>
        </div>
      </Reveal>
    </section>
  )
}

import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const pairs = [
  {
    before: "A criança chora, grita ou se fecha porque não sabe explicar o que sente.",
    after:
      "Ela começa a apontar, desenhar ou dizer emoções como raiva, medo, vergonha, tristeza, frustração e alegria.",
  },
  {
    before: "Os pais tentam acalmar tudo no improviso.",
    after:
      "A família tem jogos, cartas e atividades prontas para transformar momentos difíceis em conversas.",
  },
  {
    before: "A emoção aparece apenas como comportamento.",
    after: "A criança ganha palavras para entender e comunicar o que acontece por dentro.",
  },
]

export function AntesDepoisPv1() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            O que muda na rotina da criança?
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 flex flex-col gap-5">
        {pairs.map((pair, i) => (
          <Reveal key={pair.before} delay={i * 0.08}>
            <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
              <div className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-6">
                <span className="text-xs font-bold uppercase tracking-wide text-coral">Antes</span>
                <p className="leading-relaxed text-muted-foreground">{pair.before}</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="size-5 md:rotate-0 rotate-90" aria-hidden="true" />
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-3xl border border-mint bg-mint/15 p-6">
                <span className="text-xs font-bold uppercase tracking-wide text-mint-foreground">Depois</span>
                <p className="font-medium leading-relaxed text-foreground">{pair.after}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

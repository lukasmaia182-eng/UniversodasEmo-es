import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const items = [
  "Seu filho chora ou faz birra e não consegue explicar o motivo",
  "Ele sente raiva, medo, vergonha ou frustração com frequência",
  "Você quer conversar sobre emoções, mas não sabe por onde começar",
  "A criança se fecha depois de uma bronca",
  "Ela tem dificuldade para lidar com o “não”",
  "Você quer fortalecer o vínculo emocional em casa",
  "Você trabalha com crianças e precisa de recursos lúdicos prontos",
]

export function ParaQuemPv1() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-lavender px-4 py-1.5 text-sm font-bold text-lavender-foreground">
              Para quem é
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Esse kit é para você que…
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Criamos o Universo das Emoções™ para mães, pais e responsáveis que querem ajudar a criança a entender
              melhor o que sente, conversar com mais facilidade e desenvolver consciência emocional de forma leve.
            </p>
          </div>
        </Reveal>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <li className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mint text-mint-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="font-semibold leading-relaxed text-foreground">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

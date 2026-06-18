import { Gift, CalendarCheck, Sun, MessageSquareHeart, Moon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"

const bonuses = [
  {
    icon: CalendarCheck,
    tag: "Bônus #1",
    title: "Guia dos Primeiros 7 Dias",
    text: "Um passo a passo simples para você saber por onde começar e como usar o material na rotina.",
  },
  {
    icon: Sun,
    tag: "Bônus #2",
    title: "Cartões “Como Estou Me Sentindo Hoje?”",
    text: "Cartões prontos para usar pela manhã, antes de dormir ou depois de momentos difíceis.",
  },
  {
    icon: MessageSquareHeart,
    tag: "Bônus #3",
    title: "Frases Prontas para Acolher Emoções",
    text: "Frases simples para saber o que dizer quando a criança sente raiva, medo, tristeza, vergonha ou frustração.",
  },
  {
    icon: Moon,
    tag: "Bônus #4",
    title: "Rotina Emocional Antes de Dormir",
    text: "Uma atividade leve para fechar o dia com conversa, acolhimento e conexão.",
  },
]

export function BonusPv1() {
  return (
    <section className="bg-night text-night-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sunny px-4 py-1.5 text-sm font-bold text-sunny-foreground">
              <Gift className="size-4" aria-hidden="true" />
              Bônus exclusivos
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight md:text-4xl">
              Bônus especiais para começar com mais facilidade
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {bonuses.map((bonus, i) => (
            <Reveal key={bonus.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-3xl bg-background/5 p-6 ring-1 ring-background/10">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sunny text-sunny-foreground">
                  <bonus.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-sunny">{bonus.tag}</span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-night-foreground">{bonus.title}</h3>
                  <p className="mt-2 leading-relaxed text-night-muted">{bonus.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <CtaButton variant="sunny">QUERO COMEÇAR HOJE</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

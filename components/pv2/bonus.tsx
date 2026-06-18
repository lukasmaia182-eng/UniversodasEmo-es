import { Gift, CalendarCheck, Sun, MessageSquareHeart, Moon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CtaButtonPv2 } from "@/components/pv2/cta-button"

const bonuses = [
  {
    icon: CalendarCheck,
    tag: "Bono #1",
    title: "Guía de los Primeros 7 Días",
    text: "Un paso a paso simple para que sepas por dónde empezar y cómo usar el material en la rutina.",
  },
  {
    icon: Sun,
    tag: "Bono #2",
    title: "Tarjetas “¿Cómo Me Siento Hoy?”",
    text: "Tarjetas listas para usar por la mañana, antes de dormir o después de momentos difíciles.",
  },
  {
    icon: MessageSquareHeart,
    tag: "Bono #3",
    title: "Frases Listas para Acoger Emociones",
    text: "Frases simples para saber qué decir cuando el niño siente enojo, miedo, tristeza, vergüenza o frustración.",
  },
  {
    icon: Moon,
    tag: "Bono #4",
    title: "Rutina Emocional Antes de Dormir",
    text: "Una actividad ligera para cerrar el día con conversación, contención y conexión.",
  },
]

export function BonusPv2() {
  return (
    <section className="bg-night text-night-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-sunny px-4 py-1.5 text-sm font-bold text-sunny-foreground">
              <Gift className="size-4" aria-hidden="true" />
              Bonos exclusivos
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight md:text-4xl">
              Bonos especiales para empezar con más facilidad
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
            <CtaButtonPv2 variant="sunny">QUIERO EMPEZAR HOY</CtaButtonPv2>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

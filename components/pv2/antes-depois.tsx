import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const pairs = [
  {
    before: "El niño llora, grita o se cierra porque no sabe explicar lo que siente.",
    after:
      "Empieza a señalar, dibujar o decir emociones como enojo, miedo, vergüenza, tristeza, frustración y alegría.",
  },
  {
    before: "Los papás intentan calmar todo improvisando.",
    after:
      "La familia tiene juegos, cartas y actividades listas para transformar los momentos difíciles en conversaciones.",
  },
  {
    before: "La emoción aparece solo como comportamiento.",
    after: "El niño gana palabras para entender y comunicar lo que pasa por dentro.",
  },
]

export function AntesDepoisPv2() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            ¿Qué cambia en la rutina del niño?
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
                <span className="text-xs font-bold uppercase tracking-wide text-mint-foreground">Después</span>
                <p className="font-medium leading-relaxed text-foreground">{pair.after}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

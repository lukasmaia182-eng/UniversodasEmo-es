import { Flame, CloudRain, EyeOff, Frown, Zap, MessageCircleOff } from "lucide-react"
import { Reveal } from "@/components/reveal"

const situations = [
  { icon: Flame, label: "Enojo y berrinches" },
  { icon: CloudRain, label: "Tristeza y llanto" },
  { icon: EyeOff, label: "Vergüenza y timidez" },
  { icon: Frown, label: "Frustración ante el “no”" },
  { icon: Zap, label: "Irritabilidad" },
  { icon: MessageCircleOff, label: "Dificultad para conversar" },
]

export function ProblemPv2() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Cuando el niño no sabe decir lo que siente, todo puede convertirse en berrinche.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Muchas veces, el niño no está intentando desafiarte. Simplemente todavía no sabe nombrar lo que siente.
            El enojo, el miedo, la vergüenza, la frustración, los celos y la tristeza pueden aparecer como llanto,
            grito, silencio o explosión.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {situations.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05}>
            <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-coral/15 text-coral">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-semibold text-foreground">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          El <strong className="font-bold text-foreground">Universo de las Emociones™</strong> ayuda a transformar esos
          momentos en oportunidades de conversación, contención y aprendizaje emocional.
        </p>
      </Reveal>
    </section>
  )
}

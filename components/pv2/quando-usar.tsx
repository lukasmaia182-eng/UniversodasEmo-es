import { Moon, MessageCircleHeart, Frown, School, Users, Sparkles, HeartCrack } from "lucide-react"
import { Reveal } from "@/components/reveal"

const moments = [
  { icon: HeartCrack, label: "Después de un berrinche" },
  { icon: Moon, label: "Antes de dormir" },
  { icon: MessageCircleHeart, label: "Tras un regaño o una conversación difícil" },
  { icon: Frown, label: "Cuando el niño esté triste, irritado o con miedo" },
  { icon: School, label: "En actividades escolares o terapéuticas" },
  { icon: Users, label: "En momentos de conversación en familia" },
  { icon: Sparkles, label: "Durante etapas de cambio, adaptación o inseguridad" },
]

export function QuandoUsarPv2() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              ¿Cuándo usar el Universo de las Emociones™?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Puedes usar el kit en momentos simples de la rutina, sobre todo cuando el niño aún no logra explicar lo
              que está sintiendo.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <m.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-semibold leading-snug text-foreground">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

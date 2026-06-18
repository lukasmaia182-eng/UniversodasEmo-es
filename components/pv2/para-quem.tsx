import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const items = [
  "Tu hijo llora o hace berrinches y no logra explicar el motivo",
  "Siente enojo, miedo, vergüenza o frustración con frecuencia",
  "Quieres hablar sobre emociones, pero no sabes por dónde empezar",
  "El niño se cierra después de un regaño",
  "Le cuesta lidiar con el “no”",
  "Quieres fortalecer el vínculo emocional en casa",
  "Trabajas con niños y necesitas recursos lúdicos listos para usar",
]

export function ParaQuemPv2() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-lavender px-4 py-1.5 text-sm font-bold text-lavender-foreground">
              Para quién es
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Este kit es para ti que…
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Creamos el Universo de las Emociones™ para mamás, papás y cuidadores que quieren ayudar al niño a
              entender mejor lo que siente, conversar con más facilidad y desarrollar conciencia emocional de forma
              ligera.
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

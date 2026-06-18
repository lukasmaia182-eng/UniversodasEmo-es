import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const bullets = [
  "Material 100% digital",
  "Listo para imprimir",
  "Fácil de usar",
  "Se puede usar en casa, escuela o consulta infantil",
  "No necesitas crear nada desde cero",
  "Acceso inmediato tras la compra",
]

export function OQueEPv2() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <div className="relative">
            <Image
              src="/cena-conversa.png"
              alt="Mamá e hijo leyendo el Universo de las Emociones junto a las mascotas de la pandilla"
              width={680}
              height={680}
              className="h-auto w-full rounded-[2rem] shadow-xl"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="inline-flex items-center rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-mint-foreground">
              Qué es el Universo de las Emociones™
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Un kit digital lúdico de educación emocional para niños
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              El Universo de las Emociones™ fue creado para ayudar a los niños a reconocer, nombrar y conversar sobre
              sus emociones de forma simple, visual y cariñosa.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Con historias, juegos, cartas, actividades y herramientas listas para imprimir, el niño aprende que
              sentimientos como el enojo, el miedo, la tristeza, la vergüenza, la alegría y la frustración son parte de
              la vida — y que se pueden expresar con más claridad.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-relaxed text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

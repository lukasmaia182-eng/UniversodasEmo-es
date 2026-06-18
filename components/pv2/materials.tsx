import Image from "next/image"
import { Gift } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CtaButtonPv2 } from "@/components/pv2/cta-button"

type Material = {
  src: string
  emoji: string
  title: string
  description: string
  tone: string
}

const materials: Material[] = [
  {
    src: "/livro-3d.png",
    emoji: "📖",
    title: "Libro de las Emociones",
    description:
      "Más de 160 páginas con emociones ilustradas, explicaciones simples, historias cortas y actividades para dibujar, pintar y conversar.",
    tone: "bg-primary/15",
  },
  {
    src: "/material-roda-emocoes.png",
    emoji: "🎡",
    title: "Rueda de las Emociones",
    description:
      "Una herramienta visual para que el niño señale cómo se siente cuando aún no logra explicarlo con palabras.",
    tone: "bg-sunny/20",
  },
  {
    src: "/material-semaforo.png",
    emoji: "🚦",
    title: "Semáforo Emocional",
    description:
      "Ayuda al niño a parar, respirar y elegir una respuesta más tranquila ante emociones intensas.",
    tone: "bg-mint/20",
  },
  {
    src: "/material-baralho.png",
    emoji: "🃏",
    title: "Baraja de las Emociones",
    description: "Cartas ilustradas para jugar, conversar y reconocer sentimientos en el día a día.",
    tone: "bg-lavender/25",
  },
  {
    src: "/material-jogo-caras.png",
    emoji: "😜",
    title: "Juego de las Caras",
    description: "Actividad lúdica para trabajar las expresiones faciales y la identificación emocional.",
    tone: "bg-coral/20",
  },
  {
    src: "/material-teatro.png",
    emoji: "🎭",
    title: "Teatro de las Expresiones",
    description: "Personajes y situaciones para representar emociones y crear diálogos ligeros sobre sentimientos.",
    tone: "bg-primary/15",
  },
  {
    src: "/material-sensacoes.png",
    emoji: "🧠",
    title: "Juego de las Sensaciones",
    description: "Actividades para conectar cuerpo, emoción y comportamiento de forma simple.",
    tone: "bg-sunny/20",
  },
  {
    src: "/material-cartinhas.png",
    emoji: "💬",
    title: "Cartas de Conversación en Familia",
    description: "Preguntas listas para abrir el diálogo sin forzar al niño a hablar.",
    tone: "bg-mint/20",
  },
  {
    src: "/material-colorir.png",
    emoji: "🎨",
    title: "Actividades para Colorear y Completar",
    description: "Páginas prácticas para convertir la educación emocional en juego.",
    tone: "bg-lavender/25",
  },
]

export function MaterialsPv2() {
  return (
    <section id="materiales" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-sm font-bold text-coral-foreground">
            <Gift className="size-4" aria-hidden="true" />
            Lo que recibes
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Lo que viene dentro del Universo de las Emociones™
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Todo listo para imprimir, aplicar y usar con el niño de forma simple, bonita y cariñosa.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((material, i) => (
          <Reveal key={material.title} delay={i * 0.06}>
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-transform hover:-translate-y-1">
              <div className={`flex items-center justify-center p-5 ${material.tone}`}>
                <Image
                  src={material.src || "/placeholder.svg"}
                  alt={material.title}
                  width={420}
                  height={420}
                  className="aspect-square w-full rounded-2xl object-cover drop-shadow-md"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-foreground">
                  <span aria-hidden="true">{material.emoji}</span>
                  {material.title}
                </h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{material.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 flex justify-center">
          <CtaButtonPv2>QUIERO ACCEDER A TODOS LOS MATERIALES</CtaButtonPv2>
        </div>
      </Reveal>
    </section>
  )
}

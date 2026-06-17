import Image from "next/image"
import { Sparkles, Gift } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"

const materials = [
  {
    src: "/material-roda-emocoes.png",
    emoji: "🎡",
    title: "Roda das Emoções",
    description: "Gire e descubra: uma forma divertida de nomear e conversar sobre cada sentimento.",
    tone: "bg-sunny/20",
  },
  {
    src: "/material-jogo-caras.png",
    emoji: "😜",
    title: "Jogo das Caras",
    description: "Cartas com expressões para imitar e adivinhar emoções brincando juntos.",
    tone: "bg-coral/20",
  },
  {
    src: "/material-semaforo.png",
    emoji: "🚦",
    title: "Semáforo Emocional",
    description: "Pare, respire e siga: ajuda a criança a regular as emoções no dia a dia.",
    tone: "bg-mint/20",
  },
  {
    src: "/material-baralho.png",
    emoji: "🃏",
    title: "Baralho Divertidamente",
    description: "Um baralho ilustrado para jogar e aprender sobre cada emoção.",
    tone: "bg-lavender/25",
  },
  {
    src: "/material-teatro.png",
    emoji: "🎭",
    title: "Teatro das Expressões",
    description: "Personagens em palitos para encenar histórias e expressar sentimentos.",
    tone: "bg-primary/15",
  },
  {
    src: "/material-sensacoes.png",
    emoji: "🧠",
    title: "Jogo das Sensações",
    description: "Atividades sensoriais que conectam o corpo às emoções de forma lúdica.",
    tone: "bg-sunny/20",
  },
]

export function Materials() {
  return (
    <section id="materiais" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-sm font-bold text-coral-foreground">
            <Gift className="size-4" aria-hidden="true" />
            O que você vai receber
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            São 9 materiais + bônus com atividades práticas e lúdicas
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tudo pensado para auxiliar no desenvolvimento das habilidades socioemocionais da criança,
            de um jeito leve e divertido para fazer em família.
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
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-3xl bg-night px-6 py-8 text-center text-night-foreground">
          <p className="flex items-center gap-2 font-heading text-2xl font-bold">
            <Sparkles className="size-6 text-sunny" aria-hidden="true" />
            e muito mais!
          </p>
          <p className="max-w-xl text-pretty leading-relaxed text-night-muted">
            Além dos jogos acima, você ainda recebe materiais bônus exclusivos para complementar a jornada
            emocional da sua família.
          </p>
          <CtaButton variant="sunny">QUERO TODOS OS MATERIAIS</CtaButton>
        </div>
      </Reveal>
    </section>
  )
}

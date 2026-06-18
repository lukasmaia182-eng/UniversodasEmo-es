import Image from "next/image"
import { Gift, BookOpen, MessagesSquare, Palette } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"

type Material = {
  src?: string
  icon?: typeof BookOpen
  emoji?: string
  title: string
  description: string
  tone: string
}

const materials: Material[] = [
  {
    icon: BookOpen,
    emoji: "📖",
    title: "Livro das Emoções",
    description:
      "Mais de 160 páginas com emoções ilustradas, explicações simples, histórias curtas e atividades para desenhar, pintar e conversar.",
    tone: "bg-primary/15",
  },
  {
    src: "/material-roda-emocoes.png",
    emoji: "🎡",
    title: "Roda das Emoções",
    description:
      "Uma ferramenta visual para a criança apontar como está se sentindo quando ainda não consegue explicar com palavras.",
    tone: "bg-sunny/20",
  },
  {
    src: "/material-semaforo.png",
    emoji: "🚦",
    title: "Semáforo Emocional",
    description:
      "Ajuda a criança a parar, respirar e escolher uma resposta mais tranquila diante de emoções intensas.",
    tone: "bg-mint/20",
  },
  {
    src: "/material-baralho.png",
    emoji: "🃏",
    title: "Baralho das Emoções",
    description: "Cartas ilustradas para brincar, conversar e reconhecer sentimentos no dia a dia.",
    tone: "bg-lavender/25",
  },
  {
    src: "/material-jogo-caras.png",
    emoji: "😜",
    title: "Jogo das Caras",
    description: "Atividade lúdica para trabalhar expressões faciais e identificação emocional.",
    tone: "bg-coral/20",
  },
  {
    src: "/material-teatro.png",
    emoji: "🎭",
    title: "Teatro das Expressões",
    description: "Personagens e situações para encenar emoções e criar diálogos leves sobre sentimentos.",
    tone: "bg-primary/15",
  },
  {
    src: "/material-sensacoes.png",
    emoji: "🧠",
    title: "Jogo das Sensações",
    description: "Atividades para conectar corpo, emoção e comportamento de forma simples.",
    tone: "bg-sunny/20",
  },
  {
    icon: MessagesSquare,
    emoji: "💬",
    title: "Cartinhas de Conversa em Família",
    description: "Perguntas prontas para abrir diálogo sem forçar a criança a falar.",
    tone: "bg-mint/20",
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "Atividades para Colorir e Preencher",
    description: "Páginas práticas para transformar educação emocional em brincadeira.",
    tone: "bg-lavender/25",
  },
]

export function MaterialsPv1() {
  return (
    <section id="materiais" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-sm font-bold text-coral-foreground">
            <Gift className="size-4" aria-hidden="true" />
            O que você recebe
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            O que vem dentro do Universo das Emoções™
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tudo pronto para imprimir, aplicar e usar com a criança de forma simples, bonita e acolhedora.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((material, i) => (
          <Reveal key={material.title} delay={i * 0.06}>
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-transform hover:-translate-y-1">
              <div className={`flex items-center justify-center p-5 ${material.tone}`}>
                {material.src ? (
                  <Image
                    src={material.src || "/placeholder.svg"}
                    alt={material.title}
                    width={420}
                    height={420}
                    className="aspect-square w-full rounded-2xl object-cover drop-shadow-md"
                  />
                ) : (
                  material.icon && (
                    <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-card/60">
                      <material.icon className="size-16 text-primary" aria-hidden="true" />
                    </div>
                  )
                )}
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
          <CtaButton>QUERO ACESSAR TODOS OS MATERIAIS</CtaButton>
        </div>
      </Reveal>
    </section>
  )
}

import Image from "next/image"
import { Reveal } from "@/components/reveal"

const mascots = [
  {
    name: "Lumi",
    emotion: "Alegria",
    src: "/mascote-alegria.png",
    card: "bg-sunny/50",
    badge: "bg-sunny text-sunny-foreground",
  },
  {
    name: "Viko",
    emotion: "Coragem",
    src: "/mascote-coragem.png",
    card: "bg-coral/20",
    badge: "bg-coral text-coral-foreground",
  },
  {
    name: "Sereno",
    emotion: "Calma",
    src: "/mascote-calma.png",
    card: "bg-mint/30",
    badge: "bg-mint text-mint-foreground",
  },
  {
    name: "Pipo",
    emotion: "Curiosidade",
    src: "/mascote-curiosidade.png",
    card: "bg-lavender/40",
    badge: "bg-lavender text-lavender-foreground",
  },
  {
    name: "Mel",
    emotion: "Carinho",
    src: "/mascote-carinho.png",
    card: "bg-primary/10",
    badge: "bg-primary text-primary-foreground",
  },
  {
    name: "Nino",
    emotion: "Tristeza",
    src: "/mascote-tristeza.png",
    card: "bg-secondary/60",
    badge: "bg-secondary text-secondary-foreground",
  },
  {
    name: "Bafo",
    emotion: "Raiva",
    src: "/mascote-raiva.png",
    card: "bg-coral/25",
    badge: "bg-coral text-coral-foreground",
  },
  {
    name: "Tibo",
    emotion: "Medo",
    src: "/mascote-medo.png",
    card: "bg-lavender/30",
    badge: "bg-lavender text-lavender-foreground",
  },
  {
    name: "Fofo",
    emotion: "Gratidão",
    src: "/mascote-gratidao.png",
    card: "bg-sunny/50",
    badge: "bg-sunny text-sunny-foreground",
  },
  {
    name: "Zazá",
    emotion: "Surpresa",
    src: "/mascote-surpresa.png",
    card: "bg-mint/30",
    badge: "bg-mint text-mint-foreground",
  },
  {
    name: "Tuca",
    emotion: "Vergonha",
    src: "/mascote-vergonha.png",
    card: "bg-primary/10",
    badge: "bg-primary text-primary-foreground",
  },
  {
    name: "Rei",
    emotion: "Orgulho",
    src: "/mascote-orgulho.png",
    card: "bg-secondary/60",
    badge: "bg-secondary text-secondary-foreground",
  },
]

export function Characters() {
  return (
    <section id="personagens" className="bg-sunny/30 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wide text-primary">
            Conheça a turma das emoções
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
            Cada emoção ganha vida com um amiguinho do Universo
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-center leading-relaxed text-muted-foreground">
            São mais de 50 personagens encantadores ao longo do livro. Veja abaixo
            apenas alguns deles que ajudam a criança a reconhecer, nomear e acolher
            o que está sentindo de um jeito leve e divertido.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {mascots.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div
                className={`group flex h-full flex-col items-center rounded-3xl ${m.card} p-4 text-center transition-transform duration-300 hover:-translate-y-1.5`}
              >
                <div className="flex aspect-square w-full items-center justify-center">
                  <Image
                    src={m.src || "/placeholder.svg"}
                    alt={`${m.name}, o personagem da emoção ${m.emotion}`}
                    width={300}
                    height={300}
                    className="h-auto w-full max-w-[160px] drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 font-heading text-lg font-bold text-foreground">
                  {m.name}
                </p>
                <span
                  className={`mt-1.5 rounded-full px-3 py-1 text-xs font-bold ${m.badge}`}
                >
                  {m.emotion}
                </span>
              </div>
            </Reveal>
          ))}

          <Reveal delay={mascots.length * 0.06}>
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-primary/40 bg-primary/5 p-4 text-center">
              <span className="font-heading text-3xl font-bold text-primary">+40</span>
              <p className="mt-2 text-sm font-bold text-foreground">e muitos outros</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                amiguinhos esperando você dentro do livro
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

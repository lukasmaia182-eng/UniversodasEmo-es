import { Lightbulb, HeartHandshake, MessagesSquare } from "lucide-react"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    icon: Lightbulb,
    title: "Conhecer",
    text: "A criança descobre o nome da emoção e entende que aquilo que sente tem significado.",
    tone: "bg-sunny/20 text-sunny-foreground",
    badge: "bg-sunny text-sunny-foreground",
  },
  {
    icon: HeartHandshake,
    title: "Conectar",
    text: "Ela percebe quando essa emoção aparece, em quais situações surge e como pode sentir isso no corpo.",
    tone: "bg-mint/25 text-mint-foreground",
    badge: "bg-mint text-mint-foreground",
  },
  {
    icon: MessagesSquare,
    title: "Conversar",
    text: "Com histórias, jogos e atividades, a criança ganha formas mais leves de expressar o que está acontecendo por dentro.",
    tone: "bg-lavender/30 text-lavender-foreground",
    badge: "bg-lavender text-lavender-foreground",
  },
]

export function Caminho3cPv1() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-coral px-4 py-1.5 text-sm font-bold text-coral-foreground">
            O método
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            O caminho 3C das emoções
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            O Universo das Emoções™ foi pensado para ajudar a criança a passar por três etapas simples: conhecer,
            conectar e conversar.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7">
              <span className={`flex size-14 items-center justify-center rounded-2xl ${step.tone}`}>
                <step.icon className="size-7" aria-hidden="true" />
              </span>
              <div className="flex items-center gap-3">
                <span className={`flex size-7 items-center justify-center rounded-full text-sm font-bold ${step.badge}`}>
                  {i + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

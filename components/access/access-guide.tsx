import { BookOpen, MessageCircleHeart, PencilLine } from "lucide-react"

const steps = [
  {
    icon: BookOpen,
    title: "1. Leiam juntos",
    text: "Escolham uma emoção por dia e leiam a historinha do mascote com calma, no colo ou lado a lado.",
  },
  {
    icon: MessageCircleHeart,
    title: "2. Conversem",
    text: "Usem as perguntas para conversar sobre quando a criança sentiu aquela emoção. Sem certo ou errado.",
  },
  {
    icon: PencilLine,
    title: "3. Façam a atividade",
    text: "Realizem a atividade em família e deixem a criança escrever ou desenhar no espaço indicado.",
  },
]

export function AccessGuide() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl">
        Como aproveitar o material
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center leading-relaxed text-muted-foreground">
        Em poucos minutos por dia vocês transformam emoções em conversas
        significativas. Siga este ritmo simples:
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <s.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

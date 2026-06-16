import { Palette, ListChecks, CalendarHeart, Award } from "lucide-react"

const bonuses = [
  {
    icon: Palette,
    title: "Páginas para colorir",
    text: "Ilustrações dos mascotes prontas para imprimir e colorir enquanto conversam sobre cada emoção.",
    color: "bg-coral/20 text-coral",
  },
  {
    icon: ListChecks,
    title: "Roteiro de atividades",
    text: "Lista com todas as atividades em família organizadas por emoção, fácil de seguir no dia a dia.",
    color: "bg-mint/30 text-mint-foreground",
  },
  {
    icon: CalendarHeart,
    title: "Planner das emoções",
    text: "Um calendário simples para marcar como a criança se sentiu e acompanhar o progresso.",
    color: "bg-lavender/40 text-lavender-foreground",
  },
  {
    icon: Award,
    title: "Certificado de conclusão",
    text: "Um diploma fofo para a criança comemorar quando terminar a jornada das emoções.",
    color: "bg-sunny/40 text-sunny-foreground",
  },
]

export function AccessBonus() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <p className="text-center text-sm font-bold uppercase tracking-wide text-primary">
        Bônus inclusos
      </p>
      <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Extras para imprimir e usar quando quiser
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {bonuses.map((b) => (
          <div
            key={b.title}
            className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${b.color}`}>
              <b.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

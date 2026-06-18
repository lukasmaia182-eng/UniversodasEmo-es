import { Flame, CloudRain, EyeOff, Frown, Zap, MessageCircleOff } from "lucide-react"
import { Reveal } from "@/components/reveal"

const situations = [
  { icon: Flame, label: "Raiva e birra" },
  { icon: CloudRain, label: "Tristeza e choro" },
  { icon: EyeOff, label: "Vergonha e timidez" },
  { icon: Frown, label: "Frustração com o “não”" },
  { icon: Zap, label: "Irritabilidade" },
  { icon: MessageCircleOff, label: "Dificuldade para conversar" },
]

export function ProblemPv1() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Quando a criança não sabe dizer o que sente, tudo pode virar birra.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Muitas vezes, a criança não está tentando desafiar você. Ela apenas ainda não sabe nomear o que sente.
            Raiva, medo, vergonha, frustração, ciúmes e tristeza podem aparecer como choro, grito, silêncio ou explosão.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {situations.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05}>
            <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-coral/15 text-coral">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-semibold text-foreground">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          O <strong className="font-bold text-foreground">Universo das Emoções™</strong> ajuda a transformar esses
          momentos em oportunidades de conversa, acolhimento e aprendizado emocional.
        </p>
      </Reveal>
    </section>
  )
}

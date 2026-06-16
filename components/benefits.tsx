import {
  Brain,
  MessageCircle,
  Users,
  HandHeart,
  Star,
  Compass,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const benefits = [
  {
    icon: Brain,
    title: 'Desenvolve inteligência emocional',
    text: 'Ajuda a nomear e regular o que se sente, dia após dia.',
  },
  {
    icon: MessageCircle,
    title: 'Melhora a comunicação',
    text: 'Dá vocabulário para expressar sentimentos com clareza.',
  },
  {
    icon: Users,
    title: 'Fortalece vínculos familiares',
    text: 'Cria rituais de conversa e escuta entre todos.',
  },
  {
    icon: HandHeart,
    title: 'Estimula a empatia',
    text: 'Ensina a reconhecer e respeitar as emoções do outro.',
  },
  {
    icon: Star,
    title: 'Aumenta a autoestima',
    text: 'Mostra que toda emoção é válida e pode ser acolhida.',
  },
  {
    icon: Compass,
    title: 'Incentiva o autoconhecimento',
    text: 'Convida a criança a explorar seu próprio mundo interno.',
  },
]

export function Benefits() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Benefícios que crescem junto com a criança
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <benefit.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

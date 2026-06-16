import {
  Flame,
  CloudRain,
  EyeOff,
  Frown,
  Zap,
  MessageCircleOff,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const situations = [
  { icon: Flame, label: 'Birras' },
  { icon: CloudRain, label: 'Ansiedade' },
  { icon: EyeOff, label: 'Timidez' },
  { icon: Frown, label: 'Frustração' },
  { icon: Zap, label: 'Irritabilidade' },
  { icon: MessageCircleOff, label: 'Dificuldade para conversar' },
]

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Muitas emoções não são ditas. São demonstradas.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Quando a criança não consegue identificar o que sente, ela expressa
            suas emoções através do comportamento.
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
    </section>
  )
}

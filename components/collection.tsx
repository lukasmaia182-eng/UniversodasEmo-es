import {
  Smile,
  Ghost,
  Flame,
  CloudRain,
  EyeOff,
  Heart,
  Frown,
  Wind,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const emotions = [
  { icon: Smile, label: 'Alegria', tone: 'bg-sunny text-sunny-foreground' },
  { icon: Ghost, label: 'Medo', tone: 'bg-lavender text-lavender-foreground' },
  { icon: Flame, label: 'Raiva', tone: 'bg-coral text-coral-foreground' },
  { icon: CloudRain, label: 'Tristeza', tone: 'bg-primary text-primary-foreground' },
  { icon: EyeOff, label: 'Vergonha', tone: 'bg-mint text-mint-foreground' },
  { icon: Heart, label: 'Gratidão', tone: 'bg-coral text-coral-foreground' },
  { icon: Frown, label: 'Frustração', tone: 'bg-sunny text-sunny-foreground' },
  { icon: Wind, label: 'Ansiedade', tone: 'bg-lavender text-lavender-foreground' },
]

export function Collection() {
  return (
    <section id="colecao" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-mint px-4 py-1.5 text-sm font-semibold text-mint-foreground">
            Dentro da coleção
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Mais de 50 emoções organizadas de forma simples e acolhedora
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Cada emoção ganha uma página ilustrada, com explicação acessível e
            uma atividade prática para vivenciar em família.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {emotions.map((emotion, i) => (
          <Reveal key={emotion.label} delay={i * 0.04}>
            <div className="group flex h-full flex-col items-start gap-4 rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
              <span
                className={`flex size-14 items-center justify-center rounded-2xl ${emotion.tone}`}
              >
                <emotion.icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {emotion.label}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

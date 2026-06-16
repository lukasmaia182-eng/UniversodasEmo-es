import Image from 'next/image'
import { MessagesSquare, HeartHandshake, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  {
    icon: MessagesSquare,
    title: 'Conversas que acontecem',
    text: 'Cada emoção vira um convite para o diálogo aberto e sem julgamentos.',
  },
  {
    icon: HeartHandshake,
    title: 'Conexão de verdade',
    text: 'Momentos de afeto que aproximam pais, filhos e educadores.',
  },
  {
    icon: Sparkles,
    title: 'Aprendizado leve',
    text: 'Ciência e poesia juntas, num formato lúdico e acolhedor.',
  },
]

export function Solution() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <div className="relative">
            <Image
              src="/cena-conversa.png"
              alt="Mãe e filho lendo o Universo das Emoções junto com os mascotes da turma"
              width={680}
              height={680}
              className="h-auto w-full rounded-[2rem] shadow-xl"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Transforme emoções em conversas significativas.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              O Universo das Emoções™ guia famílias e educadores na criação de
              momentos de diálogo, escuta e conexão — onde cada sentimento é
              acolhido com cuidado.
            </p>

            <ul className="mt-8 grid gap-4">
              {points.map((point) => (
                <li
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl bg-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <point.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

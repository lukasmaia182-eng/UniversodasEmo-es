import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Carolina Menezes',
    role: 'Mãe da Laura, 6 anos',
    text: 'Minha filha começou a falar “estou frustrada” em vez de fazer birra. Mudou nossa rotina por completo.',
  },
  {
    name: 'Rafael Antunes',
    role: 'Professor do ensino fundamental',
    text: 'Uso as páginas em sala como acolhimento no início do dia. As crianças adoram e se abrem muito mais.',
  },
  {
    name: 'Dra. Patrícia Lemos',
    role: 'Psicóloga infantil',
    text: 'Um material com base científica e linguagem afetuosa. Recomendo para as famílias que atendo.',
  },
  {
    name: 'Juliana e Marcos',
    role: 'Pais do Theo, 8 anos',
    text: 'As conversas em família ficaram mais profundas. Hoje o Theo nomeia o que sente com naturalidade.',
  },
  {
    name: 'Beatriz Faria',
    role: 'Cuidadora e pedagoga',
    text: 'Simples de usar e lindo de ver. Virou parte da nossa rotina de fim de tarde.',
  },
  {
    name: 'André Tavares',
    role: 'Pai da Sofia, 5 anos',
    text: 'Investimento que vale cada centavo. A Sofia pede para “visitar o universo” todos os dias.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Famílias e educadores que já cultivam emoções
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-coral">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="leading-relaxed text-foreground">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

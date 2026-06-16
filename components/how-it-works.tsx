import { Reveal } from '@/components/reveal'

const steps = [
  {
    number: '01',
    title: 'Receba o acesso imediatamente',
    text: 'Logo após a compra, o material digital chega no seu e-mail.',
  },
  {
    number: '02',
    title: 'Explore as emoções com as crianças',
    text: 'Leiam juntos cada emoção de forma leve e divertida.',
  },
  {
    number: '03',
    title: 'Realize as atividades propostas',
    text: 'Coloque o aprendizado em prática com dinâmicas simples.',
  },
  {
    number: '04',
    title: 'Fortaleça a comunicação familiar',
    text: 'Transforme a rotina em momentos de diálogo e conexão.',
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Como funciona
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.08}>
            <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6">
              <span className="font-heading text-4xl font-bold text-primary/35">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

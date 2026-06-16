import { ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Guarantee() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4 md:pb-12">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-border bg-card p-8 text-center md:flex-row md:gap-8 md:p-10 md:text-left">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-mint text-mint-foreground">
            <ShieldCheck className="size-10" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Garantia incondicional de 7 dias
            </h2>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
              Se você não ficar satisfeito, devolvemos 100% do seu investimento.
              Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

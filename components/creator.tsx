import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function Creator() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-lavender px-4 py-1.5 text-sm font-bold text-lavender-foreground">
            Quem criou
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Desenvolvido por especialista em desenvolvimento infantil
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-8 rounded-[2rem] border border-border bg-card p-6 text-center sm:p-10 md:flex-row md:text-left">
          <Image
            src="/criadora.png"
            alt="Retrato da psicóloga infantil criadora do Universo das Emoções"
            width={220}
            height={220}
            className="size-40 shrink-0 rounded-full object-cover shadow-lg sm:size-48"
          />
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground">Dra. Helena Marques</h3>
            <p className="text-sm font-semibold text-primary">Psicóloga infantil e educadora socioemocional</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Há mais de 15 anos ajudando famílias a transformarem birras e silêncios em conversas. O Universo das Emoções
              nasceu da prática clínica e da convicção de que toda criança merece aprender a nomear o que sente — com
              acolhimento, ciência e leveza.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

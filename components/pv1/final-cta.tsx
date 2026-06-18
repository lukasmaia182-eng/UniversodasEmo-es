import Image from "next/image"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"

export function FinalCtaPv1() {
  return (
    <section className="bg-night">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <Reveal>
          <Image
            src="/mascote-carinho.png"
            alt="Mel, a mascote do carinho, convidando você"
            width={140}
            height={140}
            className="mx-auto w-24 drop-shadow-xl md:w-28"
          />
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold leading-tight text-night-foreground md:text-4xl">
            Comece hoje a ajudar seu filho a falar sobre o que sente
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-night-muted">
            Você não precisa esperar a próxima birra para tentar descobrir o que fazer. Com o Universo das Emoções™,
            você tem em mãos atividades, jogos, histórias e ferramentas visuais prontas para criar conversas emocionais
            mais leves com a criança.
          </p>

          <div className="mt-5 flex flex-col items-center gap-1">
            <p className="text-sm font-semibold text-night-muted">
              De <span className="line-through">R$ 97,00</span> por apenas
            </p>
            <p className="font-heading text-5xl font-bold text-sunny">R$ 19,90</p>
          </div>

          <div className="mt-7 flex justify-center">
            <CtaButton variant="sunny">QUERO ACESSAR AGORA POR R$ 19,90</CtaButton>
          </div>

          <p className="mt-5 text-sm font-medium text-night-muted">
            Acesso imediato • Material digital • Garantia de 7 dias
          </p>
        </Reveal>
      </div>
    </section>
  )
}

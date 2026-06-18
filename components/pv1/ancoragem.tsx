import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"

const items = [
  { label: "Livro das Emoções", price: "R$ 47" },
  { label: "Roda das Emoções", price: "R$ 17" },
  { label: "Baralho das Emoções", price: "R$ 27" },
  { label: "Semáforo Emocional", price: "R$ 17" },
  { label: "Jogo das Caras", price: "R$ 17" },
  { label: "Teatro das Expressões", price: "R$ 17" },
  { label: "Jogo das Sensações", price: "R$ 17" },
  { label: "Cartinhas de Conversa", price: "R$ 17" },
  { label: "Atividades para Colorir", price: "R$ 17" },
]

export function AncoragemPv1() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Tudo isso por menos do que um brinquedo simples
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-card">
          <ul className="divide-y divide-border">
            {items.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-4 px-6 py-3.5">
                <span className="font-medium text-foreground">{item.label}</span>
                <span className="font-semibold text-muted-foreground line-through">{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between gap-4 bg-secondary/50 px-6 py-4">
            <span className="font-heading font-bold text-foreground">Valor total</span>
            <span className="font-heading text-lg font-bold text-foreground line-through">R$ 193</span>
          </div>

          <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">
            <p className="text-sm font-semibold text-muted-foreground">
              De <span className="line-through">R$ 97</span> por apenas
            </p>
            <p className="font-heading text-5xl font-bold text-primary">R$ 19,90</p>
            <CtaButton>QUERO ACESSAR O KIT AGORA</CtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

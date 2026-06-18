import { CtaButtonPv2 } from "@/components/pv2/cta-button"
import { Reveal } from "@/components/reveal"

const items = [
  { label: "Libro de las Emociones", price: "$299 MXN" },
  { label: "Rueda de las Emociones", price: "$79 MXN" },
  { label: "Baraja de las Emociones", price: "$99 MXN" },
  { label: "Semáforo Emocional", price: "$79 MXN" },
  { label: "Juego de las Caras", price: "$79 MXN" },
  { label: "Teatro de las Expresiones", price: "$79 MXN" },
  { label: "Juego de las Sensaciones", price: "$79 MXN" },
  { label: "Cartas de Conversación", price: "$79 MXN" },
  { label: "Actividades para Colorear", price: "$79 MXN" },
]

export function AncoragemPv2() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Todo esto por menos que un juguete simple
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
            <span className="font-heading text-lg font-bold text-foreground line-through">$931 MXN</span>
          </div>

          <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">
            <p className="text-sm font-semibold text-muted-foreground">
              De <span className="line-through">$899 MXN</span> por solo
            </p>
            <p className="font-heading text-5xl font-bold text-primary">$199 MXN</p>
            <CtaButtonPv2>QUIERO ACCEDER AL KIT AHORA</CtaButtonPv2>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const benefits = [
  "Mais de 50 emoções ilustradas",
  "Linguagem simples para crianças",
  "Atividades práticas para fazer em família",
  "Baseado em educação socioemocional",
  "Acesso imediato e vitalício",
]

const mascots = [
  { src: "/mascote-alegria.png", name: "Lumi", bg: "bg-sunny/25" },
  { src: "/mascote-coragem.png", name: "Viko", bg: "bg-coral/25" },
  { src: "/mascote-calma.png", name: "Sereno", bg: "bg-mint/25" },
  { src: "/mascote-curiosidade.png", name: "Pipo", bg: "bg-lavender/30" },
  { src: "/mascote-carinho.png", name: "Mel", bg: "bg-primary/15" },
  { src: "/mascote-surpresa.png", name: "Zazá", bg: "bg-mint/25" },
]

export function Showcase() {
  return (
    <section className="bg-night text-night-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <Reveal>
          <div>
            <span className="inline-flex items-center rounded-full bg-sunny px-4 py-1.5 text-sm font-bold text-sunny-foreground">
              Por que vale a pena
            </span>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight md:text-4xl">
              Ajude seu filho a compreender as emoções desde hoje
            </h2>
            <ul className="mt-7 grid gap-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mint text-mint-foreground">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-end gap-3">
              <span className="text-lg font-medium text-night-muted line-through">R$ 97,00</span>
              <span className="font-heading text-5xl font-bold">R$ 19,90</span>
            </div>
            <a
              href="#oferta"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sunny px-8 py-4 text-base font-extrabold text-sunny-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              QUERO ACESSAR COM DESCONTO
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {mascots.map((m) => (
                <div
                  key={m.name}
                  className={`flex flex-col items-center rounded-2xl ${m.bg} p-3 backdrop-blur-sm`}
                >
                  <Image
                    src={m.src || "/placeholder.svg"}
                    alt={`${m.name}, mascote do Universo das Emoções`}
                    width={160}
                    height={160}
                    className="w-full drop-shadow-xl"
                  />
                  <span className="mt-1 text-sm font-bold">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

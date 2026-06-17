import Image from "next/image"
import { Check, ShieldCheck, Zap, Lock } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"

const checklist = ["Mais de 50 emoções", "Material 100% digital", "Acesso imediato", "Para crianças e adultos"]

const seals = [
  { icon: Lock, label: "Compra segura" },
  { icon: ShieldCheck, label: "Garantia de 7 dias" },
  { icon: Zap, label: "Acesso imediato" },
]

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-mint/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 size-72 rounded-full bg-lavender/50 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <Reveal>
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-sunny px-4 py-1.5 text-sm font-bold text-sunny-foreground">
              Coleção digital de inteligência emocional
            </span>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-coral">7 dias</span> para ajudar seu filho a entender melhor suas{" "}
              <span className="text-primary">emoções</span> e melhorar suas{" "}
              <span className="text-primary">reações</span>
            </h1>

            <div className="relative mt-7 flex justify-center md:hidden">
              <Image
                src="/hero-mockup.png"
                alt="Livro e tablet do Universo das Emoções cercados pelos mascotes da turma"
                width={640}
                height={620}
                priority
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Uma coleção criada para ajudar crianças e adultos a compreenderem suas emoções com ciência, ternura e
              muita imaginação.
            </p>

            <ul className="mx-auto mt-7 grid max-w-md gap-3 text-left sm:grid-cols-2 md:mx-0">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mint text-mint-foreground">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col items-center gap-1 md:items-start">
              <p className="text-sm font-semibold text-muted-foreground">
                De <span className="line-through">R$ 97,00</span> por apenas
              </p>
              <p className="font-heading text-5xl font-bold text-primary">R$ 19,90</p>
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <CtaButton>Comprar com desconto</CtaButton>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start">
              {seals.map((seal) => (
                <div key={seal.label} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <seal.icon className="size-4 text-primary" aria-hidden="true" />
                  {seal.label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="hidden md:block">
          <Reveal delay={0.15}>
            <div className="relative flex justify-center">
              <Image
                src="/hero-mockup.png"
                alt="Livro e tablet do Universo das Emoções cercados pelos mascotes da turma"
                width={640}
                height={620}
                priority
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

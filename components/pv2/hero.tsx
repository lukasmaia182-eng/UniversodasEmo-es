import Image from "next/image"
import { Check, ShieldCheck, Zap, Lock, Sparkles } from "lucide-react"
import { CtaButtonPv2 } from "@/components/pv2/cta-button"
import { Reveal } from "@/components/reveal"

const checklist = [
  "Más de 160 páginas ilustradas",
  "Más de 70 emociones explicadas para niños",
  "Juegos, cartas y actividades listas para imprimir",
  "Historias cortas con personajes lúdicos",
  "Acceso inmediato por correo",
  "Garantía de 7 días",
]

const seals = [
  { icon: Lock, label: "Compra segura" },
  { icon: ShieldCheck, label: "Garantía de 7 días" },
  { icon: Zap, label: "Acceso inmediato" },
]

export function HeroPv2() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-mint/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 size-72 rounded-full bg-lavender/50 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <Reveal>
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-sm font-bold text-coral-foreground">
              Educación emocional lúdica para niños de 4 a 12 años
            </span>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Ayuda a tu hijo a <span className="text-coral">entender y expresar</span> lo que siente antes de que todo
              se convierta en <span className="text-primary">berrinche, llanto o explosión</span>
            </h1>

            <div className="relative mt-7 flex justify-center md:hidden">
              <Image
                src="/hero-mockup.png"
                alt="Libro y tablet del Universo de las Emociones rodeados por las mascotas de la pandilla"
                width={640}
                height={620}
                priority
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>

            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Más de 70 emociones ilustradas, historias cortas y actividades listas para que niños de 4 a 12 años
              aprendan a nombrar sus sentimientos de forma ligera, lúdica y cariñosa.
            </p>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Recibes acceso inmediato a un{" "}
              <strong className="font-bold text-foreground">kit digital completo</strong> para usar en casa, en la
              escuela o en consultas infantiles — sin tener que crear nada desde cero.
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
                De <span className="line-through">$899 MXN</span> por solo
              </p>
              <p className="font-heading text-5xl font-bold text-primary">$199 MXN</p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 md:items-start">
              <CtaButtonPv2>QUIERO AYUDAR A MI HIJO A EXPRESAR LO QUE SIENTE</CtaButtonPv2>
              <a
                href="#oferta"
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Quiero acceder al kit por $199 MXN
              </a>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 md:justify-start">
              {seals.map((seal) => (
                <div key={seal.label} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <seal.icon className="size-4 text-primary" aria-hidden="true" />
                  {seal.label}
                </div>
              ))}
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-foreground md:justify-start">
              <Sparkles className="size-4 text-coral" aria-hidden="true" />
              Más de 70 emociones • más de 160 páginas • juegos, cartas e historias
            </p>
          </div>
        </Reveal>

        <div className="hidden md:block">
          <Reveal delay={0.15}>
            <div className="relative flex justify-center">
              <Image
                src="/hero-mockup.png"
                alt="Libro y tablet del Universo de las Emociones rodeados por las mascotas de la pandilla"
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

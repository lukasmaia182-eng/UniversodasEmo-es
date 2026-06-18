import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const bullets = [
  "Material 100% digital",
  "Pronto para imprimir",
  "Fácil de usar",
  "Pode ser usado em casa, escola ou atendimento infantil",
  "Não precisa criar nada do zero",
  "Acesso imediato após a compra",
]

export function OQueEPv1() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <div className="relative">
            <Image
              src="/cena-conversa.png"
              alt="Mãe e filho lendo o Universo das Emoções junto com os mascotes da turma"
              width={680}
              height={680}
              className="h-auto w-full rounded-[2rem] shadow-xl"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="inline-flex items-center rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-mint-foreground">
              O que é o Universo das Emoções™
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Um kit digital lúdico de educação emocional para crianças
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              O Universo das Emoções™ foi criado para ajudar crianças a reconhecer, nomear e conversar sobre emoções de
              forma simples, visual e acolhedora.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Com histórias, jogos, cartas, atividades e ferramentas prontas para imprimir, a criança aprende que
              sentimentos como raiva, medo, tristeza, vergonha, alegria e frustração fazem parte da vida — e que podem
              ser expressados com mais clareza.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-relaxed text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

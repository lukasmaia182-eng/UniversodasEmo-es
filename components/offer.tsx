import Image from 'next/image'
import {
  Check,
  CreditCard,
  Disc3,
  Laugh,
  TrafficCone,
  Layers,
  Drama,
  Brain,
  Sparkles,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const includes = [
  'Acesso vitalício',
  'Atualizações futuras',
  'Garantia de 7 dias',
  'Mais de 70 emoções ilustradas',
  'Conteúdo pronto para imprimir em casa',
  'Atividades para escrever e colorir',
]

const materials = [
  { icon: Disc3, label: 'Roda das Emoções' },
  { icon: Laugh, label: 'Jogo das Caras' },
  { icon: TrafficCone, label: 'Semáforo Emocional' },
  { icon: Layers, label: 'Baralho Divertidamente' },
  { icon: Drama, label: 'Teatro das Expressões' },
  { icon: Brain, label: 'Jogo das Sensações' },
]

export function Offer({
  checkoutUrl = 'https://checkout.perfectpay.com.br/pay/PPU38CQD726',
}: {
  checkoutUrl?: string
}) {
  return (
    <section id="oferta" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-coral/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-mint/30 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-background/20 px-4 py-1.5 text-sm font-semibold">
              Oferta por tempo limitado
            </span>
            <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight md:text-4xl">
              Comece hoje a cultivar a inteligência emocional da sua família
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-pretty text-primary-foreground/85">
              São <strong className="font-semibold text-primary-foreground">9 materiais + bônus</strong>, com
              atividades práticas e lúdicas para auxiliar no desenvolvimento de habilidades socioemocionais!
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-3xl bg-background/10 p-6 text-left ring-1 ring-background/20">
              <p className="text-center font-heading text-sm font-bold uppercase tracking-wide text-primary-foreground/90">
                Você vai receber:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {materials.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sunny text-sunny-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center justify-center gap-2 text-center font-heading text-base font-bold text-sunny">
                <Sparkles className="size-5" aria-hidden="true" />
                e muito mais!
              </p>
            </div>

            <div className="mt-8 flex items-end justify-center gap-3">
              <span className="text-lg font-medium text-primary-foreground/70 line-through">
                R$ 97,00
              </span>
              <span className="font-heading text-5xl font-bold md:text-6xl">
                R$ 19,90
              </span>
            </div>
            <p className="mt-2 text-primary-foreground/80">
              Pagamento único · sem mensalidades · imprima quantas vezes quiser
            </p>

            <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-background/20">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-center justify-center gap-2 sm:gap-3">
              <Image
                src="/mascote-apontando.png"
                alt="Mascote do Universo das Emoções apontando para o botão de compra"
                width={120}
                height={120}
                className="size-20 shrink-0 animate-mascot-sway drop-shadow-lg sm:size-28"
              />
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex animate-cta-pulse items-center justify-center rounded-full bg-sunny px-6 py-4 text-sm font-extrabold text-sunny-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 sm:px-8 sm:text-base"
              >
                QUERO O UNIVERSO DAS EMOÇÕES
              </a>
            </div>

            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              <CreditCard className="size-4" aria-hidden="true" />
              Pagamento via PIX, cartão e boleto
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

import Image from "next/image"
import { Heart, MessageCircle, BookHeart, BrainCircuit } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"

const leftPoints = [
  {
    icon: Heart,
    content: (
      <>
        Quando a criança <strong className="font-extrabold text-foreground">não sabe nomear o que sente</strong>, ela
        expressa com <strong className="font-extrabold text-foreground">birras, irritabilidade ou silêncio</strong>.
      </>
    ),
  },
  {
    icon: MessageCircle,
    content: (
      <>
        Transforme o <strong className="font-extrabold text-foreground">&ldquo;comportamento difícil&rdquo;</strong> em
        conversas leves e cheias de afeto.
      </>
    ),
  },
]

const mascots = [
  {
    name: "Lumi",
    emotion: "Alegria",
    desc: "Ilumina o coração e acolhe.",
    color: "text-sunny-foreground",
    ring: "bg-sunny/30",
  },
  {
    name: "Tibo",
    emotion: "Medo",
    desc: "Ensina coragem e segurança.",
    color: "text-chart-5",
    ring: "bg-chart-5/15",
  },
  {
    name: "Tuca",
    emotion: "Vergonha",
    desc: "Ajuda a fortalecer a autoestima.",
    color: "text-primary",
    ring: "bg-primary/15",
  },
]

const features = [
  {
    icon: BookHeart,
    content: (
      <>
        Coleção Digital com <strong className="font-extrabold text-foreground">mais de 50 emoções</strong> explicadas
        com <strong className="font-extrabold text-foreground">ciência e poesia</strong>.
      </>
    ),
  },
  {
    icon: BrainCircuit,
    content: (
      <>
        Ferramentas práticas para pais e educadores fortalecerem vínculos e{" "}
        <strong className="font-extrabold text-foreground">inteligência emocional</strong>.
      </>
    ),
  },
]

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-mint/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 size-72 rounded-full bg-lavender/50 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16">
        {/* Título */}
        <Reveal>
          <div className="text-center">
            <p className="font-heading text-xl font-bold text-foreground sm:text-2xl">
              Muitas emoções não são ditas.
            </p>
            <h1 className="mt-1 text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              São demonstradas <br className="hidden sm:block" />
              <span className="text-coral">através do comportamento.</span>
            </h1>
          </div>
        </Reveal>

        {/* Composição central */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,1.4fr)_1fr]">
            {/* Coluna esquerda - pontos */}
            <div className="space-y-5">
              {leftPoints.map((point, i) => (
                <div key={i} className="flex gap-3 text-left">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-night text-night-foreground">
                    <point.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{point.content}</p>
                </div>
              ))}
            </div>

            {/* Imagem central */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[3rem] bg-secondary/50 blur-2xl" />
              <Image
                src="/hero-scene.png"
                alt="Mãe abraçando a filha com os mascotes Lumi, Tibo e Tuca saindo de um livro mágico"
                width={720}
                height={720}
                priority
                className="w-full max-w-xl drop-shadow-2xl"
              />
              <span className="absolute bottom-6 left-1/2 flex size-24 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-sunny text-center font-heading text-sunny-foreground shadow-lg sm:left-[42%]">
                <span className="text-2xl font-bold leading-none">+50</span>
                <span className="px-2 text-[10px] font-bold leading-tight">Emoções com ciência e poesia</span>
              </span>
            </div>

            {/* Coluna direita - mascotes */}
            <div className="space-y-4">
              {mascots.map((m) => (
                <div
                  key={m.name}
                  className="rounded-2xl border border-border bg-card/70 p-4 text-center shadow-sm backdrop-blur-sm sm:text-left"
                >
                  <p className={`font-heading text-xl font-bold ${m.color}`}>{m.name}</p>
                  <p className="text-sm font-extrabold text-foreground">{m.emotion}</p>
                  <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Recursos + Oferta */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            {/* Recursos */}
            <div className="grid gap-4 rounded-3xl border border-border bg-card/70 p-5 sm:grid-cols-2 sm:p-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 text-left">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-night text-night-foreground">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.content}</p>
                </div>
              ))}
            </div>

            {/* Oferta especial */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-coral/30 bg-card p-6 text-center shadow-md">
              <span className="rounded-full bg-coral px-4 py-1 text-sm font-extrabold uppercase tracking-wide text-coral-foreground">
                ★ Oferta Especial ★
              </span>
              <p className="mt-3 text-base font-semibold text-muted-foreground line-through">De R$ 97,00</p>
              <p className="mt-1 flex items-baseline gap-1 font-heading text-foreground">
                <span className="text-sm font-semibold">por apenas</span>
                <span className="text-4xl font-bold text-coral sm:text-5xl">R$ 19,90</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <CtaButton className="bg-coral text-coral-foreground shadow-coral/30">
              <Heart className="size-5 fill-current" aria-hidden="true" />
              Quero ajudar meu filho agora
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

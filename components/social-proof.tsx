import { Star, Heart, ShieldCheck, BadgeCheck, ThumbsUp, ShoppingBag, Truck, Smile } from "lucide-react"
import { Reveal } from "@/components/reveal"

/* Avatar com iniciais coloridas */
function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .replace(/[^\p{L}\s]/gu, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${color}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-sunny" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} className="size-3.5 fill-current" aria-hidden="true" />
      ))}
    </div>
  )
}

type Review = {
  name: string
  color: string
  text: string
  likes: number
  time: string
  reply?: string
}

const reviews: Review[] = [
  {
    name: "Cléia Cipriano",
    color: "bg-coral",
    text: "Comprei e ofereci como recurso para os meus filhos pequenos. Eles amaram os personagens e hoje conseguem falar o que sentem!",
    likes: 66,
    time: "1 d",
    reply: "Muito obrigada! Ficamos felizes em saber que ajudou aí na sua casa 💛",
  },
  {
    name: "Verônica Krebs",
    color: "bg-primary",
    text: "Recebi rapidinho. Material excelente! Vou usar com meu netinho que se separou dos pais. Veio na hora certa.",
    likes: 35,
    time: "2 d",
  },
  {
    name: "Ana Paula Fontoura",
    color: "bg-sunny",
    text: "Gente, o material é incrivelmente maravilhoso, e de uma ajuda extrema para ajudar a criança a expressar o que sente. De forma fácil, leve e acolhedora. Gratidão!",
    likes: 18,
    time: "2 d",
    reply: "Que mensagem linda, Ana! Esse é exatamente o nosso propósito 🥹",
  },
  {
    name: "Renata Romero",
    color: "bg-coral",
    text: "Comprei e amei! Um excelente recurso para usar com as crianças no dia a dia.",
    likes: 12,
    time: "1 d",
  },
  {
    name: "Jor Mutos",
    color: "bg-primary",
    text: "Recebi e já estou utilizando com a minha filha diariamente. Ela adora os personagens!",
    likes: 17,
    time: "3 d",
  },
  {
    name: "Lilian Vieira",
    color: "bg-sunny",
    text: "Gente, podem comprar sem medo!! Eu comprei e recebi na hora no meu e-mail, e ainda comprei junto o pacote do colorir de presente. Muito obrigada pelo carinho!",
    likes: 34,
    time: "1 sem",
    reply: "Nós que agradecemos a confiança, Lilian! Aproveitem muito 💛",
  },
]

const trustBadges = [
  { icon: ShoppingBag, title: "Compra 100% segura", desc: "Ambiente protegido e criptografado" },
  { icon: Truck, title: "Entrega garantida", desc: "Material enviado direto no seu e-mail" },
  { icon: ShieldCheck, title: "Satisfação garantida", desc: "7 dias de garantia incondicional" },
  { icon: Smile, title: "Atendimento humanizado", desc: "Suporte rápido e próximo de você" },
]

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <Avatar name={review.name} color={review.color} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <p className="font-semibold text-foreground">{review.name}</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <BadgeCheck className="size-3.5" aria-hidden="true" />
              Compra verificada
            </span>
          </div>
          <Stars />
        </div>
      </div>

      <blockquote className="text-[13px] leading-relaxed text-foreground">{review.text}</blockquote>

      <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <ThumbsUp className="size-3.5" aria-hidden="true" />
          {review.likes}
        </span>
        <span>{review.time}</span>
        <span className="font-semibold">Responder</span>
      </div>

      {review.reply && (
        <div className="mt-auto rounded-xl bg-secondary/50 p-3">
          <p className="text-[11px] font-semibold text-coral">Universo das Emoções respondeu</p>
          <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{review.reply}</p>
        </div>
      )}
    </figure>
  )
}

export function SocialProof() {
  return (
    <section className="bg-secondary/30">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* Cabeçalho com selo de nota */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Quem usa, <span className="italic text-coral">recomenda!</span>{" "}
                  <Heart className="inline size-7 fill-coral text-coral align-middle" aria-hidden="true" />
                </h2>
                <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Veja o que nossas clientes estão dizendo sobre nossos produtos e como eles fazem a
                  diferença no dia a dia de tantas famílias.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-foreground">
                  <ShieldCheck className="size-4 text-emerald-600" aria-hidden="true" />
                  Confiança que se conquista com qualidade, cuidado e resultados reais!
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-secondary/40 p-4">
                <img
                  src="/recomenda-familia.png"
                  alt="Mãe e filha sorrindo juntas"
                  className="size-20 rounded-xl object-cover"
                />
                <div className="text-center">
                  <div className="flex items-end justify-center gap-1">
                    <span className="font-heading text-4xl font-bold text-foreground">4,9</span>
                    <span className="pb-1 text-sm text-muted-foreground">/5</span>
                  </div>
                  <Stars />
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Avaliação média
                    <br />
                    de clientes satisfeitas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grade de avaliações */}
        <div className="mt-8 grid items-start gap-5 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.05}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        {/* Selos de confiança */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <badge.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{badge.title}</p>
                  <p className="text-[11px] leading-snug text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Faixa final */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl bg-coral px-6 py-6 text-center text-white">
            <Heart className="size-6 fill-white" aria-hidden="true" />
            <p className="text-balance font-heading text-lg font-semibold md:text-xl">
              Mais de 5.000 famílias já transformaram seu dia a dia com nossos produtos!
            </p>
            <p className="text-sm font-medium text-white/90">Seja você a próxima! 💛</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Depoimentos reais enviados por clientes. Resultados podem variar de família para família.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

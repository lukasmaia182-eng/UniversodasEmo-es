import { Star, Heart, ShieldCheck, BadgeCheck, ThumbsUp, ShoppingBag, Truck, Smile } from "lucide-react"
import { Reveal } from "@/components/reveal"

/* Avatar con iniciales de color */
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
    <div className="flex gap-0.5 text-sunny" aria-label="5 de 5 estrellas">
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
    name: "Claudia Cisneros",
    color: "bg-coral",
    text: "Lo compré para mis hijos pequeños. ¡Amaron a los personajes y hoy logran decir lo que sienten!",
    likes: 66,
    time: "1 d",
    reply: "¡Muchas gracias! Nos encanta saber que les ayudó en casa 💛",
  },
  {
    name: "Verónica Reyes",
    color: "bg-primary",
    text: "Lo recibí enseguida. ¡Material excelente! Lo voy a usar con mi nietecito que vive un cambio familiar. Llegó en el momento justo.",
    likes: 35,
    time: "2 d",
  },
  {
    name: "Ana Paula Fonseca",
    color: "bg-sunny",
    text: "Gente, el material es increíblemente maravilloso y de gran ayuda para que el niño exprese lo que siente. De forma fácil, ligera y cariñosa. ¡Gracias!",
    likes: 18,
    time: "2 d",
    reply: "¡Qué mensaje tan lindo, Ana! Ese es justo nuestro propósito 🥹",
  },
  {
    name: "Renata Romero",
    color: "bg-coral",
    text: "¡Lo compré y me encantó! Un excelente recurso para usar con los niños en el día a día.",
    likes: 12,
    time: "1 d",
  },
  {
    name: "Jorge Muñoz",
    color: "bg-primary",
    text: "Lo recibí y ya lo estoy usando con mi hija todos los días. ¡Le encantan los personajes!",
    likes: 17,
    time: "3 d",
  },
  {
    name: "Liliana Vieira",
    color: "bg-sunny",
    text: "¡Gente, pueden comprarlo sin miedo! Lo compré y lo recibí al instante en mi correo, y de regalo venía el paquete para colorear. ¡Gracias por el cariño!",
    likes: 34,
    time: "1 sem",
    reply: "¡Gracias a ti por la confianza, Liliana! Disfrútenlo mucho 💛",
  },
]

const trustBadges = [
  { icon: ShoppingBag, title: "Compra 100% segura", desc: "Entorno protegido y cifrado" },
  { icon: Truck, title: "Entrega garantizada", desc: "Material enviado directo a tu correo" },
  { icon: ShieldCheck, title: "Satisfacción garantizada", desc: "7 días de garantía incondicional" },
  { icon: Smile, title: "Atención cercana", desc: "Soporte rápido y humano" },
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
          <p className="text-[11px] font-semibold text-coral">Universo de las Emociones respondió</p>
          <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{review.reply}</p>
        </div>
      )}
    </figure>
  )
}

export function SocialProofPv2() {
  return (
    <section className="bg-secondary/30">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        {/* Encabezado con sello de calificación */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Quien lo usa, <span className="italic text-coral">¡lo recomienda!</span>{" "}
                  <Heart className="inline size-7 fill-coral text-coral align-middle" aria-hidden="true" />
                </h2>
                <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Mira lo que dicen nuestras clientas sobre nuestros productos y cómo marcan la diferencia en el día a
                  día de tantas familias.
                </p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-foreground">
                  <ShieldCheck className="size-4 text-emerald-600" aria-hidden="true" />
                  ¡Confianza que se gana con calidad, cuidado y resultados reales!
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-secondary/40 p-4">
                <img
                  src="/recomenda-familia.png"
                  alt="Mamá e hija sonriendo juntas"
                  className="size-20 rounded-xl object-cover"
                />
                <div className="text-center">
                  <div className="flex items-end justify-center gap-1">
                    <span className="font-heading text-4xl font-bold text-foreground">4,9</span>
                    <span className="pb-1 text-sm text-muted-foreground">/5</span>
                  </div>
                  <Stars />
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Calificación promedio
                    <br />
                    de clientas satisfechas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grilla de reseñas */}
        <div className="mt-8 grid items-start gap-5 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.05}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        {/* Sellos de confianza */}
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

        {/* Franja final */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl bg-coral px-6 py-6 text-center text-white">
            <Heart className="size-6 fill-white" aria-hidden="true" />
            <p className="text-balance font-heading text-lg font-semibold md:text-xl">
              ¡Más de 5.000 familias ya transformaron su día a día con nuestros productos!
            </p>
            <p className="text-sm font-medium text-white/90">¡Sé tú la próxima! 💛</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Testimonios reales enviados por clientas. Los resultados pueden variar de una familia a otra.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

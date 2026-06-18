import { Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    name: "Carolina Menéndez",
    role: "Mamá de Laura, 6 años",
    text: "Mi hija empezó a decir “estoy frustrada” en vez de hacer berrinche. Cambió nuestra rutina por completo.",
  },
  {
    name: "Rafael Antúnez",
    role: "Maestro de primaria",
    text: "Uso las páginas en clase como bienvenida al inicio del día. A los niños les encanta y se abren mucho más.",
  },
  {
    name: "Dra. Patricia Lemos",
    role: "Psicóloga infantil",
    text: "Un material con base científica y lenguaje afectuoso. Lo recomiendo a las familias que atiendo.",
  },
  {
    name: "Juliana y Marcos",
    role: "Papás de Teo, 8 años",
    text: "Las conversaciones en familia se volvieron más profundas. Hoy Teo nombra lo que siente con naturalidad.",
  },
  {
    name: "Beatriz Farías",
    role: "Cuidadora y pedagoga",
    text: "Simple de usar y hermoso de ver. Se volvió parte de nuestra rutina de la tarde.",
  },
  {
    name: "Andrés Tavárez",
    role: "Papá de Sofía, 5 años",
    text: "Una inversión que vale cada centavo. Sofía pide “visitar el universo” todos los días.",
  },
]

export function TestimonialsPv2() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Familias y educadores que ya cultivan emociones
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <figure className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-coral">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="leading-relaxed text-foreground">“{item.text}”</blockquote>
                <figcaption className="mt-auto">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

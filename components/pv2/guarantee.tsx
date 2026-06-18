import { ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function GuaranteePv2() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4 md:pb-12">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-border bg-card p-8 text-center md:flex-row md:gap-8 md:p-10 md:text-left">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-mint text-mint-foreground">
            <ShieldCheck className="size-10" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Garantía incondicional de 7 días
            </h2>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
              Si no quedas satisfecho, te devolvemos el 100% de tu inversión. Sin preguntas, sin trámites.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

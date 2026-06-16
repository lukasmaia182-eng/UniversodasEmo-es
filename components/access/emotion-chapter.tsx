import Image from "next/image"
import { MapPin, BookHeart, Users, Lightbulb, PencilLine } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { type EmotionContent, mascotImage } from "@/lib/access-content"

export function EmotionChapter({ data, number }: { data: EmotionContent; number: number }) {
  const flipped = number % 2 === 0

  return (
    <article id={data.id} className="scroll-mt-20 py-8 print:break-before-page print:py-4">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <div className={`grid items-stretch gap-0 md:grid-cols-[0.85fr_1.15fr] ${flipped ? "md:[direction:rtl]" : ""}`}>
            {/* Painel da ilustração */}
            <div
              className="relative flex items-center justify-center p-8 [direction:ltr]"
              style={{ backgroundColor: data.bg }}
            >
              <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 font-heading text-base font-bold text-foreground">
                {String(number).padStart(2, "0")}
              </span>
              <Image
                src={mascotImage(data.id) || "/placeholder.svg"}
                alt={`${data.mascotName}, mascote da emoção ${data.label}`}
                width={320}
                height={320}
                className="w-full max-w-[220px] drop-shadow-xl"
              />
              <span className="absolute bottom-5 rounded-full bg-card/90 px-4 py-1.5 text-sm font-bold text-foreground">
                {data.mascotName}
              </span>
            </div>

            {/* Conteúdo */}
            <div className="p-7 [direction:ltr] sm:p-9">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: data.accent }} />
                <h3 className="font-heading text-3xl font-bold text-foreground">{data.label}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-foreground/80">{data.intro}</p>

              {/* Onde mora */}
              <div className="mt-6 rounded-2xl bg-muted/60 p-5">
                <h4 className="flex items-center gap-2 font-heading text-base font-bold" style={{ color: data.accent }}>
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Onde ela mora no corpo
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{data.body}</p>
              </div>

              {/* Historinha */}
              <div className="mt-4 rounded-2xl border border-border p-5">
                <h4 className="flex items-center gap-2 font-heading text-base font-bold" style={{ color: data.accent }}>
                  <BookHeart className="h-4 w-4" aria-hidden="true" />
                  A historinha de {data.mascotName}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{data.story}</p>
              </div>

              {/* Atividade em família */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-mint/25 p-5">
                  <h4 className="flex items-center gap-2 font-heading text-base font-bold text-mint-foreground">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Atividade em família
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{data.familyActivity}</p>
                </div>
                <div className="rounded-2xl bg-sunny/30 p-5">
                  <h4 className="flex items-center gap-2 font-heading text-base font-bold text-sunny-foreground">
                    <Lightbulb className="h-4 w-4" aria-hidden="true" />
                    Dica para os pais
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{data.parentTip}</p>
                </div>
              </div>

              {/* Espaço para escrever */}
              <div className="mt-4 rounded-2xl border border-dashed border-foreground/25 bg-foreground/[0.02] p-5">
                <h4 className="flex items-center gap-2 font-heading text-base font-bold" style={{ color: data.accent }}>
                  <PencilLine className="h-4 w-4" aria-hidden="true" />
                  Minha vez de escrever
                </h4>
                <p className="mt-2 text-sm text-foreground/70">{data.exercise}</p>
                <div className="mt-4 space-y-3.5">
                  <span className="block h-px w-full bg-foreground/15" />
                  <span className="block h-px w-full bg-foreground/15" />
                  <span className="block h-px w-[85%] bg-foreground/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  )
}

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { EmotionChapter } from "@/components/access/emotion-chapter"
import { emotions, emotionModules, emotionById, mascotImage } from "@/lib/access-content"

export function EmotionsCollection() {
  // Ordem global de numeração, seguindo a ordem dos módulos
  const order: string[] = emotionModules.flatMap((m) => m.emotionIds)
  const numberOf = (id: string) => order.indexOf(id) + 1

  return (
    <section id="emocoes" className="bg-secondary/30 py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wide text-primary">
            Conteúdo completo
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
            As {emotions.length} emoções do Universo, uma a uma
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-muted-foreground">
            Toque em uma emoção para ir direto ao capítulo. Cada uma traz a
            historinha, a atividade em família e o espaço para escrever.
          </p>
        </Reveal>

        {/* Sumário */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {order.map((id) => {
              const e = emotionById[id]
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className="group flex flex-col items-center rounded-2xl bg-card p-3 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <span
                    className="flex w-full items-center justify-center rounded-xl p-2"
                    style={{ backgroundColor: e.bg }}
                  >
                    <Image
                      src={mascotImage(id) || "/placeholder.svg"}
                      alt={`${e.mascotName}, da emoção ${e.label}`}
                      width={120}
                      height={120}
                      className="h-16 w-16 object-contain drop-shadow"
                    />
                  </span>
                  <span className="mt-2 text-center text-xs font-bold text-foreground">{e.label}</span>
                </a>
              )
            })}
          </div>
        </Reveal>

        {/* Módulos com capítulos */}
        <div className="mt-12 space-y-12">
          {emotionModules.map((mod) => (
            <div key={mod.id}>
              <Reveal>
                <div className="rounded-2xl bg-primary px-6 py-5 text-primary-foreground">
                  <h3 className="font-heading text-xl font-bold">{mod.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/85">{mod.description}</p>
                </div>
              </Reveal>
              <div className="mt-2">
                {mod.emotionIds.map((id) => {
                  const data = emotionById[id]
                  if (!data) return null
                  return <EmotionChapter key={id} data={data} number={numberOf(id)} />
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

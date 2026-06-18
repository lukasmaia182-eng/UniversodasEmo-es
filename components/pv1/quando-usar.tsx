import { Moon, MessageCircleHeart, Frown, School, Users, Sparkles, HeartCrack } from "lucide-react"
import { Reveal } from "@/components/reveal"

const moments = [
  { icon: HeartCrack, label: "Depois de uma birra" },
  { icon: Moon, label: "Antes de dormir" },
  { icon: MessageCircleHeart, label: "Após uma bronca ou conversa difícil" },
  { icon: Frown, label: "Quando a criança estiver triste, irritada ou com medo" },
  { icon: School, label: "Em atividades escolares ou terapêuticas" },
  { icon: Users, label: "Em momentos de conversa em família" },
  { icon: Sparkles, label: "Durante fases de mudança, adaptação ou insegurança" },
]

export function QuandoUsarPv1() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Quando usar o Universo das Emoções™?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Você pode usar o kit em momentos simples da rotina, principalmente quando a criança ainda não consegue
              explicar o que está sentindo.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <m.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-semibold leading-snug text-foreground">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

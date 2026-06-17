import Image from "next/image"
import {
  wheelSegments,
  faceCards,
  trafficSteps,
  deckCards,
  theaterScenes,
  theaterPuppets,
  senseCards,
  type MaterialKind,
} from "@/lib/materials-content"

function Sheet({
  title,
  hint,
  children,
}: {
  title: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm print:break-before-page print:rounded-none print:border-0 print:p-0 print:shadow-none sm:p-8">
      <div className="mb-6 text-center">
        <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
        {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
      </div>
      {children}
    </div>
  )
}

function CutLabel() {
  return (
    <p className="mt-6 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground print:mt-4">
      Recorte pelas linhas pontilhadas
    </p>
  )
}

/* ---------- Roda das Emoções ---------- */
function Wheel() {
  const n = wheelSegments.length
  const step = 360 / n
  const stops = wheelSegments
    .map((s, i) => `${s.color} ${i * step}deg ${(i + 1) * step}deg`)
    .join(", ")

  return (
    <Sheet title="Roda das Emoções" hint="Recorte a roda e a seta. Prenda a seta no centro com um colchete.">
      <div className="flex flex-col items-center gap-8">
        <div
          className="relative aspect-square w-full max-w-[420px] rounded-full border-4 border-foreground/80"
          style={{ background: `conic-gradient(${stops})` }}
        >
          {wheelSegments.map((s, i) => {
            const theta = ((i + 0.5) * step * Math.PI) / 180
            const radius = 36 // % do raio onde o rótulo fica
            const left = 50 + radius * Math.sin(theta)
            const top = 50 - radius * Math.cos(theta)
            return (
              <span
                key={s.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white drop-shadow"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                {s.label}
              </span>
            )
          })}
          <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-foreground/80 bg-card" />
        </div>

        <div className="flex flex-col items-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Seta para recortar</p>
          <div
            className="h-0 w-0 border-y-[18px] border-l-[64px] border-y-transparent"
            style={{ borderLeftColor: "var(--foreground, #1f2430)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </Sheet>
  )
}

/* ---------- Jogo das Caras ---------- */
function Faces() {
  return (
    <Sheet title="Cartas das Expressões" hint="Recorte as cartas e use para imitar e adivinhar as emoções.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {faceCards.map((c) => (
          <div
            key={c.label}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-foreground/40 p-3 text-center"
          >
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl sm:h-28 sm:w-28"
              style={{ backgroundColor: `${c.color}1a` }}
            >
              <Image
                src={c.image || "/placeholder.svg"}
                alt={`Mascote da emoção ${c.label}`}
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="mt-2 font-heading text-base font-bold text-foreground">{c.label}</span>
            <span className="mt-0.5 text-xs leading-snug text-muted-foreground">{c.hint}</span>
          </div>
        ))}
      </div>
      <CutLabel />
    </Sheet>
  )
}

/* ---------- Semáforo Emocional ---------- */
function Traffic() {
  return (
    <Sheet title="Semáforo Emocional" hint="Cole num lugar visível e siga as três cores quando uma emoção forte aparecer.">
      <div className="mx-auto flex max-w-md flex-col items-stretch gap-4">
        {trafficSteps.map((s) => (
          <div key={s.name} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-4">
            <span
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
              style={{ backgroundColor: s.color }}
            >
              {s.title}
            </span>
            <div>
              <p className="font-heading text-base font-bold text-foreground">
                {s.name} · {s.title}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  )
}

/* ---------- Baralho Divertidamente ---------- */
function Deck() {
  return (
    <Sheet title="Baralho das Emoções" hint="Imprima duas vezes para formar os pares do jogo da memória.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {deckCards.map((c) => (
          <div
            key={c.label}
            className="flex aspect-[3/4] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-foreground/40 p-3 text-center"
            style={{ backgroundColor: `${c.color}1a` }}
          >
            <div className="flex h-20 w-20 items-center justify-center">
              <Image
                src={c.image || "/placeholder.svg"}
                alt={`Mascote ${c.mascot} da emoção ${c.label}`}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="mt-2 font-heading text-sm font-bold text-foreground">{c.label}</span>
            <span className="text-xs text-muted-foreground">{c.mascot}</span>
          </div>
        ))}
      </div>
      <CutLabel />
    </Sheet>
  )
}

/* ---------- Teatro das Expressões ---------- */
function Theater() {
  return (
    <>
      <Sheet title="Fantoches para recortar" hint="Recorte e cole cada mascote em um palito de picolé.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {theaterPuppets.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center rounded-2xl border-2 border-dashed border-foreground/40 p-4 text-center"
            >
              <Image
                src={p.image || "/placeholder.svg"}
                alt={`Fantoche do mascote ${p.name}`}
                width={140}
                height={140}
                className="h-24 w-24 object-contain"
              />
              <span className="mt-2 font-heading text-sm font-bold text-foreground">{p.name}</span>
              <span className="text-xs text-muted-foreground">{p.emotion}</span>
            </div>
          ))}
        </div>
        <CutLabel />
      </Sheet>

      <Sheet title="Cenas para encenar" hint="Sorteiem uma cena e deixem a criança criar o final da história.">
        <ol className="mx-auto max-w-xl list-decimal space-y-3 pl-5">
          {theaterScenes.map((s) => (
            <li key={s} className="text-sm leading-relaxed text-foreground/80">
              {s}
            </li>
          ))}
        </ol>
      </Sheet>
    </>
  )
}

/* ---------- Jogo das Sensações ---------- */
function Senses() {
  return (
    <>
      <Sheet title="Mapa do Corpo" hint="Aponte no mapa onde você sente cada sensação.">
        <div className="flex justify-center">
          <Image
            src="/mascote-curiosidade.png"
            alt="Mascote para marcar onde as emoções moram no corpo"
            width={260}
            height={320}
            className="h-auto w-full max-w-[260px] object-contain"
          />
        </div>
      </Sheet>

      <Sheet title="Cartas de Sensações" hint="Recorte e leia uma carta por vez, apontando o lugar do corpo.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {senseCards.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-foreground/40 p-4 text-center"
            >
              <span className="font-heading text-sm font-bold text-foreground">{c.label}</span>
              <span className="mt-1 text-xs text-muted-foreground">{c.body}</span>
            </div>
          ))}
        </div>
        <CutLabel />
      </Sheet>
    </>
  )
}

export function MaterialPrintable({ kind }: { kind: MaterialKind }) {
  switch (kind) {
    case "wheel":
      return <Wheel />
    case "faces":
      return <Faces />
    case "traffic":
      return <Traffic />
    case "deck":
      return <Deck />
    case "theater":
      return <Theater />
    case "senses":
      return <Senses />
    default:
      return null
  }
}

import {
  Search,
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  ArrowLeft,
  Phone,
  Video,
  CheckCheck,
  Heart,
  Send,
  Camera,
  Mic,
  Plus,
  Wifi,
  BatteryFull,
  SignalHigh,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

/* Avatar com iniciais ou foto de perfil */
function Avatar({ name, className = "", src }: { name: string; className?: string; src?: string }) {
  const initials = name
    .replace(/[^\p{L}\s]/gu, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
  if (src) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={`Foto de ${name}`}
        className={`shrink-0 rounded-full object-cover ${className}`}
      />
    )
  }
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary ${className}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

/* Reações coloridas estilo Facebook */
function FbReactions() {
  return (
    <span className="flex items-center -space-x-1" aria-hidden="true">
      <span className="flex size-[18px] items-center justify-center rounded-full bg-[#1877f2] ring-2 ring-card">
        <ThumbsUp className="size-2.5 text-white" fill="currentColor" />
      </span>
      <span className="flex size-[18px] items-center justify-center rounded-full bg-[#f33e58] ring-2 ring-card">
        <Heart className="size-2.5 text-white" fill="currentColor" />
      </span>
    </span>
  )
}

/* Card 1 e 3: post do Facebook (apenas texto) */
function FacebookPost({
  name,
  time,
  text,
  reactions,
  comments,
  avatar,
}: {
  name: string
  time: string
  text: string
  reactions: string
  comments: string
  avatar?: string
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-xl ring-1 ring-border">
      {/* topo azul do Facebook */}
      <div className="flex items-center justify-between bg-[#1877f2] px-3 py-2">
        <span className="font-heading text-lg font-bold tracking-tight text-white">facebook</span>
        <div className="flex items-center gap-2 text-white">
          <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
            <Search className="size-3.5" aria-hidden="true" />
          </span>
          <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="size-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-center gap-2">
          <Avatar name={name} src={avatar} className="size-9" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{name}</p>
            <p className="text-[11px] text-muted-foreground">{time} · Público</p>
          </div>
          <MoreHorizontal className="ml-auto size-4 text-muted-foreground" aria-hidden="true" />
        </div>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-foreground">{text}</p>
        <div className="mt-3 flex items-center justify-between border-b border-border pb-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <FbReactions />
            {reactions}
          </span>
          <span>{comments}</span>
        </div>
        <div className="mt-1 flex items-center justify-around pt-1 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1">
            <ThumbsUp className="size-4" aria-hidden="true" /> Curtir
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="size-4" aria-hidden="true" /> Comentar
          </span>
          <span className="flex items-center gap-1">
            <Share2 className="size-4" aria-hidden="true" /> Compartilhar
          </span>
        </div>
      </div>
    </div>
  )
}

/* Card 2: conversa de WhatsApp */
function WhatsAppChat({
  name,
  status,
  messages,
}: {
  name: string
  status: string
  messages: { side: "in" | "out"; text: string; time: string }[]
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
      {/* barra de status do celular */}
      <div className="flex items-center justify-between bg-[#075e54] px-3 pt-2 text-[10px] font-semibold text-white">
        <span>14:08</span>
        <div className="flex items-center gap-1">
          <SignalHigh className="size-3" aria-hidden="true" />
          <Wifi className="size-3" aria-hidden="true" />
          <BatteryFull className="size-3.5" aria-hidden="true" />
        </div>
      </div>
      {/* header verde */}
      <div className="flex items-center gap-2 bg-[#075e54] px-3 pb-2 pt-1 text-white">
        <ArrowLeft className="size-4" aria-hidden="true" />
        <Avatar name={name} className="size-8 bg-white/20 text-white" />
        <div className="min-w-0 leading-tight">
          <p className="truncate text-sm font-semibold">{name}</p>
          <p className="text-[10px] text-white/80">{status}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Video className="size-4" aria-hidden="true" />
          <Phone className="size-4" aria-hidden="true" />
        </div>
      </div>
      {/* mensagens */}
      <div className="flex flex-1 flex-col gap-2 bg-[#e5ddd5] p-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`relative max-w-[85%] rounded-lg px-2.5 py-1.5 text-[13px] leading-snug shadow-sm ${
              m.side === "out"
                ? "ml-auto rounded-tr-none bg-[#dcf8c6] text-foreground"
                : "mr-auto rounded-tl-none bg-card text-foreground"
            }`}
          >
            <p>{m.text}</p>
            <span className="mt-0.5 flex items-center justify-end gap-0.5 text-[10px] text-muted-foreground">
              {m.time}
              {m.side === "out" && <CheckCheck className="size-3 text-[#34b7f1]" aria-hidden="true" />}
            </span>
          </div>
        ))}
      </div>
      {/* barra de digitar */}
      <div className="flex items-center gap-2 bg-[#e5ddd5] px-3 pb-3 pt-1">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-card px-3 py-1.5 text-[11px] text-muted-foreground">
          <Plus className="size-3.5" aria-hidden="true" />
          <span>Mensagem</span>
          <Camera className="ml-auto size-3.5" aria-hidden="true" />
        </div>
        <span className="flex size-8 items-center justify-center rounded-full bg-[#075e54] text-white">
          <Mic className="size-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  )
}

/* Card 4: story do Instagram (fundo colorido, sem foto) */
function InstagramStory({
  name,
  time,
  overlays,
}: {
  name: string
  time: string
  overlays: string[]
}) {
  return (
    <div className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-coral to-sunny shadow-xl ring-1 ring-border">
      {/* barra de progresso */}
      <div className="relative z-10 px-3 pt-3">
        <div className="flex gap-1">
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/40">
            <div className="h-full w-full rounded-full bg-white" />
          </div>
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/40">
            <div className="h-full w-1/2 rounded-full bg-white" />
          </div>
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/40" />
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
            <Avatar name={name} className="size-7 border-2 border-card bg-white/30 text-white" />
          </span>
          <span className="text-xs font-semibold text-white">{name}</span>
          <span className="text-xs text-white/80">{time}</span>
          <MoreHorizontal className="ml-auto size-4 text-white" aria-hidden="true" />
        </div>
      </div>
      {/* textos sobrepostos */}
      <div className="relative z-10 my-auto flex flex-col items-center gap-3 px-4 py-8 text-center">
        {overlays.map((o, i) => (
          <p
            key={i}
            className="rounded-md bg-card/95 px-3 py-2 text-sm font-bold leading-snug text-foreground shadow-md"
          >
            {o}
          </p>
        ))}
      </div>
      {/* rodapé do story */}
      <div className="relative z-10 mt-auto flex items-center gap-2 px-3 py-3">
        <div className="flex-1 rounded-full border border-white/60 px-3 py-1.5 text-xs text-white/80">
          Enviar mensagem
        </div>
        <Heart className="size-5 text-white" aria-hidden="true" />
        <Send className="size-5 text-white" aria-hidden="true" />
      </div>
    </div>
  )
}

export function SocialProof() {
  return (
    <section className="bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-coral">
              <Heart className="size-3.5" fill="currentColor" aria-hidden="true" />
              Prova social
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Resultados <span className="italic text-coral">reais</span> de quem já levou
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Mensagens e prints enviados pelas próprias mães. Famílias de verdade, emoções
              transformadas de verdade.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <FacebookPost
              name="Juliana Ferreira"
              avatar="/perfil-juliana.png"
              time="14 h"
              text="Gente, preciso contar! Minha filha de 5 anos fazia birra por tudo e não sabia explicar o que sentia. Em 2 semanas usando o Universo das Emoções ela já fala 'mamãe, estou frustrada'. Mudou nossa casa! Vale cada centavo."
              reactions="Você e 234 outras pessoas"
              comments="47 comentários"
            />
          </Reveal>

          <Reveal delay={0.05}>
            <WhatsAppChat
              name="Cleide 💛"
              status="online"
              messages={[
                { side: "in", text: "Amiga, comprei aquele material das emoções que você indicou!", time: "14:08" },
                { side: "out", text: "Ahh que bom! E aí, o que achou?", time: "14:08" },
                {
                  side: "in",
                  text: "Meu filho amou os personagens! Hoje ele pediu pra fazer a atividade do medo comigo",
                  time: "14:09",
                },
                { side: "in", text: "Paguei só R$19,90 e já valeu DEMAIS, sério 🙏", time: "14:09" },
                { side: "out", text: "Que lindo! Manda foto depois 🥹", time: "14:10" },
              ]}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <FacebookPost
              name="Patrícia Souza"
              avatar="/perfil-patricia.png"
              time="2 d"
              text="Mãe de 2, rotina corrida... achei que não ia ter tempo. Mas são 10 minutinhos por dia e meus filhos PEDEM! As historinhas e o espaço pra escrever são perfeitos. Recomendo de olhos fechados."
              reactions="Você e 891 outras pessoas"
              comments="156 comentários"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <InstagramStory
              name="ana.maternar"
              time="3 h"
              overlays={[
                "PRIMEIRA semana usando o Universo das Emoções",
                "Minha filha já nomeia 6 emoções sozinha!",
              ]}
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Depoimentos reais enviados por clientes. Resultados podem variar de família para família.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

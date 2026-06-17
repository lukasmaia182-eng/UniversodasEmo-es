import Image from "next/image"
import {
  Brain,
  HeartHandshake,
  Smile,
  ShieldCheck,
  Sparkles,
  Clock,
  Download,
  BadgeCheck,
  AlarmClock,
  ChevronRight,
  AlertTriangle,
  BookOpen,
  Gamepad2,
  Pencil,
  Gift,
  Users,
  Palette,
  CreditCard,
  Landmark,
} from "lucide-react"

const benefits = [
  { icon: Brain, lead: "MELHORA O FOCO", rest: "E A ATENÇÃO", color: "#e11d6b" },
  { icon: HeartHandshake, lead: "DESENVOLVE A EMPATIA", rest: "E A COMPAIXÃO", color: "#16a34a" },
  { icon: Smile, lead: "LIDA MELHOR", rest: "COM AS EMOÇÕES", color: "#ea580c" },
  { icon: ShieldCheck, lead: "FORTALECE A", rest: "AUTOESTIMA", color: "#2563eb" },
  { icon: Sparkles, lead: "REDUZ BIRRAS", rest: "E CRISES", color: "#7c3aed" },
]

const includes = [
  { icon: BookOpen, title: "+70 EMOÇÕES", sub: "ILUSTRADAS" },
  { icon: Pencil, title: "ATIVIDADES", sub: "PARA IMPRIMIR" },
  { icon: Users, title: "+50", sub: "PERSONAGENS" },
  { icon: Gamepad2, title: "JOGOS E", sub: "DESAFIOS" },
  { icon: Palette, title: "EXERCÍCIOS", sub: "PARA COLORIR" },
  { icon: Gift, title: "BÔNUS:", sub: "GUIA DOS PAIS" },
]

const trust = [
  { icon: ShieldCheck, title: "7 DIAS DE GARANTIA", sub: "Satisfação ou seu dinheiro de volta", color: "#7c3aed" },
  { icon: BadgeCheck, title: "100% SEGURO", sub: "Seus dados são protegidos", color: "#16a34a" },
  { icon: Download, title: "ACESSO IMEDIATO", sub: "Receba logo após o pagamento", color: "#e11d6b" },
  { icon: Smile, title: "FEITO EM PORTUGUÊS", sub: "Ideal para a educação em casa", color: "#2563eb" },
]

function PixMark({ size = 38 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="rotate-45 rounded-[6px] bg-[#32BCAD]"
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
      <span className="text-4xl font-extrabold lowercase text-[#32BCAD]">pix</span>
    </div>
  )
}

export default function CriativoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-300 p-6">
      <div
        className="relative overflow-hidden font-sans"
        style={{ width: 1080, height: 1080, backgroundColor: "#f4f1ea" }}
      >
        {/* Foto topo direito */}
        <div className="absolute right-0 top-0 h-[440px] w-[600px]">
          <Image src="/criancas-criativo.png" alt="" fill className="object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg,#f4f1ea 0%, rgba(244,241,234,0) 38%)" }}
          />
        </div>

        {/* Banner roxo topo */}
        <div className="absolute left-8 top-7 max-w-[470px]">
          <div className="inline-block -rotate-1 rounded-md bg-[#3b0a6b] px-5 py-2 shadow-lg">
            <p className="text-2xl font-extrabold leading-tight text-white">
              OS PRIMEIROS ANOS <span className="text-[#ffd400]">MOLDAM O FUTURO</span>
            </p>
          </div>
        </div>

        {/* Headline */}
        <div className="absolute left-8 top-[150px] max-w-[490px]">
          <h1 className="font-heading text-[42px] font-black leading-[0.98] tracking-tight text-[#1b2440]">
            DESPERTE A
            <br />
            <span className="text-[#7c3aed]">INTELIGÊNCIA</span>
            <br />
            <span className="text-[#7c3aed]">EMOCIONAL</span>
            <br />
            DO SEU FILHO!
          </h1>
          <div className="mt-3 inline-block rotate-[-1deg] rounded-md bg-[#2563eb] px-4 py-1.5 shadow">
            <p className="text-xl font-extrabold text-white">EM CASA, SEM ESTRESSE</p>
          </div>
        </div>

        {/* Logo topo direito */}
        <div className="absolute right-7 top-6 rounded-2xl bg-white/95 px-5 py-3 text-right shadow-lg">
          <p className="font-heading text-3xl font-black leading-none text-[#7c3aed]">UNIVERSO</p>
          <p className="font-heading text-xl font-black leading-tight text-[#e11d6b]">DAS EMOÇÕES</p>
          <p className="text-[11px] font-bold tracking-wide text-[#1b2440]">COLEÇÃO INFANTIL</p>
        </div>

        {/* Badge 15 minutos */}
        <div className="absolute right-7 top-[150px] flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#ffd400] text-center shadow-lg">
          <Clock className="mb-0.5 h-6 w-6 text-[#1b2440]" />
          <span className="text-3xl font-black leading-none text-[#1b2440]">15</span>
          <span className="text-[11px] font-extrabold leading-tight text-[#1b2440]">MINUTOS POR DIA</span>
        </div>

        {/* Faixa etária */}
        <div className="absolute right-7 top-[300px] rounded-xl bg-[#3b0a6b] px-4 py-2 text-center shadow">
          <p className="text-sm font-extrabold leading-tight text-white">
            PARA CRIANÇAS
            <br />
            DE 2 A 10 ANOS
          </p>
        </div>

        {/* Coluna de benefícios */}
        <div className="absolute left-7 top-[452px] flex w-[380px] flex-col gap-2">
          {benefits.map((b) => (
            <div key={b.lead} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-2 shadow-md">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: b.color }}
              >
                <b.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-[15px] font-extrabold leading-tight text-[#1b2440]">
                <span style={{ color: b.color }}>{b.lead}</span> {b.rest}
              </p>
            </div>
          ))}
        </div>

        {/* Bloco de preço (centro) */}
        <div className="absolute left-[410px] top-[450px] w-[280px]">
          <div className="mb-1 rotate-[-1deg] rounded-md bg-[#e11d6b] px-3 py-1 text-center shadow">
            <p className="text-sm font-extrabold text-white">OFERTA POR TEMPO LIMITADO!</p>
          </div>
          <div className="rounded-2xl bg-[#ffd400] p-3 shadow-lg">
            <div className="flex items-center justify-center gap-2">
              <p className="text-center font-heading text-2xl font-black leading-none text-[#1b2440]">
                PREÇO
                <br />
                ESPECIAL!
              </p>
              <AlarmClock className="h-9 w-9 text-[#e11d6b]" />
            </div>
            <div className="mt-2 rounded-xl bg-[#1b2440] px-3 py-2 text-center">
              <p className="text-sm font-bold text-white/80">DE:</p>
              <p className="relative inline-block text-3xl font-black text-white">
                R$ 97,00
                <span className="absolute left-0 top-1/2 h-1 w-full -rotate-6 bg-[#e11d6b]" />
              </p>
            </div>
            <div className="mt-2 rounded-xl bg-white px-3 py-2 text-center">
              <p className="text-sm font-extrabold text-[#1b2440]">POR APENAS:</p>
              <p className="font-heading leading-none text-[#7c3aed]">
                <span className="align-top text-2xl font-black">R$</span>
                <span className="text-6xl font-black">19</span>
                <span className="text-3xl font-black">,90</span>
              </p>
            </div>
            <p className="mt-2 text-center text-xs font-extrabold text-[#1b2440]">
              PAGAMENTO ÚNICO · ACESSO IMEDIATO
            </p>
          </div>
        </div>

        {/* Bloco de pagamento (direita) - PIX em destaque */}
        <div className="absolute left-[710px] top-[450px] w-[340px] rounded-2xl bg-[#3b0a6b] p-4 shadow-xl">
          <p className="text-center text-base font-extrabold leading-tight text-white">
            PAGUE FÁCIL, RÁPIDO E SEGURO COM
          </p>

          {/* PIX logo grande e dominante */}
          <div className="mt-2 flex items-center justify-center rounded-xl border-4 border-[#ffd400] bg-white py-4">
            <PixMark size={56} />
          </div>

          <p className="mt-2 text-center text-sm font-extrabold leading-tight text-[#ffd400]">
            PAGUE COM PIX E RECEBA
            <br />
            ACESSO IMEDIATO
          </p>

          {/* Passos */}
          <div className="mt-2.5 flex flex-col gap-1.5">
            {[
              "Escaneie o QR Code do PIX",
              "Pague em segundos pelo app",
              "Receba o acesso na hora!",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e11d6b] text-sm font-black text-white">
                  {i + 1}
                </span>
                <p className="text-[13px] font-bold leading-tight text-white">{step}</p>
              </div>
            ))}
          </div>

          {/* Também aceitamos */}
          <div className="mt-2.5 flex items-center justify-center gap-3 rounded-lg bg-white/10 py-1.5">
            <span className="text-[11px] font-bold text-white/80">Também aceitamos:</span>
            <span className="flex items-center gap-1 text-[11px] font-extrabold text-white">
              <CreditCard className="h-4 w-4" /> Cartão
            </span>
            <span className="flex items-center gap-1 text-[11px] font-extrabold text-white">
              <Landmark className="h-4 w-4" /> Boleto
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#16a34a] py-1.5">
            <ShieldCheck className="h-5 w-5 text-white" />
            <span className="text-sm font-extrabold text-white">PAGAMENTO 100% SEGURO</span>
          </div>
        </div>

        {/* Inclui tudo */}
        <div className="absolute left-7 top-[768px] w-[1026px]">
          <div className="mx-auto mb-2 w-fit rounded-md bg-[#2563eb] px-5 py-1.5 shadow">
            <p className="text-lg font-extrabold text-white">TUDO O QUE VOCÊ RECEBE!</p>
          </div>
          <div className="grid grid-cols-6 gap-2 rounded-2xl bg-white p-3 shadow-md">
            {includes.map((it) => (
              <div key={it.title} className="flex flex-col items-center text-center">
                <it.icon className="mb-1 h-9 w-9 text-[#7c3aed]" />
                <p className="text-[12px] font-black leading-tight text-[#1b2440]">{it.title}</p>
                <p className="text-[11px] font-bold leading-tight text-[#64708a]">{it.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selos de confiança */}
        <div className="absolute left-7 top-[918px] grid w-[1026px] grid-cols-4 gap-3">
          {trust.map((t) => (
            <div key={t.title} className="flex items-center gap-2">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: t.color }}
              >
                <t.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-[12px] font-black leading-tight text-[#1b2440]">{t.title}</p>
                <p className="text-[10px] font-semibold leading-tight text-[#64708a]">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Barra inferior */}
        <div className="absolute bottom-0 left-0 flex h-[74px] w-full items-center">
          <div className="flex h-full flex-1 items-center gap-2 bg-[#e11d6b] pl-7 pr-4">
            <AlertTriangle className="h-9 w-9 shrink-0 text-[#ffd400]" />
            <div>
              <p className="text-lg font-black leading-tight text-white">ESSA OFERTA ACABA HOJE!</p>
              <p className="text-xs font-bold leading-tight text-[#ffd400]">
                O PREÇO VOLTA PARA R$ 97,00
              </p>
            </div>
          </div>
          <div className="flex h-full items-center gap-2 bg-[#ffd400] px-7">
            <p className="font-heading text-xl font-black text-[#1b2440]">QUERO ACESSO IMEDIATO!</p>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1b2440]">
              <ChevronRight className="h-6 w-6 text-[#ffd400]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import { Download, ShieldCheck, BadgeCheck, Gift, ShoppingCart, Scissors, Brain, Clock, Users } from "lucide-react"

const tabs = [
  { label: "ALEGRIA", color: "#f5b700" },
  { label: "CORAGEM", color: "#f0654c" },
  { label: "CALMA", color: "#3bb78f" },
  { label: "CURIOSIDADE", color: "#8b6cd9" },
  { label: "CARINHO", color: "#e26fa3" },
  { label: "RAIVA", color: "#e23b3b" },
  { label: "MEDO", color: "#5b6cc9" },
  { label: "TRISTEZA", color: "#4aa3d6" },
]

const features = [
  { icon: Scissors, title: "INTERATIVO", text: "A criança escreve, colore e aprende brincando!" },
  { icon: Brain, title: "FIXAÇÃO", text: "Atividades que reforçam cada emoção." },
  { icon: Clock, title: "PRÁTICO", text: "Material pronto para usar em casa ou na escola." },
  { icon: Users, title: "IDEAL PARA", text: "Pais, professores e psicólogos." },
]

const trust = [
  { icon: Download, title: "ACESSO IMEDIATO", text: "Receba na hora após o pagamento." },
  { icon: ShieldCheck, title: "COMPRA SEGURA", text: "Ambiente 100% protegido." },
  { icon: BadgeCheck, title: "7 DIAS DE GARANTIA", text: "Satisfação ou dinheiro de volta." },
  { icon: Gift, title: "BÔNUS EXCLUSIVOS", text: "Atividades extras para imprimir." },
]

export default function BannerPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-800 p-6">
      <div
        id="banner"
        className="relative overflow-hidden font-sans text-white"
        style={{
          width: 1280,
          height: 640,
          background:
            "radial-gradient(circle at 70% 20%, #5b2a9e 0%, #3b1c6e 45%, #241048 100%)",
        }}
      >
        {/* estrelas decorativas */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: i % 5 === 0 ? 4 : 2,
                height: i % 5 === 0 ? 4 : 2,
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
                opacity: 0.5 + ((i * 7) % 5) / 10,
              }}
            />
          ))}
        </div>

        {/* TOPO ESQUERDA */}
        <div className="absolute left-8 top-7 w-[500px]">
          <div className="inline-block rounded-md bg-[#f5b700] px-4 py-1.5 text-[15px] font-extrabold tracking-wide text-[#3b1c6e]">
            ENSINE DE FORMA SIMPLES, VISUAL E DIVERTIDA!
          </div>

          <h1 className="mt-3 font-heading text-[78px] font-extrabold uppercase leading-[0.82] tracking-tight drop-shadow-lg">
            Universo
          </h1>
          <div className="mt-1 inline-block -rotate-1 rounded-lg bg-[#e26fa3] px-3 py-1">
            <span className="font-heading text-[58px] font-extrabold uppercase leading-none text-[#f5b700]">
              das Emoções
            </span>
          </div>
          <p className="mt-3 text-[20px] font-extrabold uppercase italic text-[#ffd166]">
            Aprender a sentir ficou muito mais fácil!
          </p>

          {/* features */}
          <div className="mt-6 grid grid-cols-4 gap-3 pr-2">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#8b6cd9]">
                  <f.icon className="h-6 w-6 text-white" strokeWidth={2.4} />
                </div>
                <p className="mt-1.5 text-[12px] font-extrabold text-[#ffd166]">{f.title}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-white/85">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CENTRO: livro + abas */}
        <div className="absolute left-[548px] top-[70px] flex items-start">
          <div className="relative h-[420px] w-[330px] rounded-2xl bg-white shadow-2xl">
            <div className="absolute inset-2 rounded-xl bg-gradient-to-b from-[#efe7ff] to-white p-4">
              <p className="text-center font-heading text-[26px] font-extrabold uppercase leading-none text-[#3b1c6e]">
                Universo
              </p>
              <p className="text-center font-heading text-[18px] font-extrabold uppercase leading-tight text-[#8b6cd9]">
                das Emoções
              </p>
              <div className="mt-3 flex justify-center gap-1">
                <Image src="/mascote-alegria.png" alt="Lumi" width={70} height={70} className="h-16 w-16 object-contain" />
                <Image src="/mascote-curiosidade.png" alt="Pipo" width={70} height={70} className="h-16 w-16 object-contain" />
                <Image src="/mascote-carinho.png" alt="Mel" width={70} height={70} className="h-16 w-16 object-contain" />
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <Image src="/mascote-calma.png" alt="Sereno" width={64} height={64} className="h-14 w-14 object-contain" />
                <Image src="/mascote-coragem.png" alt="Viko" width={64} height={64} className="h-14 w-14 object-contain" />
                <Image src="/mascote-surpresa.png" alt="Zazá" width={64} height={64} className="h-14 w-14 object-contain" />
              </div>
              <div className="mt-3 rounded-lg bg-[#3bb78f] px-2 py-1.5 text-center text-[11px] font-bold leading-tight text-white">
                Material completo · Mais de 50 emoções ilustradas
              </div>
            </div>
          </div>
          {/* abas */}
          <div className="ml-1 mt-4 flex flex-col gap-1.5">
            {tabs.map((t) => (
              <div
                key={t.label}
                className="rounded-r-md px-2 py-1 text-[10px] font-extrabold text-white shadow"
                style={{ backgroundColor: t.color }}
              >
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* DIREITA: foto mãe e filha */}
        <div className="absolute right-0 top-0 h-[300px] w-[330px] overflow-hidden">
          <Image
            src="/cena-conversa.png"
            alt="Mãe e filha lendo juntas"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, #241048 0%, transparent 30%)" }}
          />
        </div>

        {/* bloco de preço */}
        <div className="absolute right-7 top-[300px] w-[300px] text-center">
          <div className="mx-auto -rotate-2 rounded-md bg-[#e2186b] px-5 py-1.5 text-[20px] font-extrabold uppercase italic shadow-lg">
            Oferta Especial!
          </div>
          <p className="mt-2 text-[16px] font-bold">
            De <span className="line-through opacity-80">R$ 97,00</span> por apenas
          </p>
          <div className="mt-0.5 flex items-end justify-center leading-none">
            <span className="mb-2 font-heading text-[34px] font-extrabold text-[#f5b700]">R$</span>
            <span className="font-heading text-[92px] font-extrabold text-[#f5b700] drop-shadow">19</span>
            <span className="mb-3 font-heading text-[34px] font-extrabold text-[#f5b700]">,90</span>
          </div>
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-[#ffd166]">
            Pagamento único!
          </p>
        </div>

        {/* BARRA INFERIOR */}
        <div className="absolute bottom-5 left-8 right-8 flex items-center gap-4 rounded-2xl bg-[#1c0d3a]/80 px-5 py-3">
          <div className="grid flex-1 grid-cols-4 gap-3">
            {trust.map((t) => (
              <div key={t.title} className="flex items-center gap-2">
                <t.icon className="h-7 w-7 shrink-0 text-[#3bb78f]" strokeWidth={2.2} />
                <div className="leading-tight">
                  <p className="text-[11px] font-extrabold text-[#ffd166]">{t.title}</p>
                  <p className="text-[9px] text-white/80">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#39c24a] to-[#1f9e30] px-5 py-3 shadow-lg">
            <ShoppingCart className="h-7 w-7" strokeWidth={2.4} />
            <div className="leading-none">
              <p className="font-heading text-[22px] font-extrabold uppercase">Quero o meu agora!</p>
              <p className="mt-0.5 text-[10px] font-bold text-white/90">Aprender a sentir nunca foi tão divertido!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

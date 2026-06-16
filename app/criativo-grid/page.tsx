import Image from "next/image"
import { Sparkles } from "lucide-react"

const grid = [
  { src: "/mascote-tristeza.png", emotion: "Tristeza", bg: "#acc4e6" },
  { src: "/mascote-alegria.png", emotion: "Alegria", bg: "#f6d96b" },
  { src: "/mascote-medo.png", emotion: "Medo", bg: "#b9b6dd" },
  { src: "/mascote-surpresa.png", emotion: "Surpresa", bg: "#8fd6cc" },
  { src: "/mascote-raiva.png", emotion: "Raiva", bg: "#ec8a7a" },
  { src: "/mascote-calma.png", emotion: "Calma", bg: "#a9d8bf" },
  { src: "/mascote-curiosidade.png", emotion: "Curiosidade", bg: "#c4b6e0" },
  { src: "/mascote-carinho.png", emotion: "Carinho", bg: "#f0b6c8" },
  { src: "/mascote-coragem.png", emotion: "Coragem", bg: "#f0a878" },
  { src: "/mascote-gratidao.png", emotion: "Gratidão", bg: "#e8c79a" },
  { src: "/mascote-vergonha.png", emotion: "Vergonha", bg: "#e9c0ad" },
  { src: "/mascote-orgulho.png", emotion: "Orgulho", bg: "#8fb3d9" },
]

export default function CriativoGridPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-200 p-6">
      <div
        className="relative grid grid-cols-3 grid-rows-4 overflow-hidden"
        style={{ width: 1080, height: 1080 }}
      >
        {grid.map((item) => (
          <div
            key={item.emotion}
            className="relative flex items-end justify-center overflow-hidden"
            style={{ backgroundColor: item.bg }}
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt={`Mascote ${item.emotion}`}
              width={400}
              height={400}
              className="h-full w-full object-cover mix-blend-multiply"
            />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/35 px-3 py-0.5 text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur-sm">
              {item.emotion}
            </span>
          </div>
        ))}

        {/* Selo da marca no centro */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-2xl ring-4 ring-[#6d28d9]/20">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6d28d9] text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-heading text-2xl font-black leading-none text-[#1b2440]">
              Universo das <span className="text-[#6d28d9]">Emoções</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

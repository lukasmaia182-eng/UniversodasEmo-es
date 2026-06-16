import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Universo das Emoções — Seu Acesso",
  robots: { index: false, follow: false },
}

const ACCESS_URL = "https://universo-das-emocoes.vercel.app/seuacesso"

const mascots = [
  { src: "/mascotes/alegria.png", alt: "Mascote da Alegria" },
  { src: "/mascotes/amor.png", alt: "Mascote do Amor" },
  { src: "/mascotes/coragem.png", alt: "Mascote da Coragem" },
  { src: "/mascotes/calma.png", alt: "Mascote da Calma" },
]

export default function AcessoPdfPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        <div className="flex items-end justify-center gap-2">
          {mascots.map((m) => (
            <div key={m.src} className="relative h-20 w-20 sm:h-24 sm:w-24">
              <Image src={m.src || "/placeholder.svg"} alt={m.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
          Compra confirmada
        </span>

        <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-tight text-foreground">
          Bem-vindo ao <span className="text-primary">Universo das Emoções</span>
        </h1>

        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Obrigado pela sua compra! Seu material digital com 72 emoções
          ilustradas, linguagem simples e atividades em família já está liberado.
          Clique no botão abaixo para acessar todo o conteúdo.
        </p>

        <a
          href={ACCESS_URL}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-10 py-5 text-lg font-extrabold text-primary-foreground shadow-lg"
        >
          ACESSAR MEU CONTEÚDO
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          Ou copie e cole este link no seu navegador:
        </p>
        <p className="mt-1 break-all text-sm font-semibold text-primary">{ACCESS_URL}</p>

        <p className="mt-10 text-xs text-muted-foreground">
          Acesso vitalício · Pode imprimir quantas vezes quiser
        </p>
      </div>
    </main>
  )
}

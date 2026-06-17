import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Printer } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { materials } from "@/lib/materials-content"

export function MaterialsCollection() {
  return (
    <section id="materiais" className="bg-muted/40 py-14 print:hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-wide text-primary">
          9 materiais + bônus
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Seus materiais para imprimir e brincar
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-center leading-relaxed text-muted-foreground">
          Cada material vem pronto com objetivo, modo de usar e folhas para
          imprimir. Clique para abrir e salvar em PDF quando quiser.
        </p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <Reveal key={m.slug}>
              <Link
                href={`/seuacesso/${m.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-center p-6" style={{ backgroundColor: m.bg }}>
                  <Image
                    src={m.image || "/placeholder.svg"}
                    alt={`Material ${m.title}`}
                    width={300}
                    height={300}
                    className="h-40 w-auto object-contain drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">{m.title}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{m.tagline}</p>
                  <span
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: m.accent }}
                  >
                    <Printer className="h-4 w-4" aria-hidden="true" />
                    Abrir e imprimir
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

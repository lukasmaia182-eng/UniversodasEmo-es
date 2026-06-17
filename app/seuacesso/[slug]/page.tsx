import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Users, Target, ListChecks } from "lucide-react"
import { PrintButton } from "@/components/access/print-button"
import { MaterialPrintable } from "@/components/materials/material-printables"
import { materials, getMaterial } from "@/lib/materials-content"

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const material = getMaterial(slug)
  if (!material) return { title: "Material · Universo das Emoções" }
  return {
    title: `${material.title} · Universo das Emoções`,
    description: material.objective,
    robots: { index: false, follow: false },
  }
}

export default async function MaterialPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const material = getMaterial(slug)
  if (!material) notFound()

  return (
    <div className="min-h-screen bg-background">
      {/* Barra de navegação (oculta na impressão) */}
      <header className="border-b border-border bg-card print:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/seuacesso"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para o acesso
          </Link>
          <PrintButton
            label="Salvar em PDF / Imprimir"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5"
          />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Capa do material */}
        <section
          className="overflow-hidden rounded-[2rem] border border-border print:break-after-page print:rounded-none print:border-0"
          style={{ backgroundColor: material.bg }}
        >
          <div className="grid items-center gap-6 p-7 sm:p-10 md:grid-cols-[1fr_0.8fr]">
            <div>
              <span
                className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white"
                style={{ backgroundColor: material.accent }}
              >
                Material para imprimir
              </span>
              <h1 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                {material.title}
              </h1>
              <p className="mt-2 text-pretty text-lg text-foreground/70">{material.tagline}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-semibold text-foreground">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  {material.ageRange}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-semibold text-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {material.duration}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={material.image || "/placeholder.svg"}
                alt={`Prévia do material ${material.title}`}
                width={420}
                height={420}
                priority
                className="w-full max-w-xs rounded-2xl drop-shadow-xl"
              />
            </div>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            <div className="bg-card p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
                <Target className="h-5 w-5" style={{ color: material.accent }} aria-hidden="true" />
                Objetivo
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{material.objective}</p>
            </div>
            <div className="bg-card p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
                <ListChecks className="h-5 w-5" style={{ color: material.accent }} aria-hidden="true" />
                Como usar
              </h2>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5">
                {material.howTo.map((step) => (
                  <li key={step} className="text-sm leading-relaxed text-muted-foreground">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Folhas imprimíveis */}
        <div className="mt-8 space-y-8">
          <MaterialPrintable kind={material.kind} />
        </div>

        {/* Rodapé (oculto na impressão) */}
        <div className="mt-10 flex justify-center print:hidden">
          <PrintButton
            label="Salvar em PDF / Imprimir"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5"
          />
        </div>
      </main>
    </div>
  )
}

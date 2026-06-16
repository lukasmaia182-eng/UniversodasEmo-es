import { Sparkles } from "lucide-react"
import { PrintButton } from "@/components/access/print-button"

export function AccessHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md print:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="font-heading text-base font-bold text-foreground">
              Universo das Emoções
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Área de acesso
            </p>
          </div>
        </div>
        <PrintButton
          label="Imprimir / Salvar PDF"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:text-sm"
        />
      </div>
    </header>
  )
}

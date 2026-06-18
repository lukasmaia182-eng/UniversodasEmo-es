import { Sparkles } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#topo" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-bold leading-none text-foreground">
            Universo das Emoções
            <span className="align-super text-xs">™</span>
          </span>
        </a>
        <p className="hidden max-w-xs text-right text-sm font-semibold leading-snug text-muted-foreground md:block">
          O fim das <span className="text-coral">birras</span> começa quando seu filho aprende a dizer o que sente.
        </p>
      </div>
    </header>
  )
}

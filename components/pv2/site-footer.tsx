import { Sprout } from "lucide-react"

export function SiteFooterPv2() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#topo" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sprout className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-semibold text-foreground">
              Universo de las Emociones
              <span className="align-super text-xs">™</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Términos de uso
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contacto
            </a>
          </nav>

          <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Este material tiene finalidad educativa y no sustituye el acompañamiento psicológico ni la orientación
            profesional.
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Universo de las Emociones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

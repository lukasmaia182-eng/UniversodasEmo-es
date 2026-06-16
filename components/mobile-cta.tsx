export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="text-xs text-muted-foreground line-through">R$ 97,00</p>
          <p className="font-heading text-xl font-bold text-primary">R$ 19,90</p>
        </div>
        <a
          href="#oferta"
          className="flex-1 rounded-full bg-primary py-4 text-center text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/30"
        >
          QUERO ACESSAR
        </a>
      </div>
    </div>
  )
}

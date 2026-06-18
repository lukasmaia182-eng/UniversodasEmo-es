export function MobileCtaPv2() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="text-xs text-muted-foreground line-through">$899 MXN</p>
          <p className="font-heading text-xl font-bold text-primary">$92.80 MXN</p>
        </div>
        <a
          href="https://pay.hotmart.com/L102630763K?off=q0l4cwd7&checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-primary py-4 text-center text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/30"
        >
          QUIERO ACCEDER
        </a>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const CHECKOUT_URL = "#oferta"

export function CtaButton({
  children = "Quero garantir com desconto",
  className,
  variant = "primary",
}: {
  children?: React.ReactNode
  className?: string
  variant?: "primary" | "sunny"
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-extrabold shadow-lg transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:text-lg",
        variant === "primary" && "bg-primary text-primary-foreground shadow-primary/30",
        variant === "sunny" && "bg-sunny text-sunny-foreground shadow-sunny/40",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}

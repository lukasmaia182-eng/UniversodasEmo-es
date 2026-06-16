"use client"

import { Printer } from "lucide-react"

export function PrintButton({
  className,
  label = "Imprimir material",
}: {
  className?: string
  label?: string
}) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      <Printer className="h-4 w-4" aria-hidden="true" />
      {label}
    </button>
  )
}

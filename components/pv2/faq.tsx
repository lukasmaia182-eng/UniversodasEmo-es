"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "¿El material es físico?",
    a: "No. El Universo de las Emociones™ es 100% digital. Recibes el acceso por correo y puedes imprimir los materiales cuantas veces quieras.",
  },
  {
    q: "¿Para qué edad sirve?",
    a: "El kit fue pensado principalmente para niños de 4 a 12 años, con actividades visuales, historias y recursos simples.",
  },
  {
    q: "¿Necesito ser psicóloga o pedagoga para usarlo?",
    a: "No. El material fue creado para ser simple e intuitivo, y puede ser usado por mamás, papás, cuidadores y profesionales que trabajan con niños.",
  },
  {
    q: "¿Puedo usarlo en la escuela o en consulta?",
    a: "Sí. Maestras, pedagogas, psicopedagogas y psicólogas pueden usar los materiales como apoyo lúdico en actividades socioemocionales.",
  },
  {
    q: "¿Lo recibo al instante?",
    a: "Sí. Después de la compra, recibes el acceso al material digital en el correo registrado.",
  },
  {
    q: "¿Tiene garantía?",
    a: "Sí. Tienes 7 días de garantía para conocer el material con tranquilidad.",
  },
  {
    q: "¿Este material sustituye la terapia?",
    a: "No. El Universo de las Emociones™ es un recurso lúdico de apoyo a la educación emocional. No sustituye el acompañamiento profesional cuando es necesario.",
  },
]

export function FaqPv2() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <Reveal>
        <h2 className="text-balance text-center font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Preguntas frecuentes
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <Reveal key={faq.q} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-heading text-lg font-semibold text-foreground">{faq.q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

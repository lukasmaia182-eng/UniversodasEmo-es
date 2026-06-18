"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "O material é físico?",
    a: "Não. O Universo das Emoções™ é 100% digital. Você recebe o acesso por e-mail e pode imprimir os materiais sempre que quiser.",
  },
  {
    q: "Serve para qual idade?",
    a: "O kit foi pensado principalmente para crianças de 4 a 12 anos, com atividades visuais, histórias e recursos simples.",
  },
  {
    q: "Preciso ser psicóloga ou pedagoga para usar?",
    a: "Não. O material foi criado para ser simples e intuitivo, podendo ser usado por mães, pais, responsáveis e profissionais que trabalham com crianças.",
  },
  {
    q: "Posso usar na escola ou em atendimento?",
    a: "Sim. Professoras, pedagogas, psicopedagogas e psicólogas podem usar os materiais como apoio lúdico em atividades socioemocionais.",
  },
  {
    q: "Recebo na hora?",
    a: "Sim. Após a compra, você recebe o acesso ao material digital no e-mail cadastrado.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia para conhecer o material com tranquilidade.",
  },
  {
    q: "Esse material substitui terapia?",
    a: "Não. O Universo das Emoções™ é um recurso lúdico de apoio à educação emocional. Ele não substitui acompanhamento profissional quando necessário.",
  },
]

export function FaqPv1() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <Reveal>
        <h2 className="text-balance text-center font-heading text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Perguntas frequentes
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

'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'Como recebo o acesso?',
    a: 'O acesso é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento. É só clicar no link e começar.',
  },
  {
    q: 'O material é digital?',
    a: 'Sim! Todo o conteúdo é 100% digital, em PDF de alta qualidade, para você acessar de onde quiser, quando quiser.',
  },
  {
    q: 'Posso imprimir?',
    a: 'Pode sim. O material foi pensado para ser lido na tela ou impresso em casa, para usar nas atividades em família ou em sala de aula.',
  },
  {
    q: 'Qual a faixa etária indicada?',
    a: 'A coleção é ideal para crianças de 4 a 12 anos, mas também é um ótimo recurso para adultos que desejam ampliar seu vocabulário emocional.',
  },
  {
    q: 'Posso acessar pelo celular?',
    a: 'Sim. O conteúdo é compatível com celular, tablet e computador, com leitura confortável em qualquer tela.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você tem 7 dias para conhecer o material. Se não gostar, devolvemos 100% do valor investido, sem complicação.',
  },
]

export function Faq() {
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
                  <span className="font-heading text-lg font-semibold text-foreground">
                    {faq.q}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
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

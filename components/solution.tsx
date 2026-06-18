import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Solution() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/cena-conversa.png"
              alt="Transforme emoções em conversas significativas: o Universo das Emoções guia famílias e educadores em momentos de diálogo, escuta e conexão, com conversas que acontecem, conexão de verdade e aprendizado leve."
              width={1024}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

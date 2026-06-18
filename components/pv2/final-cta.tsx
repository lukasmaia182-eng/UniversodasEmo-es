import Image from "next/image"
import { CtaButtonPv2 } from "@/components/pv2/cta-button"
import { Reveal } from "@/components/reveal"

export function FinalCtaPv2() {
  return (
    <section className="bg-night">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <Reveal>
          <Image
            src="/mascote-carinho.png"
            alt="Mel, la mascota del cariño, invitándote"
            width={140}
            height={140}
            className="mx-auto w-24 drop-shadow-xl md:w-28"
          />
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold leading-tight text-night-foreground md:text-4xl">
            Empieza hoy a ayudar a tu hijo a expresar lo que siente
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-night-muted">
            No necesitas esperar al próximo berrinche para descubrir qué hacer. Con el Universo de las Emociones™ tienes
            en las manos actividades, juegos, historias y herramientas visuales listas para crear conversaciones
            emocionales más ligeras con el niño.
          </p>

          <div className="mt-5 flex flex-col items-center gap-1">
            <p className="text-sm font-semibold text-night-muted">
              De <span className="line-through">$899 MXN</span> por solo
            </p>
            <p className="font-heading text-5xl font-bold text-sunny">$199 MXN</p>
          </div>

          <div className="mt-7 flex justify-center">
            <CtaButtonPv2 variant="sunny">QUIERO ACCEDER AHORA POR $199 MXN</CtaButtonPv2>
          </div>

          <p className="mt-5 text-sm font-medium text-night-muted">
            Acceso inmediato • Material digital • Garantía de 7 días
          </p>
        </Reveal>
      </div>
    </section>
  )
}

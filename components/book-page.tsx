import Image from "next/image"
import { Pencil } from "lucide-react"
import type { BookPageData } from "@/lib/book-pages"

export function BookPage({ data }: { data: BookPageData }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-card px-[7%] py-[6%] text-left text-foreground">
      {/* Marca */}
      <div className="flex items-center justify-between">
        <span className="font-heading text-[10px] font-bold leading-none text-primary">
          Universo<span className="text-coral">.</span>
        </span>
        <span className="text-[6px] font-semibold uppercase tracking-widest text-muted-foreground">
          Emoções
        </span>
      </div>

      {/* Aba vertical com o nome da emoção */}
      <div
        className={`absolute right-0 top-[18%] flex items-center justify-center rounded-l-md ${data.accent} px-[6px] py-2`}
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="rotate-180 text-[8px] font-extrabold uppercase tracking-wide text-card">
          {data.label}
        </span>
      </div>

      {/* Título */}
      <div className="mt-3 flex items-center gap-1.5">
        <span className={`h-2 w-2 rounded-[2px] ${data.accent}`} />
        <h3 className="font-heading text-[19px] font-extrabold leading-none text-foreground">
          {data.label}
        </h3>
      </div>

      <p className="mt-1.5 max-w-[62%] text-[6.5px] leading-[1.5] text-foreground/80">
        {data.intro}
      </p>

      {/* Mascote */}
      <Image
        src={data.mascot || "/placeholder.svg"}
        alt={`Mascote da emoção ${data.label}`}
        width={120}
        height={120}
        className="pointer-events-none absolute right-[6%] top-[26%] w-[30%] drop-shadow-md"
      />

      {/* Onde está */}
      <h4 className={`mt-2.5 text-[9px] font-extrabold ${data.accentText}`}>{data.whereTitle}</h4>
      <p className="mt-1 max-w-[62%] text-[6.5px] leading-[1.5] text-foreground/80">{data.whereText}</p>

      {/* História */}
      <h4 className={`mt-2.5 text-[9px] font-extrabold ${data.accentText}`}>{data.storyTitle}</h4>
      <p className="mt-1 text-[6.5px] leading-[1.5] text-foreground/80">{data.storyText}</p>

      {/* Atividade: escreva aqui */}
      <div className="mt-auto rounded-md border border-dashed border-foreground/25 bg-foreground/[0.03] p-[5px]">
        <div className="flex items-center gap-1">
          <span className={`flex h-2.5 w-2.5 items-center justify-center rounded-full ${data.accent}`}>
            <Pencil className="h-1.5 w-1.5 text-card" />
          </span>
          <span className={`text-[7px] font-extrabold ${data.accentText}`}>Minha vez de escrever</span>
        </div>
        <p className="mt-1 text-[6px] leading-[1.4] text-foreground/70">
          {data.exercise ?? `Conte ou desenhe um momento em que você sentiu ${data.label.toLowerCase()}.`}
        </p>
        <div className="mt-1 space-y-[3px]">
          <span className="block h-px w-full bg-foreground/15" />
          <span className="block h-px w-full bg-foreground/15" />
          <span className="block h-px w-[80%] bg-foreground/15" />
        </div>
      </div>
    </div>
  )
}

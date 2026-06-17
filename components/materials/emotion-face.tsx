import type { FaceExpression } from "@/lib/materials-content"

/**
 * Rosto fofo desenhado em SVG para as Cartas das Expressões.
 * Cada expressão muda olhos, sobrancelhas e boca.
 */
export function EmotionFace({
  expression,
  color = "#f4b400",
  className,
}: {
  expression: FaceExpression
  color?: string
  className?: string
}) {
  const stroke = "#2b2f38"
  const sw = 3

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {/* cabeça */}
      <circle cx="50" cy="50" r="38" fill={color} stroke={stroke} strokeWidth={sw} />
      {/* bochechas */}
      <Cheeks expression={expression} />
      {/* sobrancelhas */}
      <Brows expression={expression} stroke={stroke} sw={sw} />
      {/* olhos */}
      <Eyes expression={expression} stroke={stroke} sw={sw} />
      {/* boca */}
      <Mouth expression={expression} stroke={stroke} sw={sw} />
    </svg>
  )
}

function Cheeks({ expression }: { expression: FaceExpression }) {
  const show = ["feliz", "animado", "envergonhado", "tranquilo", "orgulhoso"].includes(expression)
  const strong = expression === "envergonhado"
  if (!show) return null
  return (
    <g fill="#ff8fa3" opacity={strong ? 0.85 : 0.55}>
      <ellipse cx="30" cy="60" rx={strong ? 9 : 6} ry={strong ? 6 : 4} />
      <ellipse cx="70" cy="60" rx={strong ? 9 : 6} ry={strong ? 6 : 4} />
    </g>
  )
}

function Brows({ expression, stroke, sw }: { expression: FaceExpression; stroke: string; sw: number }) {
  const common = { stroke, strokeWidth: sw, strokeLinecap: "round" as const, fill: "none" }
  switch (expression) {
    case "bravo":
      return (
        <g {...common}>
          <path d="M28 34 L42 40" />
          <path d="M72 34 L58 40" />
        </g>
      )
    case "triste":
      return (
        <g {...common}>
          <path d="M28 40 L42 35" />
          <path d="M72 40 L58 35" />
        </g>
      )
    case "assustado":
    case "surpreso":
      return (
        <g {...common}>
          <path d="M28 32 Q35 28 42 32" />
          <path d="M58 32 Q65 28 72 32" />
        </g>
      )
    case "curioso":
      return (
        <g {...common}>
          <path d="M28 34 Q35 30 42 33" />
          <path d="M58 31 Q65 27 72 31" />
        </g>
      )
    default:
      return null
  }
}

function Eyes({ expression, stroke, sw }: { expression: FaceExpression; stroke: string; sw: number }) {
  const dot = (cx: number, cy: number, r = 5) => <circle cx={cx} cy={cy} r={r} fill={stroke} />

  switch (expression) {
    case "feliz":
    case "animado":
    case "orgulhoso":
      return (
        <g>
          {dot(36, 46)}
          {dot(64, 46)}
          {expression === "animado" && (
            <g fill="#fff">
              <circle cx="34" cy="44" r="1.6" />
              <circle cx="62" cy="44" r="1.6" />
            </g>
          )}
        </g>
      )
    case "tranquilo":
    case "sono":
      return (
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" fill="none">
          <path d="M30 47 Q36 51 42 47" />
          <path d="M58 47 Q64 51 70 47" />
        </g>
      )
    case "assustado":
    case "surpreso":
      return (
        <g>
          <circle cx="36" cy="47" r="8" fill="#fff" stroke={stroke} strokeWidth={sw} />
          <circle cx="64" cy="47" r="8" fill="#fff" stroke={stroke} strokeWidth={sw} />
          {dot(36, 47, 3.5)}
          {dot(64, 47, 3.5)}
        </g>
      )
    case "envergonhado":
      return (
        <g stroke={stroke} strokeWidth={sw} strokeLinecap="round" fill="none">
          <path d="M31 48 Q36 45 41 48" />
          <path d="M59 48 Q64 45 69 48" />
        </g>
      )
    case "nojo":
      return (
        <g>
          {dot(36, 47, 4)}
          <path d="M58 47 Q64 43 70 47" stroke={stroke} strokeWidth={sw} strokeLinecap="round" fill="none" />
        </g>
      )
    case "curioso":
      return (
        <g>
          {dot(37, 47)}
          {dot(65, 46, 6)}
        </g>
      )
    default:
      return (
        <g>
          {dot(36, 47)}
          {dot(64, 47)}
        </g>
      )
  }
}

function Mouth({ expression, stroke, sw }: { expression: FaceExpression; stroke: string; sw: number }) {
  const line = { stroke, strokeWidth: sw, strokeLinecap: "round" as const, fill: "none" }
  switch (expression) {
    case "feliz":
      return <path d="M36 64 Q50 76 64 64" {...line} />
    case "animado":
      return <path d="M36 62 Q50 80 64 62 Q50 70 36 62 Z" fill="#fff" stroke={stroke} strokeWidth={sw} />
    case "orgulhoso":
      return <path d="M38 65 Q50 73 62 65" {...line} />
    case "triste":
      return <path d="M36 70 Q50 60 64 70" {...line} />
    case "bravo":
      return <path d="M37 70 Q50 62 63 70" {...line} />
    case "assustado":
      return <ellipse cx="50" cy="70" rx="7" ry="9" fill={stroke} />
    case "surpreso":
      return <circle cx="50" cy="69" r="7" fill={stroke} />
    case "sono":
      return <ellipse cx="50" cy="70" rx="5" ry="7" fill={stroke} />
    case "envergonhado":
      return <path d="M42 68 Q50 72 58 68" {...line} />
    case "tranquilo":
      return <path d="M40 67 Q50 73 60 67" {...line} />
    case "curioso":
      return <path d="M44 68 Q50 71 56 67" {...line} />
    case "nojo":
      return (
        <g>
          <path d="M38 68 Q50 64 62 70" {...line} />
          <path d="M52 70 Q54 78 50 80" {...line} />
        </g>
      )
    default:
      return <path d="M40 68 L60 68" {...line} />
  }
}

export type EbookBlock =
  | "capa"
  | "dor"
  | "virada"
  | "metodo"
  | "frases"
  | "erros"
  | "resultado"
  | "final"

export type EbookPage = {
  /** Número visual da página (1 a 30) */
  n: number
  block: EbookBlock
  /** Rótulo curto do bloco exibido no chip */
  kicker?: string
  /** Texto principal da página (curto e emocional) */
  title: string
  /** Apoio opcional — mantém o texto em no máximo 30% */
  subtitle?: string
  /** Número do passo do método, quando aplicável */
  step?: number
  image: string
  alt: string
  /** Posição do texto sobre a imagem */
  align: "center" | "bottom"
  /** Cor de destaque (token de cor) */
  accent: "sunny" | "coral" | "mint" | "lavender"
}

const img = (name: string) => `/ebook/${name}.png`

export const ebookPages: EbookPage[] = [
  // CAPA
  {
    n: 1,
    block: "capa",
    kicker: "Guia Rápido",
    title: "Crises Emocionais em 5 Minutos",
    subtitle: "Um passo a passo simples para acolher seu filho nos momentos difíceis.",
    image: img("cover"),
    alt: "Mãe acolhendo a criança com uma luz emocional suave ao redor",
    align: "center",
    accent: "sunny",
  },

  // BLOCO 1 — DOR
  {
    n: 2,
    block: "dor",
    kicker: "Talvez você reconheça",
    title: "Você já passou por isso?",
    image: img("crying"),
    alt: "Criança chorando forte, tomada pela emoção",
    align: "bottom",
    accent: "coral",
  },
  {
    n: 3,
    block: "dor",
    title: "Sem saber o que fazer…",
    image: img("parent-lost"),
    alt: "Mãe ou pai com expressão perdida diante do choro",
    align: "bottom",
    accent: "coral",
  },
  {
    n: 4,
    block: "dor",
    title: "Quanto mais tenta controlar…",
    subtitle: "mais a crise parece crescer.",
    image: img("tantrum"),
    alt: "Criança em birra enquanto o adulto tenta controlar a situação",
    align: "bottom",
    accent: "coral",
  },
  {
    n: 5,
    block: "dor",
    title: "A conexão se perde",
    image: img("distance"),
    alt: "Criança e adulto distantes, com a conexão enfraquecida",
    align: "bottom",
    accent: "coral",
  },
  {
    n: 6,
    block: "dor",
    title: "O problema não é seu filho.",
    subtitle: "É a forma como a emoção está sendo vivida.",
    image: img("pause"),
    alt: "Adulto fazendo uma pausa para respirar e se acalmar",
    align: "center",
    accent: "coral",
  },

  // BLOCO 2 — VIRADA
  {
    n: 7,
    block: "virada",
    kicker: "A virada",
    title: "É emoção não compreendida",
    image: img("confused"),
    alt: "Criança confusa, cercada por emoções que não sabe nomear",
    align: "bottom",
    accent: "lavender",
  },
  {
    n: 8,
    block: "virada",
    title: "Ela não sabe explicar o que sente",
    image: img("brain"),
    alt: "Ilustração do coração e do cérebro conectados pelas emoções",
    align: "bottom",
    accent: "lavender",
  },
  {
    n: 9,
    block: "virada",
    title: "Comportamento é linguagem",
    subtitle: "A birra é um pedido de ajuda em forma de ação.",
    image: img("tantrum"),
    alt: "Criança expressando uma emoção através do comportamento",
    align: "bottom",
    accent: "lavender",
  },
  {
    n: 10,
    block: "virada",
    title: "E você pode mudar isso",
    image: img("transition"),
    alt: "Transição do caos para a calma, com a família caminhando para a luz",
    align: "center",
    accent: "lavender",
  },

  // BLOCO 3 — MÉTODO
  {
    n: 11,
    block: "metodo",
    kicker: "O método",
    title: "5 passos simples",
    subtitle: "Para atravessar qualquer crise com calma e conexão.",
    image: img("method"),
    alt: "Visão geral do método com os passos representados em ícones",
    align: "center",
    accent: "mint",
  },
  {
    n: 12,
    block: "metodo",
    step: 1,
    title: "Pare e respire",
    subtitle: "Sua calma é o primeiro remédio.",
    image: img("breathe"),
    alt: "Adulto respirando fundo para se acalmar",
    align: "bottom",
    accent: "mint",
  },
  {
    n: 13,
    block: "metodo",
    step: 2,
    title: "Abaixe o tom",
    subtitle: "Fique na altura dos olhos da criança.",
    image: img("lower"),
    alt: "Adulto se abaixando para ficar na altura da criança",
    align: "bottom",
    accent: "mint",
  },
  {
    n: 14,
    block: "metodo",
    step: 3,
    title: "Nomeie o sentimento",
    subtitle: "“Você está com raiva, eu entendo.”",
    image: img("name"),
    alt: "Adulto ajudando a criança a nomear o que sente",
    align: "bottom",
    accent: "mint",
  },
  {
    n: 15,
    block: "metodo",
    step: 4,
    title: "Valide",
    subtitle: "Acolha antes de corrigir.",
    image: img("validate"),
    alt: "Abraço acolhedor entre adulto e criança",
    align: "bottom",
    accent: "mint",
  },
  {
    n: 16,
    block: "metodo",
    step: 5,
    title: "Conecte",
    subtitle: "Converse com calma, olhando nos olhos.",
    image: img("connect"),
    alt: "Adulto e criança em uma conversa calma e conectada",
    align: "bottom",
    accent: "mint",
  },
  {
    n: 17,
    block: "metodo",
    title: "Direcione",
    subtitle: "Mostre, com gentileza, o próximo passo.",
    image: img("redirect"),
    alt: "Adulto direcionando a criança para uma nova atividade",
    align: "bottom",
    accent: "mint",
  },
  {
    n: 18,
    block: "metodo",
    title: "Simples. Rápido. Funciona.",
    image: img("validate"),
    alt: "Adulto e criança em harmonia depois de atravessar a crise",
    align: "center",
    accent: "mint",
  },

  // BLOCO 4 — FRASES
  {
    n: 19,
    block: "frases",
    kicker: "Frases que acolhem",
    title: "“Eu estou com você”",
    image: img("phrases"),
    alt: "Mãe e filho próximos, cercados por balões de fala",
    align: "center",
    accent: "sunny",
  },
  {
    n: 20,
    block: "frases",
    title: "“Eu entendo você”",
    image: img("phrases"),
    alt: "Mãe e filho próximos, cercados por balões de fala",
    align: "center",
    accent: "sunny",
  },
  {
    n: 21,
    block: "frases",
    title: "“Vamos passar por isso juntos”",
    image: img("phrases"),
    alt: "Mãe e filho próximos, cercados por balões de fala",
    align: "center",
    accent: "sunny",
  },
  {
    n: 22,
    block: "frases",
    title: "“Você está seguro”",
    image: img("phrases"),
    alt: "Mãe e filho próximos, cercados por balões de fala",
    align: "center",
    accent: "sunny",
  },
  {
    n: 23,
    block: "frases",
    title: "“Tudo bem sentir isso”",
    image: img("phrases"),
    alt: "Mãe e filho próximos, cercados por balões de fala",
    align: "center",
    accent: "sunny",
  },

  // BLOCO 5 — ERROS
  {
    n: 24,
    block: "erros",
    kicker: "O que evitar",
    title: "Gritar piora",
    subtitle: "O grito assusta e fecha a criança.",
    image: img("yell"),
    alt: "Ilustração suave mostrando que gritar piora a crise",
    align: "bottom",
    accent: "coral",
  },
  {
    n: 25,
    block: "erros",
    title: "Ignorar afasta",
    subtitle: "O silêncio ensina que sentir é errado.",
    image: img("distance"),
    alt: "Ilustração suave mostrando que ignorar afasta a criança",
    align: "bottom",
    accent: "coral",
  },
  {
    n: 26,
    block: "erros",
    title: "Punir bloqueia",
    subtitle: "A punição interrompe a conexão.",
    image: img("punish"),
    alt: "Ilustração suave mostrando que punir bloqueia o vínculo",
    align: "bottom",
    accent: "coral",
  },

  // BLOCO 6 — RESULTADO
  {
    n: 27,
    block: "resultado",
    kicker: "O resultado",
    title: "Mais calma",
    image: img("calm-child"),
    alt: "Criança tranquila e em paz",
    align: "center",
    accent: "mint",
  },
  {
    n: 28,
    block: "resultado",
    title: "Mais conexão",
    image: img("connect"),
    alt: "Adulto e criança conectados em uma conversa calma",
    align: "center",
    accent: "mint",
  },
  {
    n: 29,
    block: "resultado",
    title: "Mais segurança",
    image: img("family"),
    alt: "Família feliz e unida, sentindo-se segura",
    align: "center",
    accent: "mint",
  },

  // FINAL
  {
    n: 30,
    block: "final",
    title: "Agora você sabe o que fazer.",
    subtitle: "Respire, acolha e conecte. Uma crise de cada vez.",
    image: img("final"),
    alt: "Cena acolhedora de pai e filho juntos com luz suave",
    align: "center",
    accent: "sunny",
  },
]

export const totalPages = ebookPages.length

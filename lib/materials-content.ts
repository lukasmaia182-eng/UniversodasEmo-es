export type MaterialKind = "wheel" | "faces" | "traffic" | "deck" | "theater" | "senses"

export type Material = {
  slug: string
  kind: MaterialKind
  title: string
  tagline: string
  image: string
  objective: string
  ageRange: string
  duration: string
  howTo: string[]
  accent: string // cor hex de destaque
  bg: string // tom claro de fundo
}

export const materials: Material[] = [
  {
    slug: "roda-das-emocoes",
    kind: "wheel",
    title: "Roda das Emoções",
    tagline: "Gire, descubra e converse sobre cada sentimento",
    image: "/material-roda-emocoes.png",
    objective:
      "Ajudar a criança a reconhecer e nomear diferentes emoções de forma lúdica, girando a roda e conversando sobre quando sentiu cada uma.",
    ageRange: "A partir de 3 anos",
    duration: "10 a 15 minutos",
    accent: "#f4b400",
    bg: "#fff6da",
    howTo: [
      "Imprima a página da roda e a seta em papel mais firme (ou cole em papelão).",
      "Recorte a roda e a seta. Prenda a seta no centro com um clipe ou colchete para que ela gire.",
      "A criança gira a seta e descobre em qual emoção ela parou.",
      "Conversem: 'Quando foi a última vez que você sentiu essa emoção?' Sem certo ou errado.",
      "Façam o gesto ou a careta daquela emoção juntos para tornar a brincadeira mais divertida.",
    ],
  },
  {
    slug: "jogo-das-caras",
    kind: "faces",
    title: "Jogo das Caras",
    tagline: "Imite a expressão e adivinhe a emoção",
    image: "/material-jogo-caras.png",
    objective:
      "Desenvolver o reconhecimento de expressões faciais e a empatia, imitando e adivinhando emoções pelas caras dos personagens.",
    ageRange: "A partir de 3 anos",
    duration: "10 a 20 minutos",
    accent: "#ef4444",
    bg: "#ffe9e6",
    howTo: [
      "Imprima e recorte as cartas de expressões pelas linhas pontilhadas.",
      "Embaralhe e deixe as cartas viradas para baixo numa pilha.",
      "Cada jogador puxa uma carta sem mostrar e faz a careta da emoção sorteada.",
      "Os outros tentam adivinhar qual emoção é. Quem acertar fica com a carta.",
      "No fim, conversem sobre uma situação em que cada um sentiu aquela emoção.",
    ],
  },
  {
    slug: "semaforo-emocional",
    kind: "traffic",
    title: "Semáforo Emocional",
    tagline: "Pare, pense e aja com calma",
    image: "/material-semaforo.png",
    objective:
      "Ensinar a criança a fazer uma pausa antes de reagir, usando as três cores do semáforo para se acalmar e escolher a melhor atitude.",
    ageRange: "A partir de 4 anos",
    duration: "Uso diário, sempre que precisar",
    accent: "#10b981",
    bg: "#e2f8f0",
    howTo: [
      "Imprima o pôster do semáforo e cole num lugar visível (porta do quarto, geladeira).",
      "Vermelho: PARE. Respire fundo três vezes e perceba o que está sentindo.",
      "Amarelo: PENSE. Dê um nome para a emoção e pense em como resolver.",
      "Verde: AJA. Escolha uma atitude calma e siga em frente.",
      "Pratiquem juntos nos momentos tranquilos para que vire hábito nos momentos difíceis.",
    ],
  },
  {
    slug: "baralho-divertidamente",
    kind: "deck",
    title: "Baralho Divertidamente",
    tagline: "Um baralho de emoções para vários jogos",
    image: "/material-baralho.png",
    objective:
      "Estimular memória, vocabulário emocional e diálogo em família com um baralho de cartas das emoções e seus mascotes.",
    ageRange: "A partir de 4 anos",
    duration: "15 a 25 minutos",
    accent: "#5b8def",
    bg: "#e8f0ff",
    howTo: [
      "Imprima duas vias das cartas para formar pares e recorte todas.",
      "Jogo da memória: vire as cartas para baixo e procurem os pares de emoções iguais.",
      "Quem encontrar um par conta uma vez em que sentiu aquela emoção.",
      "Variação 'mímica': puxe uma carta e represente a emoção sem falar.",
      "Variação 'história': sorteiem três cartas e inventem juntos uma historinha com elas.",
    ],
  },
  {
    slug: "teatro-das-expressoes",
    kind: "theater",
    title: "Teatro das Expressões",
    tagline: "Dê voz às emoções com fantoches de papel",
    image: "/material-teatro.png",
    objective:
      "Usar o faz de conta para a criança expressar e elaborar sentimentos, encenando pequenas cenas com os fantoches dos mascotes.",
    ageRange: "A partir de 3 anos",
    duration: "15 a 30 minutos",
    accent: "#8b5cf6",
    bg: "#f1ebff",
    howTo: [
      "Imprima e recorte os fantoches. Cole cada um na ponta de um palito de picolé.",
      "Montem um palquinho simples atrás do sofá ou de uma caixa.",
      "Sorteiem um fantoche e usem uma das cenas sugeridas para começar a história.",
      "Deixem a criança dar voz ao personagem e inventar o final.",
      "Ao terminar, conversem: 'Como o personagem se sentiu? E você, já se sentiu assim?'.",
    ],
  },
  {
    slug: "jogo-das-sensacoes",
    kind: "senses",
    title: "Jogo das Sensações",
    tagline: "Descubra onde as emoções moram no corpo",
    image: "/material-sensacoes.png",
    objective:
      "Ajudar a criança a perceber os sinais do corpo ligados a cada emoção, conectando o que sente por dentro com o que acontece por fora.",
    ageRange: "A partir de 4 anos",
    duration: "15 a 20 minutos",
    accent: "#34c79a",
    bg: "#e2f8f0",
    howTo: [
      "Imprima o mapa do corpo e as cartas de sensações e recorte as cartas.",
      "Leia uma carta de sensação (ex.: 'coração batendo rápido').",
      "A criança aponta no mapa do corpo onde ela costuma sentir isso.",
      "Conversem sobre qual emoção pode causar essa sensação.",
      "Coloquem a carta sobre o mapa, montando aos poucos o 'corpo das emoções'.",
    ],
  },
]

export function getMaterial(slug: string): Material | undefined {
  return materials.find((m) => m.slug === slug)
}

// ───────────────── Conteúdo imprimível de cada material

export const wheelSegments = [
  { label: "Alegria", color: "#f4b400" },
  { label: "Tristeza", color: "#5b8def" },
  { label: "Raiva", color: "#ef4444" },
  { label: "Medo", color: "#8b5cf6" },
  { label: "Calma", color: "#34c79a" },
  { label: "Surpresa", color: "#22c1bd" },
  { label: "Amor", color: "#fb7185" },
  { label: "Gratidão", color: "#f59e0b" },
]

export const faceCards: { label: string; hint: string; image: string; color: string }[] = [
  { label: "Alegria", hint: "Sorria bem grande e pule de felicidade", image: "/mascotes/alegria.png", color: "#f4b400" },
  { label: "Tristeza", hint: "Boca para baixo, ombros caídos", image: "/mascotes/tristeza.png", color: "#5b8def" },
  { label: "Raiva", hint: "Sobrancelhas franzidas, braços cruzados", image: "/mascotes/raiva.png", color: "#ef4444" },
  { label: "Medo", hint: "Olhos arregalados, encolha o corpo", image: "/mascotes/medo.png", color: "#8b5cf6" },
  { label: "Surpresa", hint: "Boca em formato de O, mãos no rosto", image: "/mascotes/surpresa.png", color: "#22c1bd" },
  { label: "Nojo", hint: "Franza o nariz e mostre a língua", image: "/mascotes/nojo.png", color: "#84cc16" },
  { label: "Susto", hint: "Salte para trás com olhos arregalados", image: "/mascotes/susto.png", color: "#a855f7" },
  { label: "Vergonha", hint: "Bochechas coradas, olhar baixo", image: "/mascotes/vergonha.png", color: "#fb7185" },
  { label: "Timidez", hint: "Esconda-se um pouco e sorria de leve", image: "/mascotes/timidez.png", color: "#f472b6" },
  { label: "Gratidão", hint: "Mãos no coração, sorriso suave", image: "/mascotes/gratidao.png", color: "#f59e0b" },
  { label: "Calma", hint: "Respire fundo, rosto relaxado", image: "/mascotes/calma.png", color: "#34c79a" },
  { label: "Serenidade", hint: "Olhos fechados, respiração tranquila", image: "/mascotes/serenidade.png", color: "#2dd4bf" },
  { label: "Coragem", hint: "Queixo erguido, postura firme", image: "/mascotes/coragem.png", color: "#f97316" },
  { label: "Curiosidade", hint: "Cabeça inclinada, olhos atentos", image: "/mascotes/curiosidade.png", color: "#0ea5e9" },
  { label: "Orgulho", hint: "Peito estufado, sorriso confiante", image: "/mascotes/orgulho.png", color: "#eab308" },
  { label: "Amor", hint: "Faça um coração com as mãos", image: "/mascotes/amor.png", color: "#fb7185" },
  { label: "Carinho", hint: "Braços abertos para um abraço", image: "/mascotes/carinho.png", color: "#f9a8d4" },
  { label: "Ternura", hint: "Olhar doce e sorriso meigo", image: "/mascotes/ternura.png", color: "#fda4af" },
  { label: "Afeto", hint: "Mão no coração e olhar gentil", image: "/mascotes/afeto.png", color: "#f87171" },
  { label: "Empolgação", hint: "Pule de animação batendo palmas", image: "/mascotes/empolgacao.png", color: "#fb923c" },
  { label: "Entusiasmo", hint: "Olhos brilhando e punhos para cima", image: "/mascotes/entusiasmo.png", color: "#f97316" },
  { label: "Diversão", hint: "Gargalhe segurando a barriga", image: "/mascotes/diversao.png", color: "#facc15" },
  { label: "Contentamento", hint: "Sorriso tranquilo e satisfeito", image: "/mascotes/contentamento.png", color: "#fbbf24" },
  { label: "Satisfação", hint: "Polegar para cima e sorriso", image: "/mascotes/satisfacao.png", color: "#a3e635" },
  { label: "Alívio", hint: "Solte o ar e relaxe os ombros", image: "/mascotes/alivio.png", color: "#5eead4" },
  { label: "Esperança", hint: "Olhar para cima com um sorriso", image: "/mascotes/esperanca.png", color: "#38bdf8" },
  { label: "Otimismo", hint: "Sorriso confiante e olhar adiante", image: "/mascotes/otimismo.png", color: "#22d3ee" },
  { label: "Confiança", hint: "Postura ereta e mãos na cintura", image: "/mascotes/confianca.png", color: "#fb923c" },
  { label: "Determinação", hint: "Olhar firme e punhos fechados", image: "/mascotes/determinacao.png", color: "#f97316" },
  { label: "Concentração", hint: "Olhos focados e sobrancelhas atentas", image: "/mascotes/concentracao.png", color: "#0ea5e9" },
  { label: "Paciência", hint: "Respire e espere com calma", image: "/mascotes/paciencia.png", color: "#34c79a" },
  { label: "Ansiedade", hint: "Mãos inquietas e olhar agitado", image: "/mascotes/ansiedade.png", color: "#a855f7" },
  { label: "Frustração", hint: "Bufe e cruze os braços", image: "/mascotes/frustracao.png", color: "#ef4444" },
  { label: "Ciúme", hint: "Olhar de canto e boca tensa", image: "/mascotes/ciume.png", color: "#84cc16" },
  { label: "Saudade", hint: "Olhar distante e suspiro", image: "/mascotes/saudade.png", color: "#5b8def" },
  { label: "Empatia", hint: "Olhar acolhedor e mão estendida", image: "/mascotes/empatia.png", color: "#f59e0b" },
]

export const trafficSteps = [
  {
    color: "#ef4444",
    name: "Vermelho",
    title: "PARE",
    text: "Respire fundo 3 vezes. Sinta o que está acontecendo no seu corpo.",
  },
  {
    color: "#f4b400",
    name: "Amarelo",
    title: "PENSE",
    text: "Dê um nome para a emoção e pense em como você pode resolver.",
  },
  {
    color: "#10b981",
    name: "Verde",
    title: "AJA",
    text: "Escolha uma atitude calma e siga em frente com tranquilidade.",
  },
]

export const deckCards = [
  { label: "Alegria", mascot: "Lumi", color: "#f4b400", image: "/mascote-alegria.png" },
  { label: "Tristeza", mascot: "Nuvi", color: "#5b8def", image: "/mascote-tristeza.png" },
  { label: "Raiva", mascot: "Foguinho", color: "#ef4444", image: "/mascote-raiva.png" },
  { label: "Medo", mascot: "Tibo", color: "#8b5cf6", image: "/mascote-medo.png" },
  { label: "Calma", mascot: "Sereno", color: "#34c79a", image: "/mascote-calma.png" },
  { label: "Surpresa", mascot: "Zazá", color: "#22c1bd", image: "/mascote-surpresa.png" },
  { label: "Coragem", mascot: "Bravo", color: "#f97316", image: "/mascote-coragem.png" },
  { label: "Gratidão", mascot: "Lina", color: "#f59e0b", image: "/mascote-gratidao.png" },
  { label: "Vergonha", mascot: "Timi", color: "#fb7185", image: "/mascote-vergonha.png" },
  { label: "Curiosidade", mascot: "Pispi", color: "#0ea5e9", image: "/mascote-curiosidade.png" },
  { label: "Orgulho", mascot: "Téo", color: "#f59e0b", image: "/mascote-orgulho.png" },
  { label: "Carinho", mascot: "Mel", color: "#fb7185", image: "/mascote-carinho.png" },
]

export const theaterScenes = [
  "O mascote acordou muito feliz porque hoje é um dia especial. O que aconteceu?",
  "O mascote ficou com medo de algo no escuro. Como ele encontrou coragem?",
  "Dois mascotes brigaram por causa de um brinquedo. Como eles fizeram as pazes?",
  "O mascote estava triste porque sentiu saudade de alguém. Quem o ajudou?",
]

export const theaterPuppets = [
  { name: "Lumi", emotion: "Alegria", image: "/mascote-alegria.png" },
  { name: "Nuvi", emotion: "Tristeza", image: "/mascote-tristeza.png" },
  { name: "Foguinho", emotion: "Raiva", image: "/mascote-raiva.png" },
  { name: "Tibo", emotion: "Medo", image: "/mascote-medo.png" },
  { name: "Sereno", emotion: "Calma", image: "/mascote-calma.png" },
  { name: "Bravo", emotion: "Coragem", image: "/mascote-coragem.png" },
]

export const senseCards = [
  { label: "Coração batendo rápido", body: "Peito" },
  { label: "Borboletas na barriga", body: "Barriga" },
  { label: "Calor no rosto", body: "Rosto" },
  { label: "Nó na garganta", body: "Garganta" },
  { label: "Mãos suadas", body: "Mãos" },
  { label: "Ombros pesados", body: "Ombros" },
  { label: "Vontade de sorrir", body: "Rosto" },
  { label: "Respiração leve", body: "Peito" },
]

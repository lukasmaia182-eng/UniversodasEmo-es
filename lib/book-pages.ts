export type BookPageData = {
  label: string
  mascot: string
  accent: string // classe de cor de fundo (aba e quadradinho)
  accentText: string // classe de cor de texto (subtítulos)
  intro: string
  whereTitle: string
  whereText: string
  storyTitle: string
  storyText: string
  exercise?: string // pergunta da atividade "escreva aqui"
}

export const bookPages: BookPageData[] = [
  {
    label: "Vergonha",
    mascot: "/mascote-vergonha.png",
    accent: "bg-primary",
    accentText: "text-primary",
    intro:
      "A vergonha aparece quando achamos que todos estão olhando para nós. As bochechas esquentam, o olhar foge e dá vontade de sumir.",
    whereTitle: "Onde está a vergonha?",
    whereText:
      "Ela mora no rosto que cora, na voz baixinha e no corpo que quer se encolher. É um aviso de que estamos cuidando de como os outros nos veem.",
    storyTitle: "O caracol que saiu da concha",
    storyText:
      "Tuca adorava cantar, mas escondia a voz na concha. Um dia, devagarinho, mostrou só um pedacinho de música. Os amigos sorriram, e Tuca descobriu que ser visto também pode ser gostoso.",
  },
  {
    label: "Medo",
    mascot: "/mascote-medo.png",
    accent: "bg-lavender",
    accentText: "text-primary",
    intro:
      "O medo surge diante do que não conhecemos ou do que parece perigoso. O coração acelera e o corpo fica em alerta para nos proteger.",
    whereTitle: "Onde está o medo?",
    whereText:
      "Ele se esconde na barriga gelada, nas mãos que tremem e na respiração curta. O medo não é fraqueza: é o nosso guarda cuidadoso.",
    storyTitle: "O fantasminha corajoso",
    storyText:
      "Tibo tinha medo do escuro do armário. Em vez de fugir, respirou fundo e acendeu uma luzinha. Lá dentro só havia brinquedos esquecidos. O medo diminuiu quando ele olhou de pertinho.",
  },
  {
    label: "Tristeza",
    mascot: "/mascote-tristeza.png",
    accent: "bg-secondary",
    accentText: "text-primary",
    intro:
      "A tristeza chega quando perdemos algo ou sentimos saudade. É pesada como nuvem, mas também ajuda a pedir colo e carinho.",
    whereTitle: "Onde está a tristeza?",
    whereText:
      "Mora nos ombros caídos, nos olhos marejados e no peito apertado. Quando a deixamos passar, ela limpa o coração como a chuva limpa o céu.",
    storyTitle: "A nuvem que chorou e floresceu",
    storyText:
      "Nino estava cinzento e soltou algumas gotinhas. Os amigos ficaram por perto, sem pressa. Depois da chuvinha, brotaram flores no jardim. Chorar também faz a gente crescer.",
  },
  {
    label: "Orgulho",
    mascot: "/mascote-orgulho.png",
    accent: "bg-secondary",
    accentText: "text-primary",
    intro:
      "O orgulho bom aparece quando nos esforçamos e conseguimos algo. É a alegria de reconhecer o próprio valor sem diminuir ninguém.",
    whereTitle: "Onde está o orgulho?",
    whereText:
      "Está no peito estufado, no sorriso largo e na cabeça erguida. Ele nos lembra de comemorar as conquistas, grandes e pequenas.",
    storyTitle: "O pavão que abriu as penas",
    storyText:
      "Rei treinou muito para subir na árvore mais alta. Quando conseguiu, abriu suas penas coloridas e chamou os amigos para verem a vista. Ter orgulho ficou ainda melhor quando foi dividido.",
  },
  {
    label: "Gratidão",
    mascot: "/mascote-gratidao.png",
    accent: "bg-sunny",
    accentText: "text-coral",
    intro:
      "A gratidão é o calorzinho de perceber o que temos de bom. Ela faz a gente querer dizer obrigado e cuidar de quem amamos.",
    whereTitle: "Onde está a gratidão?",
    whereText:
      "Mora no sorriso tranquilo, no abraço apertado e no coração cheio. Quanto mais a gente agradece, mais coisas boas a gente enxerga.",
    storyTitle: "O ursinho que contava bênçãos",
    storyText:
      "Todas as noites, Fofo lembrava três coisas boas do dia. Mesmo nos dias difíceis, sempre achava uma. Assim, dormia leve e acordava pronto para um novo dia bonito.",
  },
  {
    label: "Carinho",
    mascot: "/mascote-carinho.png",
    accent: "bg-coral",
    accentText: "text-coral",
    intro:
      "O carinho é o jeito doce de mostrar que amamos. Ele aquece quem dá e quem recebe, como um abraço bem apertado.",
    whereTitle: "Onde está o carinho?",
    whereText:
      "Está nas mãos que afagam, nas palavras gentis e no olhar atento. O carinho cresce toda vez que é compartilhado.",
    storyTitle: "A coelhinha que guardava abraços",
    storyText:
      "Mel tinha um coração que nunca acabava. Quando um amigo ficava triste, ela emprestava um abraço. E percebeu que, quanto mais abraços dava, mais cheia de amor ela ficava.",
  },
  {
    label: "Calma",
    mascot: "/mascote-calma.png",
    accent: "bg-mint",
    accentText: "text-mint-foreground",
    intro:
      "A calma é a sensação boa de paz por dentro. Ela ajuda a pensar com clareza e a escolher o que fazer sem pressa.",
    whereTitle: "Onde está a calma?",
    whereText:
      "Mora na respiração lenta, nos ombros relaxados e no silêncio gostoso. Podemos chamar a calma respirando fundo três vezes.",
    storyTitle: "A tartaruga que respirava devagar",
    storyText:
      "Quando tudo ficava agitado, Sereno parava e respirava bem devagarinho. O mundo continuava correndo, mas dentro dele havia um lago tranquilo. Assim ele resolvia tudo com paciência.",
  },
  {
    label: "Raiva",
    mascot: "/mascote-raiva.png",
    accent: "bg-coral",
    accentText: "text-coral",
    intro:
      "A raiva pode surgir quando algo nos parece injusto ou quando combinamos uma coisa e não acontece. Ela é forte como fogo.",
    whereTitle: "Onde está a raiva?",
    whereText:
      "Está no calor que sobe ao rosto, nos punhos fechados e na voz que treme. A raiva avisa que algo precisa ser cuidado.",
    storyTitle: "O dragão que aprendeu a respirar",
    storyText:
      "Bafo soltava fumaça quando ficava bravo. Um dia aprendeu a soprar bem devagar, como quem apaga velinhas. O fogo virou calorzinho, e ele percebeu que a força também serve para criar.",
  },
  {
    label: "Alegria",
    mascot: "/mascote-alegria.png",
    accent: "bg-sunny",
    accentText: "text-coral",
    intro:
      "A alegria é aquela explosão boa de felicidade. Ela faz o corpo querer pular, dançar e dividir o sorriso com todo mundo.",
    whereTitle: "Onde está a alegria?",
    whereText:
      "Mora no sorriso espontâneo, nos olhos brilhantes e na vontade de abraçar o mundo. A alegria fica maior quando é compartilhada.",
    storyTitle: "A estrelinha que brilhava mais",
    storyText:
      "Lumi descobriu que, ao iluminar os amigos, sua própria luz crescia. Quanto mais alegria espalhava, mais brilhante o jardim inteiro ficava. Felicidade boa é a que a gente reparte.",
  },
  {
    label: "Surpresa",
    mascot: "/mascote-surpresa.png",
    accent: "bg-mint",
    accentText: "text-mint-foreground",
    intro:
      "A surpresa acontece quando algo inesperado aparece. Os olhos arregalam, a boca abre e o coração dá um pulinho.",
    whereTitle: "Onde está a surpresa?",
    whereText:
      "Está no susto rápido, no 'uau!' que escapa e na curiosidade que vem logo depois. A surpresa abre portas para o novo.",
    storyTitle: "O esquilo e a semente mágica",
    storyText:
      "Zazá guardou uma semente diferente e esqueceu dela. Semanas depois, encontrou uma árvore cheia de frutas! A surpresa virou um banquete dividido com toda a turma.",
  },
  {
    label: "Curiosidade",
    mascot: "/mascote-curiosidade.png",
    accent: "bg-lavender",
    accentText: "text-primary",
    intro:
      "A curiosidade é a vontade gostosa de descobrir. Ela faz a gente perguntar, explorar e aprender coisas novas todos os dias.",
    whereTitle: "Onde está a curiosidade?",
    whereText:
      "Mora nos olhos bem abertos, nas perguntas que não param e no corpo que se inclina para ver melhor. A curiosidade é o começo de toda aventura.",
    storyTitle: "A coruja das mil perguntas",
    storyText:
      "Pipo queria saber o porquê de tudo. Em vez de achar isso chato, os amigos começaram a investigar juntos. Cada pergunta virava uma descoberta, e o mundo ficava maior.",
  },
  {
    label: "Coragem",
    mascot: "/mascote-coragem.png",
    accent: "bg-coral",
    accentText: "text-coral",
    intro:
      "A coragem não é não ter medo: é seguir em frente mesmo sentindo medo. Ela aparece quando fazemos o que é importante.",
    whereTitle: "Onde está a coragem?",
    whereText:
      "Está no peito firme, nos pés que dão o primeiro passo e na decisão de tentar. Todo mundo tem coragem guardada por dentro.",
    storyTitle: "O filhote que enfrentou a ponte",
    storyText:
      "Viko tremia diante da ponte alta, mas queria ajudar um amigo do outro lado. Respirou, deu um passo e depois outro. Ao chegar, descobriu que a coragem cresce a cada passinho.",
  },
]

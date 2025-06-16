const themes = [
  {
    "--text-color": "#552586",
    "--gradient-0": "hsla(240, 15%, 9%, 1)",
    "--gradient-1": "hsla(263, 93%, 56%, 1)",
    "--gradient-2": "rgb(192, 160, 204)",
    "--gradient-3": "hsla(306, 100%, 57%, 1)"
  },
  {
    "--text-color": "#2a8644",
    "--gradient-0": "#051816",
    "--gradient-1": "#15d088",
    "--gradient-2": "#2d524d",
    "--gradient-3": "#2ea98c"
  }
];

let theme;
if (localStorage.getItem("theme")) {
  theme = localStorage.getItem("theme");
} else {
  theme = 0;
  localStorage.setItem("theme", theme);
}

for (const [key, value] of Object.entries(themes[theme])) {
  document.documentElement.style.setProperty(key, value);
}

const arcanosMaiores = [
  {
    name: "O Louco",
    keywords: "Novos começos, espontaneidade, liberdade, fé e aventura.",
    rKeywords: "Imprudência, irresponsabilidade, indecisão, medo de arriscar e ilusões.",
    description: `
    Um jovem de mochila nas costas, prestes a dar um passo num penhasco,
    olhando para o céu com confiança, sem perceber o perigo à frente.
    Ele carrega uma flor branca (pureza), e ao seu lado há um
    cachorrinho (instinto, proteção, ou distração). Ele está embarcando
    numa jornada com o coração aberto, mesmo sem saber o que vai encontrar.
    `,
    meaning: `
    O Louco é a carta dos novos começos. Ele representa o momento antes do
    primeiro passo — aquele instante de coragem misturado com frio na barriga. 
    Quando essa carta aparece, é sinal de que você pode (ou deve) se abrir
    para o novo, confiar no processo e seguir o que o coração está dizendo.
    É a carta da fé no desconhecido.
    `,
    rMeaning: `
    Quando invertida, a energia do Louco pode virar excesso de imprudência 
    ou irresponsabilidade. Pode ser que você esteja se jogando sem pensar, 
    ou então travado por medo de sair da zona de conforto. Cuidado com decisões 
    por impulso ou com ilusões sobre algo que parece melhor do que realmente é.
    `
  },
  {
    name: "O Mago",
    keywords: "Ação, iniciativa, poder pessoal, manifestação, foco e habilidade.",
    rKeywords: "Manipulação, engano, bloqueio criativo, falta de ação e truques.",
    description: `
    O Mago está de pé diante de uma mesa, com os quatro elementos do tarot: espada 
    (ar), cálice (água), moeda (terra) e bastão (fogo). Isso mostra que ele tem todas 
    as ferramentas à disposição. Uma mão aponta pro céu e a outra pra terra — simbolizando 
    o famoso lema “assim em cima como embaixo”. Ele é o canal entre o mundo espiritual e 
    o mundo material, pronto pra transformar ideias em realidade. Ao redor, flores e um 
    infinito sobre a cabeça (símbolo do potencial ilimitado).
     `,
    meaning: `
    O Mago é a carta do potencial em ação. Ela aparece quando você tem tudo o que precisa 
    pra fazer as coisas acontecerem — agora é hora de agir. O Mago fala sobre usar os recursos 
    disponíveis, confiar no seu poder pessoal e manifestar o que deseja com foco e intenção. 
    Ele é aquele momento em que você percebe: "eu consigo, só depende de mim.
    `,
    rMeaning: `
    Quando invertido, o Mago pode indicar manipulação, uso incorreto das suas habilidades ou 
    energia dispersa. Pode estar faltando foco, ou você pode estar sendo enganado por alguém que 
    parece saber muito, mas não tem boas intenções. Também pode simbolizar dúvida sobre seu próprio 
    poder, como se você não confiasse em si mesmo o suficiente pra dar o primeiro passo.
    `
  },
  {
    name: "A Sacerdotisa",
    keywords: "Intuição, mistério, sabedoria interior, silêncio e inconsciente.",
    rKeywords: "Bloqueio intuitivo, segredos, superficialidade, confusão e autoengano.",
    description: `
    A Sacerdotisa está sentada entre dois pilares: B (Boaz) e J (Jachin), que representam 
    os opostos — escuridão e luz, consciente e inconsciente. Ela segura um pergaminho parcialmente 
    escondido com a palavra TORA (sabedoria divina ou espiritual). Atrás dela, há um véu com romãs, 
    simbolizando os mistérios ocultos e o conhecimento espiritual. A lua aos seus pés reforça o 
    lado intuitivo e feminino da carta.
    `,
    meaning: `
    A Sacerdotisa representa o poder da intuição e da sabedoria interior. Ela te convida a olhar pra 
    dentro, ouvir seu sexto sentido e perceber o que está por trás das aparências. É uma carta de 
    silêncio e observação — mais sentir, menos agir. Quando ela aparece, pode ser um sinal de que você 
    já sabe a resposta que procura, só precisa se conectar com o que está dentro de você.
    `,
    rMeaning: `
    Invertida, a Sacerdotisa mostra que você pode estar desconectado da sua intuição ou ignorando sinais 
    importantes. Pode haver confusão mental, segredos mal resolvidos ou até uma tendência a se iludir. 
    Também alerta para a superficialidade — talvez você esteja olhando só a casca das coisas, quando 
    deveria buscar mais fundo.
    `
  },
  {
    name: "A Imperatriz",
    keywords: "Fertilidade, abundância, nutrição, criatividade, beleza e maternidade.",
    rKeywords: "Dependência, bloqueios criativos, excesso de controle, negligência, desequilíbrio emocional e infertilidade (simbólica ou literal)",
    description: `
    A Imperatriz está sentada em um trono, cercada por natureza exuberante, com campos, árvores e trigo 
    — tudo simbolizando fertilidade e abundância. Ela usa uma coroa de estrelas (sabedoria divina) e 
    um vestido decorado com romãs, que remetem à feminilidade e aos mistérios do sagrado feminino. O 
    símbolo de Vênus (amor e beleza) aparece perto dela, reforçando sua conexão com o prazer, o romance 
    e a criatividade.
    `,
    meaning: `
    A Imperatriz é a carta da criação, do amor materno e da abundância. Ela representa um momento fértil 
    — não só no sentido literal, mas também no sentido de ideias, projetos e sentimentos. Quando essa carta 
    aparece, é sinal de que as coisas estão crescendo e florescendo ao seu redor. Ela fala de cuidado, beleza 
    e de uma ednergia que nutre tudo o que toca. Também pode indicar conexão com a natureza, sensualidade e 
    a expressão do feminino.
    `,
    rMeaning: `
    Invertida, a Imperatriz pode mostrar que você está negligenciando a si mesmo ou aos outros, ou que está 
    tentando controlar demais as coisas, sufocando a naturalidade do processo. Pode apontar pra bloqueios 
    criativos, inseguranças com o corpo, desequilíbrios emocionais ou até dificuldade em receber ou dar amor 
    e cuidado.
    `
  },
  {
    name: "O Imperador",
    keywords: "Estabilidade, autoridade, estrutura, disciplina, proteção e liderança.",
    rKeywords: "Rigidez, autoritarismo, teimosia, instabilidade, abuso de poder e rebeldia.",
    description: `
    O Imperador está sentado em um trono de pedra com cabeças de carneiro, símbolo do signo de 
    Áries — força, iniciativa e liderança. Ele veste uma armadura (pronto pra proteger o que ama), 
    e segura um cetro e um globo, símbolos de poder e domínio. Atrás dele, montanhas rochosas 
    mostram firmeza e resistência, enquanto a falta de vegetação reforça que essa energia é mais 
    racional do que emocional.
    `,
    meaning: `
    O Imperador é o arquétipo da ordem e da segurança. Ele representa aquela energia de liderança 
    que coloca tudo nos trilhos, define regras, constrói bases sólidas. Quando essa carta aparece, 
    ela fala sobre assumir responsabilidades, ser racional, tomar o controle da situação com 
    maturidade. Também pode simbolizar uma figura de autoridade na sua vida (como um pai, chefe, 
    mentor) ou a necessidade de criar estrutura e ter mais disciplina nos seus planos.
    `,
    rMeaning: `
    Invertido, o Imperador pode estar mostrando autoritarismo, rigidez ou dificuldades com autoridade 
    — seja exercendo ou lidando com ela. Pode indicar alguém tentando controlar tudo com mão de ferro, 
    ou o oposto: falta de firmeza e desorganização. Às vezes, é sinal de que é hora de questionar regras 
    antigas que já não funcionam mais pra você.
    `
  },
  {
    name: "O Hierofante",
    keywords: "Tradição, espiritualidade, ensino, orientação, regras e sabedoria compartilhada.",
    rKeywords: "Rebeldia, dogmas, questionamento, ruptura com tradições e crenças limitantes.",
    description: `
    O Hierofante está sentado entre dois pilares (como a Sacerdotisa), usando vestes sagradas. Ele 
    segura um cajado triplo (representando corpo, mente e espírito) e faz um gesto de bênção com a mão. 
    Aos seus pés, dois discípulos escutam com atenção, simbolizando o ensino e a transmissão de conhecimento. 
    As chaves cruzadas no chão representam o acesso ao espiritual e ao terreno — a ponte entre o divino e 
    o humano.
    `,
    meaning: `
    O Hierofante é o guardião da sabedoria tradicional. Ele fala de ensino, espiritualidade, instituições e 
    aprendizado com mestres. Quando aparece, é como um chamado pra se conectar com algo maior — seja fé, 
    cultura ou conhecimento. Também pode indicar que você está buscando orientação ou que é hora de aprender 
    com alguém experiente. É uma carta que valoriza o coletivo, o pertencimento e os caminhos mais formais 
    da vida.
    `,
    rMeaning: `
    Invertido, o Hierofante aponta pra uma energia de quebra de padrões. Pode ser que você esteja questionando 
    crenças antigas, regras impostas ou sistemas ultrapassados. Às vezes, representa a necessidade de encontrar 
    seu próprio caminho espiritual, fora do que foi ensinado. Também pode indicar rigidez dogmática ou conflitos 
    com figuras de autoridade espiritual ou moral.
    `
  },
  {
    name: "Os Enamorados",
    keywords: "Escolhas, amor, união, harmonia, conexão profunda e parceria.",
    rKeywords: "Desequilíbrio, dúvidas, separação, decisões difíceis e conflitos internos.",
    description: `
    Vemos um homem e uma mulher nus (referência a Adão e Eva), com um anjo acima deles, abençoando a união. Ao 
    fundo, a árvore do conhecimento e a serpente lembram que escolhas têm consequências. A montanha entre eles 
    mostra que nem tudo é plano — às vezes o caminho do amor exige esforço e crescimento. O céu claro transmite 
    clareza, conexão divina e pureza nos sentimentos.
    `,
    meaning: `
    Os Enamorados são mais do que romance — essa carta fala de escolhas com o coração, de conexões verdadeiras e 
    de harmonia entre razão e emoção. Representa relacionamentos, parcerias e momentos em que precisamos nos alinhar 
    com o que realmente ressoa com a nossa essência. Às vezes ela vem pra falar de amor sim (aquele amor com A maiúsculo), 
    mas também sobre decisões importantes que exigem honestidade e entrega.
    `,
    rMeaning: `
    Invertida, essa carta pode apontar pra conflitos nos relacionamentos, desequilíbrio emocional ou escolhas feitas 
    por pressão externa. Talvez você esteja dividido entre o que quer e o que esperam de você, ou evitando tomar uma 
    decisão que o coração já sabe qual é. Também pode alertar sobre dificuldades de comunicação, afastamentos ou 
    relações desequilibradas.
    `
  },
  {
    name: "O Carro",
    keywords: "Vitória, determinação, foco, conquista, controle e progresso.",
    rKeywords: "Impulsividade, falta de direção, estagnação, perda de controle e conflitos internos.",
    description: `
    Um guerreiro está em cima de um carro puxado por dois esfinges — uma preta e uma branca — representando forças 
    opostas (razão e emoção, luz e sombra) que precisam estar em equilíbrio. Ele segura um cetro, símbolo de comando, 
    e veste uma armadura decorada com estrelas e símbolos lunares — conectando ação com intuição. Atrás dele, há uma 
    cidade, mostrando que ele saiu de onde estava pra seguir adiante, rumo a conquistas.
    `,
    meaning: `
    O Carro representa força de vontade, foco e superação. Quando essa carta aparece, é sinal de que você está (ou 
    precisa estar) no comando do seu caminho. Ela fala de movimento com propósito, de tomar as rédeas da vida e avançar 
    com confiança, mesmo diante de obstáculos. É uma carta de vitória — mas não sem esforço. Mostra que com equilíbrio 
    e determinação, você chega onde quer.
    `,
    rMeaning: `
    Invertido, o Carro indica que talvez você esteja perdendo o controle ou correndo sem saber exatamente pra onde. 
    Pode ser um aviso sobre agir por impulso, conflitos internos ou dificuldade em unir as forças que te movem. Também 
    pode representar atrasos ou bloqueios por falta de planejamento ou foco.
    `
  },
  {
    name: "A Força",
    keywords: "Coragem, autocontrole, compaixão, paciência, equilíbrio emocional e domínio interior.",
    rKeywords: "Impulsividade, fraqueza, medo, raiva descontrolada e insegurança.",
    description: `
    Uma mulher gentil segura aberta a boca de um leão, mas sem violência. Ela usa uma coroa de flores 
    e tem o símbolo do infinito sobre a cabeça — mostrando domínio sereno e conexão espiritual. O leão 
    representa os instintos, paixões e impulsos, enquanto a mulher simboliza a alma consciente, a sabedoria. 
    É o equilíbrio perfeito entre força e suavidade.
    `,
    meaning: `
    A Força fala sobre dominar o mundo com gentileza — é a carta da coragem calma, da resistência com 
    compaixão. Ela mostra que você tem (ou precisa encontrar) uma força interior que não vem da força física, 
    mas do equilíbrio emocional, da paciência e do autocontrole. É sobre enfrentar desafios com doçura, sem 
    perder o poder. Ela também lembra que controlar seus instintos e emoções é tão importante quanto enfrentar 
    o mundo lá fora.
    `,
    rMeaning: `
    Invertida, A Força pode indicar que as emoções estão te controlando mais do que você gostaria. Pode ser 
    sinal de raiva reprimida, impulsos desgovernados ou uma insegurança que te paralisa. Às vezes, é só um 
    empurrãozinho pra se lembrar de que você é capaz — só precisa respirar, se acalmar e retomar seu centro.
    `
  },
  {
    name: "O Eremita",
    keywords: "Introspecção, sabedoria interior, solitude, busca espiritual, reflexão e autoconhecimento.",
    rKeywords: " Isolamento, confusão interna, medo da solidão, fuga de si mesmo e estagnação.",
    description: `
    O Eremita está sozinho em um terreno montanhoso, vestindo uma túnica cinza e segurando uma lanterna 
    com uma estrela dentro (a Estrela da Sabedoria). Em outra mão, ele segura um cajado, símbolo de apoio 
    e jornada. Ele olha para baixo, com calma, como quem caminha devagar, mas com propósito. A paisagem fria
     e solitária mostra que esse é um momento de pausa, reflexão e busca interior.
    `,
    meaning: `
    O Eremita aparece quando é hora de olhar pra dentro e buscar respostas no silêncio. Ele fala sobre momentos 
    de introspecção, onde a sabedoria vem da experiência e da contemplação. Nem sempre estamos prontos pra agir 
    — às vezes, o que mais precisamos é ficar sozinhos um pouco, ouvir nossa própria voz e entender o que de 
    fato queremos. Essa carta também pode representar um mentor ou conselheiro sábio cruzando o seu caminho.
    `,
    rMeaning: `
    Invertido, o Eremita pode indicar excesso de isolamento, medo de encarar a si mesmo ou confusão interior. 
    Pode ser que você esteja evitando uma reflexão necessária, ou se afastando do mundo por medo, mágoa ou cansaço. 
    Também alerta pra fugir demais do externo ou se perder em pensamentos sem encontrar respostas.
    `
  },
  {
    name: "A Roda da Fortuna",
    keywords: "Mudança, destino, ciclos, sorte, evolução, reviravolta e carma.",
    rKeywords: "Estagnação, resistência à mudança, má sorte, ciclos repetitivos e falta de controle.",
    description: `
    Vemos uma roda que parece flutuar nas nuvens indicando que o reinoo espiritual está conectado ao reino
    físico. As criaturas nas nuvens são signos do zodíaco e representam as forças estavéis que sustentam a 
    roda em si. Abaixo da nuvem, está Anúbis, deus egipcío dos mortos que representa vida, morte e renascimento.
    A esfinge em cima da roda multifacetada representa a diversidade da vida. A cobra voltada para baixo é um
    símbolo dos desafios da vida que devemos enfrentar.Todas as criaturas giram em torno da roda, nos mostrando
    que a vida tem seus altos e baixos, em um ciclo de constante mudanças.
    `,
    meaning: `
    A Roda da Fortuna gira — e com ela, a vida. Essa carta traz o lembrete de que nada é fixo, tudo está em movimento. 
    Quando ela aparece, espere mudanças inesperadas, reviravoltas ou uma virada de sorte. 
    Pode ser um momento de altos e baixos, mas é sempre um convite a aceitar o fluxo da vida, confiar no destino 
    e entender que cada fase tem seu propósito. Ela também fala de carma e de eventos que não estão 100% sob seu 
    controle, mas que te empurram pra evolução.
    `,
    rMeaning: `
    Invertida, a Roda pode indicar que você está preso em padrões repetitivos, com medo de sair da zona de conforto 
    ou resistindo às mudanças que a vida está pedindo. Também pode representar frustrações por situações que parecem 
    estar fora do seu controle ou uma fase de "má sorte". Mas mesmo assim, ela lembra que tudo muda — o momento difícil 
    também vai passar.
    `
  },
  {
    name: "A Justiça",
    keywords: "Verdade, equilíbrio, responsabilidade, justiça, imparcialidade e clareza.",
    rKeywords: "Injustiça, desonestidade, desequilíbrio, falta de responsabilidade e negação da verdade.",
    description: `
    Vemos uma figura feminina sentada entre dois pilares, segurando uma espada erguida (verdade e ação) em 
    uma mão e uma balança (equilíbrio e julgamento) na outra. Ela usa uma coroa com um símbolo quadrado, representando 
    o pensamento lógico e a clareza mental. É uma imagem sóbria, estática, que transmite ordem, imparcialidade 
    e análise justa.
    `,
    meaning: `
    A Justiça vem pra dizer: tudo tem consequência. Ela fala sobre verdade, ética e responsabilidade pelos seus atos. 
    Essa carta traz o chamado pra ser justo com os outros — e consigo mesmo. Representa decisões importantes, avaliação 
    de situações com equilíbrio e até assuntos legais ou burocráticos. Também é um sinal de que a verdade virá à tona, 
    seja pro bem ou pro mal. É uma carta racional, que pede análise fria e honesta das coisas.
    `,
    rMeaning: `
    Invertida, a Justiça aponta pra distorção dos fatos, falta de clareza ou manipulação da verdade. Pode haver injustiça 
    sendo cometida — por você ou contra você. Também pode indicar negar a própria responsabilidade, culpar os outros ou 
    tomar decisões sem ponderar os dois lados da balança. É um alerta pra olhar com mais objetividade e retidão.
    `
  },
  {
    name: "O Enforcado",
    keywords: "Pausa, rendição, sacrifício, nova perspectiva, aceitação e espera consciente.",
    rKeywords: "Resistência, estagnação, sacrifício em vão, vitimismo e teimosia.",
    description: `
    O Enforcado está pendurado de cabeça pra baixo por um pé, mas com expressão tranquila. Ele 
    tem uma aura dourada ao redor da cabeça, mostrando que está num momento de iluminação ou clareza 
    espiritual. A pose dele forma uma cruz com o corpo, e o fundo é simples, reforçando o foco na 
    interiorização e entrega. Ele não está em sofrimento — ele está em reflexão.
    `,
    meaning: `
    O Enforcado aparece quando a vida te pede uma pausa forçada ou voluntária, pra que você possa ver 
    as coisas de um novo jeito. Ele fala sobre rendição ao momento presente, deixar o controle de lado 
    e entender que nem sempre é hora de agir — às vezes é preciso esperar, refletir, sacrificar algo, 
    ou mudar a perspectiva. Essa carta também traz um tom espiritual, como quem se desapega do ego pra 
    enxergar com mais clareza.
    `,
    rMeaning: `
    Invertido, o Enforcado mostra resistência à mudança, medo de largar o controle ou de fazer um sacrifício 
    necessário. Pode indicar sensação de estagnação, frustração com a espera ou uma tendência a se prender 
    em situações que já não fazem sentido. Às vezes, o problema é que você não está disposto a ver por outro 
    ângulo — e isso trava seu avanço.
    `
  },
  {
    name: "A Morte",
    keywords: "Fim de ciclo, transformação, renascimento, libertação e mudança profunda.",
    rKeywords: "Resistência à mudança, medo de deixar ir, estagnação e transição dolorosa.",
    description: `
    Vemos um cavaleiro esquelético montado num cavalo branco, com uma bandeira preta com uma flor branca 
    (pureza no meio da escuridão). Ele avança indiferente, enquanto reis, crianças e até padres caem ou se 
    ajoelham diante dele — ninguém escapa da Morte. Ao fundo, o sol nasce entre duas torres, simbolizando 
    que todo fim traz um novo começo. A imagem mostra que a transformação é inevitável, mas cheia de possibilidades.
    `,
    meaning: `
    Apesar da fama, A Morte não fala de morte literal. Ela fala de fins necessários, de deixar algo ir pra 
    que outra coisa possa nascer. Pode ser o fim de um relacionamento, de um trabalho, de uma fase — qualquer 
    coisa que não serve mais e precisa ser encerrada. Essa carta representa transformações profundas, como uma 
    "faxina" na alma, onde o que não é mais essencial é cortado fora. Dói? Às vezes sim. Mas é libertador e 
    necessário pra evolução.
    `,
    rMeaning: `
    Invertida, A Morte indica que você pode estar agarrado demais ao passado ou com medo de mudanças inevitáveis. 
    Pode estar evitando encerrar ciclos, o que gera estagnação, sofrimento prolongado ou uma transformação travada. 
    É como segurar uma porta que já devia ter sido fechada. Essa carta invertida te empurra a soltar o controle e 
    aceitar o fluxo da vida.
    `
  },
  {
    name: "A Temperança",
    keywords: " Equilíbrio, harmonia, paciência, moderação, cura e adaptação.",
    rKeywords: "Desequilíbrio, excesso, impaciência, conflito interno e descontrole.",
    description: `
    Vemos um anjo, com um pé na água (emoção) e outro na terra (razão). Ele segura duas taças, passando água de 
    uma pra outra com fluidez — como se estivesse misturando elementos pra encontrar o ponto perfeito. Ao fundo, 
    há um caminho que leva até o sol, mostrando que a harmonia leva à iluminação. Tudo na imagem é sereno, leve 
    e equilibrado.
    `,
    meaning: `
    A Temperança chega como um respiro de paz e equilíbrio. Ela fala de moderação, de saber encontrar o meio-termo, 
    de unir opostos com sabedoria. É uma carta que convida a ter paciência, esperar o tempo certo das coisas e agir 
    com calma. Também representa cura emocional, reconciliações e adaptação. Se algo anda confuso ou intenso, a Temperança 
    pede pra você respirar fundo e achar o ponto de equilíbrio. Nem demais, nem de menos — na medida certa.
    `,
    rMeaning: `
    Invertida, a Temperança mostra que algo está fora de controle: excesso de emoções, atitudes impulsivas ou até conflitos 
    internos. Pode ser um sinal de que você está indo de um extremo ao outro, sem conseguir encontrar o centro. Também pode 
    representar dificuldade de se adaptar a uma nova fase ou situação. É hora de desacelerar, reavaliar e buscar o equilíbrio de volta.
    `
  },
  {
    name: "O Diabo",
    keywords: "Vícios, obsessões, desejos intensos, dependência, materialismo e ilusão de prisão.",
    rKeywords: "Libertação, fim de vícios, consciência, rompendo amarras e revelações.",
    description: `
    Vemos uma figura demoníaca com chifres e asas de morcego, sentada num trono negro, com uma tocha na mão. 
    A seus pés, há um casal nu acorrentado, parecido com os Enamorados, mas agora presos e distorcidos — 
    mostrando que o amor puro se tornou possessivo ou desequilibrado. Mas olha o detalhe: as correntes são 
    soltas. Eles podem sair quando quiserem, só precisam se dar conta disso. Ao redor, símbolos de luxúria, 
    desejos e vícios.
    `,
    meaning: `
    O Diabo fala sobre tudo aquilo que nos prende, mas que às vezes a gente nem percebe. Pode ser um relacionamento 
    tóxico, um vício, um pensamento negativo repetitivo, uma dependência emocional, ou até aquele desejo incontrolável 
    por algo ou alguém. Essa carta te faz olhar de frente pra tuas sombras, tentações e excessos, mostrando que a prisão 
    muitas vezes é autoimposta. O Diabo não te prende — você fica ali por escolha, por medo ou por prazer.
    `,
    rMeaning: `
    Quando invertido, o Diabo indica que você está se libertando dessas correntes, seja deixando um vício, rompendo 
    com algo tóxico ou enxergando o que antes estava encoberto. Ele mostra consciência, vontade de sair do ciclo 
    repetitivo e recuperação do controle sobre si mesmo. É como se a venda estivesse caindo dos olhos.
    `
  },
  {
    name: "A Torre",
    keywords: "Colapso, revelações, ruptura, mudança repentina, choque de realidade e despertar.",
    rKeywords: "Resistência à mudança, transformação interna, medo de encarar verdades e reconstrução.",
    description: `
    Vemos uma torre alta sendo atingida por um raio, com chamas explodindo pelas janelas e duas pessoas caindo. 
    A torre tem uma coroa no topo sendo lançada fora — simbolizando o ego ou estruturas falsas que ruem. O 
    céu é escuro, e a sensação é de caos total. Mas esse colapso revela uma verdade escondida: nem tudo que parece 
    firme é real, e às vezes a queda é o único caminho pra liberdade.
    `,
    meaning: `
    A Torre chega com um boom! — algo desmorona, um plano falha, uma verdade vem à tona ou uma situação chega ao 
    limite. Ela representa mudanças bruscas e inesperadas, geralmente desconfortáveis, mas necessárias pra tirar 
    você de uma ilusão. É como se o universo dissesse: "Você não quis mudar? Então vou mudar por você." Apesar do 
    caos, essa carta abre espaço pra recomeços mais sólidos, com base na verdade. É um despertar doloroso, mas libertador.
    `,
    rMeaning: `
    Invertida, a Torre mostra que você está resistindo à queda de algo que precisa ruir. Pode estar tentando manter 
    de pé uma estrutura frágil por medo de perder ou mudar. Também pode indicar que a transformação está sendo mais 
    interna do que externa, e que você está vivendo essa ruptura de forma silenciosa, mas intensa. Em alguns casos, 
    já passou o pior, e agora é hora de reconstruir aos poucos.
    `
  },
  {
    name: "A Estrela",
    keywords: "Esperança, cura, inspiração, fé, renovação e tranquilidade.",
    rKeywords: "Desânimo, falta de fé, desilusão, bloqueio criativo e necessidade de autocuidado.",
    description: `
    Vemos uma mulher nua ajoelhada ao lado de um lago, derramando água em dois lugares: uma parte no solo 
    (matéria) e outra no rio (emoções). Acima dela, uma estrela grande brilha com outras sete menores ao redor. 
    O céu é calmo, e tudo parece sereno. A nudez da mulher representa autenticidade, pureza e entrega, e a 
    estrela é o símbolo de esperança divina guiando o caminho.
    `,
    meaning: `
    A Estrela é um presente depois da queda. Ela representa aquele momento em que você volta a respirar com 
    leveza, recupera as esperanças e sente que as coisas vão melhorar. Essa carta fala sobre cura emocional, 
    inspiração, fé na vida e no futuro. É um sinal claro de que o pior já passou, e agora você pode se alinhar 
    com seus sonhos, com o universo, com seu verdadeiro eu. Ela também é muito espiritual — traz paz e conexão 
    com algo maior.
    `,
    rMeaning: `
    Quando invertida, A Estrela mostra que você pode estar se sentindo perdido(a), sem direção ou desanimado(a).
    Pode ter perdido a fé em si, nas pessoas ou no processo. Também pode sinalizar um momento de exaustão, em 
    que você precisa cuidar melhor do seu corpo e mente. Ela te convida a voltar a olhar pra dentro, reconectar 
    com sua essência e lembrar que você ainda pode brilhar — mesmo que só consiga ver uma estrela de cada vez.
    `
  },
  {
    name: "A Lua",
    keywords: " Intuição, ilusão, confusão, mistério, sonhos e medo do desconhecido.",
    rKeywords: "Clareza surgindo, ilusões reveladas, despertar da consciência e enfrentando medos.",
    description: `
    Vemos uma lua cheia brilhando no céu, com raios iluminando uma estrada tortuosa. Um cão e um lobo 
    uivam, representando o instinto domesticado e o selvagem. Entre eles, um lagostim sai da água e começa 
    sua jornada pela estrada — um símbolo de algo profundo emergindo do inconsciente. Ao fundo, há duas torres, 
    indicando portais ou limites entre mundos. Tudo é simbólico e meio onírico (devaneador) — exatamente como a energia da carta.
    `,
    meaning: `
    A Lua fala de momentos em que a razão não dá conta e a única lanterna é a intuição. É uma carta que mergulha 
    no inconsciente, nos sonhos, medos, inseguranças e ilusões. Nem tudo está claro quando ela aparece — pode haver 
    enganos, confusão, mentiras ou autoengano. Mas também é uma carta profundamente espiritual e sensível, pedindo 
    pra você sentir mais do que tentar entender. O recado é: siga com cuidado, ouça sua intuição e espere a névoa 
    passar antes de agir.
    `,
    rMeaning: `
    Invertida, A Lua mostra que a confusão começa a se dissipar. Algo que estava oculto pode ser revelado — 
    uma verdade vindo à tona, uma intuição se confirmando, ou um medo sendo enfrentado. Também pode indicar 
    dificuldade de se conectar com a intuição ou medo de encarar verdades internas, então a carta invertida 
    pode ser um chamado pra olhar com mais coragem para o que está dentro de você.
    `
  },
  {
    name: "O Sol",
    keywords: "Felicidade, clareza, sucesso, vitalidade, crescimento e alegria.",
    rKeywords: "Pessimismo, insegurança escondida, decepção, brilho ofuscado e expectativas não atendidas.",
    description: `
    A carta O Sol mostra um sol radiante com uma face humana, irradiando luz em linhas retas e onduladas — 
    símbolo da energia consciente e vitalidade. Abaixo do sol, vemos uma criança nua, que representa a pureza, 
    a inocência e a autenticidade, montada em um cavalo branco, que simboliza força, pureza e progresso sem medo. 
    A criança segura uma bandeira vermelha vibrante, sinal de vitória, vida e celebração.
    Ao fundo, há um muro coberto por grandes girassóis, que seguem a luz do sol, indicando crescimento, abundância 
    e otimismo. Toda a cena é cheia de calor, luz e positividade, representando um momento de clareza e expansão.
    `,
    meaning: `
    Quando o Sol aparece, é sinal de que tudo tá caminhando bem. É a carta da felicidade verdadeira, da clareza mental e emocional, 
    do sucesso e da energia positiva. Ela traz confiança, brilho pessoal e crescimento — seja em projetos, relacionamentos ou em você mesma. 
    Representa também um momento de paz, gratidão e leveza, como se o universo dissesse: “Vai, brilha!” 
    `,
    rMeaning: `
    Invertido, o Sol ainda é uma carta boa, mas pode sinalizar que você não está conseguindo enxergar 
    ou aproveitar a luz ao seu redor. Pode haver dúvidas, inseguranças ou decepções mesmo em momentos 
    aparentemente bons. Às vezes é só um lembrete de que nem todo dia é ensolarado, mas o sol ainda está lá, 
    mesmo atrás das nuvens. Também pode falar de expectativas altas demais ou uma alegria meio forçada.
    `
  },
  {
    name: "O Julgamento",
    keywords: "Renascimento, revelação, chamado, transformação, libertação e decisão importante.",
    rKeywords: "Negação, arrependimento, estagnação, medo de mudar e julgamento interno.",
    description: `
    Vemos um anjo no céu, tocando uma trombeta prateada com uma bandeira branca marcada por uma cruz 
    vermelha — símbolo de chamada divina e renascimento. Abaixo, várias pessoas nuas surgem de túmulos, com os 
    braços erguidos em direção ao céu, atendendo ao chamado do anjo. Essas figuras representam almas sendo 
    despertadas ou julgadas, prontas para o recomeço espiritual. Ao fundo, há montanhas e água, simbolizando 
    a transição do mundo material para o espiritual.
    Toda a cena transmite a ideia de ressurreição, avaliação final e redenção, com um forte 
    apelo ao autoconhecimento e renovação interior.
    `,
    meaning: `
    O Julgamento fala de um grande despertar espiritual ou emocional. É aquele momento em que você é chamada a 
    olhar pra dentro, reconhecer o que precisa mudar e renascer para algo novo. Também representa momentos de 
    decisão importante, onde suas ações passadas vêm à tona e você precisa lidar com elas — mas não com culpa, e sim 
    com maturidade e aprendizado. É o chamado pra evoluir, deixar o passado onde está e responder com coragem ao que 
    a vida está pedindo de você agora. 
    `,
    rMeaning: `
    Invertida, essa carta pode indicar que você está evitando mudanças importantes ou tem medo de encarar 
    decisões difíceis. Pode estar sentindo culpa, arrependimento ou um julgamento interno severo, o que 
    bloqueia o crescimento. Às vezes, o Julgamento invertido mostra que você já sabe o que precisa ser feito, 
    mas está hesitando, talvez por medo de sair da zona de conforto.
    `
  },
  {
    name: "O Mundo",
    keywords: "Conclusão, realização, plenitude, sucesso, celebração e totalidade.",
    rKeywords: "Ciclos inacabados, frustração, sensação de estagnação, falta de encerramento e dispersão.",
    description: `
    Uma mulher nua dança no centro de uma guirlanda oval, simbolizando plenitude e encerramento de ciclo. 
    Ela segura dois bastões, representando equilíbrio. Nos quatro cantos, aparecem um anjo, uma águia, um leão e 
    um touro — ligados aos quatro elementos, aos signos fixos do zodíaco e à harmonia universal. Tudo na carta 
    expressa completude, leveza e celebração da jornada.
    `,
    meaning: `
    O Mundo representa o fim de um ciclo com sucesso e realização. É a carta da conclusão plena, quando você 
    olha pra trás e vê que tudo o que passou levou você até aqui — mais forte, mais sábia, mais inteira. Traz 
    aquela sensação de missão cumprida, crescimento verdadeiro e integração entre corpo, mente e espírito. 
    Também pode indicar viagens, mudanças importantes ou reconhecimento pelo que foi feito. 
    `,
    rMeaning: `
    Invertida, essa carta pode sugerir que algo ainda está incompleto ou mal resolvido, mesmo que tudo pareça 
    “quase lá”. Pode haver frustração, bloqueios internos ou a sensação de que o ciclo nunca termina. Às vezes 
    é só uma falta de foco ou medo de fechar um capítulo, o que impede o próximo passo. Também pode indicar 
    falta de alinhamento com seus objetivos maiores.
     `
  }
];

const naipeCopas = [
  {
    name: "Ás de Copas",
    keywords: "Amor novo, emoções à flor da pele, conexão espiritual, alegria, bênçãos emocionais, começo promissor no amor ou na intuição.",
    rKeywords: "Bloqueio emocional, amor não correspondido, falta de autocuidado, medo de se abrir e decepções sentimentais.",
    description: `
    Geralmente mostra uma taça transbordando água (emoções) com uma pomba (símbolo de paz e espiritualidade) 
    e cinco gotas caindo (representando os sentidos ou bênçãos divinas). O cálice parece estar recebendo um 
    presente do universo — ou seja, está tudo pronto pra começar algo lindo, se você estiver de coração aberto.
    `,
    meaning: `
    O Ás de Copas é como aquela primeira brisa que vem antes da chuva: suave, promissora e cheia de sentimento. 
    Essa carta é um convite do universo para abrir o peito e deixar o amor entrar — seja um romance que chega, 
    um recomeço cheio de carinho, ou até uma onda de inspiração criativa que vem do coração. É uma taça cheia 
    de possibilidades emocionais, prontinha pra ser brindada. Representa um momento doce, onde tudo parece 
    mais leve, mais bonito, mais verdadeiro.
    Quando aparece, é sinal de que algo lindo está nascendo — uma emoção nova, uma relação sincera, uma cura 
    interior. Pode ser um sinal claro de que você está pronta pra amar de novo, sentir de verdade ou simplesmente 
    se conectar mais profundamente com você mesma. 
    `,
    rMeaning: `
    Invertido, o cálice derrama. Em vez de acolher o amor, ele escapa pelos dedos. Talvez você esteja evitando 
    sentir, se protegendo demais, ou com medo de se machucar de novo. Pode indicar dificuldades em confiar, em 
    se permitir ser vulnerável ou até uma sensação de vazio emocional, como se algo estivesse faltando, mesmo 
    com tudo no lugar.
    Também pode ser um alerta: será que você está buscando amor fora quando deveria cuidar primeiro do que sente 
    por si mesma? O Ás invertido pede reconexão interna, antes de buscar a doçura do lado de fora.
     `
  },
  {
    name: "Dois de Copas",
    keywords: "Conexão profunda, parceria, romance, amor correspondido, harmonia, união emocional e cumplicidade.",
    rKeywords: "Desentendimento, falta de sintonia, rompimento, desequilíbrio emocional, relações tóxicas ou desgastadas.",
    description: `
    Dois personagens trocam taças — símbolo do amor mútuo — sob a presença de um caduceu (símbolo de equilíbrio e cura) 
    com um leão alado no topo, que representa paixão e força. Tudo na imagem vibra parceria, entrega e respeito. É uma 
    dança onde ambos conhecem o ritmo do outro.
    `,
    meaning: `
    O Dois de Copas é o encontro que faz sentido. É quando duas pessoas se olham e, mesmo sem saber o porquê, sentem 
    que ali tem algo especial. Essa carta fala de reciprocidade — tanto no amor quanto em amizades ou parcerias de 
    alma. Aqui, há troca verdadeira, há espelho, há afeto de mão dupla.
    Quando surge, ela pode sinalizar o início de um relacionamento equilibrado, onde há respeito, atração e parceria 
    emocional. Também pode representar a cura de vínculos antigos ou um momento de reconciliação, onde os corações 
    voltam a se alinhar. É a carta dos olhares que se entendem, das mãos que se procuram e das promessas feitas em silêncio.
    `,
    rMeaning: `
    Quando o Dois de Copas sai invertido, os fios da conexão estão embaraçados. Pode haver amor, sim, mas algo está 
    desajustado: expectativas diferentes, falta de diálogo, ou um desgaste emocional que impede o relacionamento de 
    fluir. Também pode apontar pra relações codependentes, onde um dá demais e o outro pouco, ou simplesmente uma 
    separação iminente.
    Em contextos não românticos, pode indicar a perda de sintonia com alguém importante, um afastamento doloroso ou 
    até um conflito interno entre o que o coração sente e o que a mente quer aceitar.
     `
  },
  {
    name: "Três de Copas",
    keywords: "Amizade, comemoração, reencontro, apoio mútuo, alegria compartilhada, celebrações e círculo de confiança.",
    rKeywords: "Excesso, exclusão, fofocas, relações superficiais, falta de sintonia no grupo e mal-entendidos.",
    description: `
    Três mulheres erguem suas taças ao céu, como se estivessem em um brinde, cercadas por flores e frutos. É uma cena 
    leve, alegre, de comunhão. Elas dançam em círculo — mostrando que estão ali umas pelas outras, em harmonia e equilíbrio. 
    Um lembrete visual de que compartilhar alegrias é tão importante quanto vivê-las.
    `,
    meaning: `
    O Três de Copas é aquela carta que te lembra que viver fica mais bonito quando é vivido em boa companhia. 
    É sobre amizade verdadeira, apoio emocional e alegrias divididas. Representa momentos de comemoração, reencontros 
    felizes ou a sensação de pertencimento com pessoas que te entendem e te acolhem.
    Ela pode aparecer quando você está cercada de gente que te levanta, te anima e te faz sentir que não está sozinha. 
    Também pode indicar boas notícias chegando — como um convite, uma comemoração ou até um nascimento, noivado, formatura... 
    É uma carta que vibra em leveza, amor entre amigas, e momentos em que o coração dança livre.
    `,
    rMeaning: `
    Quando invertido, o Três de Copas muda o tom da festa. Pode apontar para exclusão social, fofocas, ou amizades que 
    não são tão verdadeiras assim. Às vezes é um lembrete de que você está tentando se encaixar em um grupo que não 
    vibra com a sua energia — ou que alguém pode estar vibrando falsidade perto de você.
    Também pode indicar excessos, como exagerar em festas ou fugir da realidade através de distrações. Em leituras 
    sobre relacionamento, pode sugerir a presença de uma terceira pessoa causando ruídos ou conflitos — mas sempre 
    vale olhar as cartas ao redor antes de tirar conclusões.
     `
  },
  {
    name: "Quatro de Copas",
    keywords: "Tédio, apatia, introspecção, insatisfação emocional, desânimo e necessidade de olhar pra dentro.",
    rKeywords: "Novas possibilidades, reavivamento emocional, sair da estagnação, reabrir o coração e despertar interior.",
    description: `
    Um jovem sentado sob uma árvore, braços cruzados, olhos voltados para baixo. Três taças diante dele — e uma 
    quarta sendo oferecida por uma mão divina que surge do nada, como uma benção inesperada. Mas ele nem percebe pois está focado
    nas outras que estão a sua frente, que podem significar o passado, , situações insatisfatórias de alguma maneira.
    A cena é de isolamento emocional. A taça no ar representa uma nova chance de sentir, mas ele ainda não consegue ver.
    `,
    meaning: `
    O Quatro de Copas é aquele momento em que nada parece bom o suficiente, mesmo que o universo esteja oferecendo algo precioso. 
    A pessoa da carta está tão voltada pra dentro, tão presa aos próprios pensamentos ou sentimentos, que acaba perdendo chances, 
    pessoas e sinais ao redor.
    Essa carta não é negativa — ela fala de pausa emocional, de um tempo necessário pra digerir o que se sente, pra entender o 
    que realmente está fazendo falta. Às vezes, a insatisfação não é com o mundo — é com o que ficou mal resolvido dentro da gente. 
    Pode ser um convite pra olhar de novo pra vida, com mais presença e menos julgamento.
    `,
    rMeaning: `
    Quando invertido, o Quatro de Copas pode ser um sopro de ar fresco. Ele indica que você está pronta pra sair da estagnação, 
    pra enxergar novas oportunidades emocionais que antes não via ou não queria aceitar. Pode simbolizar cura após uma fase 
    introspectiva ou até um chamado pra arriscar de novo, mesmo com o coração ainda em recuperação.
    Mas também pode ser um aviso: cuidado pra não ignorar seus próprios sentimentos em nome de seguir em frente rápido demais. 
    Curar não é pular etapas.
     `
  },
  {
    name: "Cinco de Copas",
    keywords: "Luto emocional, arrependimento, frustração, decepção, perda, tristeza, olhar preso ao passado.",
    rKeywords: "Aceitação, perdão, cura emocional, superação, esperança se refazendo, olhar para o que ainda existe.",
    description: `
    Uma figura encapuzada, de costas, olha fixamente para três taças derrubadas no chão. Elas representam o que foi perdido. 
    Atrás dela, duas taças ainda estão intactas — mas ela ainda não consegue vê-las. Ao fundo, um rio corre, e há uma ponte 
    ligando um lado ao outro. O caminho existe, mas ela precisa decidir atravessar.
    `,
    meaning: `
    O Cinco de Copas é aquela carta que aparece quando algo partiu o coração — e a pessoa ainda não conseguiu seguir adiante. 
    Pode ter sido uma separação, uma amizade rompida, um erro que deixou marcas… ou até um sonho que não se realizou. 
    É uma carta que nos encontra no momento da dor, quando a gente ainda tá olhando o que caiu, o que quebrou, o que machucou. 
    Mas ela também é um lembrete gentil: duas taças continuam de pé. Ainda há amor, ainda há caminhos. Só que o olhar ainda está 
    voltado pro chão, preso naquilo que não pode mais ser mudado.
    `,
    rMeaning: `
    Quando invertida, essa carta indica que o coração começa a se abrir de novo. A dor ainda existe, mas não define mais tudo. 
    É como uma luz entrando pela fresta — pequenas esperanças voltam, o perdão começa a nascer (dos outros ou de si mesma), 
    e você já consegue pensar no futuro sem se sentir esmagada.
    Às vezes também fala da importância de aceitar a dor como parte do processo, sem se prender nela pra sempre. A vida 
    não para quando algo quebra — ela se reconstrói diferente.
     `
  },
  {
    name: "Seis de Copas",
    keywords: "Nostalgia, infância, reencontro, pureza, inocência, conexão afetiva e boas lembranças.",
    rKeywords: "Apego ao passado, idealização, dificuldade de crescer, reviver padrões antigos e medo de amadurecer.",
    description: `
    Duas crianças se encontram em um jardim florido. Uma oferece uma taça cheia de flores pra outra. A cena transmite 
    ternura, generosidade e carinho genuíno — sem interesses, sem máscaras. O ambiente é tranquilo, como se o tempo tivesse 
    parado ali, só pra eternizar aquele instante puro.
    `,
    meaning: `
    O Seis de Copas é como abrir uma caixinha de memórias boas. Ele fala de sentimentos puros, momentos que marcaram o 
    coração e aquela sensação de segurança que a gente sente quando se reconecta com algo (ou alguém) do passado. Pode 
    indicar reencontros, reconciliações, ou simplesmente uma fase em que o emocional está voltado pra lembranças felizes. 
    Essa carta também pode ser um convite a resgatar a leveza e a espontaneidade — agir com mais doçura, confiar um pouco 
    mais, lembrar de quem você era antes do mundo te endurecer.
    `,
    rMeaning: `
    Invertido, o Seis de Copas mostra que talvez o passado esteja te puxando pra trás. Pode rolar um apego a lembranças 
    idealizadas, ou até um padrão emocional repetido, como se você estivesse tentando reviver algo que já não cabe 
    mais na sua vida atual.
    Também pode apontar pra dificuldade em crescer emocionalmente — como se o medo de amadurecer estivesse travando 
    suas decisões. Às vezes a saudade vira prisão, e é aí que essa carta vem como alerta.
     `
  },
  {
    name: "Sete de Copas",
    keywords: "Fantasias, múltiplas opções, indecisão, ilusões, escolhas emocionais e confusão.",
    rKeywords: "Clareza emocional, escolhas conscientes, foco, discernimento e realismo.",
    description: `
    Um homem observa sete taças flutuando em nuvens, cada uma com um símbolo diferente: uma joia, uma serpente, 
    uma máscara, um castelo, uma mulher, uma cabeça de dragão, uma figura envolta em pano. Todas representam desejos 
    ou tentações, mas algumas escondem perigos. A imagem transmite fascínio e confusão. A escolha certa pode te elevar — 
    ou te enganar.
    `,
    meaning: `
    O Sete de Copas fala de um coração que tá cheio de vontades, mas sem saber pra onde ir. Pode ser uma fase de devaneios, 
    onde você sonha muito, planeja tudo na mente, mas tem dificuldade de tomar decisões. Ou então, tantas opções aparecem que 
    você se sente travada, perdida entre o medo de escolher errado e a ilusão de que dá pra ter tudo. Essa carta também alerta 
    pra ilusões emocionais — paixões que parecem incríveis mas são instáveis, desejos que parecem urgentes mas são só carência. 
    O Sete de Copas diz: "Pisa com cuidado. Nem tudo que te encanta é real.
    `,
    rMeaning: `
    Quando aparece invertido, ele indica que a névoa tá começando a sumir. Você começa a enxergar as coisas com mais clareza, 
    a fazer escolhas conscientes e saudáveis, e a separar fantasia de realidade. Pode representar uma decisão importante sendo 
    tomada com o coração mais centrado. Por outro lado, em alguns casos, pode significar desistir dos sonhos por medo ou frustração.
     `
  },
  {
    name: "Oito de Copas",
    keywords: "Despedida, abandono emocional, busca interior, insatisfação, recomeço, seguir em frente.",
    rKeywords: "Fuga emocional, negação, medo de partir, estagnação, retorno ao passado.",
    description: `
    Um viajante solitário se afasta de oito taças cuidadosamente empilhadas. A lua e uma sombra de eclipse iluminam o 
    céu — sugerindo mistério e emoções ocultas. A imagem transmite aquele momento íntimo de decisão, onde se escolhe a 
    estrada em vez da estagnação. Mesmo com dor… é um ato de amor-próprio.
    `,
    meaning: `
    O Oito de Copas é o momento em que o coração sabe que precisa partir. Algo que um dia foi importante — uma relação, 
    um sonho, uma fase — agora já não preenche mais. Ainda existe sentimento, sim. Mas a conexão não é mais suficiente. 
    E a alma sabe disso. Essa carta representa a coragem de largar o conhecido em busca do que realmente faz sentido. 
    É aquela caminhada solitária, cheia de dúvidas, mas feita com firmeza porque você sabe que merece mais — mesmo sem 
    saber exatamente o que é esse "mais".
    `,
    rMeaning: `
    Quando invertido, o Oito de Copas mostra resistência. A pessoa sente que algo não está mais certo, mas não consegue 
    se desligar. Pode ser medo de machucar alguém, medo da solidão ou de enfrentar o vazio.
    Também pode indicar retorno ao passado, revisitar uma história mal resolvida ou insistir numa situação desgastada. 
    Às vezes, é necessário parar e se perguntar: estou ficando por amor ou por medo de partir?
     `
  },
  {
    name: "Nove de Copas",
    keywords: "Realização, gratidão, prazer, desejos atendidos, plenitude emocional e autoestima elevada.",
    rKeywords: "Excesso, vaidade, superficialidade, insatisfação oculta e ego inflado.",
    description: `
    Um homem está sentado com os braços cruzados e um sorrisinho de quem sabe o que tem. Atrás dele, nove taças 
    perfeitamente alinhadas como se fossem troféus expostos. A cena passa uma sensação de orgulho, confiança e contentamento, 
    ele trabalhou duro por essas taças e está satisfeito com seus feitos. Ele não está em movimento — está curtindo o momento. 
    `,
    meaning: `
    O Nove de Copas é conhecido como a carta dos desejos realizados. Quando ela aparece, indica que você está (ou está 
    prestes a estar) num momento de realização emocional, sentindo orgulho do que construiu e uma vibe de “valeu a pena”.
    Ela fala de prazer, gratidão e autoestima. É sobre se sentir bem consigo mesma, com suas conquistas, com quem você é. 
    E o melhor: sem depender da aprovação de ninguém. Só você, de boa com o seu mundo. Às vezes, também indica que um desejo 
    importante está prestes a se realizar — aquele pedido do coração que vem sendo nutrido há tempos. Sim, o universo escutou.
    `,
    rMeaning: `
    Quando invertido, essa carta pode revelar uma verdade incômoda: por fora, tudo parece bem… mas por dentro, falta algo. 
    Pode representar aquela felicidade “de fachada”, onde existe conquista, mas não existe plenitude.
    Também alerta pra excessos — comer demais, beber demais, querer demais. Tudo que é demais, desequilibra. Pode significar
    arrôgancia em relação a realizações e necessidade constante de validação e reconhecimento.
    E quando o ego fala mais alto, a alma perde o espaço de fala.
     `
  },
  {
    name: "Dez de Copas",
    keywords: "Plenitude emocional, amor verdadeiro, família, harmonia, felicidade compartilhada e final feliz.",
    rKeywords: "Desarmonia familiar, expectativas não atendidas, felicidade ilusória e falta de conexão.",
    description: `
    Um casal abraçado, com duas crianças brincando ao redor. Ao fundo, uma casa e um céu cheio de taças formando um arco, 
    como um arco-íris emocional. Tudo na imagem transmite alegria, segurança, pertencimento e plenitude. É como se dissesse: 
    “Você chegou em casa.”
    `,
    meaning: `
    O Dez de Copas representa o ápice da realização emocional. Aqui, os sentimentos estão em equilíbrio, os laços estão fortes, 
    e há amor fluindo de forma sincera e leve. É o tipo de carta que aparece quando existe alinhamento entre o que se sente e 
    o que se vive. É a carta dos relacionamentos maduros, das conexões duradouras, da felicidade construída — não por acaso, 
    mas com cuidado, afeto e verdade. Também fala de paz interior, de se sentir em casa com alguém (ou consigo mesma).
    Se estiver perguntando sobre amor, essa carta é um sim gigante, com fogos de artifício e céu colorido. Se for sobre projetos 
    ou caminhos, indica que há realização não só externa, mas principalmente no coração.
    `,
    rMeaning: `
    Invertida, a carta revela rachaduras onde deveria haver união. Pode ser um relacionamento que parece perfeito por 
    fora, mas carece de conexão real, ou expectativas que não estão sendo atendidas.
    Também pode indicar problemas familiares, mágoas mal resolvidas, ou uma visão idealizada de felicidade, 
    onde você espera um conto de fadas… e se frustra com a realidade. É o momento de recalibrar: o que é felicidade 
    real pra você?
     `
  },
  {
    name: "Valete de Copas",
    keywords: "Novidades emocionais, mensagens amorosas, sensibilidade, intuição, romantismo e início de sentimentos.",
    rKeywords: "Imaturidade emocional, ilusões, rejeição, insegurança e bloqueio sentimental.",
    description: `
    O jovem valete segura um cálice de onde, curiosamente, sai um peixinho — símbolo de surpresa emocional e intuição. 
    Ele está vestido com cores suaves e olha com carinho para o copo. O cenário é leve e o mar está ao fundo. Tudo 
    sugere inocência, surpresa e sentimento nascendo.
    `,
    meaning: `
    O Valete de Copas traz aquela energia de início emocional — pode ser um novo amor, um pedido de desculpas, uma inspiração 
    criativa ou até mesmo uma reconexão com os sentimentos. Ele é gentil, sensível, curioso e receptivo às emoções, mesmo que 
    ainda não saiba lidar com tudo. Essa carta também pode simbolizar mensagens doces chegando: um flerte, um elogio, um gesto 
    de carinho inesperado. Tudo que aquece o coração e faz sorrir de canto. Ela te convida a abrir espaço pra sentir — sem medo, 
    sem pressa, sem armadura.
    Às vezes, o Valete também representa uma parte de você que quer amar mais leve, criar com o coração e confiar na intuição.
    `,
    rMeaning: `
    Invertido, o Valete de Copas pode indicar imaturidade emocional — alguém que sente muito, mas não sabe como expressar ou 
    lidar. Também fala de ilusões românticas, expectativas irreais ou até decepções no campo afetivo.
    Pode mostrar uma energia mais fechada: medo de se abrir, de se machucar ou de ser vulnerável. Aqui, é importante se 
    perguntar: estou me protegendo… ou me afastando da chance de algo bonito?
     `
  },
  {
    name: "Cavaleiro de Copas",
    keywords: "Charme, romance, convite emocional, paixão, idealismo, proposta amorosa e sensibilidade.",
    rKeywords: "Sedução superficial, promessas vazias, drama emocional, fuga da realidade e instabilidade afetiva.",
    description: `
    O jovem valete seguO cavaleiro monta um belo cavalo branco, símbolo de pureza e intenção nobre. Ele carrega uma taça, 
    como se oferecesse seu sentimento com delicadeza. O cenário é calmo, e ele avança devagar — não com pressa, mas com 
    propósito. Tudo sugere intenção emocional, sensibilidade e desejo de conexão.
    `,
    meaning: `
    O Cavaleiro de Copas representa o movimento das emoções — alguém (ou algo) chegando com intenções românticas, sensíveis 
    ou criativas. Pode ser um convite, uma declaração, ou uma situação que mexe com o coração. Ele é o poeta do baralho: 
    envolvente, sonhador e cheio de sentimentos pra compartilhar. Essa carta também pode representar você, quando está 
    agindo com o coração aberto, se jogando numa ideia, num romance ou num sonho com paixão e entrega. É sobre seguir a 
    intuição com confiança — mesmo que o destino ainda não esteja tão claro. É a carta que aparece quando a vida quer 
    te lembrar: "É seguro sentir."
    `,
    rMeaning: `
    Invertido, o Cavaleiro de Copas pode indicar ilusões, manipulações emocionais ou expectativas irreais. Pode ser alguém 
    que encanta, mas não se compromete; que promete demais e entrega de menos. Às vezes, é uma fase onde há muita sensibilidade — 
    mas pouca estabilidade. Também pode falar de evitar emoções reais, fugir de conversas sérias ou se perder em fantasias. 
`
  },
  {
    name: "Rainha de Copas",
    keywords: "Intuição, empatia, compaixão, amor maduro, sensibilidade profunda, apoio emocional e espiritualidade.",
    rKeywords: "Drama emocional, carência, manipulação sutil, instabilidade e dificuldade em impor limites.",
    description: `
    Sentada num trono à beira-mar, a Rainha segura um cálice ornamentado com cuidado — é o cálice mais elaborado do 
    tarô, e ela o trata com reverência. O mar ao fundo representa a profundidade dos sentimentos. Tudo nela é sobre o 
    sutil, o sensível, o espiritual. Ela sente o mundo com o coração nas mãos.
    `,
    meaning: `
    Essa rainha é a guardiã do coração. Ela representa alguém emocionalmente disponível, madura e acolhedora — seja você 
    ou alguém à sua volta. No jogo, pode sinalizar uma figura feminina (ou energia feminina) que oferece apoio emocional 
    sincero, ou até um momento de profunda conexão com o seu próprio mundo interno. A Rainha de Copas também te lembra da 
    importância de confiar na intuição, cuidar de si e dos outros com equilíbrio, e permitir que o amor flua com naturalidade. 
    Ela ama com presença e percebe além do que os olhos mostram. É a carta do amor que acolhe — não prende.
    `,
    rMeaning: `
    Invertida, essa rainha pode se perder na própria sensibilidade: absorve demais, sente demais, se doa demais… e esquece de si. 
    Pode indicar alguém instável, excessivamente emocional ou dependente. Também aponta pra dramas emocionais, chantagens sutis 
    ou dificuldade em lidar com os próprios sentimentos.
    `
  },

  {
    name: "Rei de Copas",
    keywords: "Equilíbrio emocional, compaixão, maturidade afetiva, liderança sensível, apoio estável e sabedoria emocional.",
    rKeywords: "Repressão emocional, manipulação sutil, frieza afetiva, instabilidade interna disfarçada, hipersensibilidade oculta.",
    description: `
    O rei está em seu trono flutuando no mar — firme, apesar das águas. Em uma mão, segura a taça; na outra, um cetro. 
    O mar em movimento representa o fluxo das emoções, mas ele se mantém estável, mostrando controle sobre seus sentimentos. 
    O céu é limpo, sinal de clareza mental e emocional.
    `,
    meaning: `
    O Rei de Copas representa alguém que sabe amar sem se desequilibrar. Ele tem sentimentos profundos, mas aprendeu a não deixar 
    que eles controlem suas decisões. É empático, compreensivo e ótimo conselheiro. Ele ama com calma, oferece apoio e sabe ouvir.
    Essa carta também fala sobre ser emocionalmente inteligente — conseguir entender as próprias emoções e as dos outros, sem se 
    perder nelas. No amor, pode indicar uma relação estável, madura e verdadeira. No campo pessoal, sugere autocontrole, sensibilidade 
    equilibrada e empatia sem martírio. É aquela presença que te traz paz só de estar por perto.
    `,
    rMeaning: `
    Invertido, o Rei de Copas pode revelar alguém que esconde seus sentimentos, reprime emoções ou manipula através do afeto.
    Às vezes, é o tipo que parece equilibrado por fora, mas por dentro está afundando. Pode falar de frieza emocional, ou do 
    uso do sentimento como forma de controle sutil. Também pode indicar dificuldade em expressar o que sente, ou medo de se 
    abrir e ser vulnerável. A mensagem aqui é: sentir não é fraqueza. Reprimir, sim.
    `
  }
];

const naipeOuros = [
  {
    name: "Ás de Ouros",
    keywords: "Nova oportunidade, começo promissor, prosperidade, segurança, estabilidade, bens materiais e potencial financeiro.",
    rKeywords: "Oportunidade perdida, instabilidade, medo de investir, foco excessivo no material, falta de planejamento.",
    description: `
    Uma mão surge das nuvens oferecendo uma moeda dourada, enquanto um jardim florido se abre ao fundo — o paraíso potencial. 
    Um arco se ergue adiante, simbolizando o portal para a abundância. O cenário é promissor, mas a mensagem é clara: cabe a 
    você atravessar esse portal.
    `,
    meaning: `
    O Ás de Ouros traz um novo começo no mundo físico ou financeiro — uma chance real de construir algo sólido. Pode ser 
    um novo trabalho, projeto, fonte de renda, ou até uma relação que tem tudo pra dar certo a longo prazo. Essa carta fala 
    de potencial bruto: algo que ainda vai crescer, se você souber nutrir. É a chance que chega com os pés no chão, mas com 
    brilho nos olhos. Representa abundância, prosperidade, novos recursos e estabilidade futura. Mas também lembra: não adianta 
    só receber — tem que plantar, cuidar e agir.
    `,
    rMeaning: `
    Quando aparece invertido, o Ás de Ouros alerta sobre desperdício de oportunidades ou insegurança pra investir no que tem valor. 
    Pode indicar medo de arriscar, desorganização financeira, ou uma visão muito limitada do que é sucesso.
    Também fala de promessas que não se concretizam, ou de foco exagerado em coisas materiais, esquecendo o que realmente importa.
    `
  },
  {
    name: "Dois de Ouros",
    keywords: "Equilíbrio, adaptação, flexibilidade, decisões práticas, malabarismo com responsabilidades e fluxo constante.",
    rKeywords: "Desorganização, sobrecarga, falta de controle, instabilidade, dificuldade de priorizar e decisões mal pensadas.",
    description: `
    Um personagem segura dois ouros conectados por um laço em forma de infinito — ele dança enquanto equilibra as moedas. 
    Ao fundo, ondas agitadas mostram que a vida está em movimento constante, cheia de altos e baixos, mas o personagem continua 
    sorrindo. Essa imagem representa a flexibilidade e a leveza necessárias para lidar com a instabilidade.
    `,
    meaning: `
    O Dois de Ouros fala sobre manter o equilíbrio em meio ao caos, administrar bem as responsabilidades e se adaptar 
    com jogo de cintura. É uma carta de fluxo dinâmico: as coisas estão mudando, os desafios vêm de todos os lados, 
    mas dá pra lidar — com flexibilidade e foco. Também pode representar a necessidade de tomar uma decisão prática, 
    envolvendo recursos, tempo ou energia. Nada está parado, mas tudo pode ser equilibrado… se você tiver presença e consciência.
    `,
    rMeaning: `
    Invertido, o Dois de Ouros mostra alguém se enrolando nas próprias tarefas, tentando dar conta de tudo sem sucesso. 
    Pode indicar excesso de demandas, má gestão do tempo ou instabilidade emocional/financeira.
    Também pode apontar para decisões feitas às pressas ou falta de planejamento.
    `
  },
  {
    name: "Três de Ouros",
    keywords: "Colaboração, aprendizado, trabalho em equipe, competência, construção de algo sólido e reconhecimento pelo esforço.",
    rKeywords: "Falta de colaboração, esforço sem reconhecimento, falhas no trabalho em equipe, desorganização, qualidade comprometida.",
    description: `
    Três pessoas estão reunidas, trabalhando juntas na construção de algo — uma parede de pedra, como se estivessem unindo 
    forças para criar uma fundação sólida. Cada uma delas tem um papel específico e é observada por um mestre, que parece 
    reconhecer o talento e esforço de cada uma. A imagem transmite a ideia de que o trabalho coletivo e a união de talentos 
    levam à criação de algo duradouro.
    `,
    meaning: `
    O Três de Ouros celebra a colaboração e a capacidade de aprender com os outros. Ele indica que a verdadeira força 
    está no trabalho em equipe, no reconhecimento dos talentos e no esforço conjunto. Esse é o momento de colocar a mão 
    na massa e criar algo sólido com as pessoas certas ao seu lado. Pode ser a carta que aparece quando você está no 
    caminho certo, com o apoio necessário para construir algo de valor, seja em projetos profissionais ou pessoais. É 
    sobre aperfeiçoamento, aprendizado mútuo e, eventualmente, ser reconhecido por isso.
    `,
    rMeaning: `
    Invertido, o Três de Ouros aponta para uma falta de união ou cooperação. Pode indicar falhas no trabalho em equipe, 
    projetos que não têm o reconhecimento merecido ou esforço individual que não leva a lugar nenhum. Talvez você 
    esteja se sentindo desvalorizado ou percebendo que, sozinho, não vai alcançar o sucesso desejado.
    O alerta aqui é: evite conflitos e busque parcerias sólidas. O trabalho em grupo é essencial para o progresso.
    `
  },
  {
    name: "Quatro de Ouros",
    keywords: "Segurança material, estabilidade financeira, possessividade, controle, cautela e medo de mudanças.",
    rKeywords: "Ganância, bloqueio emocional, medo de perda, rigidez, obsessão por posse e falta de generosidade.",
    description: `
    Uma figura segura fortemente quatro moedas — uma delas, até sobre a cabeça, como se fosse um tesouro a ser guardado 
    a qualquer custo. Ao redor, tudo parece estático, sem movimento. O cenário transmite uma sensação de segurança rígida e 
    controle excessivo, com a figura distante do fluxo natural das coisas.
    `,
    meaning: `
    O Quatro de Ouros fala sobre desejo de segurança e estabilidade, especialmente no plano material. Pode ser a 
    carta de quem está segurando com força o que conquistou, com medo de perder tudo. Representa aquele momento em 
    que você tenta controlar tudo ao seu redor, para garantir que nada fuja do seu domínio.
    No lado positivo, pode indicar um esforço para garantir uma base sólida e a necessidade de aproveitar as 
    conquistas financeiras e de recursos. Porém, se não tiver cuidado, pode também ser um sinal de que você está se 
    apegando demais ao que tem, sem abrir espaço para novas oportunidades.
    `,
    rMeaning: `
    Invertido, o Quatro de Ouros pode ser um sinal de que a obsessão pela posse está bloqueando seu progresso. 
    Medo de perder pode gerar um tipo de avareza, que impede o fluxo natural da vida. Também pode indicar uma dificuldade de 
    abrir mão ou compartilhar o que tem, levando a relações frias e distantes.
    A mensagem é: não se prenda tanto ao que tem. O verdadeiro valor está no fluxo, no desapego e na capacidade de 
    gerar abundância, não de segurar tudo para si.
    `
  },
  {
    name: "Cinco de Ouros",
    keywords: "Dificuldade financeira, exclusão, escassez, abandono, insegurança, carência emocional e preocupação com o futuro.",
    rKeywords: "Recuperação, apoio chegando, esperança, superação de crises e nova perspectiva diante das perdas.",
    description: `
    Duas figuras caminham do lado de fora de um vitral iluminado de uma igreja. Estão feridas, mal 
    agasalhadas e claramente passando por dificuldades. Enquanto o frio e a dor são evidentes, 
    o vitral aceso ao fundo indica que há ajuda por perto — mas talvez elas não estejam enxergando. 
    É uma imagem forte sobre abandono, mas também sobre esperança que se esconde nos detalhes.
    `,
    meaning: `
    O Cinco de Ouros é uma carta que fala de momentos difíceis, principalmente em termos de segurança, 
    dinheiro ou apoio emocional. Representa fases em que nos sentimos deixados de lado, com medo de 
    perder ou com a sensação de que ninguém está por perto para ajudar. Mas essa carta também carrega 
    um aviso: às vezes, o sofrimento nos faz cegar para o que ainda temos. Pode haver ajuda, recursos 
    ou pessoas ao redor — mas é preciso sair do modo "sobrevivência" e olhar ao redor com mais clareza.
    `,
    rMeaning: `
     Cinco de Ouros pode sinalizar que a pior parte já passou. A ajuda está chegando, a maré está virando. 
     É aquele momento de reconstrução, onde você começa a enxergar a saída do túnel. Também pode representar 
     a quebra de crenças limitantes ligadas à escassez ou à solidão. Mesmo depois da perda, a recuperação é 
     possível — e começa quando você acredita que merece algo melhor.
    `
  },
  {
    name: "Seis de Ouros",
    keywords: "Generosidade, ajuda, equilíbrio entre dar e receber, apoio financeiro, caridade, justiça e trocas justas.",
    rKeywords: "Desequilíbrio, dependência, manipulação, ajuda com segundas intenções e orgulho em aceitar ajuda.",
    description: `
    Um homem ricamente vestido distribui moedas para dois pedintes ajoelhados diante dele. Ele segura uma balança 
    perfeitamente equilibrada, sugerindo que sua ajuda é justa e ponderada. A cena revela uma relação clara de troca: 
    alguém tem recursos, outros precisam, e há um fluxo acontecendo — mas também uma certa hierarquia.
    `,
    meaning: `
   O Seis de Ouros traz o tema da generosidade e da reciprocidade. Pode indicar que você está em posição de ajudar 
   alguém — ou que está recebendo apoio de forma justa. Seja qual for o lado em que está, a mensagem é clara: equilibrar 
   as trocas, reconhecer o valor do outro e manter o fluxo saudável de dar e receber.Também fala de relações baseadas 
   na solidariedade e no respeito, onde ninguém se aproveita do outro. Quando tudo é feito com intenção positiva, 
   ambos crescem.
    `,
    rMeaning: `
     Invertido, o Seis de Ouros alerta para relações desequilibradas, onde alguém dá demais e o outro só recebe — 
     ou onde a ajuda vem com cobranças escondidas. Pode representar carência, dependência emocional ou financeira, 
     ou ainda o orgulho que impede alguém de aceitar o que precisa. Também pode indicar manipulação disfarçada de 
     generosidade, ou mesmo uma necessidade de repensar como você lida com o que tem. Nem sempre dar é sinônimo de 
     bondade — às vezes, é controle.
    `
  },
  {
    name: "Sete de Ouros",
    keywords: "Paciência, progresso lento, investimento a longo prazo, esforço sendo recompensado, colheita e reflexão sobre resultados.",
    rKeywords: "Frustração, impaciência, resultados insatisfatórios, falta de retorno, sensação de tempo perdido e escolhas equivocadas.",
    description: `
    Um homem encostado em sua ferramenta observa uma planta frutífera crescendo. Ele parece cansado, 
    mas também contemplativo — como quem avalia o que já foi feito e espera pelo momento certo de 
    colher os frutos. A imagem transmite um intervalo entre o esforço e a recompensa, sugerindo que 
    o crescimento já está acontecendo, mesmo que lentamente.
    `,
    meaning: `
   O Sete de Ouros fala de trabalho constante e colheita justa. Representa aquele momento em que 
   você já plantou a semente, já regou, já se esforçou — e agora precisa ter paciência e observar 
   os frutos se formando. É a carta da perseverança e do cuidado com os processos. Ela também convida 
   à reflexão: vale a pena o que você está investindo? É um bom momento para avaliar se o caminho 
   seguido está te levando onde quer, e se os esforços estão indo para algo que realmente tem valor pra você.
    `,
    rMeaning: `
     Quando aparece invertido, esse arcano revela impaciência com o tempo natural das coisas ou 
     frustração por não ver resultados rápidos. Talvez você esteja esperando demais de algo que 
     já deu o que tinha que dar — ou insistindo num investimento que não vale mais a pena. Também 
     pode representar escolhas mal direcionadas ou energia desperdiçada, indicando que é hora de 
     recalcular a rota.
    `
  },
  {
    name: "Oito de Ouros",
    keywords: "Esforço, aprendizado, prática, aprimoramento, comprometimento, foco no trabalho e disciplina.",
    rKeywords: "Desmotivação, falta de propósito, trabalho mal feito, preguiça, frustração com o progresso e desatenção aos detalhes.",
    description: `
    Um artesão está concentrado em esculpir moedas de ouro, alinhadas à sua frente. Ele parece 
    totalmente imerso no que faz, trabalhando com cuidado, paciência e atenção aos detalhes. A cena 
    transmite a ideia de dedicação contínua, disciplina e construção de algo sólido com esforço diário.
    `,
    meaning: `
   O Oito de Ouros representa trabalho árduo e crescimento gradual. É aquela fase da vida em que 
   você está lapidando suas habilidades, aprendendo mais, se dedicando com afinco — mesmo que ainda 
   esteja longe da perfeição. Essa carta valoriza o processo, o “durante”, não só os resultados finais.
   Ela é um sinal claro de que você está no caminho certo, mas que o sucesso virá com prática, repetição 
   e amor pelo que se está construindo. Seja nos estudos, na profissão ou em uma relação, o recado é: 
   quanto mais você se entrega, mais colhe.
    `,
    rMeaning: `
     Invertido, o Oito de Ouros mostra que talvez você esteja trabalhando no automático, sem propósito 
     ou paixão. Pode estar fazendo algo só por obrigação ou tentando pular etapas, o que leva a erros 
     ou resultados abaixo do esperado. Também é um alerta contra o perfeccionismo exagerado ou a falta
     de atenção aos detalhes. Às vezes, é preciso relembrar por que você começou e reencontrar o brilho no que faz.
    `
  },
  {
    name: "Nove de Ouros",
    keywords: "Independência, realização, conforto, sucesso material, autossuficiência, luxo merecido e orgulho pessoal.",
    rKeywords: "Superficialidade, vaidade, solidão no sucesso, insegurança, ostentação vazia e dependência disfarçada.",
    description: `
    Uma mulher bem-vestida caminha por um jardim abundante, com uvas e ouro ao seu redor. Ela segura um falcão — 
    símbolo de refinamento e controle — e observa tudo com serenidade. A imagem transmite autonomia, prosperidade 
    e o prazer de desfrutar do que foi conquistado com esforço. É a vibe do “me dei bem porque fiz por onde”.
    `,
    meaning: `
   Essa carta representa o auge da realização pessoal e material. O Nove de Ouros mostra que você chegou a 
   um ponto onde pode se sentir segura com suas escolhas e resultados. É uma carta de estabilidade, autoestima e 
   liberdade — principalmente aquela que vem de saber que tudo o que você tem foi fruto da sua própria caminhada.
   Também é um lembrete de que curtir o que você conquistou não é vaidade — é merecimento. Você cresceu, venceu 
   desafios e agora pode saborear os frutos com tranquilidade e orgulho.
    `,
    rMeaning: `
     Invertido, o Nove de Ouros traz uma reflexão sobre como você enxerga o sucesso. Será que está buscando 
     validação externa demais? Está tentando parecer bem-sucedida, mas se sentindo vazia por dentro? Pode haver 
     insegurança, dependência emocional ou financeira, ou uma sensação de que falta algo essencial mesmo com 
     tudo "indo bem".Também pode apontar para solidão no topo — quando se conquista tanto, mas não se tem 
     com quem compartilhar.
    `
  },
  {
    name: "Dez de Ouros",
    keywords: "Herança, estabilidade familiar, segurança financeira, tradição, prosperidade duradoura e legado.",
    rKeywords: "Conflitos familiares, instabilidade, ganância, valores distorcidos, medo de perder o que tem e estrutura em risco.",
    description: `
    Uma família reunida em um pátio nobre: um casal, uma criança, um senhor idoso e até os cães — todos 
    cercados por símbolos de riqueza e harmonia. As dez moedas estão dispostas de forma a lembrar uma 
    árvore genealógica, reforçando a ideia de continuidade, raízes e construção coletiva. A cena transborda 
    segurança, união e valor duradouro.
    `,
    meaning: `
   O Dez de Ouros representa a realização plena em todos os sentidos: não é só sobre riqueza, mas sobre 
   algo construído com propósito, que resiste ao tempo. Pode falar de família, de um negócio sólido, de 
   uma relação estável — qualquer estrutura que gere sustentação emocional e material. É uma carta de 
   bênçãos, de conquistas compartilhadas e de um futuro protegido. Ela lembra que construir algo verdadeiro 
   exige tempo, mas o retorno é imenso e valioso. Aqui, você não só alcança a estabilidade, como também 
   oferece isso aos outros.
    `,
    rMeaning: `
     Invertida, essa carta pode revelar medo de perder o que se conquistou ou conflitos dentro da estrutura 
     que você tanto preserva — especialmente em relações familiares, heranças ou tradições. Às vezes, ela 
     denuncia valores mal colocados, onde o foco no dinheiro supera o afeto ou o equilíbrio emocional.
     Também pode indicar que a busca pela estabilidade está impedindo mudanças importantes. Nem tudo que 
     é duradouro é necessariamente saudável.
    `
  },
  {
    name: "Valete de Ouros",
    keywords: "Novos começos, oportunidades, estudo, planos concretos, curiosidade, praticidade e boas ideias em fase inicial.",
    rKeywords: "Preguiça, falta de compromisso, ideias sem ação, desorganização, medo de errar e imaturidade com dinheiro ou trabalho",
    description: `
    Um jovem segura uma moeda dourada nas mãos, observando-a com atenção e cuidado. Ele está sozinho 
    em um campo verde, com montanhas ao fundo — indicando que há um caminho pela frente, cheio de 
    possibilidades, mas que ainda precisa ser trilhado. O olhar curioso dele expressa foco e vontade 
    de aprender.
    `,
    meaning: `
   O Valete de Ouros representa o início de uma jornada material ou prática. Pode indicar o começo 
   de um novo curso, trabalho, projeto ou fase da vida onde você está plantando sementes com consciência 
   e intenção. Ele é curioso, estudioso e está disposto a aprender o que for necessário pra transformar 
   seus planos em realidade. Essa carta traz uma vibe de renovação e oportunidades sólidas, mas também 
   lembra que toda ideia boa precisa de ação, paciência e comprometimento pra florescer.
    `,
    rMeaning: `
     Invertido, o Valete de Ouros pode apontar para procrastinação ou falta de direção. Você pode ter 
     ideias legais, mas não tá se organizando pra colocá-las em prática — ou talvez esteja com medo de 
     errar, e por isso não tenta. Também alerta sobre imaturidade na gestão de recursos, como dinheiro, 
     tempo ou responsabilidades. Pode ser um convite pra alinhar melhor intenção e atitude.
    `
  },
  {
    name: "Cavaleiro de Ouros",
    keywords: "Trabalho duro, responsabilidade, consistência, planejamento, lealdade, foco e progresso sólido.",
    rKeywords: "Teimosia, lentidão excessiva, rigidez, estagnação, falta de flexibilidade e rotina sufocante.",
    description: `
    O cavaleiro está parado, montado num cavalo robusto e imóvel, segurando uma moeda com seriedade. 
    O cenário é rural, indicando conexão com a terra, com o trabalho manual e com o esforço contínuo. 
    Tudo na imagem passa a sensação de compromisso, estabilidade e pé no chão — nada de pressa, só constância.
    `,
    meaning: `
   O Cavaleiro de Ouros simboliza persistência e disciplina. Ele aparece quando você está (ou precisa estar) 
   100% comprometida com uma missão, um projeto ou até mesmo uma rotina de vida. Ele não promete resultados 
   rápidos, mas garante que, com trabalho diário e cuidado nos detalhes, o sucesso virá — e será duradouro.
   É uma carta de quem não desiste no primeiro obstáculo. Pode representar alguém confiável, prático e fiel, 
   ou uma energia que pede mais organização e seriedade com as metas.
    `,
    rMeaning: `
     Invertido, esse cavaleiro pode virar um obstáculo ao próprio progresso: ele se apega demais à rotina, 
     à zona de conforto, ou trava por medo de mudar o plano. Pode indicar rigidez mental, preguiça disfarçada 
     de “espera estratégica” ou uma sensação de que tudo está se arrastando.
     É um convite pra repensar o ritmo: o que é constância e o que já virou estagnação?
    `
  },
  {
    name: "Rainha de Ouros",
    keywords: "Generosidade, estabilidade, cuidado, abundância, praticidade, equilíbrio entre vida pessoal e profissional.",
    rKeywords: "Negligência, desequilíbrio, excesso de controle, autoabandono e insegurança com dinheiro ou afeto.",
    description: `
    Ela está sentada num trono decorado com frutas, flores e símbolos de fertilidade. Com uma 
    moeda grande no colo, olha para ela com doçura e concentração. Ao redor, o cenário é fértil, 
    acolhedor e cheio de vida — representando nutrição, conforto e domínio do mundo material com coração.
    `,
    meaning: `
   A Rainha de Ouros é a mãe prática e carinhosa do tarot. Ela representa uma energia de cuidado 
   que é firme, mas também extremamente acolhedora. Tudo que ela toca, floresce: casa, trabalho, 
   relações. Ela sabe dar e receber, equilibrando generosidade com responsabilidade.
   Essa carta pode indicar uma pessoa (ou energia sua) que administra bem recursos, protege 
   quem ama e ainda encontra tempo pra cuidar de si mesma e dos outros. É a materialização do 
   amor em gestos concretos.
    `,
    rMeaning: `
    Invertida, essa rainha pode estar esquecendo de si mesma enquanto cuida dos outros — 
    ou o contrário: focando tanto em segurança ou sucesso, que o cuidado emocional ficou 
    de lado. Pode surgir uma sensação de desequilíbrio, excesso de controle ou instabilidade 
    financeira. Também alerta pra relações onde o afeto está condicionado ao que se oferece 
    materialmente. Hora de reavaliar onde está o seu valor.
    `
  },
  {
    name: "Rei de Ouros",
    keywords: "Estabilidade, sucesso financeiro, liderança sólida, generosidade prática, confiabilidade e sabedoria nos negócios.",
    rKeywords: "Ganância, rigidez, arrogância, materialismo, dificuldade em compartilhar e medo de perder o controle.",
    description: `
    Sentado em um trono adornado com touros e uvas, o rei segura uma moeda com firmeza. Ele 
    está cercado por símbolos de riqueza, conforto e estabilidade. A expressão é serena, mas 
    atenta — ele não chegou ali à toa, e sabe como manter o que construiu. Tudo em volta transmite 
    uma sensação de ordem, domínio e responsabilidade.
    `,
    meaning: `
   O Rei de Ouros é o mestre do mundo físico: ele construiu, consolidou e agora governa com sabedoria. 
   Essa carta fala de conquistas maduras, de saber lidar com dinheiro, recursos e responsabilidades 
   sem perder o senso de justiça ou generosidade. Pode indicar alguém poderoso, protetor e confiável — 
   ou te convidar a assumir essa postura: ser firme nas decisões, estratégico nos passos e generoso com 
   o que você tem. Ele mostra que o sucesso não vem do acaso, mas da constância e visão a longo prazo.
    `,
    rMeaning: `
    Quando invertido, o Rei de Ouros pode revelar uma fixação pelo controle ou pelo status. Medo de 
    arriscar, avareza, rigidez ou uma liderança fria e mandona também podem surgir aqui. Ele se esquece 
    de que o verdadeiro poder está no equilíbrio entre força e generosidade. Pode ser um alerta: ser bem-sucedido 
    não vale de muito se você perde o prazer ou o vínculo com os outros no caminho.
    `
  }
];

const naipeEspadas = [
  {
    name: "Ás de Espadas",
    keywords: "Clareza, verdade, novos começos mentais, comunicação direta, justiça, decisões racionais e corte necessário.",
    rKeywords: "Confusão, mentiras, falta de direção, más decisões, repressão de pensamentos e verdades distorcidas.",
    description: `
    Uma espada erguida surge de uma nuvem, apontando para o céu. Acima dela, uma coroa 
    com ramos de louro e palmeira — símbolos de vitória, sabedoria e superação. O fundo 
    é montanhoso, indicando desafios e obstáculos, mas a espada erguida mostra que a 
    mente tem poder para superá-los. É uma imagem de força intelectual, revelação e ação certeira.
    `,
    meaning: `
   O Ás de Espadas representa o nascimento de uma ideia poderosa ou a chegada de uma verdade 
   que corta ilusões. É o momento de clareza mental, de enxergar as coisas como realmente são 
   e tomar decisões com base na razão, não na emoção. Traz força para falar o que precisa ser 
   dito, iniciar um projeto intelectual ou cortar o que já não serve mais. É uma carta que abre 
   caminhos com a mente afiada. Pode ser o começo de um novo entendimento, uma conversa franca 
   ou um insight libertador.
    `,
    rMeaning: `
    Invertida, essa espada pode ferir mais do que ajudar. A mente pode estar confusa, as palavras 
    saem erradas, e as decisões são tomadas com base em ilusões ou desinformações. Pode haver 
    autossabotagem, medo da verdade ou dificuldade em comunicar algo importante. É um aviso: a verdade 
    ainda não está clara — espere, pense mais um pouco ou busque outra perspectiva.
    `
  },
  {
    name: "Dois de Espadas",
    keywords: "Indecisão, bloqueio emocional, equilíbrio frágil, necessidade de escolha, negação e tempo para refletir.",
    rKeywords: "Decisões precipitadas, confusão mental, medo da verdade, tensão acumulada e resistência a mudanças.",
    description: `
    Uma mulher está sentada de olhos vendados, segurando duas espadas cruzadas sobre o peito. 
    Atrás dela, um mar calmo sob o luar. A venda indica cegueira simbólica — ela não quer ou 
    não consegue ver a verdade. O mar representa emoções contidas, e o céu noturno traz a energia 
    da introspecção. As espadas cruzadas sugerem uma escolha difícil, onde nenhum caminho parece fácil.
    `,
    meaning: `
   O Dois de Espadas aparece quando estamos diante de uma decisão que exige equilíbrio, mas o coração 
   e a mente não estão alinhados. Pode ser um momento de bloqueio, onde tudo parece suspenso, esperando 
   que você finalmente se posicione. Essa carta pede pausa e análise calma, mas alerta: não dá pra adiar 
   essa escolha pra sempre. Mais cedo ou mais tarde, o que está sendo evitado virá à tona — e quanto mais 
   se espera, mais difícil fica lidar com a verdade.
    `,
    rMeaning: `
    Invertida, a carta indica que o tempo de reflexão já passou e a hesitação virou paralisia. Pode surgir 
    pressão externa, decisões tomadas sem pensar ou um estresse mental acumulado por falta de posicionamento.
    Também pode revelar medo de encarar sentimentos, evitando discussões ou escondendo a cabeça na areia. A 
    clareza só vem quando se aceita ver o que está diante dos olhos, mesmo que seja desconfortável.
    `
  },
  {
    name: "Três de Espadas",
    keywords: "Tristeza, separação, mágoa, decepção, traição, verdade dolorosa e ruptura.",
    rKeywords: "Dor reprimida, dificuldade em superar, ressentimento, tristeza prolongada e medo de se abrir novamente.",
    description: `
    Um coração vermelho atravessado por três espadas paira em um céu cinzento e chuvoso. 
    A imagem é direta e impactante: dor emocional crua, sem disfarces. O céu nublado reflete 
    o peso da tristeza, enquanto a chuva simboliza o processo de purificação que acompanha o 
    sofrimento. É um cenário de ruptura, mas também de libertação.
    `,
    meaning: `
    O Três de Espadas representa aquele momento de dor inevitável — uma verdade que machuca, 
    uma separação, um rompimento ou uma decepção. Não é fácil, mas é necessário. A carta não 
    aparece pra ferir, e sim pra mostrar que a dor tem função: tirar o que já não serve e abrir 
    espaço pra algo novo. Às vezes, ela aponta para palavras duras, mal-entendidos ou um ciclo 
    que precisa terminar. É uma ferida, sim — mas também um aviso de que você é forte o suficiente 
    pra lidar com isso.
    `,
    rMeaning: `
    Quando invertida, essa carta revela uma dor que está sendo sufocada ou ignorada. Pode indicar negação, 
    apego ao sofrimento ou dificuldade em seguir em frente. É como manter o curativo numa ferida fechada: 
    impede a cura. Também pode representar ressentimentos não resolvidos, ou o medo de abrir o coração 
    novamente. A cura começa ao permitir sentir — e depois soltar.
    `
  },
  {
    name: "Quatro de Espadas",
    keywords: "Descanso, pausa necessária, introspecção, recuperação, alívio, meditação e cura mental.",
    rKeywords: "Esgotamento, estresse acumulado, dificuldade de se desligar, resistência ao descanso e colapso iminente.",
    description: `
    Uma figura repousa sobre um túmulo, de mãos cruzadas, em uma pose de oração ou contemplação. 
    Acima dela, três espadas estão penduradas na parede, enquanto uma quarta repousa abaixo — 
    pronta para ser usada novamente. A cena transmite um sentimento de paz, mas também de vigilância 
    tranquila. O vitral colorido ao fundo reforça a ideia de conexão espiritual e recolhimento.
    `,
    meaning: `
    O Quatro de Espadas convida a uma pausa restauradora. Depois de turbulências, é hora de se 
    retirar, refletir e cuidar da saúde mental. Essa carta não fala de fraqueza, mas de sabedoria 
    em reconhecer os próprios limites. Pode indicar o momento ideal para se afastar de conflitos, 
    silenciar a mente e reorganizar pensamentos. É o respiro antes da próxima batalha, o silêncio 
    que antecede a clareza.
    `,
    rMeaning: `
    Invertido, esse descanso foi ignorado — e o corpo ou a mente começam a cobrar o preço. Pode 
    surgir como um alerta de burnout, insônia, ansiedade ou esgotamento emocional. Também pode 
    mostrar dificuldade em se desligar, medo de parar ou uma negação da própria fragilidade. Essa 
    carta invertida pede: recolha-se antes que a exaustão te obrigue.
    `
  },
  {
    name: "Cinco de Espadas",
    keywords: "Conflito, discussões, vitória amarga, ego, manipulação, ressentimento e tensão mental.",
    rKeywords: "Reconciliação, arrependimento, superação de brigas, evitar conflitos e lições aprendidas.",
    description: `
    Um homem segura três espadas com um sorriso de superioridade, enquanto outras duas estão no chão. 
    Ao fundo, duas figuras se afastam cabisbaixas. O céu é nublado, denso, carregado — como o clima 
    após uma briga. A cena mostra que alguém venceu... mas a que custo? A energia é de disputa, orgulho 
    e distanciamento.
    `,
    meaning: `
    O Cinco de Espadas traz à tona os efeitos de conflitos mal resolvidos. Pode representar uma 
    vitória forçada, onde a razão foi usada como arma, não como ponte. O ambiente está carregado 
    de tensão, mágoas e palavras duras — talvez até manipulação ou traições. Essa carta questiona: 
    vale mesmo vencer se isso afasta os outros? Às vezes, o mais sábio é recuar. Em outras, é preciso 
    aceitar que nem tudo se resolve com argumentos.
    `,
    rMeaning: `
    Invertida, ela sugere o fim da hostilidade e o desejo de reconciliação. Pode indicar que alguém 
    está arrependido, pronto pra deixar o orgulho de lado e buscar entendimento. Também pode ser um 
    aviso: evite entrar em brigas desnecessárias — você pode sair certo, mas sozinho. É a chance de 
    aprender com o conflito e seguir com mais leveza.
    `
  },
  {
    name: "Seis de Espadas",
    keywords: "Transição, mudança lenta, partida, cura emocional, deixar o passado para trás e viagem interior.",
    rKeywords: "Resistência à mudança, apego ao sofrimento, fuga sem resolução e estagnação emocional.",
    description: `
    Um pequeno barco atravessa águas calmas, guiado por uma figura encapuzada que conduz outra pessoa 
    sentada ao lado de uma criança. Seis espadas estão cravadas na proa do barco. A paisagem ao fundo 
    mostra terra firme à distância, enquanto o lado próximo está mais sombrio. A imagem transmite uma 
    travessia silenciosa e necessária. As espadas na embarcação representam os pensamentos ou dores 
    que ainda estão sendo levados junto — mas o destino é mais leve que o ponto de partida.
    `,
    meaning: `
    O Seis de Espadas fala de um momento de transição emocional ou mental. Pode ser uma mudança física 
    (como uma viagem ou mudança de casa), mas, muitas vezes, é um movimento interno: deixar para trás 
    dores, traumas ou conflitos, mesmo que eles ainda pesem. A carta não traz pressa nem alarde. É um 
    caminho de cura discreto, onde o mais importante é seguir em frente, mesmo sem ter todas as respostas. 
    A travessia pode ser solitária, mas o destino promete paz.
    `,
    rMeaning: `
    Quando aparece invertido, o Seis de Espadas revela resistência à mudança. Pode ser alguém que se 
    recusa a soltar o passado, que evita enfrentar o que precisa ser resolvido ou que tenta fugir das 
    dores sem realmente curá-las. Essa fuga ilusória só adia o inevitável: encarar e, enfim, libertar-se.
    `
  },
  {
    name: "Sete de Espadas",
    keywords: "Dissimulação, segredo, estratégia, fuga, manipulação, agir nas sombras e proteger informações.",
    rKeywords: "Revelação de mentiras, culpa, exposição, arrependimento e necessidade de ser honesto.",
    description: `
    Um homem anda de forma sorrateira carregando cinco espadas, olhando para trás como quem 
    verifica se foi visto. Duas espadas ficam cravadas no chão. Ao fundo, um acampamento parece 
    distraído, talvez até enganado. A imagem passa uma sensação clara de furtividade, inteligência 
    estratégica — ou trapaça. O personagem pode estar escapando com algo que não é seu… ou apenas 
    tentando sair de cena sem levantar alarde. Tudo depende do contexto.
    `,
    meaning: `
    O Sete de Espadas fala sobre situações onde a verdade não está sendo completamente revelada. 
    Pode ser você agindo com estratégia, tentando proteger algo ou alguém, ou mesmo evitando 
    conflitos de forma calculada. Mas também pode indicar mentiras, manipulações ou atitudes 
    egoístas. Alguém pode estar escondendo algo — ou você está tentando se esquivar de uma 
    responsabilidade. A carta convida à reflexão: o que está sendo deixado pra trás? E por quê?
    Em um lado mais neutro, é a carta do “jogo de cintura”: usar inteligência, sutileza e 
    astúcia para lidar com algo complexo.
    `,
    rMeaning: `
    Invertida, essa carta aponta para máscaras caindo. Mentiras vêm à tona, segredos são 
    descobertos ou há um peso de culpa por ter omitido algo. Também pode sugerir que é 
    hora de parar de fugir — a verdade, por mais desconfortável, liberta. Às vezes, é o 
    momento de escolher a transparência, mesmo que isso exija coragem.
    `
  },
  {
    name: "Oito de Espadas",
    keywords: "Bloqueios mentais, medo, paralisia, sensação de aprisionamento, impotência, dúvida e vitimização.",
    rKeywords: "Libertação, clareza mental, superação do medo, retomada de poder e ver além das ilusões.",
    description: `
    Uma mulher está vendada e amarrada, cercada por oito espadas fincadas no chão — 
    como se formassem uma cela improvisada. O céu cinzento e o solo lamacento refletem 
    uma atmosfera de angústia. Ainda assim, há espaço entre as espadas… e os laços 
    parecem frouxos. Ela não está tão presa quanto pensa. Essa imagem fala diretamente 
    de prisões mentais, de quando a mente cria limites que o corpo não confirma.
    `,
    meaning: `
    O Oito de Espadas mostra um momento em que a pessoa se sente presa ou incapaz de agir. 
    A mente está tomada pelo medo, pela dúvida ou pela sensação de que não há saída. Só 
    que… essa prisão é, na maioria das vezes, autoimposta. A carta pede para olhar com mais 
    clareza: será que você não está se sabotando ou acreditando em limitações irreais? Ela 
    aparece quando é preciso parar, respirar e enxergar além da neblina mental. Você ainda 
    tem escolha. Você ainda tem força. Mas pra se libertar, vai precisar acreditar nisso primeiro.
    `,
    rMeaning: `
    Na posição invertida, o Oito de Espadas é um alívio: o momento da libertação. A clareza 
    começa a surgir, o medo perde força e a pessoa começa a tomar decisões com mais segurança. 
    Pode indicar que alguém finalmente está enxergando uma saída ou se soltando de amarras antigas.
    Mas também pode ser um aviso: não ignore os sinais. Se você está escapando de uma prisão mental, 
    continue caminhando com consciência — liberdade exige responsabilidade.
    `
  },
  {
    name: "Nove de Espadas",
    keywords: "Ansiedade, insônia, culpa, arrependimento, medo, sofrimento emocional e pesadelos.",
    rKeywords: "Superação de traumas, cura interior, despertar, fim de uma fase difícil e aceitação.",
    description: `
    A carta mostra uma pessoa sentada na cama durante a noite, com as mãos cobrindo o rosto — 
    num gesto de desespero ou tristeza profunda. Nove espadas estão suspensas na parede acima 
    dela, como se fossem pensamentos pesados pairando sobre sua cabeça. A cena é escura e 
    silenciosa, quase sufocante. Essa imagem evoca preocupações mentais intensas, noites 
    mal dormidas e dores que não se falam. É o peso invisível dos pensamentos, da culpa, da angústia.
    `,
    meaning: `
    O Nove de Espadas é a carta do sofrimento psicológico. Muitas vezes, ela aparece quando estamos 
    nos torturando com pensamentos que não conseguimos controlar — ansiedade, culpa por algo que 
    fizemos (ou deixamos de fazer), medos que parecem maiores à noite. É o momento de reconhecer 
    que a mente está sobrecarregada e que você talvez esteja sendo dura demais consigo mesma. A carta 
    pede compaixão, busca por apoio e o lembrete de que nem todo medo é real. Às vezes, só precisamos 
    dividir esse peso pra ele parar de nos esmagar.
    `,
    rMeaning: `
    Quando invertida, a carta traz sinais de cura ou alívio. Pode ser o fim de uma fase difícil, 
    a saída de um ciclo de culpa, ou o início de um processo de libertação emocional. Também pode 
    indicar que a pessoa está começando a enxergar o que está por trás de seus medos, e com isso, 
    recuperando o controle. Em alguns casos, a inversão pede atenção extra: você está fingindo que 
    está tudo bem, quando na verdade não está? Reprimir demais também é uma forma de sofrimento.
    `
  },
  {
    name: "Dez de Espadas",
    keywords: "Fim doloroso, traição, desilusão, perda, sofrimento extremo, término de ciclo e morte simbólica.",
    rKeywords: "Renovação, recuperação, libertação, superação de crise e fim de um ciclo doloroso.",
    description: `
    A carta mostra uma figura caída de barriga para baixo, com dez espadas cravadas nas costas. O cenário é 
    sombrio, mas ao fundo, o céu começa a clarear — como um símbolo de esperança que renasce após o sofrimento. 
    É a representação de um momento difícil, onde a dor parece insuportável, mas a carta também sugere que essa 
    dor tem um fim. As espadas não são o ponto final, mas o início de algo novo.
    `,
    meaning: `
    O Dez de Espadas é a carta do término de um ciclo muito doloroso. Pode ser uma traição, a perda 
    de algo importante, ou simplesmente o final de um momento difícil. Quando essa carta aparece, é 
    como se estivéssemos no fundo do poço, sem saber exatamente qual o próximo passo.
    Mas ela tem uma lição: não é o fim. Ela pode ser difícil de encarar, mas a dor está começando a 
    se dissipar. É hora de recomeçar, de encontrar forças para sair dessa fase e aprender com ela. O 
    Dez de Espadas pede que você olhe para o futuro — pois ele é a verdadeira cura.
    `,
    rMeaning: `
    Quando invertido, o Dez de Espadas fala de recuperação. A dor já não tem a mesma força; 
    você está começando a se libertar da crise, das traições ou dos golpes que recebeu. Talvez 
    você ainda sinta as marcas, mas o fim do sofrimento está próximo. Em alguns casos, a inversão 
    pode indicar que você ainda está resistindo a aceitar o fim de algo, ou que a dor está sendo 
    prolongada por algum tipo de apego. Mas a cura é inevitável — basta dar o primeiro passo.
    `
  },
  {
    name: "Valete de Espadas",
    keywords: "Curiosidade, vigilância, inteligência, mente ativa, investigação, comunicação afiada, desafio e alerta.",
    rKeywords: "Fofoca, mal-entendidos, desinformação, ataques, críticas destrutivas e exagero.",
    description: `
    Um jovem empunha uma espada, olhando atentamente à sua volta. Ele parece pronto para qualquer coisa, 
    a postura de quem está sempre atento e buscando entender o que está acontecendo. O céu está claro, 
    refletindo uma mente desperta e analítica. Ele está preparado para lidar com qualquer situação, 
    com a espada representando sua capacidade de cortar ilusões e buscar a verdade.
    `,
    meaning: `
    O Valete de Espadas é a carta do aprendizado constante e da busca por respostas. Ela aparece 
    quando você está no caminho da investigação ou do questionamento — seja sobre algo que precisa 
    de mais reflexão ou sobre questões em sua vida que ainda não têm uma resposta clara.
    É uma carta que te incentiva a usar a mente e a comunicação de maneira estratégica, sem se deixar 
    levar pelas emoções. A curiosidade é sua aliada aqui — não tenha medo de fazer perguntas difíceis 
    e explorar o desconhecido. Essa carta também pode indicar que há alguém ao seu redor observando 
    suas ações ou palavras de forma cuidadosa, ou que você deve manter seus olhos abertos para desafios 
    ou informações escondidas.
    `,
    rMeaning: `
    Quando invertido, o Pajem de Espadas pode sinalizar desinformação ou fofoca. Pode ser uma 
    advertência para ter cuidado com o que você está ouvindo ou espalhando. Também pode indicar 
    que alguém está invadindo sua privacidade ou usando informações de maneira distorcida.
    Talvez também seja um sinal de que você está agindo de forma impensada, tomando conclusões 
    rápidas sem considerar todas as evidências. A carta invertida pede mais cautela, mais 
    paciência antes de agir ou julgar.
    `
  },
  {
    name: "Cavaleiro de Espadas",
    keywords: "Ação rápida, coragem, determinação, pensamento lógico, confronto, palavras afiadas, pressa e impetuosidade.",
    rKeywords: "Imprudência, impulsividade, conflitos, agressividade, falta de estratégia e descontrole.",
    description: `
    O Cavaleiro de Espadas está montado em um cavalo em velocidade, com a espada levantada, 
    pronto para cortar qualquer obstáculo. Ele parece em movimento rápido, sem pensar muito 
    no que vem pela frente, focado apenas na missão. Seu semblante é focado e decidido, mas 
    há algo de impulsivo na forma como ele se comporta — talvez uma alerta de que suas ações 
    podem ter consequências inesperadas.
    `,
    meaning: `
    O Cavaleiro de Espadas traz uma energia de ação imediata e decisiva. Ele surge quando você 
    precisa agir com coragem e determinação, sem hesitar, mas também alerta para a necessidade 
    de tomar cuidado com o excesso de pressa. Às vezes, ele pede que você avance com confiança, 
    mas sem perder de vista os detalhes. Essa carta pode indicar que você está sendo chamado para 
    um confronto, ou uma situação onde as palavras ou ações precisam ser rápidas e precisas. No 
    entanto, há um alerta: não aja sem pensar. A pressa pode levar a erros. A chave é agir com 
    certeza, mas sem perder a racionalidade.
    `,
    rMeaning: `
    Quando invertido, o Cavaleiro de Espadas fala de impulsividade excessiva e imprudência. 
    Você pode estar agindo sem pensar, ou tentando forçar algo a acontecer de forma muito 
    rápida, o que pode acabar criando mais problemas do que soluções. Ele também pode indicar 
    conflitos ou confrontos desnecessários, onde a comunicação agressiva ou o excesso de pressão 
    estão afastando as pessoas ou tornando uma situação mais difícil do que ela precisa ser.
    Nesse caso, é uma carta que pede para dar um passo atrás, pensar mais antes de agir e buscar 
    uma abordagem mais equilibrada.
    `
  },
  {
    name: "Rainha de Espadas",
    keywords: " Inteligência, clareza, comunicação honesta, objetividade, discernimento, independência e racionalidade.",
    rKeywords: "Frieza emocional, distanciamento, dureza, julgamento severo, palavras cortantes e falta de empatia.",
    description: `
    A Rainha de Espadas é uma figura madura e sábia, sentada em um trono, com uma espada em uma 
    mão e a outra levantada como se estivesse oferecendo uma verdade. Ela tem um olhar atento e 
    analítico, completamente focada na situação, sem se deixar levar pelas emoções. O céu atrás 
    dela está claro e limpo, simbolizando pensamento lógico e visão clara das coisas. Não há espaço 
    para ilusões ou enganos em sua presença — ela fala a verdade, mesmo que seja difícil.
    `,
    meaning: `
    A Rainha de Espadas é a personificação da sabedoria e clareza mental. Ela aparece quando 
    você precisa de discernimento e objetividade, quando a situação exige que você veja além 
    das aparências e tome decisões racionais. Se você está passando por algo difícil, ela pede 
    que você use sua mente para analisar os fatos de forma lógica, sem se deixar consumir pelas emoções.
    Ela também representa comunicação direta e honesta, às vezes até cortante, mas necessária 
    para que as coisas aconteçam. A Rainha de Espadas não tem medo de dizer a verdade, mesmo 
    quando ela pode ser difícil de ouvir. Ela lembra que, embora a verdade possa ser dolorosa, 
    ela é a única que liberta.
    `,
    rMeaning: `
    Quando invertida, a Rainha de Espadas pode se tornar excessivamente crítica ou fria, 
    incapaz de conectar-se emocionalmente com os outros. Sua visão pode se tornar distorcida, 
    e ela pode ser dura demais nas palavras, ferindo sem intenção. Ela também pode sinalizar 
    um momento onde falta clareza ou onde você está ignorando sua sabedoria interior. Talvez 
    você esteja se afastando demais de suas emoções ou julgando as situações de maneira 
    excessivamente severa. Essa carta invertida pede que você seja mais compassiva e aberta, 
    tanto consigo mesma quanto com os outros. Reconhecer a importância de ouvir e compreender 
    é essencial aqui.
    `
  },
  {
    name: "Rei de Espadas",
    keywords: " Liderança, clareza mental, justiça, estratégia, sabedoria, comunicação eficaz, autoridade e imparcialidade.",
    rKeywords: "Abuso de poder, frieza excessiva, manipulação, desonestidade, julgamento severo e falta de empatia.",
    description: `
    O Rei de Espadas está sentado em um trono, com uma espada erguida e olhar penetrante. 
    Ele simboliza o domínio sobre a mente, a lógica e a razão. O céu atrás dele é claro, 
    refletindo sua capacidade de tomar decisões justas e fundamentadas.
    Seu trono está rodeado por nuvens, mas ele permanece tranquilo, sinalizando que ele 
    sabe como manter o controle, mesmo em situações de pressão. Ele é a autoridade 
    intelectual, a força do pensamento racional.
    `,
    meaning: `
    O Rei de Espadas é o líder da mente, alguém que possui uma clareza excepcional e 
    pode tomar decisões baseadas na lógica e na justiça. Ele aparece quando você precisa 
    agir com imparcialidade e sabedoria, quando deve tomar decisões importantes e deve ser 
    firme e justo em suas ações. Ele também é mestre em comunicação eficaz, capaz de expressar 
    suas ideias de maneira clara, sem rodeios. O Rei de Espadas te pede para usar sua mente de 
    forma estratégica, com calma e raciocínio, especialmente quando você precisa tomar decisões 
    complexas ou lidar com situações que exigem uma análise mais profunda.
    `,
    rMeaning: `
    Quando invertido, o Rei de Espadas pode sugerir abuso de poder ou frieza excessiva em relação 
    às emoções dos outros. Ele também pode indicar uma pessoa que usa a mentira ou manipulação para 
    alcançar seus objetivos, em vez de agir com transparência e verdade. Essa carta invertida pede 
    que você faça uma pausa e reavalie se está sendo justo com suas próprias decisões e com as pessoas 
    ao seu redor. Também pode ser um aviso para que você não se deixe cegar pela lógica, mas mantenha 
    um equilíbrio com suas emoções e valores.
    `
  }
];

const naipePaus = [
  {
    name: "Ás de Paus",
    keywords: "Inspiração, novos começos, motivação, criatividade, desejo, energia vital, oportunidade e impulso.",
    rKeywords: "Bloqueios criativos, desânimo, falta de direção, estagnação, medo de começar e impulsividade sem foco.",
    description: `
    A carta mostra uma mão saindo de uma nuvem, segurando um bastão florido. Ao fundo, 
    vemos montanhas e um campo verdejante — símbolos de potencial, fertilidade e crescimento. 
    A vara está viva, com folhas brotando, sinal de algo recém-nascido e cheio de energia.
    Esse cenário revela que a oportunidade já está em suas mãos, só esperando você dar o 
    primeiro passo. O bastão, erguido no ar, é como uma tocha acesa, chamando à ação.
    `,
    meaning: `
    O Ás de Paus é aquela faísca que acende tudo. Ele anuncia um novo ciclo cheio de 
    paixão, energia e possibilidades. Pode ser o início de um projeto, uma ideia criativa, 
    o nascimento de um desejo intenso ou até mesmo o despertar de um novo amor ou paixão.
    Ele te impulsiona a agir, a seguir em frente com coragem, aproveitando esse momento fértil 
    e cheio de energia. Tudo ainda está no início, mas há muito potencial para crescer. Basta 
    acreditar na sua força interior e seguir esse impulso com confiança.
    `,
    rMeaning: `
    Invertido, o Ás de Paus indica que algo está travando esse começo. Pode ser falta de 
    motivação, dúvidas internas, medo de falhar ou até bloqueio criativo. A chama 
    está ali, mas algo está abafando. Essa carta pede que você reflita sobre o que te impede 
    de agir: é medo, é confusão, é falta de direção? Talvez você esteja esperando o momento 
    perfeito, mas ele nunca vem. Às vezes, é melhor começar mesmo sem ter todas as respostas 
    — e aprender no caminho.
    `
  },
  {
    name: "Dois de Paus",
    keywords: "Escolhas, planejamento, visão ampla, possibilidades, ambição, desejo de expansão e preparação.",
    rKeywords: "Indecisão, medo de sair da zona de conforto, planos travados, falta de perspectiva e hesitação.",
    description: `
    Um homem em pé sobre um castelo ou muralha, segurando um bastão com firmeza, enquanto 
    o outro está fixado ao chão. Em sua mão, ele carrega um globo — símbolo de domínio e 
    desejo de explorar o mundo. Ele observa o horizonte, como quem diz: “O que mais existe 
    além daqui?” A paisagem mostra terra fértil e vastidão, indicando que as possibilidades 
    estão abertas, mas é preciso coragem para sair do que é familiar.
    `,
    meaning: `
    O Dois de Paus é o momento em que você começa a visualizar o que vem depois. Ele fala 
    sobre planejar com ambição, sonhar grande, e avaliar seus caminhos. Você já teve a ideia 
    (o Ás), agora está pensando: “Qual direção seguir?” É uma carta de preparação — você ainda 
    não partiu, mas está de olho no futuro. Pode indicar viagens, mudanças, novas oportunidades 
    ou até uma decisão importante que pede que você pense com visão estratégica. Não é hora de 
    agir impulsivamente, mas de refletir com ousadia.
    `,
    rMeaning: `
    Invertida, essa carta mostra medo de arriscar, insegurança diante do novo, ou uma resistência 
    a deixar o conforto atual. Talvez você esteja com grandes ideias, mas não consegue dar o passo 
    inicial, seja por dúvidas internas, seja por falta de clareza sobre o que quer. Também pode indicar 
    planejamentos mal estruturados ou oportunidades sendo perdidas por indecisão. O conselho aqui é: 
    reorganize sua visão, confie no que deseja e prepare o terreno com mais firmeza.
    `
  },
  {
    name: "Três de Paus",
    keywords: "Crescimento, visão de futuro, progresso, viagens, confiança, oportunidades à frente e expansão.",
    rKeywords: "Frustração com resultados, planos atrasados, impaciência, obstáculos inesperados e falta de visão.",
    description: `
    Um homem de pé, em um terreno alto, observa o mar. Três bastões estão firmes ao seu redor, 
    e ele olha para navios que partem ou chegam, representando o movimento das ideias colocadas 
    em prática. O céu está claro, o mar tranquilo — tudo indica que o caminho está aberto.
    Essa imagem transmite a sensação de esperança, confiança e conquista. A decisão foi tomada 
    e agora ele observa os frutos começando a surgir.
    `,
    meaning: `
    O Três de Paus marca um momento de avanço e expansão. É como se você tivesse plantado 
    suas ideias e agora começa a ver os primeiros sinais de que elas estão crescendo. É uma 
    carta que fala de confiança no futuro, visão ampla e abertura para novas oportunidades.
    Pode indicar viagens, parcerias ou reconhecimento vindo de longe. Aqui você já saiu da 
    zona de conforto e começa a enxergar o quão longe pode chegar. É um sinal claro de que 
    o caminho está certo — continue com coragem, pois os resultados estão vindo.
    `,
    rMeaning: `
    Quando aparece invertido, o Três de Paus mostra que algo travou o progresso. Pode 
    ser um atraso, expectativas frustradas ou uma sensação de que os planos não estão 
    indo como o esperado. Às vezes, indica falta de preparação ou visão limitada. É um 
    chamado para revisar o plano de ação e talvez ajustar sua rota. Em vez de desistir, 
    repense com estratégia e paciência. O progresso ainda é possível — só precisa de mais 
    estrutura ou de uma nova perspectiva.
    `
  },
  {
    name: "Quatro de Paus",
    keywords: "Comemoração, união, harmonia, conquistas, lar, estabilidade e alegria compartilhada.",
    rKeywords: "Instabilidade familiar, adiamento de celebrações, desconforto no ambiente e conflitos domésticos.",
    description: `
    Dois bastões de cada lado, formando uma espécie de arco decorado com flores — um 
    portal simbólico. Ao fundo, vemos duas pessoas com os braços erguidos, como se 
    estivessem comemorando, e um castelo à distância, indicando realizações e um lar seguro.
    Essa imagem transmite acolhimento, segurança emocional e o prazer de estar rodeado por pessoas queridas.
    `,
    meaning: `
    O Quatro de Paus representa um momento de pausa para celebrar o que já foi conquistado. 
    Pode ser uma festa, um reencontro, a conclusão de uma etapa ou até a sensação de finalmente 
    estar onde gostaria. É uma carta de estabilidade, conexão com o lar e alegria com os outros.
    Também pode apontar para eventos importantes: casamentos, festas, mudanças positivas de residência 
    ou situações em que você se sente acolhida e valorizada. Há aqui uma energia de gratidão, de ver 
    beleza no agora e celebrar com o coração leve.
    `,
    rMeaning: `
    Invertido, esse arcano mostra que algo está tirando o brilho da celebração. Pode ser instabilidade 
    no lar, desentendimentos familiares, ou uma dificuldade em relaxar mesmo com motivos para isso.
    Talvez eventos importantes estejam sendo adiados ou não saindo como o esperado. Também pode indicar 
    uma sensação de desconexão com o ambiente que deveria trazer segurança. A dica é: reavaliar o que te 
    dá apoio e buscar harmonia interior para equilibrar o que está fora.
    `
  },
  {
    name: "Cinco de Paus",
    keywords: "Desafios, disputa, competição, energia dispersa, conflito de ideias, caos produtivo e esforço coletivo.",
    rKeywords: "Brigas sem solução, rivalidade tóxica, resistência ao diálogo, tensão acumulada e confusão interna.",
    description: `
    Cinco jovens com bastões parecem estar lutando, mas não de forma violenta — é mais como 
    um treino ou brincadeira energética. Ninguém está ferido, e o cenário é claro, com céu azul. 
    Isso sugere que o conflito é passageiro e talvez até necessário para o crescimento.
    Essa cena representa desafios em grupo, conflitos de ideias e disputas que forçam aprendizado e adaptação.
    `,
    meaning: `
    O Cinco de Paus traz uma energia intensa, indicando que há conflito no ar — externo ou interno. 
    Pode ser uma disputa de ideias, competição entre colegas, desentendimentos em grupo ou até falta 
    de organização. Mas não é um caos destrutivo — é aquele tipo de agito que, se bem canalizado, 
    traz crescimento. Essa carta fala sobre a importância de se posicionar, lutar pelo que acredita, 
    mas também de saber ouvir e ajustar o rumo. O conflito aqui serve como ferramenta de evolução — 
    o que está sendo desafiado, precisa ser fortalecido.
    `,
    rMeaning: `
    Invertida, essa carta mostra que o conflito saiu do controle. Pode indicar brigas 
    repetitivas, rivalidade prejudicial, dificuldade em cooperar ou uma desordem mental 
    que impede a clareza. Também pode representar a sensação de estar lutando sozinho ou 
    sendo constantemente testado. O conselho é buscar estratégias mais pacíficas, clareza 
    na comunicação e foco no que realmente importa. Às vezes, parar de lutar é o que traz a vitória.
    `
  },
  {
    name: "Seis de Paus",
    keywords: "Vitória, reconhecimento público, autoestima elevada, progresso, superação, liderança e  confiança.",
    rKeywords: "Necessidade de validação, arrogância, fracasso momentâneo, insegurança e reconhecimento negado.",
    description: `
    Um homem montado em um cavalo branco desfila entre uma multidão, com uma coroa de louros 
    na cabeça e um bastão enfeitado também com louros — símbolo clássico da vitória. As pessoas 
    ao redor olham para ele com admiração. Essa cena transmite o reconhecimento dos outros por 
    um feito importante, seja ele público, profissional ou emocional. A imagem exala orgulho e validação.
    `,
    meaning: `
    O Seis de Paus fala sobre um momento de triunfo após desafios. É quando os esforços 
    são finalmente reconhecidos, e a vitória vem acompanhada de aplausos, orgulho e autoestima 
    em alta. Pode indicar promoções, conquistas pessoais ou o respeito das pessoas ao seu redor.
    É também um lembrete de que sua luz inspira outros — continue avançando com confiança, 
    pois você merece esse destaque.
    `,
    rMeaning: `
    Invertido, o Seis de Paus pode indicar dificuldade em alcançar reconhecimento, insegurança 
    ou medo de não ser bom o suficiente. Às vezes aponta para o excesso de orgulho, a busca 
    excessiva por aprovação ou até o ego inflado. Pode ser um sinal de que você precisa se 
    reconectar com o seu valor interno, sem depender tanto da validação externa. O sucesso é 
    mais sólido quando vem de dentro pra fora.
    `
  },
  {
    name: "Sete de Paus",
    keywords: "Perseverança, autodefesa, desafio, coragem, manter o terreno, pressão externa e firmeza.",
    rKeywords: "Esgotamento, insegurança, desistência, sentir-se atacado, resistência inútil e medo de se posicionar.",
    description: `
    Um homem está em posição elevada, segurando um bastão com firmeza enquanto outros seis bastões 
    surgem de baixo, como se tentassem derrubá-lo. Ele parece determinado e pronto para enfrentar 
    quem vier, mesmo estando sozinho. A cena mostra alguém que conquistou uma posição importante 
    e agora precisa defendê-la — com foco, persistência e garra.
    `,
    meaning: `
    O Sete de Paus é aquela carta que diz: "Você está certo em lutar pelo que acredita." Ela 
    aparece quando você precisa se manter firme contra críticas, opiniões contrárias ou obstáculos 
    inesperados. Apesar da pressão, essa carta reforça que você tem a vantagem e a força necessária 
    para resistir. Também fala sobre defender ideias, valores ou conquistas — mesmo que isso traga 
    conflito. Aqui, a vitória não vem fácil, mas sim da persistência e da integridade.
    `,
    rMeaning: `
    Invertido, o Sete de Paus pode indicar sentimentos de sobrecarga ou desgaste emocional. 
    Talvez você esteja se sentindo atacada, mal compreendida ou sem forças para continuar 
    defendendo algo. Também pode apontar para o medo de se posicionar, ou para batalhas 
    desnecessárias que só drenam sua energia. Essa posição sugere que talvez seja hora de 
    avaliar o que realmente vale a pena lutar — às vezes, soltar o bastão é o ato mais sábio.
    `
  },
  {
    name: "Oito de Paus",
    keywords: "Movimento, velocidade, notícias, progresso, ação repentina, decisões rápidas e fluxo livre.",
    rKeywords: "Atrasos, estagnação, bloqueios na comunicação, ansiedade e expectativas frustradas.",
    description: `
    Oito bastões voam pelo céu, paralelos e inclinados para baixo, como se estivessem 
    prestes a aterrissar. Não há pessoas, apenas um campo aberto e céu claro — o foco está 
    totalmente na energia dos bastões em movimento. Essa imagem mostra uma energia fluindo 
    livremente, como algo que já foi lançado e agora está em pleno curso, prestes a chegar ao destino.
    `,
    meaning: `
    O Oito de Paus anuncia um período de ações rápidas, boas notícias ou um fluxo intenso de 
    acontecimentos. Pode ser um projeto que decola, uma resposta que chega, uma mensagem importante 
    ou até mesmo o início de um novo ciclo cheio de dinamismo. É uma carta de progresso sem obstáculos 
    — tudo flui e se conecta com agilidade. Indica que é hora de agir sem medo, aproveitar o embalo e 
    deixar as coisas acontecerem naturalmente.
    `,
    rMeaning: `
    Invertida, essa carta pode mostrar atrasos inesperados, comunicações truncadas ou frustração por 
    algo que não anda. Também fala de ansiedade por querer que tudo aconteça logo — mas o tempo certo 
    ainda não chegou. Aqui, o conselho é acalmar a mente, aceitar os ritmos naturais das coisas e evitar 
    decisões precipitadas. Às vezes, parar também é um avanço.
    `
  },
  {
    name: "Nove de Paus",
    keywords: "Resiliência, defesa, cansaço com força, perseverança, proteção, preparação para o que vem e limites saudáveis.",
    rKeywords: "Exaustão, paranoia, medo do futuro, desistência, vulnerabilidade e barreiras emocionais excessivas.",
    description: `
    Um homem está em pé com um bastão nas mãos, parecendo machucado, com a cabeça enfaixada. 
    Atrás dele, há outros oito bastões cravados no chão, como se formassem uma barreira. Ele 
    olha para trás, desconfiado, como quem espera outro golpe. A imagem mostra alguém que já enfrentou muitos 
    desafios e agora está em alerta total, pronto para se defender de novo. Ele está cansado, mas não derrotado.
    `,
    meaning: `
    O Nove de Paus fala de força em meio ao cansaço. Você já passou por lutas, talvez esteja machucada, 
    mas ainda tem garra. Essa carta traz a mensagem de que você está perto do fim de um ciclo difícil — 
    só mais um esforço, e a vitória vem. Também pode ser um aviso para proteger seus limites, manter-se 
    atenta e não baixar a guarda agora. É aquela fase de “sobrevivente”, onde a coragem brilha mais forte 
    justamente por causa dos desafios.
    `,
    rMeaning: `
    Invertido, ele mostra um nível alto de exaustão física ou emocional. Pode estar sentindo que não 
    aguenta mais ou criando barreiras tão altas que ninguém consegue entrar. Também pode indicar medo 
    de se ferir novamente, mesmo quando o perigo já passou. É hora de entender se ainda há algo a proteger 
    ou se você está apenas revivendo feridas antigas. Às vezes, se permitir descansar também é um ato de coragem.
    `
  },
  {
    name: "Dez de Paus",
    keywords: "Exaustão, peso, obrigações, fim de uma jornada, responsabilidade excessiva e autossacrifício.",
    rKeywords: "Colapso, burnout, negação do cansaço, necessidade de delegar, libertação de fardos e não pedir ajuda.",
    description: `
    Um homem caminha curvado carregando dez bastões pesados nos braços. Ele está quase chegando à 
    cidade ao fundo, mas o peso parece demais. A cabeça está baixa, o corpo tenso — tudo indica 
    que ele está no limite das forças. A imagem mostra o esforço final de uma jornada difícil, com 
    a sensação de que ele precisa apenas dar mais alguns passos… mas o cansaço pode derrubá-lo antes.
    `,
    meaning: `
    O Dez de Paus aponta que você pode estar assumindo mais do que deveria. Talvez esteja tentando 
    resolver tudo sozinha, acumulando funções, emoções ou responsabilidades que já não cabem mais em você.
    Essa carta é um chamado pra reconhecer os limites e refletir: o que ainda faz sentido carregar? 
    Pode ser o fim de um ciclo pesado — e o começo de algo mais leve, se você se permitir deixar o que não é mais seu.
    Também fala de realização — você chegou até aqui, apesar de tudo. Agora, é hora de soltar o fardo e respirar.
    `,
    rMeaning: `
    Invertida, essa carta pode revelar que você já ultrapassou seus próprios limites. 
    Está se sentindo oprimida, sobrecarregada ou até ignorando sinais de burnout. Talvez 
    esteja se recusando a pedir ajuda por orgulho, medo ou costume. O conselho aqui é: delegue, 
    desabafe, liberte-se. Nem tudo precisa ser resolvido sozinha — dividir o peso é um ato de amor-próprio.
    `
  },
  {
    name: "Valete de Paus",
    keywords: "Curiosidade, novos começos, energia jovem, coragem, expressão criativa, entusiasmo e aventura.",
    rKeywords: "Falta de direção, imaturidade, impulsividade, indecisão e energia mal direcionada.",
    description: `
    Um jovem está de pé com um bastão nas mãos, olhando para a frente, com um olhar cheio de curiosidade 
    e desejo de aventura. Ele está posicionado como se estivesse pronto para seguir uma jornada. A paisagem 
    ao fundo é aberta, sugerindo infinitas possibilidades à frente. A imagem é uma explosão de energia e 
    potencial, refletindo uma atitude de confiança e desejo de explorar novas ideias e caminhos.
    `,
    meaning: `
    O Valete de Paus traz um momento de despertar e entusiasmo. É uma carta que fala sobre a chegada 
    de algo novo — uma ideia criativa, uma proposta excitante ou uma jornada que você sente que precisa 
    começar. Esse é o tipo de energia que surge quando você sente que algo maior está por vir e está 
    disposto a dar o primeiro passo. Pode ser também um empurrão para agir com mais confiança e aproveitar 
    a criatividade em potencial. É uma carta que representa aquele entusiasmo jovem e fresco, que nos 
    impulsiona a seguir em frente, sem medo do desconhecido.
    `,
    rMeaning: `
    Invertido, o Valete de Paus pode trazer energia dispersa ou falta de foco. Você pode estar cheio 
    de boas ideias, mas sem saber como executá-las, ou com medo de arriscar. Também fala de impulsividade, 
    onde a pressa para começar algo pode gerar falta de planejamento. É o momento de avaliar o que realmente 
    é importante e qual direção seguir para não perder tempo ou energia com algo que pode não ser o caminho certo.
    `
  },
  {
    name: "Cavaleiro de Paus",
    keywords: "Coragem, ação rápida, aventura, movimento, confiança, ousadia, entusiasmo e liberdade.",
    rKeywords: "Imprudência, impulsividade, falta de planejamento, exaustão, risco de fracasso e atitudes precipitas.",
    description: `
    O Cavaleiro está montado em um cavalo em movimento, avançando com uma postura ereta e 
    um bastão levantado, como se estivesse pronto para enfrentar qualquer batalha à frente. 
    Ele olha para frente com determinação, deixando um rastro de energia atrás de si, enquanto 
    o cavalo galopa livremente pela paisagem. A imagem transmite uma sensação de ação direta e 
    entusiasmo, com o Cavaleiro simbolizando a coragem de avançar sem hesitação, mesmo diante da incerteza.
    `,
    meaning: `
    O Cavaleiro de Paus traz um ímpeto de ação, onde as coisas começam a acontecer rapidamente. 
    Ele representa a energia de começar algo novo com paixão e uma vontade de se aventurar. 
    Se você está buscando dar um passo à frente ou começar um projeto cheio de energia, essa 
    carta sugere que agora é a hora de agarrar as oportunidades e não deixar a inércia tomar conta.
    É a carta dos corajosos, dos que não têm medo de explorar territórios desconhecidos e de testar os 
    limites. Se estiver em dúvida, essa carta pede para agir, mover-se e não ficar esperando o momento perfeito.
    `,
    rMeaning: `
   Invertido, o Cavaleiro de Paus pode alertar sobre impulsividade sem direção. Você pode estar agindo 
   de forma apressada, sem o devido planejamento, ou buscando aventuras que podem não ser tão vantajosas 
   quanto parecem. Ele também fala sobre exaustão ou frustração ao perceber que os projetos não estão 
   indo tão rápido quanto esperado. Pode ser necessário dar um passo atrás e avaliar o que realmente é 
   viável e alinhado com seus objetivos.
    `
  },
  {
    name: "Rainha de Paus",
    keywords: "Liderança, confiança, criatividade, paixão, magnetismo, força interior, independência e vitalidade.",
    rKeywords: "Arrogância, descontrole, falta de foco, dependência, exagero e manipulação.",
    description: `
    A Rainha está sentada em seu trono, com um bastão em uma das mãos e a outra estendida à frente, 
    como se estivesse pronta para agir ou conduzir os outros. Ela tem uma expressão serena, mas com 
    uma presença muito forte e cativante. Atrás dela, há um leão, que simboliza a sua força e coragem.
    A imagem reflete a energia vibrante e poderosa de uma mulher que não apenas tem domínio sobre seu 
    próprio destino, mas também influencia e inspira aqueles ao seu redor.
    `,
    meaning: `
    A Rainha de Paus traz uma energia de liderança e confiança. Ela é uma pessoa que sabe exatamente 
    o que quer e como conquistar, inspirando os outros com seu carisma natural. Quando essa carta aparece, 
    ela sinaliza que você tem tudo o que é necessário para tomar as rédeas da situação e levar adiante seus 
    projetos com coragem e criatividade. Ela também fala sobre autoconfiança e autenticidade, a habilidade 
    de ser você mesma sem medo de brilhar e de usar sua energia criativa para inspirar aqueles ao seu redor.
    `,
    rMeaning: `
    Quando invertida, a Rainha de Paus pode indicar uma falta de foco ou controle, onde sua energia 
    criativa e liderança estão sendo mal direcionadas. Pode sugerir que você está perdendo o equilíbrio, 
    talvez agindo de forma impulsiva ou descontrolada. Ela também pode ser um sinal de dificuldades em 
    confiar em si mesma ou de uma dependência excessiva da aprovação dos outros. É hora de refletir sobre 
    como você pode recuperar a confiança em suas próprias capacidades e voltar a ser a líder poderosa que você é.
    `
  },
  {
    name: "Rei de Paus",
    keywords: "Liderança, confiança, visão, determinação, inspiração, ação corajosa, empreendedorismo e motivação.",
    rKeywords: "Autoritarismo, falta de visão, falta de foco, agressividade, arrogância e perda de controle.",
    description: `
   O Rei de Paus está sentado em seu trono, com um bastão de poder em mãos e uma expressão de determinada 
   confiança. Ele olha para frente, com a postura ereta e forte, simbolizando sua capacidade de liderar com 
   clareza e paixão. Ao fundo, há chamas, sugerindo a energia vibrante e o poder criativo que ele utiliza para 
   guiar sua jornada. Sua presença é uma inspiração para os outros, e a imagem fala sobre o impacto de sua 
   liderança baseada em coragem e visão.
    `,
    meaning: `
    O Rei de Paus é a carta da liderança com visão. Ele é alguém que não apenas age com coragem, 
    mas também com um forte propósito. Quando essa carta aparece, ela indica que você tem todas as 
    qualidades necessárias para assumir o controle de sua vida, com confiança e direção claras. É uma 
    carta de inspiração, onde você está sendo chamado a guiar com sabedoria, confiança e um espírito aventureiro. 
    É hora de tomar decisões ousadas, de agregar sua energia criativa e usar seu poder de liderança para alcançar 
    os resultados que deseja.
    `,
    rMeaning: `
    Invertido, o Rei de Paus pode sugerir falta de visão, falta de controle ou uma liderança que se tornou 
    autoritária ou agressiva. Ele também pode indicar que você não está alinhado com suas próprias paixões 
    ou está com dificuldades para tomar decisões claras. Quando a carta aparece invertida, é um sinal de 
    que você pode estar sendo impulsivo demais ou agindo com falta de foco. Talvez seja hora de dar um passo 
    atrás, avaliar a situação e encontrar um caminho mais equilibrado e consciente.
    `
  }
];

const waiteCards = arcanosMaiores.concat(naipeCopas, naipeOuros, naipeEspadas, naipePaus);

const lenormandCards = [
  {
    name: "O Cavaleiro",
    keywords: "Mensagem, novidade, movimento, visita, ação rápida e chegada.",
    description: `
    A carta do Cavaleiro geralmente mostra um homem montado a cavalo, 
    avançando com determinação. Ele simboliza movimento e coragem, sempre 
    seguindo em frente. Sua presença representa algo que está vindo ao seu 
    encontro. Seja uma notícia, uma pessoa ou uma situação, o Cavaleiro 
    avisa: prepare-se para mudanças e novidades!
    `,
    meaning: `
    O Cavaleiro traz notícias, novidades ou alguém se aproximando. 
    É uma carta dinâmica, que representa ação, velocidade e progresso. 
    Pode anunciar a chegada de algo ou alguém que muda o rumo das coisas. 
    Também indica início de uma jornada ou um novo ciclo.
    Quando essa carta aparece, é um sinal de que as coisas 
    estão se movendo – uma resposta, uma visita, uma nova oportunidade ou 
    até mesmo uma ideia que se concretiza.
    `,
  },
  {
    name: "O Trevo",
    keywords: "Sorte, oportunidade, leveza, jogo, risco e algo passageiro.",
    description: `O Trevo é uma carta associada à sorte rápida,
  oportunidades inesperadas e situações leves ou passageiras.
  Geralmente representa um pequeno golpe de sorte,
  algo que surge de forma repentina e pode ser aproveitado se você estiver atento.
  Também pode indicar um momento de descontração, brincadeira
  ou algo que não deve ser levado tão a sério.`,
    meaning: `O Trevo sugere que algo positivo pode surgir de forma repentina,
  mas que será passageiro.
  É uma carta de oportunidades que exigem ação rápida para serem aproveitadas.
  Ela também pode apontar para situações temporárias,
  de pouca duração, ou que envolvem um certo grau de risco ou diversão.
  Em alguns contextos, pode alertar para não exagerar na despreocupação.`,
  }
  ,
  {
    name: "O Navio",
    keywords: "Viagem, movimento, distância, mudanças, comércio e novos horizontes.",
    description: `O Navio representa deslocamentos, viagens e mudanças que estão a caminho
  Pode simbolizar tanto viagens físicas quanto transições emocionais ou mentais
  A carta fala de explorar novos territórios e expandir horizontes
  Também pode indicar algo ou alguém que vem de longe, estrangeiro ou distante`,
    meaning: `O Navio sugere que algo está em movimento ou prestes a mudar
  Essas mudanças costumam ser lentas e graduais, exigindo paciência e tempo para se concretizarem
  Pode indicar progresso, novas direções ou a necessidade de se afastar de algo
  Em contextos comerciais, pode representar importações, exportações ou negócios à distância`,
  }
  ,
  {
    name: "A Casa",
    keywords: "Lar, segurança, estrutura, família, estabilidade e proteção.",
    description: `A Casa representa o ambiente doméstico, a vida familiar e tudo que traz sensação de segurança.
  É a base, o alicerce sobre o qual se constrói a vida.
  Pode simbolizar também propriedades, imóveis ou questões relacionadas ao lar.
  É uma carta que fala de conforto, privacidade e estrutura sólida.`,
    meaning: `A Casa sugere a importância de estabilidade e proteção no momento atual.
  Pode indicar foco em assuntos familiares, domésticos ou relacionados à moradia.
  Também traz a ideia de criar raízes, buscar conforto e manter as coisas sob controle.
  Em alguns contextos, pode representar uma pessoa reservada ou tradicional.`,
  }
  ,
  {
    name: "A Árvore",
    keywords: "Crescimento, saúde, estabilidade, raízes, evolução e conexão espiritual.",
    description: `A Árvore representa crescimento lento e constante, saúde física e bem-estar emocional.
  Está ligada à ideia de enraizamento, paciência e fortalecimento ao longo do tempo.
  Também simboliza conexões profundas, tanto familiares quanto espirituais.
  É uma carta de base sólida, que indica maturidade, equilíbrio e algo fixo, sem movimento.`,
    meaning: `A Árvore sugere que os frutos do seu esforço virão com o tempo, exigindo constância e paciência.
  Pode indicar foco em saúde, hábitos de vida ou questões de longo prazo.
  Também aponta para relações duradouras e estáveis, ou processos internos de evolução.
  Em alguns casos, representa uma situação fixa, que se mantém estável e não muda com facilidade.`,
  }
  ,
  {
    name: "As Nuvens",
    keywords: "Dúvida, confusão, incerteza, desorientação, ansiedade e instabilidade.",
    description: `As Nuvens representam momentos de confusão, falta de clareza e dificuldade para enxergar as coisas como realmente são.
  Essa carta simboliza situações nubladas, onde a mente pode estar cheia de dúvidas ou inseguranças.
  Também pode indicar instabilidade emocional, pensamentos confusos e decisões adiadas.
  Em geral, aponta para algo passageiro, mas que no momento está impedindo a visão clara.`,
    meaning: `As Nuvens sugerem que há algo obscurecendo a verdade ou dificultando a compreensão de uma situação.
  Pode indicar mal-entendidos, ilusões ou a sensação de estar perdido mental ou emocionalmente.
  É uma carta de alerta para não tomar decisões precipitadas enquanto tudo estiver nebuloso.
  Com o tempo, a neblina se dissipa e a clareza retorna, mas por agora é melhor esperar.`,
  }
  ,
  {
    name: "A Serpente",
    keywords: "Desejo, sedução, traição, engano, manipulação e perigo oculto.",
    description: `A Serpente representa situações em que há algo escondido, como segredos, intenções duvidosas ou jogos de manipulação.
  É uma carta que alerta para falsidade, pessoas ardilosas ou caminhos que parecem bons, mas podem ser traiçoeiros.
  Também pode simbolizar desejos intensos, sedução e tentações que desviam do caminho mais seguro.
  É preciso cautela e discernimento ao lidar com essa energia.`,
    meaning: `A Serpente sugere que pode haver alguém ou algo em sua vida que não é o que parece ser.
  Pode indicar traições, mentiras, inveja ou armadilhas sutis.
  Também pode representar desejos pessoais intensos que, se não forem bem conduzidos, geram complicações.
  É uma carta de alerta para observar bem ao redor, agir com inteligência e evitar confrontos diretos.`,
  }
  ,
  {
    name: "O Caixão",
    keywords: "Fim, perda, encerramento, transformação, luto e renascimento.",
    description: `O Caixão representa o fim de um ciclo, o encerramento de algo que já cumpriu seu papel.
  Pode simbolizar perdas, términos ou mudanças inevitáveis que exigem aceitação.
  Apesar do tom pesado, essa carta também carrega a ideia de transformação e renascimento.
  Depois do fim, algo novo sempre pode surgir com mais força e propósito.`,
    meaning: `O Caixão sugere que é hora de deixar algo para trás, mesmo que seja difícil.
  Pode indicar luto, desapego ou a necessidade de aceitar uma mudança profunda.
  Também representa a libertação de padrões antigos ou situações que já não servem mais.
  É uma carta de encerramento, mas também de preparação para o novo que virá.`,
  }
  ,
  {
    name: "O Buquê",
    keywords: "Alegria, presente, beleza, harmonia, gentileza e reconhecimento.",
    description: `O Buquê representa momentos de alegria, gestos de carinho e recompensas inesperadas.
  É uma carta que fala de beleza, gratidão e harmonia no ambiente ou nas relações.
  Também simboliza presentes, surpresas agradáveis e reconhecimento por atitudes positivas.
  A energia dessa carta é leve, generosa e cheia de boas intenções.`,
    meaning: `O Buquê sugere que algo bom está por vir, como uma surpresa, um elogio ou um gesto de afeto.
  Pode indicar momentos de felicidade, socialização e encontros agradáveis.
  Também é um sinal de que suas ações estão sendo reconhecidas e valorizadas.
  É uma carta que convida a apreciar o lado bonito da vida e a retribuir com gentileza.`,
  }
  ,
  {
    name: "A Foice",
    keywords: "Corte, decisão, separação, fim repentino, risco e colheita.",
    description: `A Foice representa cortes rápidos, decisões drásticas e encerramentos súbitos.
  É uma carta que indica algo sendo removido de forma inesperada, mas muitas vezes necessária.
  Também pode simbolizar riscos, acidentes ou acontecimentos que exigem atenção imediata.
  Por outro lado, traz a ideia de colheita: o momento em que se recolhe o que foi plantado.`,
    meaning: `A Foice sugere uma mudança repentina, uma ruptura ou o fim de algo que já não serve mais.
  Pode indicar separações, afastamentos ou decisões difíceis que precisam ser tomadas sem demora.
  É uma carta de ação rápida, que pede cuidado com o que está ao redor.
  Também lembra que toda colheita é resultado do que foi cultivado, e é tempo de lidar com as consequências.`,
  }
  ,
  {
    name: "O Chicote",
    keywords: "Conflito, repetição, discussão, tensão, crítica e agressividade.",
    description: `O Chicote representa conflitos, desentendimentos e padrões que se repetem.
  É uma carta que fala de tensões, cobranças e discussões que podem surgir de forma intensa.
  Também pode simbolizar hábitos negativos, autocrítica ou comportamento agressivo.
  Sua energia é forte, direta e, às vezes, desgastante.`,
    meaning: `O Chicote sugere que há algo sendo repetido de maneira prejudicial, como discussões ou pensamentos negativos.
  Pode indicar brigas, estresse, críticas excessivas ou tensão acumulada.
  Também alerta para padrões de comportamento que precisam ser quebrados.
  É uma carta que convida à reflexão e ao controle da impulsividade para evitar desgastes maiores.`,
  }
  ,
  {
    name: "Os Pássaros",
    keywords: "Comunicação, conversa, ansiedade, dupla, agitação e encontros.",
    description: `Os Pássaros representam comunicação, troca de ideias e interações sociais.
  É uma carta que fala de conversas rápidas, telefonemas, mensagens ou reuniões.
  Também pode simbolizar ansiedade, nervosismo ou situações passageiras que causam agitação.
  Frequentemente está associada a pares, duplas ou cooperação entre duas pessoas.`,
    meaning: `Os Pássaros sugerem que a comunicação será essencial para lidar com a situação atual.
  Pode indicar encontros, debates ou a necessidade de se expressar com clareza.
  Também alertam para nervosismo, distração ou excesso de estímulo mental.
  É uma carta de movimento leve e temporário, que passa rápido, mas pode ser importante.`,
  }
  ,
  {
    name: "A Criança",
    keywords: "Início, novidade, inocência, aprendizado, pureza e curiosidade.",
    description: `A Criança representa novos começos, inocência e a energia de um novo ciclo.
  É uma carta que fala de renovação, descobertas e o olhar puro sobre o mundo.
  Também pode simbolizar um novo projeto, uma ideia em desenvolvimento ou algo ainda em seus primeiros passos.
  Sua energia é leve, curiosa e cheia de possibilidades.`,
    meaning: `A Criança sugere que você está prestes a embarcar em algo novo, seja uma nova jornada, um aprendizado ou uma descoberta.
  Pode indicar o início de algo importante, mas que ainda precisa de tempo para amadurecer.
  Também traz a energia da diversão, da leveza e da necessidade de se conectar com a simplicidade das coisas.
  É uma carta que chama atenção para a importância de dar passos com confiança e curiosidade.`,
  }
  ,
  {
    name: "A Raposa",
    keywords: "Astúcia, engano, dissimulação, inteligência, trabalho e precaução.",
    description: `A Raposa representa inteligência estratégica, astúcia e a habilidade de se adaptar a situações difíceis.
  É uma carta que alerta para enganos ou manipulação, seja por parte de outras pessoas ou até mesmo de você.
  Também simboliza trabalho árduo, esforço disfarçado ou situações que exigem cautela.
  Sua energia é de vigilância e cuidado para evitar armadilhas ou falhas inesperadas.`,
    meaning: `A Raposa sugere que você deve agir com cautela e usar a inteligência para resolver situações desafiadoras.
  Pode indicar enganos, truques ou manipulação, seja em sua vida pessoal ou profissional.
  É uma carta que pede para estar atento aos detalhes e evitar confiar cegamente em tudo o que parece bom.
  A Raposa também pode simbolizar trabalho duro, mas que precisa de maior precisão ou ajustes para ser bem-sucedido.`,
  }
  ,
  {
    name: "O Urso",
    keywords: "Força, poder, proteção, autoridade, coragem, dominância e possessividade.",
    description: `O Urso representa força, poder e a capacidade de enfrentar desafios com coragem.
  É uma carta de proteção, que pode indicar uma figura de autoridade ou uma fonte de apoio.
  Também simboliza a necessidade de ter controle sobre a situação ou de exercer domínio sobre algo.
  Sua energia é intensa e garante a sensação de segurança diante de obstáculos.
  Além disso, o Urso também traz a ideia de possessividade, com uma tendência a querer controlar ou manter algo de forma exclusiva.`,
    meaning: `O Urso sugere que você tem a força necessária para superar qualquer dificuldade à sua frente.
  Pode indicar a presença de uma pessoa poderosa ou influente em sua vida, alguém que exerce autoridade ou proteção.
  É uma carta de coragem e determinação, que chama a atenção para a necessidade de se manter firme e não ceder facilmente.
  Também pode simbolizar questões financeiras ou materiais, como o poder econômico ou a busca por estabilidade.
  Em alguns casos, pode alertar para um comportamento possessivo, seja em relação a bens materiais ou relações pessoais.`,
  }
  ,
  {
    name: "A Estrela",
    keywords: "Esperança, inspiração, cura, clareza, visão e orientação.",
    description: `A Estrela representa a luz no fim do túnel, trazendo clareza e orientação nos momentos de incerteza.
  É uma carta de esperança, inspiração e conexão com o divino ou com algo maior.
  Simboliza cura, tanto emocional quanto física, e a capacidade de ver a verdade em meio à escuridão.
  Sua energia é suave, curativa e cheia de otimismo, sugerindo que você está sendo guiado para um caminho de paz e realização.`,
    meaning: `A Estrela sugere que você está recebendo a orientação necessária para superar desafios e alcançar seus objetivos.
  Pode indicar um período de cura, renovação e clareza, onde a visão do futuro se torna mais nítida.
  É uma carta de esperança, que te incentiva a manter a fé e a confiança, mesmo quando a jornada parece difícil.
  A Estrela também traz a mensagem de que há forças positivas ao seu redor, ajudando a iluminar seu caminho.`,
  }
  ,
  {
    name: "A Cegonha",
    keywords: "Mudança, renovação, transformação, progresso, novas oportunidades e migração.",
    description: `A Cegonha representa mudanças significativas e transformações que estão por vir.
  É uma carta de renovação, que simboliza novos começos e a chegada de oportunidades frescas.
  Pode indicar uma mudança de casa, cidade ou até uma mudança interna, no sentido emocional ou espiritual.
  Sua energia é positiva, focada em progresso e evolução.`,
    meaning: `A Cegonha sugere que mudanças importantes estão a caminho e que você está pronto para elas.
  Pode indicar a necessidade de adaptação a novas circunstâncias ou o surgimento de algo novo e promissor.
  É uma carta de esperança e novos horizontes, alertando para a transformação que traz crescimento.
  Em alguns casos, pode representar a chegada de algo ou alguém, como um bebê ou uma nova fase de vida.`,
  }
  ,
  {
    name: "O Cão",
    keywords: "Amizade, lealdade, companheirismo, confiança, apoio e fidelidade.",
    description: `O Cão representa a lealdade, amizade e os relacionamentos baseados na confiança.
  É uma carta que simboliza apoio, seja de amigos, familiares ou colegas.
  Fala sobre a importância de companheiros fiéis e a presença de pessoas que estarão ao seu lado nos momentos difíceis.
  Sua energia é positiva, amigável e confiável.`,
    meaning: `O Cão sugere que você tem ao seu redor pessoas que oferecem apoio genuíno e confiável.
  Pode indicar que você está sendo leal a alguém ou recebendo ajuda de alguém fiel.
  É uma carta de amizade e companheirismo, que destaca o valor das conexões sinceras.
  Em alguns contextos, pode também sugerir a necessidade de cultivar amizades verdadeiras ou de ser mais confiável e disponível para os outros.`,
  }
  ,
  {
    name: "A Torre",
    keywords: "Isolamento, estrutura, autoridade, autoridade excessiva, separação e libertação.",
    description: `A Torre representa estruturas rígidas, hierarquias e a autoridade, muitas vezes associadas ao controle excessivo.
  É uma carta que pode indicar isolamento, seja emocional ou físico, e a necessidade de ruptura de antigas estruturas.
  Simboliza também libertação de algo que estava restrito ou preso, mas pode envolver dor ou desconforto no processo.
  Sua energia é forte, marcando uma separação ou uma mudança repentina que altera as bases de algo.`,
    meaning: `A Torre sugere que algo sólido e estruturado está prestes a ser desmantelado ou mudar profundamente.
  Pode indicar uma separação, uma crise ou uma grande transformação que exige adaptação.
  É uma carta de libertação, onde o antigo dá espaço para o novo, mas o processo pode ser doloroso.
  Também pode representar um momento de grande revelação ou a necessidade de se livrar de limitações que estavam prendendo seu crescimento.`,
  }
  ,
  {
    name: "O Jardim",
    keywords: "Socialização, comunidade, encontros, festas, relações públicas e grupos.",
    description: `O Jardim representa ambientes sociais, encontros, eventos e interações com um grande número de pessoas.
  É uma carta que simboliza a importância das relações sociais e o contato com a comunidade.
  Pode indicar que um evento ou reunião será importante, ou que você está prestes a entrar em um círculo de pessoas influentes.
  Sua energia é vibrante, alegre e voltada para a interação e a troca.`,
    meaning: `O Jardim sugere que a socialização e os relacionamentos são fundamentais no momento atual.
  Pode indicar convites para eventos, reuniões ou oportunidades de expandir sua rede social.
  É uma carta que fala de colaboração, grupos e ambientes onde as pessoas se reúnem para compartilhar ideias e experiências.
  Em alguns casos, pode ser um sinal de que você deve sair mais, participar mais ativamente e aproveitar oportunidades de interação.`,
  }
  ,
  {
    name: "A Montanha",
    keywords: "Obstáculo, desafio, dificuldade, resistência, estabilidade e paciência.",
    description: `O Montanha representa obstáculos, desafios ou situações que exigem esforço e paciência para serem superadas.
  É uma carta que fala de resistência, onde é necessário ser firme e persistente diante de dificuldades.
  Simboliza também estabilidade e a solidez que vem de superar os altos e baixos.
  Sua energia é de perseverança, lembrando que, embora o caminho seja difícil, a vitória é possível com empenho.`,
    meaning: `O Montanha sugere que você está diante de um grande desafio ou obstáculo que exigirá tempo e esforço para ser vencido.
  Pode indicar dificuldades temporárias, mas também oferece uma lição de paciência e persistência.
  É uma carta que chama a atenção para a necessidade de uma abordagem sólida e bem fundamentada.
  Pode ser um sinal de que você deve ter mais resistência e confiança, sabendo que, no fim, a superação é alcançável.`,
  }
  ,
  {
    name: "Os Caminhos",
    keywords: "Escolha, decisão, alternativas, direção, opções e indecisão.",
    description: `Os Caminhos representam momentos de escolha, onde você precisa decidir entre diferentes opções ou direções a seguir.
  É uma carta de decisões importantes, que pede reflexão sobre as alternativas disponíveis.
  Pode simbolizar um ponto de bifurcação em sua vida, onde o futuro depende da direção que você escolher.
  Sua energia é de possibilidades, mas também de indecisão, já que há várias alternativas a serem consideradas.`,
    meaning: `Os Caminhos indicam que você está diante de uma decisão importante ou de várias opções a serem escolhidas.
  Pode representar a necessidade de refletir cuidadosamente sobre os próximos passos, já que cada escolha terá um impacto significativo.
  É uma carta que traz a energia de possibilidades abertas, mas também a pressão de fazer a escolha certa.
  É importante que você confie em sua intuição e no que faz mais sentido para seu crescimento pessoal.`,
  }
  ,
  {
    name: "Os Ratos",
    keywords: "Perda, roubo, desgaste, destruição, ansiedade e pequenos problemas.",
    description: `Os Ratos representam perdas, furtos ou pequenos danos que podem ocorrer de forma gradual, mas constante.
  É uma carta que fala sobre o desgaste de algo, seja no âmbito emocional, material ou até mesmo físico.
  Pode indicar que algo está sendo corroído ou consumido aos poucos, como uma relação, um recurso ou uma situação.
  Sua energia é de alerta, trazendo a sensação de que algo está sendo perdido ou enfraquecido sem que você perceba completamente.`,
    meaning: `Os Ratos sugerem que há algo em sua vida que está sendo destruído ou consumido de maneira lenta, mas persistente.
  Pode indicar um pequeno problema que, se não tratado, pode se tornar algo maior e mais difícil de lidar.
  É uma carta que alerta para o risco de perdas, roubo ou desgaste, seja de recursos, relacionamentos ou saúde.
  Essa carta pede atenção, já que as perdas podem ser invisíveis até que se tornem significativas.`,
  }
  ,
  {
    name: "O Coração",
    keywords: "Amor, paixão, afetividade, harmonia, felicidade, sentimentos e conexões profundas.",
    description: `O Coração representa amor, emoções e tudo o que está ligado ao afeto e à paixão.
  É uma carta que simboliza conexões emocionais profundas, seja em relacionamentos pessoais, familiares ou amizades.
  Pode também refletir felicidade, alegria e momentos de harmonia em sua vida.
  Sua energia é calorosa, amorosa e cheia de compaixão, lembrando-nos da importância de cultivar o amor em todas as suas formas.`,
    meaning: `O Coração sugere que você está em sintonia com suas emoções e com os sentimentos das pessoas ao seu redor.
  Pode indicar um momento de alegria e felicidade nos relacionamentos ou a chegada de uma conexão amorosa significativa.
  É uma carta de harmonia, mostrando que o amor e os sentimentos estão em equilíbrio.
  Também pode ser um sinal de que você deve dar mais atenção às suas emoções e àqueles que você ama, buscando a felicidade e a paz interior.`,
  }
  ,
  {
    name: "O Anel",
    keywords: "Compromisso, união, aliança, vínculo, contratos e promessas.",
    description: `O Anel representa compromissos e uniões, seja em relacionamentos pessoais, profissionais ou legais.
  É uma carta que simboliza laços duradouros, como casamentos, parcerias ou qualquer tipo de aliança formalizada.
  Pode também indicar promessas ou contratos importantes, que exigem responsabilidade e fidelidade.
  Sua energia é de estabilidade e continuidade, refletindo a força de um vínculo que deve ser respeitado e mantido.`,
    meaning: `O Anel sugere que você está ou estará envolvido em um compromisso importante, seja em um relacionamento ou em algum aspecto da sua vida.
  Pode indicar o fortalecimento de uma aliança ou a assinatura de um contrato que trará consequências duradouras.
  É uma carta que fala sobre a seriedade dos vínculos e a importância de honrar promessas e compromissos.
  A energia do Anel também pode alertar para a necessidade de manter a fidelidade e a integridade em suas relações e acordos.`,
  }
  ,
  {
    name: "O Livro",
    keywords: "Segredo, conhecimento, mistério, estudo, aprendizado e sabedoria.",
    description: `O Livro representa o conhecimento oculto, informações que estão fora de vista ou ainda a serem descobertas.
  É uma carta que fala sobre mistérios, segredos ou algo que precisa ser estudado e compreendido.
  Pode indicar que algo ainda está em processo de revelação, e você precisa se aprofundar para entender o que está escondido.
  Sua energia é de introspecção e descoberta, sugerindo que você deve buscar mais sabedoria ou informações antes de agir.`,
    meaning: `O Livro sugere que você está prestes a descobrir algo importante ou que precisa buscar mais conhecimento sobre uma situação.
  Pode indicar um momento de estudo, aprendizado ou revelação de algo que estava oculto ou não totalmente compreendido.
  É uma carta que chama a atenção para os segredos que precisam ser desvendados e a importância de buscar sabedoria antes de tomar decisões.
  Também pode ser um sinal de que você está em um período de introspecção, onde respostas podem surgir de dentro de você.`,
  }
  ,
  {
    name: "A Carta",
    keywords: "Mensagem, comunicação, notícia, aviso, correspondência e revelação.",
    description: `A Carta representa comunicação e o envio de mensagens, seja por meio de cartas físicas, e-mails ou outras formas de correspondência.
  É uma carta que simboliza a chegada de uma notícia importante ou de um aviso que pode mudar a situação atual.
  Pode indicar também um momento de revelação, onde algo que estava oculto será compartilhado ou revelado.
  Sua energia é de clareza, expectativa e a ideia de que algo está prestes a ser comunicado.`,
    meaning: `A Carta sugere que você receberá uma mensagem importante, seja em forma de carta, e-mail ou outro tipo de comunicação.
  Pode indicar que notícias estão a caminho, trazendo clareza ou revelações sobre uma situação.
  É uma carta que fala sobre a importância da comunicação e o impacto que uma informação pode ter em sua vida.
  Pode também indicar que você precisa enviar uma mensagem ou se comunicar com alguém para esclarecer algo que está em aberto.`,
  }
  ,
  {
    name: "O Homem",
    keywords: "Masculinidade, força, ação, liderança, autoridade, personalidade e figura masculina.",
    description: `O Homem representa a energia masculina, seja em um contexto de liderança, força ou ação.
  É uma carta que simboliza uma figura masculina importante em sua vida ou pode se referir a aspectos de sua própria energia masculina.
  Pode indicar alguém com um papel de liderança, autoridade ou influência, ou ainda a necessidade de assumir uma postura mais ativa e determinada.
  Sua energia é voltada para a ação, a assertividade e a tomada de decisões.`,
    meaning: `O Homem sugere que você está sendo influenciado por uma figura masculina ou que está sendo chamado a tomar ações com confiança e liderança.
  Pode indicar uma pessoa significativa em sua vida, como um parceiro, amigo, colega ou mentor, que tem um papel de influência.
  É uma carta que destaca a necessidade de se posicionar e ser mais assertivo, mostrando sua força e determinação.
  Também pode indicar que você precisa assumir um papel de liderança ou responsabilidade em uma situação.`,
  }
  ,
  {
    name: "A Mulher",
    keywords: "Feminilidade, intuição, emoções, nutrição, receptividade, figura feminina.",
    description: `A Mulher representa a energia feminina, seja em um contexto de intuição, emoções ou nutrição.
  É uma carta que simboliza uma figura feminina importante em sua vida ou pode se referir aos aspectos de sua própria energia feminina.
  Pode indicar alguém com um papel de nutrição, apoio ou cuidado, ou ainda a necessidade de ser mais receptivo, acolhedor e intuitivo.
  Sua energia é suave, cuidadosa e voltada para o equilíbrio emocional e as relações interpessoais.`,
    meaning: `A Mulher sugere que você está sendo influenciado por uma figura feminina ou que está sendo chamado a explorar sua energia feminina.
  Pode indicar uma pessoa significativa em sua vida, como uma parceira, mãe, amiga ou mentora, que tem um papel de apoio e cuidado.
  É uma carta que destaca a importância de se conectar com suas emoções, nutrir suas relações e usar sua intuição.
  Também pode indicar a necessidade de ser mais receptivo e cuidar melhor de si mesmo e dos outros.`,
  }
  ,
  {
    name: "Os Lírios",
    keywords: "Paz, pureza, harmonia, tranquilidade, maturidade e sabedoria.",
    description: `Os Lírios representam paz, harmonia e uma energia suave de serenidade.
  É uma carta que simboliza pureza de sentimentos, com a capacidade de encontrar equilíbrio nas situações mais difíceis.
  Pode indicar uma fase de tranquilidade, onde a sabedoria e a maturidade ajudam a trazer clareza e paz interior.
  Sua energia é calmante, trazendo uma sensação de equilíbrio e tranquilidade, muitas vezes associada à sabedoria adquirida ao longo do tempo.`,
    meaning: `Os Lírios sugerem um período de harmonia e paz em sua vida, onde você pode encontrar equilíbrio emocional e clareza.
  Pode indicar a necessidade de se afastar do caos e buscar momentos de serenidade e reflexão.
  É uma carta de sabedoria e maturidade, mostrando que você está em um lugar onde pode encontrar tranquilidade mesmo em situações desafiadoras.
  Também pode ser um sinal de que você está prestes a viver uma fase mais estável e equilibrada, onde o crescimento interior é possível.`,
  }
  ,
  {
    name: "O Sol",
    keywords: "Sucesso, clareza, alegria, vitalidade, realização e iluminação.",
    description: `O Sol representa clareza, sucesso e uma energia positiva que ilumina todas as áreas da sua vida.
  É uma carta de alegria, vitalidade e boas notícias, simbolizando o triunfo e a realização de seus objetivos.
  Pode indicar um momento de crescimento pessoal, onde você se sente energizado e pronto para enfrentar desafios com confiança.
  Sua energia é radiante e otimista, trazendo luz a situações difíceis e revelando soluções claras.`,
    meaning: `O Sol sugere que você está entrando em um período de sucesso, onde seus esforços finalmente serão recompensados.
  É uma carta de realização, indicando que você está em sintonia com sua verdadeira essência e com as oportunidades que surgem à sua frente.
  Pode também representar a superação de desafios, trazendo clareza e uma visão otimista do futuro.
  É uma carta que incentiva a confiança em si mesmo, destacando que você está no caminho certo e pronto para colher os frutos do seu trabalho.`,
  }
  ,
  {
    name: "A Lua",
    keywords: "Mistério, intuição, ilusões, confusão, incerteza, sonhos e emoções.",
    description: `A Lua representa o reino do mistério, da intuição e das emoções profundas.
  É uma carta que simboliza confusão, incertezas e enganos, muitas vezes refletindo o que está escondido ou não é claro.
  Pode indicar a presença de ilusões, onde as coisas não são o que parecem ser, ou uma situação onde é necessário confiar na intuição para encontrar a verdade.
  Sua energia é introspectiva, tocando as áreas mais sensíveis e subconscientes da mente.`,
    meaning: `A Lua sugere que você pode estar enfrentando um momento de incerteza ou confusão, onde as respostas não são claras.
  Pode indicar enganos, ilusões ou a necessidade de explorar mais profundamente uma situação para entender a verdade oculta.
  É uma carta que chama a atenção para a intuição e os sonhos, incentivando você a prestar atenção aos sinais do seu inconsciente.
  Embora possa representar um período de incerteza, também oferece a oportunidade de crescer espiritualmente e se conectar com sua sabedoria interior.`,
  }
  ,
  {
    name: "A Chave",
    keywords: "Solução, revelação, resposta, oportunidade, desbloqueio e conhecimento.",
    description: `A Chave representa soluções, respostas e a capacidade de abrir portas para novas oportunidades.
  É uma carta que simboliza o desbloqueio de situações, revelando o caminho para a resolução de problemas ou o acesso a novos conhecimentos.
  Pode indicar que uma resposta ou solução importante está à sua disposição, e que você está prestes a descobrir algo significativo.
  Sua energia é de clareza e revelação, sugerindo que um mistério será solucionado ou um bloqueio será superado.`,
    meaning: `A Chave sugere que você está prestes a encontrar a solução para uma questão importante ou desbloquear uma situação que estava estagnada.
  É uma carta que indica novas oportunidades à vista, trazendo clareza e a possibilidade de alcançar um objetivo ou revelar uma verdade escondida.
  Pode também representar o momento certo para agir, onde você possui o conhecimento ou os recursos necessários para avançar.
  É uma carta de liberação e desbloqueio, abrindo caminho para novas possibilidades e crescimento.`,
  }
  ,
  {
    name: "Os Peixes",
    keywords: "Riqueza, abundância, fluxo, emoções, instintos, prosperidade e negócios.",
    description: `Os Peixes representam o fluxo, a abundância e a energia que move as emoções e os recursos ao nosso redor.
  É uma carta que simboliza prosperidade, tanto em aspectos materiais quanto emocionais, associando-se ao fluxo de dinheiro e recursos, 
  bem como ao movimento das emoções. Pode indicar um período de boas oportunidades financeiras ou emocionais, onde você está em sintonia 
  com o fluxo natural da vida. Sua energia é fluida, instintiva e de grande potencial de crescimento e prosperidade.`,
    meaning: `Os Peixes sugerem que você está em sintonia com a abundância e o fluxo da vida, seja na área financeira, emocional ou criativa.
  Pode indicar que um período de prosperidade está se aproximando, trazendo crescimento e expansão em suas finanças ou relacionamentos.
  É uma carta que fala sobre a importância de confiar em seu instinto e se deixar levar pelo fluxo natural das situações.
  Também pode representar oportunidades no mundo dos negócios ou um período favorável para lidar com questões materiais e emocionais com facilidade.`,
  }
  ,
  {
    name: "A Âncora",
    keywords: "Estabilidade, segurança, força, firmeza, proteção e perseverança.",
    description: `A Âncora representa estabilidade, segurança e a capacidade de se manter firme em tempos de dificuldade.
  É uma carta que simboliza força e proteção, como uma âncora que mantém o navio seguro no mar agitado.
  Pode indicar que você está buscando ou precisa de estabilidade em sua vida, seja em relacionamentos, trabalho ou finanças.
  Sua energia é de resiliência, sugerindo que, apesar das tempestades, você possui a firmeza necessária para manter-se firme no seu caminho.`,
    meaning: `A Âncora sugere que você está buscando estabilidade ou está em um período de segurança e firmeza.
  Pode indicar que você está em uma situação onde a resistência e a perseverança são essenciais, ou que você está se sentindo seguro e protegido em relação a um aspecto da sua vida.
  É uma carta que também pode falar sobre a importância de se manter firme em seus compromissos e responsabilidades, não permitindo que as dificuldades o desestabilizem.
  A Âncora traz a mensagem de que, mesmo nas adversidades, a estabilidade e a perseverança são chave para alcançar seus objetivos.`,
  }
  ,
  {
    name: "A Cruz",
    keywords: "Destino, sofrimento, provas, desafios, fé, transformação e lições.",
    description: `A Cruz representa o destino, as dificuldades que devemos enfrentar e as lições que aprendemos ao longo da vida.
  É uma carta que simboliza provas e desafios, muitas vezes ligados ao sofrimento ou a momentos difíceis que nos ensinam e transformam.
  Pode indicar que você está passando por uma fase difícil, mas que ela traz lições valiosas que ajudarão no seu crescimento pessoal.
  Sua energia é de transformação, sugerindo que, embora o caminho seja árduo, ele leva à evolução e à superação.`,
    meaning: `A Cruz sugere que você pode estar enfrentando uma situação difícil ou um momento de provação.
  Pode indicar que o sofrimento ou os desafios fazem parte do seu destino e são necessários para o seu crescimento pessoal e espiritual.
  É uma carta que fala sobre fé, resiliência e a importância de aprender com as dificuldades.
  A Cruz também representa a possibilidade de transformação, mostrando que, após os testes, você sairá mais forte e mais sábio.`,
  }
];

let tarotCards;

if (theme == 1) {
  tarotCards = lenormandCards;
  localStorage.setItem("deck", "lenormand");
}
else {
  tarotCards = waiteCards;
  localStorage.setItem("deck", "waite");
}

function viewCard(cardName) {
  window.location.href = `cardview.html?card=${encodeURIComponent(cardName)}`;
}

function generateCardView(div, card, isReversed, isEditable) {
  const cardObj = tarotCards.find(c => c.name === card);

  const oneMoreContainer = document.createElement("div");
  oneMoreContainer.className = "one-more-container";

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  const cardName = document.createElement("div");
  cardName.className = "box text";
  cardName.innerHTML = `<div class="box title">${cardObj.name}</div>`;

  const detailsContainer = document.createElement("div");
  detailsContainer.className = "details-container";

  const cardDetails = document.createElement("div");
  cardDetails.className = "card-details";

  const cardKeywords = document.createElement("div");
  cardKeywords.className = "box text";
  cardKeywords.innerHTML = `<div class="box title">Palavras-chave(Em pé):</div>${cardObj.keywords}`;

  const cardMeaning = document.createElement("div");
  cardMeaning.className = "box text";
  cardMeaning.innerHTML = `<div class="box title">Significado geral(Em pé):</div>${cardObj.meaning}`;

  let reversed = isReversed;

  const cardImage = document.createElement("img");
  cardImage.className = isEditable ? "card big" : "card medium";
  cardImage.src = `images/${localStorage.getItem("deck")}/${cardObj.name}.jpg`;
  cardImage.alt = cardObj.name;
  if (isEditable && theme == 0) {
    cardImage.addEventListener("click", () => {
      cardImage.classList.toggle("reversed");
      reversed = !reversed;
      if (reversed) {
        cardKeywords.innerHTML = `<div class="box title">Palavras-chave(Invertido):</div>${cardObj.rKeywords}`;
        cardMeaning.innerHTML = `<div class="box title">Significado invertido:</div>${cardObj.rMeaning}`;
      } else {
        cardKeywords.innerHTML = `<div class="box title">Palavras-chave(Em pé):</div>${cardObj.keywords}`;
        cardMeaning.innerHTML = `<div class="box title">Significado geral(Em pé):</div>${cardObj.meaning}`;
      }
    });
  }

  if (reversed) {
    cardImage.classList.add("reversed");
    cardKeywords.innerHTML = `<div class="box title">Palavras-chave(Invertido):</div>${cardObj.rKeywords}`;
    cardMeaning.innerHTML = `<div class="box title">Significado invertido:</div>${cardObj.rMeaning}`;
  } else {
    cardKeywords.innerHTML = `<div class="box title">Palavras-chave(Em pé):</div>${cardObj.keywords}`;
    cardMeaning.innerHTML = `<div class="box title">Significado geral(Em pé):</div>${cardObj.meaning}`;
  }

  const imageDescription = document.createElement("div");
  imageDescription.className = "box text";
  imageDescription.innerHTML = `<div class="box title">Descrição da imagem:</div>${cardObj.description}`;

  if (isEditable) cardDetails.append(cardKeywords, cardMeaning, imageDescription);
  else cardDetails.append(cardKeywords);

  detailsContainer.append(cardImage, cardDetails);

  cardContainer.append(cardName, detailsContainer);

  oneMoreContainer.append(cardContainer);
  div.appendChild(oneMoreContainer);
}
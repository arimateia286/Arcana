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
    name: "O Montanha",
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
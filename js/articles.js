export const categories = [
  { id: 'noticias',               label: 'Notícias',               icon: '📰', desc: 'Últimas notícias jurídicas do Brasil e do mundo' },
  { id: 'explicacoes',            label: 'Educacional',            icon: '🎓', desc: 'Conceitos e institutos do direito explicados de forma simples' },
  { id: 'direito-penal',          label: 'Direito Penal',          icon: '🔒', desc: 'Crimes, penas, processo penal e jurisprudência' },
  { id: 'direito-civil',          label: 'Direito Civil',          icon: '📋', desc: 'Contratos, família, propriedade e responsabilidade civil' },
  { id: 'direito-administrativo', label: 'Direito Administrativo', icon: '🏛️', desc: 'Administração pública, licitações, concursos e atos administrativos' },
  { id: 'processo-civil',         label: 'Processo Civil',         icon: '⚖️', desc: 'Procedimentos, recursos e execução no processo civil' },
  { id: 'processo-penal',         label: 'Processo Penal',         icon: '🔍', desc: 'Investigação, denúncia, instrução e julgamento criminal' },
  { id: 'direito-constitucional', label: 'Direito Constitucional', icon: '📜', desc: 'Direitos fundamentais, controle de constitucionalidade e STF' },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMO ADICIONAR UM NOVO ARTIGO
// ─────────────────────────────────────────────────────────────────────────────
// 1. Copie o bloco abaixo, cole antes do fechamento do array (antes do ];)
// 2. Preencha os campos — o campo `content` aceita Markdown (sem HTML)
// 3. Salve o arquivo, faça commit e push para o GitHub
//
// TEMPLATE:
// {
//   id: <próximo número inteiro>,
//   title: 'Título do artigo',
//   category: 'noticias',          // noticias | explicacoes | direito-penal | direito-civil
//   categoryLabel: 'Notícias',
//   date: 'YYYY-MM-DD',
//   readTime: 5,                   // estimativa de minutos de leitura
//   featured: false,               // true = aparece em destaque na home
//   image: 'https://images.unsplash.com/photo-XXXX?w=900&q=80',
//   excerpt: 'Resumo de 1-2 frases exibido nos cards e na listagem.',
//   content: `
// Parágrafo de abertura aqui.
//
// ## Subtítulo
//
// Mais texto aqui. Use **negrito**, *itálico*, listas com - e citações com >.
//
// > Citação ou trecho legal importante.
//
// - Item 1
// - Item 2
//   `,
// },
// ─────────────────────────────────────────────────────────────────────────────

export const articles = [
  {
    id: 1,
    title: "O que é o princípio da consunção no direito penal?",
    category: "explicacoes",
    categoryLabel: "Educacional",
    date: "2026-04-28",
    readTime: 2,
    featured: true,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
    excerpt: "Quando dois crimes se relacionam de forma muito próxima, pode ser que apenas um deles seja punido. Entenda como funciona esse princípio e por que ele existe.",
    tags: ["pena","principios","crime"],
    content: `
Imagine que alguém usa um documento falso para cometer uma fraude. Há dois crimes em jogo: a falsificação documental e o estelionato. Mas o réu será condenado pelos dois? É exatamente aí que o **princípio da consunção** entra em cena.

## O que é a consunção?

O princípio da consunção — também chamado de princípio da absorção — é uma regra de solução de conflito entre normas penais. Ele determina que, quando um crime é meio necessário ou fase normal de preparação ou execução de outro crime mais grave, o delito menos grave é absorvido pelo mais grave. Em outras palavras: pune-se apenas o crime maior.

> A lei penal mais abrangente absorve a menos abrangente quando os crimes fazem parte de uma mesma linha de desdobramento criminoso.

## Um exemplo prático

Voltemos ao exemplo da fraude com documento falso. Se alguém falsificou um documento especificamente para aplicar um golpe financeiro (estelionato), a falsificação foi apenas um passo para chegar ao crime final. Nesse caso, a jurisprudência tende a aplicar a consunção: o estelionato absorve a falsificação.

## Quando a consunção não se aplica?

O princípio não é absoluto. Se o documento falso for usado em mais de um estelionato, ou se sobrar algum efeito lesivo independente do crime-fim, não haverá absorção. O STJ já decidiu que a falsidade documental não é absorvida pelo estelionato quando a potencialidade lesiva do documento continua existindo após o crime patrimonial.

### Outros exemplos comuns

- Porte ilegal de arma absorvido pelo homicídio (quando a arma foi usada exclusivamente para matar)
- Violação de domicílio absorvida pelo furto (quando a entrada na casa foi apenas o meio para furtar)
- Lesão corporal absorvida pelo homicídio consumado

## Qual é a base legal?

A consunção está prevista no art. 107, III do Código Penal, que trata das causas extintivas da punibilidade, mas sua aplicação prática decorre principalmente da doutrina e da jurisprudência, que foram moldando seus contornos ao longo dos anos.

Em resumo: o princípio da consunção existe para evitar que o réu seja punido duas vezes por condutas que, na prática, fazem parte de um único contexto criminoso. É uma garantia de que a pena seja justa e proporcional ao que de fato ocorreu.
    `,
  },
  {
    id: 2,
    title: "Condenado a 140 anos de prisão: isso é o mesmo que prisão perpétua?",
    category: "direito-penal",
    categoryLabel: "Direito Penal",
    date: "2026-04-27",
    readTime: 2,
    featured: true,
    image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=900&q=80",
    excerpt: "Não é raro ver notícias de pessoas condenadas a 100, 200 ou até 300 anos de prisão. Na prática, esse tempo nunca será cumprido integralmente. Entenda por que e o que muda na vida do condenado.",
    tags: ["prisao","pena","crime"],
    content: `
Nos Estados Unidos, condenações a centenas de anos de prisão são relativamente comuns. No Brasil, também aparecem casos assim — principalmente em crimes múltiplos. Mas o que significa, na prática, uma pena de 140 anos? O condenado ficará preso por todo esse tempo?

## O limite de cumprimento no Brasil

Não. A Constituição Federal de 1988 proíbe expressamente a prisão perpétua no Brasil (art. 5º, XLVII). Por isso, o Código Penal estabelece um teto máximo de cumprimento de pena: **40 anos**, conforme a redação dada pela Lei 13.964/2019 (o chamado "Pacote Anticrime"), que aumentou o limite anterior de 30 anos.

> Art. 75 do Código Penal: O tempo de cumprimento das penas privativas de liberdade não pode ser superior a 40 (quarenta) anos.

## Então para que serve uma pena de 140 anos?

A pena acumulada tem efeitos práticos importantes, mesmo que nunca seja cumprida integralmente:

- **Progressão de regime:** quanto maior a pena total, mais tempo o condenado precisa cumprir para progredir para regimes mais brandos (semiaberto, aberto).
- **Livramento condicional:** a fração necessária para o livramento é calculada sobre a pena total somada, não sobre o limite de 40 anos.
- **Prescrição:** penas maiores têm prazos prescricionais maiores, dificultando a extinção da punibilidade.

## Como funciona na prática?

Suponha que alguém seja condenado a 140 anos por múltiplos crimes graves. Esse condenado terá que cumprir no mínimo um percentual elevado da pena total (que pode chegar a 70% em crimes hediondos com violência) antes de ter direito à progressão de regime. Mesmo que o teto seja 40 anos de prisão efetiva, a progressão será muito mais lenta do que para quem foi condenado a, digamos, 12 anos.

### Diferença entre o Brasil e os EUA

Nos Estados Unidos, onde a prisão perpétua é permitida, a lógica é diferente. Lá, uma condenação a 300 anos pode significar que o réu jamais sairá da prisão. No Brasil, o mecanismo constitucional impede isso, mas o acúmulo de penas ainda tem consequências concretas na velocidade com que o condenado pode recuperar sua liberdade.

Portanto: uma pena de 140 anos não é prisão perpétua — a Constituição não permite isso —, mas é muito mais severa do que parece à primeira vista, porque influencia diretamente as condições e o prazo para progredir de regime.
    `,
  },
  {
    id: 3,
    title: "STF decide: porte de drogas para uso pessoal não é crime",
    category: "noticias",
    categoryLabel: "Notícias",
    date: "2026-04-25",
    readTime: 1,
    featured: true,
    image: "https://images.unsplash.com/photo-1519181236443-b175d4c3ca1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "O Supremo Tribunal Federal concluiu o julgamento sobre a descriminalização do porte de drogas para consumo pessoal, em decisão que impacta milhares de processos em todo o país.",
    tags: ["stf","pena","crime"],
    content: `
O Supremo Tribunal Federal (STF) concluiu o histórico julgamento que discutia a constitucionalidade do artigo 28 da Lei 11.343/2006 (Lei de Drogas), que trata do porte de entorpecentes para uso pessoal. A decisão representa uma das mais relevantes do tribunal em matéria penal nas últimas décadas.

## O que foi decidido

Por maioria, o tribunal entendeu que punir criminalmente o usuário de drogas viola direitos fundamentais, especialmente o direito à privacidade, à autonomia individual e à dignidade da pessoa humana. A corte determinou que o porte de pequenas quantidades para uso pessoal não deve ser tratado como crime.

> O Estado não pode criminalizar condutas que afetam apenas o próprio agente, sem repercussão direta na esfera jurídica de terceiros.

## O que muda na prática?

Quem for encontrado com pequenas quantidades de droga para uso próprio não poderá mais ser preso ou processado criminalmente. No entanto, medidas administrativas, como encaminhamento para tratamento ou advertência, ainda poderão ser aplicadas.

É importante frisar que o tráfico de drogas continua sendo crime — a decisão se refere exclusivamente ao usuário, não ao traficante. A distinção entre uso e tráfico continua a cargo do juiz, com base nas circunstâncias do caso.

## Impacto nos processos em curso

A decisão com efeito vinculante impacta todos os processos em andamento no país. Réus que respondem apenas pelo art. 28 da Lei de Drogas poderão requerer a extinção da punibilidade. Estima-se que dezenas de milhares de processos sejam afetados.
    `,
  },
  {
    id: 4,
    title: "O que é o habeas corpus e quando ele pode ser usado?",
    category: "explicacoes",
    categoryLabel: "Educacional",
    date: "2026-04-22",
    readTime: 6,
    featured: false,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=900&q=80",
    excerpt: "O habeas corpus é um dos remédios constitucionais mais antigos e importantes do direito brasileiro. Entenda o que ele é, quando cabe e quem pode impetrar.",
    tags: [],
    content: `
O *habeas corpus* — expressão do latim que significa, literalmente, "que tenhas o teu corpo" — é uma ação constitucional destinada a proteger a liberdade de locomoção. Qualquer pessoa que esteja sofrendo ou ameaçada de sofrer coação ilegal em sua liberdade pode se valer desse instrumento.

## Previsão legal

O habeas corpus está previsto no art. 5º, LXVIII da Constituição Federal: "conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder".

## Quando cabe habeas corpus?

- Prisão ilegal (sem ordem judicial ou fora das hipóteses legais)
- Excesso de prazo na prisão preventiva
- Constrangimento ilegal por parte de autoridade
- Ameaça futura à liberdade de ir e vir
- Cumprimento de pena em regime mais severo do que o determinado

## Quem pode impetrar?

Qualquer pessoa, incluindo o próprio paciente (quem sofre a coação), um familiar, um amigo ou qualquer cidadão — não é necessário ser advogado para impetrar habeas corpus, embora seja recomendável para garantir maior qualidade técnica na peça.

> O habeas corpus é democrático por natureza: qualquer pessoa pode usá-lo para defender a liberdade de outra, sem formalidades excessivas.

## Habeas corpus preventivo x liberatório

O habeas corpus pode ser **liberatório**, quando busca soltar alguém já preso ilegalmente, ou **preventivo** (também chamado de salvo-conduto), quando busca evitar uma prisão que está na iminência de acontecer.

É um dos instrumentos mais poderosos do ordenamento jurídico brasileiro para proteção da liberdade individual — e sua eficácia depende da rapidez com que é impetrado e julgado.
    `,
  },
  {
    id: 5,
    title: "Reforma do Código Penal: o que muda com o novo projeto?",
    category: "noticias",
    categoryLabel: "Notícias",
    date: "2026-04-20",
    readTime: 5,
    featured: false,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    excerpt: "O projeto de reforma do Código Penal brasileiro prevê mudanças significativas na estrutura das penas, nos crimes contra a honra e na regulamentação dos crimes digitais.",
    tags: [],
    content: `
O Brasil discute uma ampla reforma do Código Penal — legislação que, em sua versão original, data de 1940 e já passou por inúmeras modificações pontuais ao longo das décadas. O projeto em tramitação no Congresso propõe mudanças estruturais que podem transformar significativamente o sistema penal brasileiro.

## Principais mudanças propostas

### 1. Crimes digitais

A reforma busca tipificar de forma mais clara e abrangente os crimes praticados no ambiente digital, incluindo golpes por aplicativos de mensagens, deepfakes utilizados para calúnia ou extorsão, e ataques a infraestruturas críticas.

### 2. Crimes contra a honra

A proposta prevê o aumento das penas para calúnia, difamação e injúria praticadas em redes sociais, reconhecendo o alcance potencialmente muito maior dessas ofensas no ambiente virtual.

### 3. Remodelação do sistema de penas alternativas

O projeto busca ampliar o uso de penas restritivas de direito (como prestação de serviços à comunidade e multa) para crimes de menor potencial ofensivo, reservando as penas privativas de liberdade para as condutas mais graves.

> O objetivo central da reforma é tornar o sistema penal mais eficiente, proporcional e alinhado com as demandas da sociedade contemporânea.

## Pontos polêmicos

A reforma também gera debates. Alguns juristas criticam a tendência de criar novos tipos penais como resposta a pressões políticas, sem um estudo aprofundado de impacto. Outros defendem que a legislação precisa acompanhar a evolução social e tecnológica.

O projeto ainda está em tramitação e deve passar por várias modificações antes de eventual aprovação. Acompanhe o ActaLaw para as atualizações.
    `,
  },
  {
    id: 6,
    title: "Princípio da insignificância: quando o crime é pequeno demais para punir",
    category: "direito-penal",
    categoryLabel: "Direito Penal",
    date: "2026-04-18",
    readTime: 5,
    featured: false,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    excerpt: "Furtar um chiclete pode configurar crime de furto, mas o réu será punido? O princípio da insignificância — ou bagatela — responde a essa pergunta de forma surpreendente.",
    tags: [],
    content: `
Alguém furta um chiclete em um supermercado. Tecnicamente, praticou um crime de furto, previsto no art. 155 do Código Penal. Mas será que o Estado deve mobilizar toda a máquina do Judiciário para processar e condenar essa pessoa? É aqui que entra o **princípio da insignificância**.

## O que é o princípio da insignificância?

Também chamado de princípio da bagatela, ele estabelece que, quando a conduta praticada produz uma lesão tão mínima ao bem jurídico protegido que não justifica a intervenção do direito penal, o fato deve ser considerado atípico — ou seja, não é crime para fins penais.

## Os quatro requisitos do STF

O Supremo Tribunal Federal consolidou quatro vetores cumulativos para a aplicação do princípio:

- **Mínima ofensividade da conduta**
- **Ausência de periculosidade social da ação**
- **Reduzidíssimo grau de reprovabilidade do comportamento**
- **Inexpressividade da lesão jurídica causada**

> O direito penal não deve se ocupar de bagatelas. Sua intervenção deve ser reservada para as condutas que realmente afetam de forma significativa os bens jurídicos mais relevantes.

## Limites e controvérsias

O princípio não é ilimitado. Reincidentes habituais, réus com histórico criminal relevante ou condutas que, embora de pequeno valor, revelam periculosidade social podem ter o benefício negado. Além disso, há crimes em que a insignificância é expressamente afastada, como tráfico de drogas e crimes contra a administração pública.

A aplicação do princípio é uma das mais debatidas em toda a jurisprudência penal brasileira — e, na prática, depende muito do contexto e da análise caso a caso pelo juiz.
    `,
  },
  {
    id: 7,
    title: "A rejeição de Jorge Messias ao STF: Um evento histórico para o Brasil",
    category: "noticias",
    categoryLabel: "Notícias",
    date: "2026-05-01",
    readTime: 4,
    featured: true,
    image: "https://images.unsplash.com/photo-1625426078245-6911839409dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhcyVDMyVBRGxpYXxlbnwwfHwwfHx8MA%3D%3D",
    excerpt: "A quebra de um padrão que perdurou por 132 anos no Brasil. Como a rejeição de Jorge Messias reflete no cenário político e judiciário",
    tags: ["stf","politica","senado"],
    content: `
## Por que a rejeição de Jorge Messias pelo Senado é um evento histórico para o Brasil

Por mais de um século, o Senado brasileiro atuou como a instância final previsível na aprovação de indicados ao Supremo Tribunal Federal: questionava, debatia e, ao fim, chancelava as escolhas presidenciais com regularidade. 

Esse padrão de deferência institucional foi repentinamente interrompido em 29 de abril de 2026, quando o Senado rejeitou a indicação de Jorge Messias, então ministro da Advocacia-Geral da União (AGU), numa decisão que reverberou em Brasília.

Os números expõem o recuo do Planalto: 34 votos favoráveis e 42 contrários. 

Ao não alcançar a maioria absoluta de 41 votos, rompeu-se uma sequência de 132 anos de aprovações, sinalizando uma ruptura no equilíbrio entre os Poderes. O que antes era uma formalidade procedimental tornou-se um espaço de elevado conflito institucional.


## A quebra de uma tradição de 132 anos e o precedente de 1894

Para compreender a dimensão do episódio, é fundamental retornar a 1894, durante o governo Floriano Peixoto (1891-1894), quando houve uma ruptura sistêmica entre Poder Executivo e Senado, resultando na rejeição de cinco indicados:  

Cândido Barata Ribeiro, Ewerton Quadros, Galvão de Queiroz, Demóstenes Lobo e Antônio Seve Navarro.

Desde a promulgação da Constituição de 1988, o Senado jamais havia exercido seu poder de veto sobre um indicado ao STF. A rejeição de Jorge Messias reflete um colapso institucional semelhante àquele enfrenta. 

Como sintetizou o senador Jaques Wagner:

 
>“Jorge Messias não perdeu a indicação ao Supremo. Quem perdeu foi o pacto constitucional, a Nova República. Foi o Brasil.”


## O fator Alcolumbre: uma disputa de preferências


A rejeição foi o desfecho de uma prolongada disputa política entre o presidente Lula e o presidente do Senado, Davi Alcolumbre. Enquanto o Planalto sustentava o nome de Messias, Alcolumbre mantinha sua preferência por Rodrigo Pacheco.

O principal instrumento dessa disputa foi o atraso estratégico. Alcolumbre manteve a indicação em suspenso por cinco meses, ampliando o desgaste político, permitindo a articulação da oposição e criando condições para dissidências dentro da própria base governista.


## leitura do placar: o fracasso da "aritmética do Planalto"


A estratégia do governo fracassou no momento decisivo. Embora Messias tenha sido aprovado na Comissão de Constituição e Justiça (CCJ) por 16 a 11, a derrota se concretizou no voto secreto em plenário. A base governista contava com cerca de 25 votos firmes e apostava na adesão de indecisos, que acabaram se posicionando majoritariamente contra a indicação.
O resultado de Messias representa uma queda expressiva em comparação com aprovações recentes consideradas apertadas:


•	Luiz Fux (2011): 68 votos

•	Cristiano Zanin (2023): 58 votos

•	Kassio Nunes Marques (2020): 57 votos

•	Flávio Dino (2023): 47 votos

•	André Mendonça (2021): 47 votos

**•	Jorge Messias (2026): 34 votos (rejeitado)**


Ficar sete votos abaixo do mínimo necessário evidencia uma insurreição legislativa que o governo não conseguiu prever, nem conter.


## O “sujeito oculto”: Moraes e o PL da Dosimetria


Nos bastidores, a rejeição de Messias integrou uma ofensiva legislativa mais ampla. Analistas apontam o ministro Alexandre de Moraes como o “sujeito oculto” desse movimento político.

A decisão do Senado coincidiu com a derrubada do veto presidencial ao chamado "PL da Dosimetria", que reduz penas relacionadas aos eventos de 8 de janeiro. A medida representa um desafio direto à condução desses casos pelo STF. Ao rejeitar o indicado à Suprema Corte e, simultaneamente, aprovar legislação que enfraquece decisões judiciais de grande repercussão, o Senado sinaliza uma tentativa de reconfigurar o eixo de poder entre STF e Executivo.


## Uma nova era de tensão entre Executivo e Legislativo


As consequências são imediatas, tanto práticas quanto simbólicas. O STF passa a operar com apenas dez ministros, o que aumenta o risco de empates e contribui para o acúmulo de processos, pressionando ainda mais o sistema judiciário.

Embora o presidente Lula mantenha a prerrogativa constitucional de indicar um novo nome, podendo, inclusive, reapresentar Messias, o presidente enfrenta agora um Senado mais assertivo, que abandonou o papel de instância meramente homologatória e praticamente inerte. A rejeição marca a transição de um período de predominância presidencial para outro de protagonismo legislativo.

Resta saber se esse novo equilíbrio representa um fortalecimento dos freios e contrapesos ou uma escalada rumo à instabilidade institucional. O fato é que o Senado reafirmou sua autonomia e, com isso, tornou o caminho até o Supremo definitivamente mais incerto.
    `,
  }

];

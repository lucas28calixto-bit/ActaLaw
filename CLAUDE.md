# ActaLaw

Blog jurídico estático — HTML, CSS e JavaScript puro, sem framework ou build tool.

## Estrutura do projeto

```
actalawproject/
├── index.html          # Home: hero, destaques, grid, categorias
├── artigo.html         # Leitura completa de artigo (usa ?id=N na URL)
├── categoria.html      # Lista por categoria (usa ?cat=slug ou sem parâmetro para todas)
├── css/
│   └── styles.css      # Design system completo (tokens, componentes, dark/light)
├── js/
│   ├── articles.js     # Fonte de dados — array de artigos e categorias
│   ├── main.js         # Navbar scroll, menu mobile, toggle dark/light, utilitários
│   ├── home.js         # Renderização da home
│   ├── artigo.js       # Renderização da página de artigo
│   └── categoria.js    # Renderização e filtragem da página de categoria
└── CLAUDE.md
```

## Fluxo de trabalho diário (adicionar conteúdo)

### Passo a passo

1. Abra `js/articles.js`
2. Copie o template de comentário no topo do arquivo e cole **antes do `];` final**
3. Preencha os campos
4. Salve → commit → push para o GitHub → GitHub Pages publica automaticamente

```bash
git add js/articles.js
git commit -m "artigo: Título do novo artigo"
git push
```

### Template de artigo

O campo `content` usa **Markdown** — sem HTML, sem tags. Escreva como texto normal.

```js
{
  id: 7,                          // número único, sequencial
  title: 'Título do artigo',
  category: 'direito-penal',      // noticias | explicacoes | direito-penal | direito-civil
  categoryLabel: 'Direito Penal',
  date: '2026-04-29',             // YYYY-MM-DD
  readTime: 5,                    // estimativa de minutos
  featured: false,                // true = destaque na home (use com moderação)
  image: 'https://images.unsplash.com/photo-XXXX?w=900&q=80',
  excerpt: 'Resumo de 1-2 frases exibido nos cards.',
  content: `
Parágrafo de abertura.

## Subtítulo

Texto do artigo. Use **negrito**, *itálico*.

> Citação ou trecho de lei/acórdão.

- Item de lista
- Outro item
  `,
},
```

### Sintaxe Markdown suportada

| Elemento | Sintaxe |
|---|---|
| Título H2 | `## Título` |
| Título H3 | `### Título` |
| **Negrito** | `**texto**` |
| *Itálico* | `*texto*` |
| Lista | `- item` |
| Citação | `> texto` |
| Parágrafo | linha em branco entre blocos |

## Como adicionar uma nova categoria

Adicione um objeto ao array `categories` em `js/articles.js`:

```js
{ id: 'direito-constitucional', label: 'Direito Constitucional', icon: '🏛️', desc: 'Descrição...' }
```

## Design system

- **Temas**: claro e escuro, alternáveis via botão 🌙/☀️ no header. Persiste em `localStorage`.
- **Tokens**: definidos como variáveis CSS em `:root` e `[data-theme="dark"]` em `styles.css`.
- **Tipografia**: Montserrat (headings/logo) + Outfit (subtítulos/UI) + Helvetica Neue (corpo), via Google Fonts.
- **Breakpoints**: 900px (tablet) e 580px (mobile).

## Tecnologia

- HTML5 semântico + CSS3 (custom properties, grid, flexbox, animations)
- JavaScript ES Modules (`type="module"`) — sem dependências externas
- Roteamento: parâmetros de URL (`?id=` e `?cat=`)
- Não requer servidor — funciona com `file://` ou qualquer servidor estático
- **Deploy automático:** GitHub Pages via branch `main`
- **Publicação automatizada:** n8n (localhost:5678) com formulário web → GitHub API

## Como testar localmente

```bash
# Opção 1 — Node.js
npx serve .
```

Acesse `http://localhost:8080`.

## Imagens para artigos

Use o **Unsplash** (https://unsplash.com) para imagens gratuitas de alta qualidade.
Ao copiar a URL, adicione `?w=900&q=80` ao final para otimizar o tamanho.

---

## Identidade Visual & Instagram — Prompt para Claude Design

### Paleta de Cores

| Uso | Hex | Nome |
|---|---|---|
| Primária escura | `#1a3a6b` | Navy Blue |
| Primária clara | `#60a5fa` | Sky Blue |
| Fundo claro | `#f5f7fa` | Off-White |
| Fundo escuro | `#0a0f1e` | Dark Navy |
| Superfície | `#ffffff` | White |
| Texto | `#111827` | Almost Black |
| Texto muted | `#6b7280` | Gray |
| Accent light | `#dbeafe` | Light Blue |

### Tipografia

| Elemento | Fonte | Peso |
|---|---|---|
| Logo / Títulos | Montserrat | Bold 700 / ExtraBold 800 |
| Subtítulos / UI | Outfit | Medium 500 / SemiBold 600 |
| Corpo do texto | Helvetica Neue | Regular 400 |

### Prompt para Claude Design

Copie e envie o prompt abaixo ao Claude Design para gerar a identidade visual completa e os posts para o Instagram:

```
Você é um especialista sênior em branding, design gráfico e marketing digital para redes sociais. Crie a identidade visual completa e posts para o Instagram do ActaLaw — um blog jurídico brasileiro com a tagline "Direito em palavras que você entende".

IDENTIDADE VISUAL:

1. LOGO: O nome "ActaLaw" onde "Acta" é em Navy Blue (#1a3a6b) e "Law" em Sky Blue (#60a5fa). Tipografia Montserrat Bold. Incluir um ícone minimalista de balança da justiça integrado à letra "A" ou como elemento complementar. Versões: logo completa (horizontal), ícone solo (para avatar), versão monocromática.

2. PALETA DE CORES:
   - Primária: #1a3a6b (Navy Blue) — autoridade, confiança
   - Secundária: #60a5fa (Sky Blue) — acessibilidade, modernidade
   - Fundo claro: #f5f7fa | Fundo escuro: #0a0f1e
   - Accent: #dbeafe | Texto: #111827 | Texto muted: #6b7280

3. TIPOGRAFIA:
   - Títulos: Montserrat Bold/ExtraBold
   - Subtítulos: Outfit Medium/SemiBold
   - Corpo: Helvetica Neue Regular

4. TOM DE VOZ: Autoridade sem arrogância. Linguagem clara, acessível, educativa. Sem jargões desnecessários. O direito explicado para todos.

POSTS INSTAGRAM (formato carrossel 1080x1080px):

Crie templates de carrossel para as seguintes categorias de conteúdo:

A) CARROSSEL EDUCATIVO (5-7 slides):
   - Slide 1: Capa com título impactante e ícone temático (ex: "O que é Habeas Corpus?")
   - Slides 2-6: Conteúdo explicativo com tipografia hierárquica, ícones minimalistas, citações de lei em destaque
   - Slide final: CTA "Siga @acta.law para mais conteúdo jurídico"
   - Estilo: fundo gradiente sutil de #f5f7fa para #dbeafe, elementos em Navy Blue, destaques em Sky Blue

B) CARROSSEL DE NOTÍCIA JURÍDICA (3-5 slides):
   - Slide 1: Breaking news style — "STF DECIDE:" com badge de "NOTÍCIA"
   - Slides 2-4: Resumo dos pontos-chave em bullet points
   - Slide final: "Leia o artigo completo em actalaw.com.br"
   - Estilo: mais contrastado, fundo escuro (#0a0f1e), texto claro, accent Sky Blue

C) POST ÚNICO (citação jurídica):
   - Citação de lei ou doutrina em destaque
   - Fundo Navy Blue com texto branco
   - Aspas decorativas em Sky Blue
   - Logo no canto inferior

D) STORIES TEMPLATE:
   - Quiz jurídico interativo (enquete)
   - "Você sabia?" com fato jurídico curioso
   - Chamada para novo artigo no blog

Todos os designs devem ser coesos com a identidade visual do site actalaw.com.br, transmitindo profissionalismo, acessibilidade e confiança. O visual deve ser premium, moderno e minimalista — nada de designs carregados ou amadores.
```

---

## Monitoramento de tokens — /count e /compact

Este projeto usa Claude Code para desenvolvimento. Para manter o contexto da conversa saudável:

1. **Use `/count`** regularmente para monitorar o uso de tokens da sessão.
2. **Ao atingir 50% do uso diário de tokens**, execute `/compact` imediatamente.
   - O `/compact` resume o histórico da conversa e libera espaço no contexto.
   - Isso evita que o contexto fique poluído com histórico desnecessário e previne degradação de performance nas respostas.
3. Após o `/compact`, retome o trabalho normalmente — o estado do projeto está sempre nos arquivos.

> Regra prática: `/count` antes de tarefas grandes. Se estiver acima de 50%, `/compact` primeiro.

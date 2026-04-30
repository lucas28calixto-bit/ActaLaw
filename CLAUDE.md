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
- **Tipografia**: Playfair Display (headings) + Inter (corpo), via Google Fonts.
- **Breakpoints**: 900px (tablet) e 580px (mobile).

## Tecnologia

- HTML5 semântico + CSS3 (custom properties, grid, flexbox, animations)
- JavaScript ES Modules (`type="module"`) — sem dependências externas
- Roteamento: parâmetros de URL (`?id=` e `?cat=`)
- Não requer servidor — funciona com `file://` ou qualquer servidor estático

## Como testar localmente

```bash

# Opção 1 — Node.js
npx serve .
```

Acesse `http://localhost:8080`.

---

## Monitoramento de tokens — /count e /compact

Este projeto usa Claude Code para desenvolvimento. Para manter o contexto da conversa saudável:

1. **Use `/count`** regularmente para monitorar o uso de tokens da sessão.
2. **Ao atingir 50% do uso diário de tokens**, execute `/compact` imediatamente.
   - O `/compact` resume o histórico da conversa e libera espaço no contexto.
   - Isso evita que o contexto fique poluído com histórico desnecessário e previne degradação de performance nas respostas.
3. Após o `/compact`, retome o trabalho normalmente — o estado do projeto está sempre nos arquivos.

> Regra prática: `/count` antes de tarefas grandes. Se estiver acima de 50%, `/compact` primeiro.

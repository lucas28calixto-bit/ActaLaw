import { articles } from './articles.js';
import { initNavbar, initMobileMenu, initThemeToggle, formatDate, navigateTo, handleImgError } from './main.js';

initNavbar();
initMobileMenu();
initThemeToggle();

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'), 10);
const article = articles.find(a => a.id === id);

if (!article) {
  document.getElementById('article-root').innerHTML = `
    <div class="section empty-state" style="padding-top:calc(var(--navbar-h) + 3rem)">
      <p>Artigo não encontrado. <a href="index.html" style="color:var(--primary)">Voltar para a home</a></p>
    </div>`;
} else {
  document.title = `${article.title} — ActaLaw`;
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${article.title} — ActaLaw`);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', article.excerpt);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', article.image);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
  document.querySelector('meta[name="description"]')?.setAttribute('content', article.excerpt);
  renderArticle(article);
  renderSidebar(article);
}

function renderArticle(a) {
  const root = document.getElementById('article-root');
  root.innerHTML = `
    <div class="page-header section">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Início</a>
        <span class="sep">›</span>
        <a href="categoria?cat=${a.category}">${a.categoryLabel}</a>
        <span class="sep">›</span>
        <span>${a.title}</span>
      </nav>
      <div class="article-meta">
        <span class="badge">${a.categoryLabel}</span>
        <span class="dot">•</span>
        <span>${formatDate(a.date)}</span>
        <span class="dot">•</span>
        <span>${a.readTime} min de leitura</span>
      </div>
      <h1 class="article-title">${a.title}</h1>
      <p class="article-excerpt">${a.excerpt}</p>
    </div>
    <div class="section article-layout">
      <div>
        <img class="article-img" src="${a.image}" alt="${a.title}" onerror="handleImgError(this)">
        <div class="article-body">${(window.marked?.parse ?? (s => `<pre>${s}</pre>`))(a.content.trim())}</div>
      </div>
      <aside class="article-sidebar" id="sidebar"></aside>
    </div>`;
}

function tokenize(text) {
  const stop = new Set(['que', 'para', 'com', 'por', 'uma', 'isso', 'este', 'esta',
    'esse', 'essa', 'como', 'mais', 'tambem', 'quando', 'ser', 'ter',
    'pode', 'nao', 'mas', 'seu', 'sua', 'ele', 'ela', 'nos', 'foi', 'sao',
    'dos', 'das', 'aos', 'nas', 'pelo', 'pela', 'entre', 'sobre',
    'mesmo', 'sem', 'bem', 'qual', 'quais', 'pois', 'ainda', 'cada', 'todo']);
  return new Set(
    text.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3 && !stop.has(w))
  );
}

function scoreRelevance(candidate, current) {
  let score = 0;
  if (candidate.category === current.category) score += 4;
  if (current.tags && candidate.tags) {
    score += current.tags.filter(t => candidate.tags.includes(t)).length * 3;
  }
  const curTitle   = tokenize(current.title);
  const curExcerpt = tokenize(current.excerpt);
  const canTitle   = tokenize(candidate.title);
  const canExcerpt = tokenize(candidate.excerpt);
  curTitle.forEach(w   => { if (canTitle.has(w) || canExcerpt.has(w)) score += 2; });
  curExcerpt.forEach(w => { if (canTitle.has(w) || canExcerpt.has(w)) score += 1; });
  return score;
}

function renderSidebar(current) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const candidates = articles.filter(a => a.id !== current.id);
  const scored = candidates
    .map(a => ({ article: a, score: scoreRelevance(a, current) }))
    .sort((a, b) => b.score - a.score || new Date(b.article.date) - new Date(a.article.date));
  const related = scored.slice(0, 3).map(s => s.article);
  const relatedIds = new Set(related.map(a => a.id));
  const recent = [...articles]
    .filter(a => a.id !== current.id && !relatedIds.has(a.id))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const block = (title, items) => `
    <div class="sidebar-block">
      <h5>${title}</h5>
      ${items.map(a => `
        <div class="sidebar-article" onclick="navigateTo('artigo',{id:${a.id}})" role="button" tabindex="0">
          <img src="${a.image}" alt="${a.title}">
          <h6>${a.title}</h6>
        </div>`).join('')}
    </div>`;

  sidebar.innerHTML = [
    related.length ? block('Leia também', related) : '',
    recent.length  ? block('Recentes', recent) : '',
  ].join('');
}

window.navigateTo = navigateTo;
window.handleImgError = handleImgError;

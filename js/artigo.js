import { articles } from './articles.js';
import { initNavbar, initMobileMenu, initThemeToggle, formatDate, navigateTo } from './main.js';

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
        <a href="categoria.html?cat=${a.category}">${a.categoryLabel}</a>
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
        <img class="article-img" src="${a.image}" alt="${a.title}">
        <div class="article-body">${window.marked.parse(a.content.trim())}</div>
      </div>
      <aside class="article-sidebar" id="sidebar"></aside>
    </div>`;
}

function renderSidebar(current) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const related = articles.filter(a => a.id !== current.id && a.category === current.category).slice(0, 3);
  const recent = articles.filter(a => a.id !== current.id).slice(0, 3);

  const block = (title, items) => `
    <div class="sidebar-block">
      <h5>${title}</h5>
      ${items.map(a => `
        <div class="sidebar-article" onclick="navigateTo('artigo.html',{id:${a.id}})" role="button" tabindex="0">
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

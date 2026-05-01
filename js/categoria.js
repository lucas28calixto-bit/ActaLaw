import { articles, categories } from './articles.js';
import { initNavbar, initMobileMenu, initThemeToggle, formatDate, navigateTo } from './main.js';

initNavbar();
initMobileMenu();
initThemeToggle();

const params = new URLSearchParams(window.location.search);
let activeCat = params.get('cat') || 'all';

renderTabs();
renderGrid(activeCat);

function renderTabs() {
  const container = document.getElementById('cat-tabs');
  if (!container) return;

  const all = { id: 'all', label: 'Todas' };
  const tabs = [all, ...categories];

  container.innerHTML = tabs.map(c => `
    <button class="cat-tab${c.id === activeCat ? ' active' : ''}"
      onclick="switchCat('${c.id}')">${c.label}</button>`).join('');

  const meta = categories.find(c => c.id === activeCat);
  const nameEl = document.getElementById('cat-name');
  const breadEl = document.getElementById('cat-breadcrumb');
  const descEl = document.getElementById('cat-desc');
  const label = meta ? meta.label : 'Todas as categorias';
  if (nameEl) nameEl.textContent = label;
  if (breadEl) breadEl.textContent = label;
  if (descEl) descEl.textContent = meta ? meta.desc : 'Navegue por todas as nossas publicações jurídicas.';
  document.title = `${meta ? meta.label : 'Categorias'} — ActaLaw`;
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
}

function renderGrid(cat) {
  const filtered = cat === 'all' ? articles : articles.filter(a => a.category === cat);
  const container = document.getElementById('cat-grid');
  if (!container) return;

  if (!filtered.length) {
    container.innerHTML = '<div class="empty-state"><p>Nenhum artigo nesta categoria ainda.</p></div>';
    return;
  }

  container.innerHTML = `
    <div class="latest-grid">
      ${filtered.map(a => `
        <article class="card" onclick="navigateTo('artigo',{id:${a.id}})" role="button" tabindex="0" aria-label="${a.title}">
          <img class="card-img" src="${a.image}" alt="${a.title}" loading="lazy">
          <div class="card-body">
            <span class="badge">${a.categoryLabel}</span>
            <div class="card-meta">
              <span>${formatDate(a.date)}</span>
              <span class="dot">•</span>
              <span>${a.readTime} min de leitura</span>
            </div>
            <h3>${a.title}</h3>
            <p>${a.excerpt}</p>
            <span class="card-link">Ler artigo →</span>
          </div>
        </article>`).join('')}
    </div>`;
}

window.switchCat = (cat) => {
  activeCat = cat;
  const url = new URL(window.location);
  if (cat === 'all') url.searchParams.delete('cat');
  else url.searchParams.set('cat', cat);
  window.history.replaceState({}, '', url);
  renderTabs();
  renderGrid(cat);
};

window.navigateTo = navigateTo;

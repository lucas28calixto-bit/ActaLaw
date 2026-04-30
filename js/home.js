import { articles, categories } from './articles.js';
import { initNavbar, initMobileMenu, initThemeToggle, formatDate, navigateTo } from './main.js';

initNavbar();
initMobileMenu();
initThemeToggle();

renderFeatured();
renderLatest();
renderCategories();

function cardHTML(a, imgHeight = '200px') {
  return `
    <article class="card" onclick="navigateTo('artigo.html', {id:${a.id}})" role="button" tabindex="0"
      aria-label="${a.title}">
      <img class="card-img" src="${a.image}" alt="${a.title}" style="height:${imgHeight}" loading="lazy">
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
    </article>`;
}

function renderFeatured() {
  const featured = articles.filter(a => a.featured);
  if (!featured.length) return;

  const main = featured[0];
  const rest = featured.slice(1, 3);

  const container = document.getElementById('featured-container');
  if (!container) return;

  const heroPreview = document.getElementById('hero-preview');
  if (heroPreview) {
    heroPreview.innerHTML = `
      <img src="${main.image}" alt="${main.title}" loading="eager">
      <div class="hero-preview-caption">
        <span class="badge">${main.categoryLabel}</span>
        <h3>${main.title}</h3>
        <p>${main.excerpt}</p>
      </div>`;
    heroPreview.addEventListener('click', () => navigateTo('artigo.html', { id: main.id }));
    heroPreview.style.cursor = 'pointer';
  }

  container.innerHTML = `
    <div class="featured-grid">
      ${cardHTML(main, '320px')}
      <div class="col-right">
        ${rest.map(a => cardHTML(a, '145px')).join('')}
      </div>
    </div>`;
}

function renderLatest() {
  const latest = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  const container = document.getElementById('latest-container');
  if (!container) return;
  container.innerHTML = `<div class="latest-grid">${latest.map(a => cardHTML(a)).join('')}</div>`;
}

function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;
  container.innerHTML = `
    <div class="categories-grid">
      ${categories.map(c => `
        <div class="cat-card" onclick="navigateTo('categoria.html', {cat:'${c.id}'})" role="button" tabindex="0">
          <div class="cat-icon">${c.icon}</div>
          <h4>${c.label}</h4>
          <p>${c.desc}</p>
        </div>`).join('')}
    </div>`;
}

window.navigateTo = navigateTo;

document.querySelectorAll('.card, .cat-card').forEach(el => {
  el.addEventListener('keydown', e => { if (e.key === 'Enter') el.click(); });
});

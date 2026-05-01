import { initThemeToggle } from '../js/main.js';

initThemeToggle();

// ─── Config ───────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'actalaw_admin_config';

function loadConfig() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}

function saveConfig(cfg) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
}

function getConfig() {
  return {
    token: document.getElementById('gh-token').value.trim(),
    owner: document.getElementById('gh-owner').value.trim(),
    repo:  document.getElementById('gh-repo').value.trim(),
  };
}

// Pre-fill from storage
const saved = loadConfig();
if (saved.token) document.getElementById('gh-token').value = saved.token;
if (saved.owner) document.getElementById('gh-owner').value = saved.owner;
if (saved.repo)  document.getElementById('gh-repo').value  = saved.repo;

document.getElementById('btn-save-config').addEventListener('click', () => {
  const cfg = getConfig();
  if (!cfg.token || !cfg.owner || !cfg.repo) {
    showStatus('config-status', 'Preencha todos os campos.', 'error');
    return;
  }
  saveConfig(cfg);
  showStatus('config-status', 'Configuração salva!', 'success');
  refreshArticleList();
});

// ─── GitHub API helpers ────────────────────────────────────────────────────────

async function ghGet(path) {
  const cfg = loadConfig();
  const res = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}`, {
    headers: { Authorization: `token ${cfg.token}`, Accept: 'application/vnd.github.v3+json' },
  });
  if (!res.ok) throw new Error(`GitHub API error ${res.status}: ${await res.text()}`);
  return res.json();
}

async function ghPut(path, content, sha, message) {
  const cfg = loadConfig();
  const res = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${cfg.token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, content: btoa(unescape(encodeURIComponent(content))), sha }),
  });
  if (!res.ok) throw new Error(`GitHub API error ${res.status}: ${await res.text()}`);
  return res.json();
}

// ─── Articles.js parsing ──────────────────────────────────────────────────────

function getNextId(fileContent) {
  const ids = [...fileContent.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1]));
  return ids.length ? Math.max(...ids) + 1 : 1;
}

function buildArticleString(data, id) {
  const content = data.content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');

  const categoryLabels = {
    'noticias': 'Notícias',
    'explicacoes': 'Educacional',
    'direito-penal': 'Direito Penal',
    'direito-civil': 'Direito Civil',
    'direito-administrativo': 'Direito Administrativo',
    'processo-civil': 'Processo Civil',
    'processo-penal': 'Processo Penal',
    'direito-constitucional': 'Direito Constitucional',
  };

  return `  {
    id: ${id},
    title: ${JSON.stringify(data.title)},
    category: ${JSON.stringify(data.category)},
    categoryLabel: ${JSON.stringify(categoryLabels[data.category] || data.category)},
    date: ${JSON.stringify(data.date)},
    readTime: ${parseInt(data.readTime)},
    featured: ${data.featured},
    image: ${JSON.stringify(data.image)},
    excerpt: ${JSON.stringify(data.excerpt)},
    content: \`
${content}
    \`,
  },`;
}

function insertArticleIntoFile(fileContent, articleStr) {
  const insertPoint = fileContent.lastIndexOf('\n];');
  if (insertPoint === -1) throw new Error('Formato de articles.js inesperado: não encontrou \\n];');
  return fileContent.slice(0, insertPoint) + '\n' + articleStr + '\n' + fileContent.slice(insertPoint);
}

// ─── List existing articles ────────────────────────────────────────────────────

async function refreshArticleList() {
  const listEl = document.getElementById('articles-list');
  const cfg = loadConfig();
  if (!cfg.token) {
    listEl.innerHTML = '<div id="loading-articles">Carregue a configuração do GitHub para listar artigos.</div>';
    return;
  }

  listEl.innerHTML = '<div id="loading-articles">Carregando artigos...</div>';

  try {
    const file = await ghGet('js/articles.js');
    const decoded = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));

    const titleMatches = [...decoded.matchAll(/title:\s*'([^']+)'/g)].map(m => m[1]);
    const idMatches = [...decoded.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1]));
    const categoryMatches = [...decoded.matchAll(/categoryLabel:\s*'([^']+)'/g)].map(m => m[1]);
    const dateMatches = [...decoded.matchAll(/date:\s*'([^']+)'/g)].map(m => m[1]);

    if (!titleMatches.length) {
      listEl.innerHTML = '<div id="loading-articles">Nenhum artigo encontrado.</div>';
      return;
    }

    listEl.innerHTML = titleMatches.map((title, i) => `
      <div class="article-item">
        <div class="article-item-info">
          <div class="article-item-title">${title}</div>
          <div class="article-item-meta">#${idMatches[i] ?? '?'} · ${dateMatches[i] ?? ''}</div>
        </div>
        <span class="badge-sm">${categoryMatches[i] ?? ''}</span>
      </div>`).join('');
  } catch (err) {
    listEl.innerHTML = `<div style="color:var(--text-muted);font-size:.875rem">Erro ao carregar: ${err.message}</div>`;
  }
}

document.getElementById('btn-refresh').addEventListener('click', refreshArticleList);

// Auto-load list if config already saved
if (loadConfig().token) refreshArticleList();

// ─── Publish ──────────────────────────────────────────────────────────────────

document.getElementById('btn-publish').addEventListener('click', async () => {
  const btn = document.getElementById('btn-publish');
  const status = document.getElementById('publish-status');

  const data = {
    title:    document.getElementById('art-title').value.trim(),
    category: document.getElementById('art-category').value,
    readTime: document.getElementById('art-readtime').value,
    image:    document.getElementById('art-image').value.trim(),
    excerpt:  document.getElementById('art-excerpt').value.trim(),
    featured: document.getElementById('art-featured').checked,
    content:  document.getElementById('art-content').value,
    date:     new Date().toISOString().slice(0, 10),
  };

  if (!data.title || !data.excerpt || !data.content || !data.image) {
    showStatus('publish-status', 'Preencha título, resumo, imagem e conteúdo.', 'error');
    return;
  }

  const cfg = loadConfig();
  if (!cfg.token) {
    showStatus('publish-status', 'Configure o token do GitHub primeiro.', 'error');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Publicando...';
  status.className = 'status-msg';
  status.style.display = 'none';

  try {
    const file = await ghGet('js/articles.js');
    const sha = file.sha;
    const currentContent = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));

    const nextId = getNextId(currentContent);
    const articleStr = buildArticleString(data, nextId);
    const newContent = insertArticleIntoFile(currentContent, articleStr);

    await ghPut('js/articles.js', newContent, sha, `artigo: ${data.title}`);

    showStatus('publish-status', `Artigo #${nextId} publicado! O site será atualizado em ~1 minuto.`, 'success');
    clearForm();
    refreshArticleList();
  } catch (err) {
    showStatus('publish-status', `Erro: ${err.message}`, 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Publicar no ActaLaw';
  }
});

// ─── Preview ──────────────────────────────────────────────────────────────────

document.getElementById('btn-preview').addEventListener('click', () => {
  const content = document.getElementById('art-content').value;
  const previewEl = document.getElementById('preview-body');
  if (!content.trim()) {
    previewEl.classList.remove('visible');
    return;
  }
  previewEl.innerHTML = window.marked.parse(content);
  previewEl.classList.add('visible');
  previewEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function showStatus(id, msg, type) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = `status-msg ${type}`;
}

function clearForm() {
  ['art-title', 'art-image', 'art-excerpt', 'art-content'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('art-featured').checked = false;
  document.getElementById('art-readtime').value = '5';
  document.getElementById('preview-body').classList.remove('visible');
}

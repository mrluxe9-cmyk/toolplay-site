/* ToolPlay core app.js — no dependencies, no build step. */

/* ---------------- PWA cleanup ---------------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      for (const reg of regs) await reg.unregister();

      const keys = await caches.keys();
      await Promise.all(keys.map(key => caches.delete(key)));
    } catch (e) {}
  });
}

/* ---------------- Theme ---------------- */
(function initTheme(){
  const saved = localStorage.getItem('tp_theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = saved || system;
  document.documentElement.setAttribute('data-theme', theme);
})();
function tpToggleTheme(){
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('tp_theme', next);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
}

/* ---------------- Analytics (GA4-style stub; wire a real GA4 ID in analytics.js) ---------------- */
function tpTrack(eventName, params){
  params = params || {};
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    console.log('[analytics]', eventName, params);
  }
}

/* ---------------- Favorites ---------------- */
function tpGetFavorites(){
  try { return JSON.parse(localStorage.getItem('tp_favorites') || '[]'); }
  catch(e){ return []; }
}
function tpIsFavorite(id){ return tpGetFavorites().includes(id); }
function tpToggleFavorite(id){
  let favs = tpGetFavorites();
  const active = favs.includes(id);
  favs = active ? favs.filter(f => f !== id) : [...favs, id];
  localStorage.setItem('tp_favorites', JSON.stringify(favs));
  tpTrack(active ? 'favorite_remove' : 'favorite_add', { item_id: id });
  return !active;
}

/* ---------------- Recently used ---------------- */
function tpTrackRecent(id){
  let recents = [];
  try { recents = JSON.parse(localStorage.getItem('tp_recents') || '[]'); } catch(e){}
  recents = [id, ...recents.filter(r => r !== id)].slice(0, 8);
  localStorage.setItem('tp_recents', JSON.stringify(recents));
  const item = tpGetItem(id);
  if (item) tpTrack(item.type === 'game' ? 'game_start' : 'tool_open', { item_id: id, category: item.category });
}
function tpGetRecents(){
  try { return JSON.parse(localStorage.getItem('tp_recents') || '[]').map(tpGetItem).filter(Boolean); }
  catch(e){ return []; }
}

/* ---------------- URL helper ---------------- */
function tpUrl(path){
  const clean = String(path || '').replace(/^\/+/, '');
  const root = window.TP_ROOT || '';
  return new URL(clean, new URL(root || './', document.baseURI)).href;
}

/* ---------------- Card rendering ---------------- */
function tpCardHTML(item){
  const fav = tpIsFavorite(item.id);
  return `
    <a class="card" href="${tpUrl(item.url)}" data-id="${item.id}">
      <button class="fav-btn ${fav ? 'active' : ''}" aria-label="Toggle favorite" onclick="event.preventDefault();tpHandleFavClick(this,'${item.id}')">${fav ? '★' : '☆'}</button>
      <div class="icon" aria-hidden="true">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <span class="badge ${item.type}">${item.type === 'game' ? 'Game' : 'Tool'}</span>
    </a>`;
}
function tpHandleFavClick(btn, id){
  const active = tpToggleFavorite(id);
  btn.classList.toggle('active', active);
  btn.textContent = active ? '★' : '☆';
  tpToast(active ? 'Added to favorites' : 'Removed from favorites');
}
function tpRenderGrid(containerId, items, emptyMsg){
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!items.length){
    el.innerHTML = `<p class="empty-note">${emptyMsg || 'Nothing here yet.'}</p>`;
    return;
  }
  el.innerHTML = items.map(tpCardHTML).join('');
}

/* ---------------- Toast ---------------- */
function tpToast(msg){
  let el = document.getElementById('tp-toast');
  if (!el){
    el = document.createElement('div');
    el.id = 'tp-toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 1800);
}

/* ---------------- Search ---------------- */
function tpOpenSearch(){
  const overlay = document.getElementById('search-overlay');
  overlay.classList.add('open');
  document.getElementById('search-input').focus();
  tpRunSearch('');
}
function tpCloseSearch(){
  document.getElementById('search-overlay').classList.remove('open');
}
function tpRunSearch(q){
  const query = q.trim().toLowerCase();
  const resultsEl = document.getElementById('search-results');
  let matches = TOOLPLAY_ITEMS;
  if (query){
    matches = TOOLPLAY_ITEMS.filter(i =>
      i.title.toLowerCase().includes(query) ||
      i.category.toLowerCase().includes(query) ||
      i.desc.toLowerCase().includes(query) ||
      i.keywords.toLowerCase().includes(query)
    );
    tpTrack('search', { search_term: query, result_count: matches.length });
  }
  if (!matches.length){
    resultsEl.innerHTML = `<div class="search-empty">No tools or games match “${q}”.</div>`;
    return;
  }
  resultsEl.innerHTML = matches.map(i => `
    <a class="search-result" href="${tpUrl(i.url)}">
      <span style="font-size:1.3rem">${i.icon}</span>
      <span>${i.title}</span>
      <span class="tag">${i.category}</span>
    </a>`).join('');
}

/* ---------------- Header / Footer / Bottom nav injection ----------------
   Every page includes empty <div id="tp-header"></div> etc. and sets
   window.TP_ACTIVE = 'home' | 'tools' | 'games' | 'favorites' | ... plus
   an optional window.TP_ROOT = '../' for pages one level deep. */
function tpBuildHeader(){
  const root = window.TP_ROOT || '';
  const active = window.TP_ACTIVE || '';
  const nav = [
    ['home', 'Home', root + 'index.html'],
    ['tools', 'Tools', root + 'index.html#tools'],
    ['games', 'Games', root + 'index.html#games'],
    ['ai', 'AI Tools', root + 'index.html#ai'],
    ['about', 'About', root + 'about.html'],
  ];
  const header = document.getElementById('tp-header');
  if (!header) return;
  const theme = document.documentElement.getAttribute('data-theme');
  header.innerHTML = `
    <header class="site-header">
      <div class="container">
        <a class="logo" href="${root}index.html">Tool<span class="dot">Play</span></a>
        <nav class="main-nav" aria-label="Primary">
          ${nav.map(([key,label,href]) => `<a href="${href}" class="${active===key?'active':''}">${label}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <button class="icon-btn" aria-label="Search" onclick="tpOpenSearch()">🔍</button>
          <button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode" onclick="tpToggleTheme()">${theme==='dark'?'☀️':'🌙'}</button>
        </div>
      </div>
    </header>
    <div class="search-overlay" id="search-overlay" onclick="if(event.target===this)tpCloseSearch()">
      <div class="search-panel">
        <input id="search-input" type="text" placeholder="Search tools, calculators and games…" autocomplete="off" oninput="tpRunSearch(this.value)">
        <div class="search-results" id="search-results"></div>
      </div>
    </div>`;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') tpCloseSearch();
    if ((e.metaKey || e.ctrlKey) && e.key === 'k'){ e.preventDefault(); tpOpenSearch(); }
  });
}
function tpBuildFooter(){
  const root = window.TP_ROOT || '';
  const footer = document.getElementById('tp-footer');
  if (!footer) return;
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div><h4>Tools</h4>
            <a href="${root}tools/age-calculator.html">Age Calculator</a>
            <a href="${root}tools/bmi-calculator.html">BMI Calculator</a>
            <a href="${root}tools/percentage-calculator.html">Percentage Calculator</a>
            <a href="${root}tools/qr-generator.html">QR Generator</a>
          </div>
          <div><h4>Games</h4>
            <a href="${root}games/2048.html">2048</a>
            <a href="${root}games/snake.html">Snake</a>
            <a href="${root}games/tic-tac-toe.html">Tic Tac Toe</a>
          </div>
          <div><h4>AI Tools</h4>
            <a href="${root}index.html#ai">AI Tools (coming soon)</a>
          </div>
          <div><h4>Company</h4>
            <a href="${root}about.html">About</a>
            <a href="${root}contact.html">Contact</a>
            <a href="${root}blog.html">Blog</a>
          </div>
          <div><h4>Legal</h4>
            <a href="${root}privacy-policy.html">Privacy Policy</a>
            <a href="${root}terms.html">Terms &amp; Conditions</a>
            <a href="${root}disclaimer.html">Disclaimer</a>
          </div>
        </div>
        <div class="footer-bottom">© 2026 ToolPlay. All rights reserved.</div>
      </div>
    </footer>`;
}
function tpBuildBottomNav(){
  const root = window.TP_ROOT || '';
  const active = window.TP_ACTIVE || '';
  const el = document.getElementById('tp-bottom-nav');
  if (!el) return;
  const items = [
    ['home','🏠','Home', root+'index.html'],
    ['tools','🧰','Tools', root+'index.html#tools'],
    ['games','🎮','Games', root+'index.html#games'],
    ['favorites','⭐','Favorites', root+'index.html#favorites'],
  ];
  el.innerHTML = `<nav class="bottom-nav" aria-label="Bottom">
    ${items.map(([key,icon,label,href]) => `
      <a href="${href}" class="${active===key?'active':''}">
        <span class="bn-icon" aria-hidden="true">${icon}</span>${label}
      </a>`).join('')}
  </nav>`;
}
document.addEventListener('DOMContentLoaded', () => {
  tpBuildHeader();
  tpBuildFooter();
  tpBuildBottomNav();
  tpTrack('page_view', { page_path: location.pathname });
});

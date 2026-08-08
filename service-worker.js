const CACHE_NAME = 'toolplay-shell-v2';
const BASE_URL = new URL('./', self.location.href);
const APP_SHELL_PATHS = [
  './', './index.html', './css/style.css', './js/app.js', './js/data.js', './manifest.json',
  './about.html', './blog.html', './contact.html', './disclaimer.html', './privacy-policy.html', './terms.html',
  './tools/age-calculator.html', './tools/bmi-calculator.html', './tools/password-generator.html',
  './tools/percentage-calculator.html', './tools/qr-generator.html', './tools/word-counter.html',
  './games/2048.html', './games/snake.html', './games/tic-tac-toe.html'
];
const APP_SHELL = APP_SHELL_PATHS.map(path => new URL(path, BASE_URL).href);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const isLocal = new URL(request.url).origin === self.location.origin;
  if (!isLocal) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
        }
        return response;
      }).catch(() => caches.match(new URL('./index.html', BASE_URL).href));
    })
  );
});

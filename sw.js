const CACHE_NAME = 'consola-v1';
const urlsToCache = [
  './',
  './index.html',
  // Agrega aquí tu icono si lo tienes
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

const CACHE_NAME = 'consola-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.svg'
];

// Instalación: Guardamos los archivos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en caché');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch: Servir desde caché o buscar en la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en caché, lo devuelve. Si no, va a internet.
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activación: Limpiar cachés viejas si actualizamos la versión
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

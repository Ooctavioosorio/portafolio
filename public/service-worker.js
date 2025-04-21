// Nombre del caché
const CACHE_NAME = 'oscar-osorio-portfolio-v1';

// Archivos a cachear inicialmente
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/fondo.jpg',
  '/fondo.png',
  '/proyectos/mentoria.jpg',
  '/proyectos/gratia.jpg'
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caché abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar solicitudes y servir desde el caché si está disponible
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devolver el recurso si está en caché
        if (response) {
          return response;
        }
        
        // Si no está en caché, buscarlo en la red
        return fetch(event.request)
          .then((response) => {
            // Verificar si obtenemos una respuesta válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta ya que va a ser consumida por el navegador y por el caché
            let responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
      })
  );
});

// Actualizar el service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Eliminar caché antiguo
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

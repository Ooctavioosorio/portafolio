// Script para eliminar agresivamente cualquier Service Worker
(function() {
  if ('serviceWorker' in navigator) {
    // Desregistrar todos los service workers
    navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
          console.log('Service Worker desregistrado con éxito:', registration);
        }
      })
      .catch(error => {
        console.error('Error al desregistrar Service Workers:', error);
      });
      
    // Limpiar todas las cachés
    if ('caches' in window) {
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              console.log('Eliminando caché:', cacheName);
              return caches.delete(cacheName);
            })
          );
        })
        .then(() => {
          console.log('Todas las cachés han sido eliminadas');
          // Ya no recargamos ni mostramos alerta para evitar bucles
        })
        .catch(error => {
          console.error('Error al eliminar cachés:', error);
        });
    }
  } else {
    console.log('Este navegador no soporta Service Workers');
  }
})();

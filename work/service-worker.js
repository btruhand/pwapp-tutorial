const cacheName = 'weatherPWA-step-6-1';
const filesToCache = [];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  // wait for promise to finish
  e.waitUntil(
    /**
     * Open the cache
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
     */
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell: ', cache);
      return cache.addAll(filesToCache);
    })
  );
});
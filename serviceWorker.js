var CACHE_NAME = 'version-final';


var urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/app.js',
    '/index.html',
    'manifest.json',
    'images/icons/icon-192x192.png',
    'images/icons/icon-512x512.png',
    '/pwa-1/',
    '/pwa-1/index.html',
    '/pwa-1/css/styles.css',
    '/pwa-1/js/app.js',
    '/pwa-1/manifest.json',
    '/pwa-1/images/icons/icon-192x192.png',
    '/pwa-1/images/icons/icon-512x512.png',
    '/pwa-2/',
    '/pwa-2/index.html',
    '/pwa-2/css/styles.css',
    '/pwa-2/js/app.js',
    '/pwa-3/',
    '/pwa-3/index.html',
    '/pwa-3/css/styles.css',
    '/pwa-3/js/app.js',
    '/pwa-4/',
    '/pwa-4/index.html',
    '/pwa-4/css/styles.css',
    '/pwa-4/js/app.js',
    '/pwa-5/',
    '/pwa-5/index.html',
    '/pwa-5/css/styles.css',
    '/pwa-5/js/app.js',


];

console.log("Service Worker with " + CACHE_NAME + " is running.");


self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            return fetch(event.request).then(
                function (response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function (cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        })
    );
});


self.addEventListener('activate', function (event) {

    var cacheAllowlist = ['version-final'];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
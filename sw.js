/* 2026 LIFE ARCHITECT — Service Worker */

const CACHE_NAME = 'life-architect-v9';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './script_v9.js',
    './icon.svg',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request)
                    .then((response) => {
                        if (!response || response.status !== 200 || event.request.method !== 'GET') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => cache.put(event.request, responseToCache));
                        return response;
                    });
            })
    );
});

self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || '🎯 Life Architect';
    const options = {
        body: data.body || 'Hedeflerini kontrol etmeyi unutma!',
        icon: './icon.svg',
        badge: './icon.svg',
        vibrate: [100, 50, 100],
        data: data
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

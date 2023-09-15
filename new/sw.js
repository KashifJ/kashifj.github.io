const offlineUrl = '/offline/index.html';

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('offline').then(function(cache) {
            return cache.addAll([
                offlineUrl
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    if( event.request.url.indexOf( 'analytics' ) === -1 ) {
        event.respondWith(
            fetch(event.request.url)
                .catch(function(error) {
                    return caches.match(offlineUrl);
                })
        );
    }
});
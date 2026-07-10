const CACHE_NAME = "offline-cache-v68";
const OFFLINE_URLS = [
    "/ProRata-Fordeleren/",
    "/ProRata-Fordeleren/favicon.png",
    "/ProRata-Fordeleren/happyman.svg",
    "/ProRata-Fordeleren/index.html",
    "/ProRata-Fordeleren/icon-192x192.png",
    "/ProRata-Fordeleren/icon-512x512.png",
    "/ProRata-Fordeleren/manifest.json",
    "/ProRata-Fordeleren/assets/css/material-tailwind.css",
    "/ProRata-Fordeleren/assets/js/ripple.js",
    "/ProRata-Fordeleren/dist/bundle.js",
];

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS))
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        Promise.all([
            caches.keys().then((names) =>
                Promise.all(
                    names.map(
                        (name) => name !== CACHE_NAME && caches.delete(name)
                    )
                )
            ),
            self.clients.claim(),
        ])
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method !== "GET") return;

    // Only handle our own assets. Firebase/Firestore/Google traffic (auth
    // popups, the Firestore Listen/channel stream) must reach the network
    // untouched — proxying it here breaks the WebChannel abort/retry cycle.
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    // Stale-while-revalidate: serve the cached shell instantly, refresh in
    // the background so the next load has the latest.
    event.respondWith(
        caches.match(request).then((cached) => {
            const network = fetch(request)
                .then((response) => {
                    if (response && response.ok && response.type === "basic") {
                        const clone = response.clone();
                        caches
                            .open(CACHE_NAME)
                            .then((cache) => cache.put(request, clone));
                    }
                    return response;
                })
                .catch(() => {
                    if (cached) return cached;
                    if (request.mode === "navigate") {
                        return caches.match("/ProRata-Fordeleren/index.html");
                    }
                    return Response.error();
                });
            return cached || network;
        })
    );
});

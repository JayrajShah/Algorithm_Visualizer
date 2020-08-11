const CACHE_NAME = "landing-cache";
const urltocache = ["index.html", "offline.html"];

// const self = this;
// self.addEventListener("install", (event) => {
//   console.log("install");
// });

// self.addEventListener("activate", (event) => {
//   console.log("activate");
// });

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("CACHE OPENED");
      return cache.addAll(urltocache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        caches.match("index.html").catch(() => {
          caches.match("offline.html");
        });
      });
    })
  );
});
self.addEventListener("activate", (event) => {
  const whiteList = [];
  whiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cachename) => {
          if (!whiteList.includes(cachename)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

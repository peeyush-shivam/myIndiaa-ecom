// const cacheName = "v1";

// const cachedAssets = [
//   "/static/js/bundle.js",
//   "/index.html",
//   "/script.js",
//   "/",
//   "/static/media/shopnexusLogo.4d2b751d44a83bcb56a5.png",
//   "/static/media/image2-carousel.0b844a485b25884af35c.jpg",
//   "/static/media/image3-carousel.12554e65ad27fb4d971a.jpg",
//   "/static/media/image5-carousel.c5bb8291c4793e80fc5e.jpg",
//   "/cart",
//   "/wishlist",
// ];

// // Call install event
// this.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches
//       .open(cacheName)
//       .then((cache) => {
//         cache.addAll(cachedAssets);
//       })
//       .then(() => this.skipWaiting())
//   );
// });

// // Call activate event
// // this.addEventListener("activate", (event) => {
// //   // Remove unwanted caches
// //   event.waitUntil(
// //     caches.keys().then((cacheNames) => {
// //       return Promise.all(
// //         cacheNames.map((cache) => {
// //           if (cache !== cacheName) {
// //             return caches.delete(cache);
// //           }
// //         })
// //       );
// //     })
// //   );
// // });

// this.addEventListener("fetch", (event) => {
//   // Only cache requests that are not already in the cache
//   if (!event.request.url.startsWith("http")) return; // Skip non-http requests

//   if (!navigator.onLine) {
//     event.respondWith(
//       caches.open(cacheName).then(async (cache) => {
//         const cachedResponse = await cache.match(event.request);

//         if (cachedResponse) {
//           return cachedResponse; // Return from cache if available
//         }

//         // Fetch from network and cache
//         return fetch(event.request).then((networkResponse) => {
//           cache.put(event.request, networkResponse.clone()); // Cache the response
//           return networkResponse;
//         });
//       })
//     );
//   }
// });

const cacheName = "v1";

const cachedAssets = [
  "/static/js/bundle.js",
  "/index.html",
  "/script.js",
  "/",
  "/static/media/shopnexusLogo.4d2b751d44a83bcb56a5.png",
  "/static/media/image2-carousel.0b844a485b25884af35c.jpg",
  "/static/media/image3-carousel.12554e65ad27fb4d971a.jpg",
  "/static/media/image5-carousel.c5bb8291c4793e80fc5e.jpg",
  "/cart",
  "/wishlist",
];

// Call install event
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(cachedAssets);
      })
      .then(() => this.skipWaiting())
  );
});

// Call activate event
this.addEventListener("activate", (event) => {
  // Remove unwanted caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!event.request.url.startsWith("http")) return; // Skip non-http requests

  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request)
        .then((cachedResponse) => {
          return (
            cachedResponse ||
            fetch(event.request).then((response) => {
              return caches.open(cacheName).then((cache) => {
                cache.put(event.request, response.clone());
                return response;
              });
            })
          );
        })
        .catch(() => {
          return caches.match("/index.html"); // Fallback to the index page for navigation
        })
    );
  } else {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  }
});

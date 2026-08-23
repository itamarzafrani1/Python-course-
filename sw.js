/* Mobile-first service worker.
   - App shell: cache-first after install.
   - HTML navigation: network-first so releases update quickly.
   - Brython runtime: runtime-cache after first successful load, enabling the
     lightweight playground to keep working offline after it has been used once.
   - Pyodide stays network-managed because its many large WASM/data assets can
     exceed mobile storage quotas. */
const CACHE = "python-track-v4";
const RUNTIME = "python-track-runtime-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

const BRYTHON_HOST = "cdn.jsdelivr.net";
const BRYTHON_PATH = "/npm/brython@3.14.3/";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => ![CACHE, RUNTIME].includes(k)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (_) { return; }

  // Cache the lightweight Python engine after first use.
  if (url.hostname === BRYTHON_HOST && url.pathname.startsWith(BRYTHON_PATH)) {
    event.respondWith(
      caches.open(RUNTIME).then(async cache => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok || res.type === "opaque") cache.put(req, res.clone()).catch(() => {});
        return res;
      })
    );
    return;
  }

  // Other cross-origin resources (including heavy Pyodide) are left to browser/network.
  if (url.origin !== location.origin) return;

  // Navigation / HTML: prefer network, fall back to cached app shell.
  if (req.mode === "navigate" || /\.html?($|\?)/.test(url.pathname)) {
    event.respondWith(
      fetch(req).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put("./index.html", res.clone())).catch(() => {});
        return res;
      }).catch(async () =>
        (await caches.match(req)) || (await caches.match("./index.html")) || (await caches.match("./"))
      )
    );
    return;
  }

  // Same-origin static assets: cache first, but never return HTML for a missing asset.
  event.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) caches.open(CACHE).then(c => c.put(req, res.clone())).catch(() => {});
      return res;
    }))
  );
});

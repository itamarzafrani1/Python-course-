/* service worker — שומר את האפליקציה עצמה במטמון לעבודה אופליין.
   קבצים חיצוניים (Pyodide) נשלחים ישירות לרשת: שכפול זרם של קובץ WASM
   בגודל עשרות MB מכפיל את צריכת הזיכרון ומפיל את האתחול במכשירים ניידים. */
const CACHE = "python-track-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // הכול מחוץ לדומיין שלנו — לא נוגעים. הדפדפן ינהל את המטמון בעצמו.
  if (url.origin !== location.origin) return;

  // דף האפליקציה: רשת קודם, כדי שעדכונים ייקלטו בריענון אחד
  if (req.mode === "navigate" || /\.html?($|\?)/.test(url.pathname)) {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put("./index.html", copy)).catch(() => {});
        return res;
      }).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // שאר הקבצים שלנו: מטמון קודם
  event.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});

const C="arabia-v2";self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","7-products.json","6-logo.png"])));self.skipWaiting()});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const cp=n.clone();caches.open(C).then(c=>c.put(e.request,cp));return n}).catch(()=>r)))});

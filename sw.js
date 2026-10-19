/* 서재 서비스 워커
   - 앱 뼈대·data/*.js : 인터넷이 되면 항상 최신본을 받고(받은 즉시 저장), 안 되면 저장본을 쓴다.
   - 그림(img/)·구글 폰트 : 저장본을 먼저 보여주고 뒤에서 조용히 갱신한다.
   새 챕터 데이터를 추가했다면 아래 DATA 목록에 파일 이름을 더하고, VERSION 숫자를 올리면 확실히 갱신된다. */
const VERSION = 'v1';
const CORE = `seojae-core-${VERSION}`, RUNTIME = `seojae-runtime-${VERSION}`;
const DATA = ['Iliad', 'Iliad6', 'Iliad24', 'Meta', 'Meta14', 'Genesis1', 'Cid1', 'Lusiadas1', 'Sanguo1'].map(n => `data/data-lines${n}.js`);
const SHELL = ['./', 'shell.html', 'manifest.json', 'img/icon-192.png', 'img/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CORE);
    // 하나가 없어도(예: 아직 안 만든 챕터) 설치가 실패하지 않게 파일별로 따로 저장한다
    await Promise.all(SHELL.concat(DATA).map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keep = [CORE, RUNTIME];
    for (const k of await caches.keys()) if (k.startsWith('seojae-') && !keep.includes(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = await cache.match(req, { ignoreSearch: true }) || await caches.match(req, { ignoreSearch: true });
    if (hit) return hit;
    throw err;
  }
}
async function staleWhileRevalidate(req) {
  const cache = await caches.open(RUNTIME);
  const hit = await cache.match(req);
  const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => null);
  return hit || (await net) || Response.error();
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (req.mode === 'navigate') {            // 나란히 보기(?embed=…)처럼 주소 뒤가 달라도 같은 shell.html로 취급
      e.respondWith(networkFirst(req, CORE).catch(() => caches.match('shell.html')));
    } else if (/\/img\//.test(url.pathname)) {
      e.respondWith(staleWhileRevalidate(req));
    } else {
      e.respondWith(networkFirst(req, CORE));  // shell.html, data/*.js, manifest 등
    }
  } else if (/(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(staleWhileRevalidate(req));
  }
});

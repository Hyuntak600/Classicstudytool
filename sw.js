/* 서재: 서비스 워커 해제용 파일 (캐시 기능 없음)
   예전에 설치된 서비스 워커와 'seojae-' 캐시를 지우고 스스로 등록을 해제한다.
   이 파일은 이미 설치된 기기가 정리될 때까지 지우지 말고 그대로 두는 것이 안전하다. */
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('seojae-')) await caches.delete(k);
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(c => c.navigate(c.url));   // 최신 파일로 한 번 새로고침
  })());
});

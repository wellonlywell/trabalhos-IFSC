// Define um nome e versão para o cache
const CACHE_VERSION = 1;
const CACHE_NAME = `maravilhas-oceano-cache-v${CACHE_VERSION}`;

// Lista de todos os arquivos que o aplicativo precisa para funcionar offline.
const FILES_TO_CACHE = [
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './imagens/icone192.png',
    './imagens/icone512.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    'https://www.veracel.com.br/wp-content/uploads/2020/04/post-baleia.jpg',
    'https://mega.ibxk.com.br/2023/12/06/06164200531690.jpg',
    'https://images.ecycle.com.br/wp-content/uploads/2021/11/10183748/q-u-i-0G01UI1MQhg-unsplash-2-scaled.jpg.webp',
    'https://images.unsplash.com/photo-1535591273668-578e31182c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fGNsb3duZmlzaHxlbnwwfHx8fDE2ODM3ODE1NDR8MA&ixlib=rb-4.0.3&q=80&w=400',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Humpback_anglerfish.png/440px-Humpback_anglerfish.png',
    'https://conexaoplaneta.com.br/wp-content/uploads/2023/01/lula-gigante-japao-3-conexao-planeta.jpg'
];

// Evento 'install': Salva todos os arquivos da lista no cache.
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Salvando arquivos no cache');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Evento 'activate': Limpa caches antigos para evitar conflitos.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log(`[Service Worker] Removendo cache antigo: ${key}`);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Evento 'fetch': Intercepta as requisições.
// Tenta pegar do cache primeiro. Se não conseguir (offline), busca na rede.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Se tiver no cache, retorna o arquivo do cache.
            if (response) {
                return response;
            }
            // Se não, busca na internet.
            return fetch(event.request);
        })
    );
});
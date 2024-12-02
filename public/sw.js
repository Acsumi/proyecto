self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open('informativo-cache').then((cache) => {
            return cache.addAll([
                '/',
                'components/Inicio.jsx',
                'components/Nosotros.js',
                'components/Principal.jsx',
                'components/Principal.css',
                'components/styles.css',
                'components/Servicios.jsx',
                'components/Sesion.jsx',
                'components/Nosotros.jsx',
                'components/Moddal.jsx',
                'components/Navbar.css',
                'components/Roberto.jsx',
                'components/MenuBarra.jsx',
                'components/MenuBarra.css',
                'components/Soporte.jsx',
                'components/Brigada.jsx',
                'components/Brigada.css',
                '/assets/images/brigada.jpg',
                '/assets/images/celu.png',
                '/assets/images/ser.png',
                '/assets/images/ser1.png',
                '/assets/images/logo.png',
                '/assets/images/robot1.png',
                '/assets/images/doctores.png',
                '/assets/images/nos.png',
                '/assets/images/robot2.png',
                '/assets/images/doctora.png'
                // Agrega aquí más archivos que deseas cachear
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
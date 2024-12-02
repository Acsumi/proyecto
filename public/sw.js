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
                'components/Modal.jsx',
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
                '/assets/images/doctora.png',
                'components/Admin.css',
                'components/python/api.py',
                'components/Admin.jsx',
                'components/Alertas.jsx',
                'components/Alertas.css',
                'components/Barra.jsx',
                'components/Barra.css',
                'components/Grafica.jsx',
                'components/Grafica2.jsx',
                'components/lineal.jsx',
                'components/Icono.jsx',
                'components/Mapa.css',
                'components/Mapa.jsx',
                'components/Mensajes.jsx',
                'components/Mensajes.css',
                'components/MensajesF.jsx',
                'components/MenuBarra.css',
                'components/MenuBarra.jsx',
                'components/Reporte1.jsx',
                'components/Reporte1.css',
                'components/trans.css',
                'components/trans.jsx',
                'components/UserPanel.jsx'



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
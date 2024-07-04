import React from 'react';
import MensajesF from './MensajesF.jsx'; // Importa el componente MensajesF.jsx
import './Mensajes.css'; // Importa los estilos CSS para el componente MensajesF
import Sidebar from './Barra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import UserBadge from './Icono.jsx'; // Asegúrate de ajustar la ruta al archivo si está en una ubicación diferente

const App = () => {
  return (
    <div>
            <UserBadge  />

              <Sidebar /> {/* Utiliza el componente Sidebar */}
      <MensajesF /> {/* Utiliza el componente MensajesF */}
    </div>
  );
};

export default App;

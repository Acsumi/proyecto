import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa'; // Importa el icono FaExclamationCircle de react-icons/fa
import MapaI from "../../assets/images/Mapa.png";
import './Mapa.css'; // Importa los estilos CSS para el componente MensajesF
import Sidebar from './Barra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import UserBadge from './Icono.jsx'; // Asegúrate de ajustar la ruta al archivo si está en una ubicación diferente

const CustomButton = ({ children }) => {
    const [isHovered, setIsHovered] = React.useState(false);
  
    return (
      <div
        className="Button"
        style={{
          width: 290,
          height: 50,
          background: isHovered ? '#002761' : '#fff',
          color: isHovered ? '#FFFFFF' : '#000000',
          border: '0.5px solid #425466',
          borderRadius: 10,
          textTransform: 'uppercase',
          textAlign: 'center',
          fontSize: 14,
          fontFamily: 'Arial',
          fontWeight: 700,
          wordWrap: 'break-word',
          transition: 'background 0.3s, color 0.3s',
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Alinea el contenido verticalmente
          position: 'relative', // Permite posicionar el icono absolutamente dentro del botón
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaExclamationCircle
          style={{
            marginRight: 8, // Espacio entre el icono y el texto del botón
            position: 'absolute', // Posición absoluta para el icono
            left: 40, // Ajusta la posición del icono dentro del botón
          }}
        />

     
        <a
          href="/crear-cuenta"
          style={{
            textDecoration: 'none',
            color: isHovered ? '#FFFFFF' : '#000000',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </a>
      </div>
    );
  };
  
  

const Mapa = () => {
  return (
    <div>
      <div>
      <UserBadge  />
        <Sidebar /> {/* Utiliza el componente Sidebar */}
      </div>
  
     
      <h1 className="titulo">Mapa General</h1>


      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '300px', marginTop: '20px' }}>
      <CustomButton> Alertas pendientes</CustomButton>

    </div>
    <img src={MapaI} alt="Mapa" style={{ marginTop: '20px', maxWidth: '65%', height: 'auto', marginLeft: '401px' }} />

    </div>
  );
};

export default Mapa;

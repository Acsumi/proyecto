import React, { useState, useEffect } from 'react';
import FaceIcon from '@mui/icons-material/Face';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const UserIconWithText = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Actualiza la hora cada segundo

    return () => clearInterval(timerID); // Limpia el intervalo al desmontar el componente
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Alinea los elementos horizontalmente
        marginLeft: '270px',
        cursor: 'pointer',
        padding: '10px',
        transition: 'box-shadow 0.3s',
        boxShadow: isHovered ? '0px 0px 10px rgba(0, 0, 0, 0.5)' : 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaceIcon style={{ marginRight: '15px', fontSize: '36px' }} />
        <span
          style={{
            fontSize: '18px',
            fontWeight: isHovered ? 'bold' : 'normal',
          }}
        >
          Alexis Carrizales De la Cruz
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AccessTimeIcon style={{ marginRight: '5px' }} /> {/* Icono de reloj */}
        <span>{currentTime.toLocaleTimeString()}</span> {/* Muestra la hora actual formateada */}
      </div>
    </div>
  );
};

export default UserIconWithText;

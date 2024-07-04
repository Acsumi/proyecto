import React from "react";
import Reporte from './Reporte'; // Importa el componente Reporte desde Reporte.jsx
import Sidebar from './Barra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import UserBadge from './Icono.jsx'; // Asegúrate de ajustar la ruta al archivo si está en una ubicación diferente

const CustomButton = ({ children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="Button"
      style={{
        width: 150,
        height: 50,
        background: isHovered ? '#002761' : '#fff', // Cambiado el color del fondo basado en el estado hovered
        color: isHovered ? '#FFFFFF' : '#000000',
        border: '0.5px solid #425466', /* Define el grosor y el color del borde */
        borderRadius: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: 700,
        wordWrap: 'break-word',
        transition: 'background 0.3s, color 0.3s',
        textDecoration: 'none', // Evitar la línea debajo del texto como un enlace
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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

const Reporte1 = () => {
  return (
    <div>
            <UserBadge  />

      <Sidebar /> {/* Utiliza el componente Sidebar */}
      <Reporte /> {/* Utiliza el componente Reporte dentro de Reporte1 */}
      
      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '300px', marginTop: '20px' }}> {/* Centra el CustomButton y lo mueve a la derecha */}
        <CustomButton>Generar PDF</CustomButton>
      </div>
    </div>
  );
};

export default Reporte1;

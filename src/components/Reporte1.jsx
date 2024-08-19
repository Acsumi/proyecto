import React, { useState } from "react";
import Reporte from './Reporte'; // Importa el componente Reporte
import Sidebar from './Barra'; // Importa el componente Sidebar
import UserBadge from './Icono'; // Ajusta la ruta al archivo
import Grafica from './Grafica'; // Importa el componente Grafica
import Lineal from './lineal'; // Importa el componente Lineal

const HoverButton = ({ children, onClick, isSelected }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '15px 25px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        backgroundColor: isSelected ? '#002761' : (isHovered ? '#003b79' : '#f0f0f0'),
        color: isSelected ? '#FFFFFF' : (isHovered ? '#FFFFFF' : '#000000'),
        cursor: 'pointer',
        fontSize: '19px',
        transition: 'background-color 0.7s, color 0.7s',
      }}
    >
      {children}
    </button>
  );
};

const Reporte1 = () => {
  const [selectedOption, setSelectedOption] = useState("graficas");

  const renderContent = () => {
    switch (selectedOption) {
      case "graficas":
        return <Grafica />;
      case "alertas":
        return <Reporte />;
      case "prediccion":
        return <Lineal />;
      default:
        return <div>Seleccione una opción</div>;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <div style={{ flex: 1, marginLeft: '00px', display: 'flex', flexDirection: 'column' }}>
          <UserBadge />
          <div style={{ display: 'flex', justifyContent: 'center',marginLeft: '300px', margin: '20px 0' }}>
            <div style={{ display: 'flex', gap: '30px' }}>
              <HoverButton
                onClick={() => setSelectedOption("graficas")}
                isSelected={selectedOption === "graficas"}
              >
                Gráficas
              </HoverButton>
              <HoverButton
                onClick={() => setSelectedOption("alertas")}
                isSelected={selectedOption === "alertas"}
              >
                Alertas
              </HoverButton>
              <HoverButton
                onClick={() => setSelectedOption("prediccion")}
                isSelected={selectedOption === "prediccion"}
              >
                Predicción
              </HoverButton>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            {renderContent()}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '300px', padding: '30px', borderTop: '1px solid #ccc' }}>
        <CustomButton>Generar PDF</CustomButton>
      </div>
    </div>
  );
};

const CustomButton = ({ children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="Button"
      style={{
        width: 550,
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

export default Reporte1;

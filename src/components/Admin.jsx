import React from 'react';
// Estilo CSS para el sidebar
import { FaHome, FaFileAlt, FaMap, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Importamos los iconos de Font Awesome
import img from "../assets/images/robot2.png"; // Importamos la imagen

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={img} alt="Robot" className="sidebar-logo" /> 
        <h1>Hola </h1>
      </div>
      <ul className="sidebar-menu">
        <li><FaHome /> Principal</li>
        <li><FaFileAlt /> Reporte</li>
        <li><FaMap /> Mapa General</li>
        <li><FaEnvelope /> Mensajes</li>
      </ul>
      <div className="sidebar-footer">
        <button className="sidebar-menu"><FaSignOutAlt /> Salir</button>
      </div>
    </div>
  );
};

export default Sidebar;

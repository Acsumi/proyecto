import React from 'react';
import './Barra.css'; // Estilo CSS para el sidebar
import { BiMessageSquareDetail } from 'react-icons/bi';

import { FaHome, FaFileAlt, FaMap, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Importamos los iconos de Font Awesome
import img from "../../assets/images/logo.png"; // Importamos la imagen

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={img} alt="Robot" className="sidebar-logo" /> 
        <h1>PBOO </h1>
      </div>
      <ul className="sidebar-menu">
        <li><a href="/Principal"><FaHome /> Principal</a></li>
        <li><a href="/Reporte1"><FaFileAlt /> Reporte</a></li>
        <li><a href="/Mapa"><FaMap /> Mapa General</a></li>

        <li>
      <a href="/Respaldo">
        <BiMessageSquareDetail /> Respaldo
      </a>
    </li>
        <div className="sidebar-footer">
        <button className="sidebar-menu"><FaSignOutAlt /> Salir</button>
      </div>
      </ul>
     
    </div>
  );
};

export default Sidebar;

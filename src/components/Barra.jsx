import React from 'react';
import './Barra.css'; // Estilo CSS para el sidebar
import { BiMessageSquareDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

import { FaHome, FaFileAlt, FaMap, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Importamos los iconos de Font Awesome
import img from "../assets/images/logo.png"; // Importamos la imagen

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
        <li><a href="/Mensajes"><FaEnvelope /> Mensajes</a></li>

        <li>
      <a href="/Respaldo">
        <BiMessageSquareDetail /> Respaldo
      </a>
    </li>
    <div className="sidebar-footer">
      {/* Envuelve el botón en un componente Link */}
      <Link to="/inicio" style={{ textDecoration: "none" }}>
        <button className="sidebar-menu">
          <FaSignOutAlt /> Salir
        </button>
      </Link>
    </div>
      </ul>
     
    </div>
  );
};

export default Sidebar;

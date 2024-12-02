import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Brigada.css"; // Importa el archivo de estilos
import logo from "../assets/images/logo.png";
import brigada from "../assets/images/brigada.jpg";
import Menu from './MenuBarra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import Pie from './Pie.jsx'; 


const Brigada = () => {
  return (
    <div className="brigada-container">
      <Menu />
      <img className="brigada-image" src={brigada} alt="brigada" />
      <div className="brigada-text">
        <div className="title">
          Brigadistas capacitados: Fortaleciendo la seguridad <br />
          en la UTZMG con PBOO
        </div>
        <div className="description">
          Nuestro servicio de capacitación se enfoca en preparar a brigadistas dentro de la UTZMG para actuar eficazmente en situaciones de emergencia. Mediante un programa integral, nuestros expertos capacitadores proporcionan formación en primeros auxilios, evacuación de emergencia, manejo de incendios y otros procedimientos de seguridad. Estos brigadistas, equipados con conocimientos y habilidades actualizados, juegan un papel vital en la promoción de un entorno seguro y en la respuesta efectiva ante cualquier eventualidad en el campus universitario. Nuestro objetivo es empoderar a la comunidad estudiantil y al personal de la UTZMG para que estén preparados y puedan actuar de manera rápida y coordinada en situaciones críticas, contribuyendo así a la seguridad y el bienestar de todos los miembros de la comunidad universitaria.
        </div>
        <div className="curiosities">
          Aquí tienes algunos datos curiosos sobre los brigadistas y PBOO:
          <br />
          <ul>
            <li>Los brigadistas son parte fundamental de la comunidad universitaria, capacitados para actuar en situaciones de emergencia y promover la seguridad en el campus.</li>
            <li>PBOO ofrece capacitación especializada para brigadistas dentro de la UTZMG, brindándoles habilidades en primeros auxilios, evacuación de emergencia, manejo de incendios y otras técnicas de seguridad.</li>
            <li>Los brigadistas son líderes en su comunidad, responsables de guiar a otros estudiantes y personal en caso de una situación de crisis.</li>
            <li>La formación de brigadistas no solo beneficia a la UTZMG, sino que también proporciona a los estudiantes habilidades valiosas que pueden aplicar en su vida cotidiana y futuras carreras.</li>
            <li>PBOO se enorgullece de colaborar con la UTZMG para fortalecer la seguridad en el campus y empoderar a los brigadistas para que sean defensores activos de la seguridad y el bienestar de la comunidad universitaria.</li>
          </ul>
        </div>
      </div>
      <Pie />
    </div>
  );
};

export default Brigada;

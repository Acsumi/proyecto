import React from "react";
import "./Pie.css";

const Pie = () => {
  return (
    <div className="pie-container">
      <div className="line"></div>
      <div className="content-container">
        <div className="header">
          <div className="title">PBOO</div>
          <div className="sections">
            <div className="section">
              <div>¿Quiénes somos?</div>
              <div>Misión</div>
              <div>Visión</div>
              <div>Avances</div>
            </div>
            <div className="section">
              <div>Conoce el blog</div>
              <div>Nuestros días</div>
              <div>Opiniones</div>
              <div>Usabilidad</div>
            </div>
            <div className="section">
              <div>Aplicación Móvil</div>
              <div>Conocerla</div>
              <div>Instalarla</div>
              <div>Compartir</div>
            </div>
            <div className="section">
              <div>Nuestras redes</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Twitter</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-line"></div>
          <div className="footer-content">
            <div>
              © Made by{" "}
              <span className="highlight">UTZMG</span> - Powered by{" "}
              <span className="highlight">PBOO</span>
            </div>
            <div className="location">
              <div>Guadalajara</div>
              <div>Jalisco</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pie;

import React from "react";
import Menu from './MenuBarra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import ser1 from "../assets/images/ser1.png";
import ser from "../assets/images/ser.png";
import "./Servicios.css"; // Asegúrate de que el archivo CSS esté correctamente importado

const Servicios = () => {
  return (
    <div>
      <Menu />
      <div className="container">
        {/* Título principal */}
        <div className="header-text">
  Protección instantánea, asistencia confiable: <br />
  esa es la promesa de PBOO
</div>

<div className="subtext">
  Nuestro objetivo es brindarte la seguridad y la tranquilidad que
  necesitas para enfrentar cualquier emergencia. Con nuestra amplia
  gama de servicios y un equipo dedicado, estamos aquí para cuidarte, siempre.
  <span>Tu seguridad es nuestra prioridad. Siempre.</span>
</div>


        {/* Sección de servicios con imágenes */}
        <div className="services-section">
          <div className="text-content">
            <div className="description-header">Historia de PBOO:</div>
            <div className="description-text">
              PBOO fue fundada en 2023 con la visión de proporcionar una
              solución integral para la seguridad personal en situaciones de
              emergencia. Nuestra historia se remonta a 2023, cuando un equipo
              de expertos en seguridad y tecnología se unió para abordar la
              creciente necesidad de herramientas efectivas y accesibles para
              proteger a las personas en momentos críticos. Desde entonces,
              hemos estado comprometidos con la innovación y el desarrollo
              continuo para ofrecer servicios de seguridad de vanguardia a
              nuestros usuarios en todo el mundo.
            </div>
          </div>
          <img src={ser1} alt="ser1" />
        </div>

        <div className="services-section">
          <div className="text-content">
            <div className="description-header">Servicios de PBOO:</div>
            <div className="description-text">
              Botón de pánico físico.
              <br />
              Nuestro dispositivo portátil cuenta con un botón de activación
              rápida que permite a los usuarios solicitar ayuda instantánea en
              caso de emergencia. Diseñado para ser fácil de usar y accesible
              en todo momento, nuestro botón de pánico físico es una herramienta
              confiable para la seguridad personal. En PBOO, nos comprometemos
              a monitorear continuamente las alertas y notificaciones de nuestros
              usuarios. Nuestro equipo de seguridad está listo para actuar
              rápidamente en caso de cualquier emergencia, brindando asistencia
              activa y coordinación con servicios de emergencia locales cuando
              sea necesario.
            </div>
          </div>
          <img src={ser} alt="ser" />
        </div>
      </div>
    </div>
  );
};

export default Servicios;

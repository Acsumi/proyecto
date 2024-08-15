import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import ser1 from "../assets/images/ser1.png";
import ser from "../assets/images/ser.png";
import { FaGoogle, FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import styled from 'styled-components';

const ResponsiveDiv = styled.div`
  @media (max-width: 768px) {
    /* Estilos para pantallas de hasta 768px de ancho */
  }

  @media (max-width: 480px) {
    /* Estilos para pantallas de hasta 480px de ancho */
  }
`;

const Servicios = () => {
  const CustomLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <a
        href={href}
        style={{
          textDecoration: "none",
          color: isHovered ? "#4AB3CA" : "rgba(0, 0, 0, 0.87)", // Cambia el color del texto basado en el estado hovered
          fontSize: 18,
          fontFamily: "Arial",
          fontWeight: "700",
          wordWrap: "break-word",
          transition: "background 0.3s, color 0.3s",
          marginLeft: "30px", // Añade margen izquierdo para separar los enlaces
        }}
        onMouseEnter={() => setIsHovered(true)} // Establece hovered en true cuando el cursor entra
        onMouseLeave={() => setIsHovered(false)} // Establece hovered en false cuando el cursor sale
      >
        {children}
      </a>
    );
  };
  const CustomButton = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="Button"
        style={{
          width: 150,
          height: 50,
          background: isHovered ? "#4AB3CA" : "#FFFFFF", // Cambiado el color del fondo basado en el estado hovered
          color: isHovered ? "#FFFFFF" : "#000000",
          border: "none",
          borderRadius: 10,
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: "700",
          textTransform: "uppercase",
          wordWrap: "break-word",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginRight: 10,
          transition: "background 0.3s, color 0.3s",
          textDecoration: "none", // Evitar la línea debajo del texto como un enlace
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="/crear-cuenta"
          style={{
            textDecoration: "none",
            color: isHovered ? "#FFFFFF" : "#000000",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </a>
      </div>
    );
  };
  return (
    <div>
      
      <img
        style={{
          position: "absolute",
          paddingTop: 30,
          top: "calc(2% + 3px)",
          right: 1330,
          width: "3%",
          height: "auto",
        }}
        src={logo}
        alt="logo"
      />

      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 1408.12,
            paddingBottom: 4.48,
            left: 295.88,
            top: 34.72,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            gap: 165.38,
            display: "inline-flex",
          }}
        >
         <div style={{ display: 'flex', alignItems: 'center', width: 954.62, opacity: 0.75 }}>
         <h3 style={{ marginRight: '30px', color: '#FFFFFF' }}>Títulosin </h3>
            <CustomLink href="/Inicio">Inicio</CustomLink>
            <CustomLink href="/servicios">Servicios</CustomLink>
            <CustomLink href="/brigada">Brigada</CustomLink>
            <CustomLink href="/Nosotros">Contactos</CustomLink>
        </div>


          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/Formulario" style={{ textDecoration: "none" }}>
              <CustomButton>Crear cuenta</CustomButton>
            </Link>
            <Link to="/Sesion" style={{ textDecoration: "none" }}>
              <CustomButton>Iniciar sesión</CustomButton>
            </Link>
          </div>

          <div
            style={{
              width: 388.12,
              height: 44.8,
              position: "relative",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 180,
                height: 44.8,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 150,
                  height: 13.8,
                  position: "relative",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: 388.88,
            height: 60.48,
            left: 36,
            top: 25.76,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 10.72,
              paddingLeft: 69.75,
              paddingRight: 41.12,
              justifyContent: "flex-end",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#302F2F",
                fontSize: 36,
                fontFamily: "Arial",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              <a href="inicio" style={{ textDecoration: "none", color: "#302F2F" }}>
                PBOO
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 96,
          paddingBottom: 160,
          justifyContent: "center",
          alignItems: "flex-start",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 1000,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 64,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 32,
              display: "flex",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 16,
                display: "flex",
              }}
            >
              
              
              <div
                style={{
                  width: 1000,
                  textAlign: "center",
                  color: "#1A191E",
                  fontSize: 64,
                  paddingTop:90,
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  lineHeight: 1.3,
                  wordWrap: "break-word",
                }}
              >
                Protección instantánea, asistencia confiable: <br />
                esa es la promesa de PBOO
              </div>
            </div>
            <div
              style={{
                width: 600,
                textAlign: "justify",
                color: "#1A191E",
                fontSize: 20,
                fontFamily: "Arial",
                fontWeight: "500",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              Nuestro objetivo es brindarte la seguridad y la tranquilidad que
              necesitas para enfrentar cualquier emergencia. Con nuestra amplia
              gama de servicios y un equipo dedicado, estamos aquí para
              cuidarte, siempre.
            </div>
          </div>
          <div
            style={{
              background: "#F8F8F8",
              borderRadius: 16,
              overflow: "hidden",
              justifyContent: "flex-start",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "calc(75% + 30px)",
                right: 90,
                width: "20%",
                height: "auto",
              }}
              src={ser1}
              alt="ser1"
            />
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 32,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 540,
                color: "#1A191E",
                fontSize: 28,
                fontFamily: "Arial",
                fontWeight: "bold",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              Historia de PBOO:
            </div>
            <div
              style={{
                width: 600,
                color: "#1A191E",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "500",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              PBOO fue fundada en 2023 con la visión de proporcionar una
              solución integral para la seguridad personal en situaciones de
              emergencia. Nuestra historia se remonta a 2023, cuando un equipo
              de expertos en seguridad y tecnología se unió para abordar la
              creciente necesidad de herramientas efectivas y accesibles para
              proteger a las personas en momentos críticos. Desde entonces,
              hemos estado comprometidos con la innovación y el desarrollo
              continuo para ofrecer servicios de seguridad de vanguardia a
              nuestros usuarios en todo el mundo. <br />
            </div>
            <div
              style={{
                width: 540,
                color: "#1A191E",
                fontSize: 28,
                fontFamily: "Arial",
                fontWeight: "bold",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              Servicios de PBOO:
            </div>
            <div
              style={{
                width: 540,
                color: "#1A191E",
                fontSize: 23,
                fontFamily: "Arial",
                fontWeight: "bold",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              Botón de pánico físico.
            </div>
            <div
              style={{
                width: 600,
                color: "#1A191E",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "500",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              Nuestro dispositivo portátil cuenta con un botón de activación
              rápida que permite a los usuarios solicitar ayuda instantánea en
              caso de emergencia. Diseñado para ser fácil de usar y accesible en
              todo momento, nuestro botón de pánico físico es una herramienta
              confiable para la seguridad personal.
              <br />
              En PBOO, nos comprometemos a monitorear continuamente las alertas
              y notificaciones de nuestros usuarios. Nuestro equipo de seguridad
              está listo para actuar rápidamente en caso de cualquier
              emergencia, brindando asistencia activa y coordinación con
              servicios de emergencia locales cuando sea necesario.
              <br />
              Reconocemos que cada usuario es único, por lo que ofrecemos
              soluciones adaptadas a las necesidades individuales de cada
              persona. Desde la configuración inicial hasta el seguimiento
              continuo, nos esforzamos por proporcionar una experiencia
              personalizada que garantice la máxima seguridad y tranquilidad.
            </div>
          </div>
          <img
              style={{
                position: "absolute",
                top: "calc(190% + 30px)",
                left: 50,
                width: "20%",
                height: "auto",
              }}
              src={ser}
              alt="ser"
            />

          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 16,
              display: "flex",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#1A191E",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "500",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              Compartir en:
            </div>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#F8F8F8",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "flex",
                }}
              >
                <div style={{ width: 16, height: 16, position: "relative" }}>
                  <div>
                    <FaGoogle />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#F8F8F8",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "flex",
                }}
              >
                <div style={{ width: 16, height: 16, position: "relative" }}>
                  <div>
                    <FaFacebook />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#F8F8F8",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "flex",
                }}
              >
                <div style={{ width: 16, height: 16, position: "relative" }}>
                  <div>
                    <FaApple />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#F8F8F8",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "flex",
                }}
              >
                <div style={{ width: 16, height: 16, position: "relative" }}>
                  <div>
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingBottom: 1,
          background:
            "linear-gradient(90deg, #EFF2F1 0%, rgba(73.87, 179.11, 202.22, 0.41) 51%, #E2E4E5 100%)",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          display: "inline-flex",
        }}
      >
        <div style={{ width: 16, height: 1, background: "#E8E8E8" }} />
        <div
          style={{
            width: 1400,
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 80,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 300,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#302F2F",
                fontSize: 40,
                fontFamily: "Arial",
                fontWeight: "Bold",
                lineHeight: 1,
                paddingLeft: 60,
                paddingTop: 50,

                wordWrap: "break-word",
              }}
            >
              PBOO
            </div>
            <div
              style={{
                flex: "1 1 0",
                height: 25,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 48,
                display: "flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  ¿Quienes somos?
                  <br />
                  Misión
                  <br />
                  Visión
                  <br />
                  Avances
                </div>
              </div>

              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  Conoce el blog
                  <br />
                  Nuestros días
                  <br />
                  Opiniones
                  <br />
                  Usabilidad
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  Aplicación Móvil
                  <br />
                  Conocerla
                  <br />
                  Instalarla
                  <br />
                  Compartir
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 18,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 1.5,
                    paddingTop: 50,
                    wordWrap: "break-word",
                  }}
                >
                  Nuestras redes
                  <br />
                  Facebook
                  <br />
                  Instagram
                  <br />
                  Twitter
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 39,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 100,
                background: "#E8E8E8",
              }}
            />
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "space-between",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div>
                <span
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  © Made by{" "}
                </span>
                <span
                  style={{
                    color: "#4AB3CA",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  UTZMG
                </span>
                <span
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  - Powered by{" "}
                </span>
                <span
                  style={{
                    color: "#4AB3CA",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  PBOO
                </span>
              </div>
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  Guadalajara
                </div>
                <div
                  style={{
                    color: "rgba(26, 25, 30, 0.50)",
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  Jalisco
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;

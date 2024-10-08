import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaGoogle, FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group"; // Importa CSSTransition
import "./trans.css"; // Importa tus estilos CSS

// Definición de un componente de React
const Sesion = () => {
  const BotonInicio = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <a
        href="/crear-cuenta"
        className="Button"
        style={{
          width: 420,
          height: 40,
          background: isHovered ? "#4AB3CA" : "#fff", // Cambiado el color del fondo basado en el estado hovered
          color: isHovered ? "#FFFFFF" : "#000000",
          border: "0.5px solid #425466", /* Define el grosor y el color del borde */
          borderRadius: 10,
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: "600",
          wordWrap: "break-word",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
          transition: "background 0.5s, color 0.5s",
          textDecoration: "none", // Evitar la línea debajo del texto como un enlace
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    );
  };
  

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isChecked, setIsChecked] = useState(false);
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
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 650,
            paddingTop: 110,
            paddingBottom: 50,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            display: "flex",
          }}
        >
          <div
            style={{
              height: 524,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
              display: "flex",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 1,
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#27272E",
                  fontSize: 28,
                  fontFamily: "Arial",
                  fontWeight: "600",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                Bienvenido de nuevo
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#27272E",
                  fontSize: 16,
                  fontFamily: "Arial",
                  fontWeight: "400",
                  lineHeight: 2,
                  wordWrap: "break-word",
                }}
              >
                Iniciar sesión
              </div>
            </div>
            <div
              style={{
                height: 216,
                paddingTop: 24,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 30,
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: 71,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 71,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 424,
                      height: 17,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 424,
                        color: "#425466",
                        fontSize: 14,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      E-mail o Número teléfonico
                    </div>
                  </div>
                  <input
                    style={{
                      height: 10,
                      paddingTop: 14,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 240,
                      background: "#EDF2F7",
                      borderRadius: 6,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      display: "inline-flex",
                      border: 'none',
                      outline: 'none'
                    }}
                  >
                    
                  </input>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: 91,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 91,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 424,
                      height: 17,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 424,
                        color: "#425466",
                        fontSize: 14,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Contraseña
                    </div>
                  </div>
                  <input
                  type="password"
                    style={{
                      height: 10,
                      width: 390,
                      paddingRight: 15,
                      paddingTop: 14,
                      paddingBottom: 16,
                      paddingLeft: 16,
                      background: "#EDF2F7",
                      borderRadius: 6,
                      alignItems: "center",
                      outline: 'none',
                      border: 'none'
                    }}
                  >
                    
                  </input>
                  <br />

                  <div style={{ }}>
            <Link to="/Principal" style={{ textDecoration: "none" }}>
              <BotonInicio>Entrar</BotonInicio>
           </Link>
          </div>
                  
                </div>
            </div>
        
            </div>
            <br />  <br />
            <div style={{ height: 94, position: "relative" }}>
              <div
                style={{
                  width: 424,
                  height: 25,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 24,
                  display: "inline-flex",
                }}
              >
                
                <div
                  style={{
                    flex: "1 1 0",
                    height: 0,
                    border: "1px #EDF2F7 solid",
                  }}
                ></div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#718096",
                    fontSize: 12,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 18,
                    wordWrap: "break-word",
                  }}
                >
                  Iniciar con{" "}
                </div>
                <div
                  style={{
                    flex: "1 1 0",
                    height: 0,
                    border: "1px #EDF2F7 solid",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: 424,
                  height: 52,
                  left: 0,
                  top: 42,
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 400,
                  display: "inline-flex",
                }}
              >
        <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 6,
                display: "inline-flex",
              }}
            >

              
                  <div style={{ width: 72, height: 52, position: "relative" }}>
                  <div>
                    <FaFacebook />
                  </div>
                   </div>
                  <div style={{ width: 72, height: 52, position: "relative" }}>
                  <div>
                    <FaGoogle />
                  </div>
                   </div>
                  <div style={{ width: 10, height: 52, position: "relative" }}>
                  <div>
                    <FaApple />
                  </div>
                  
      
                   </div>
                   
                   
                   
                </div>
                
              </div>
          


            
            </div>
         

          </div>
          <div
            style={{
              padding: 0.3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 1,
              display: "inline-flex",
            }}
          >
            <div style={{ textAlign: "right" }}>
              <span
                style={{
                  color: "#718096",
                  fontSize: 14,
                  fontFamily: "Arial",
                  fontWeight: "600",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                ¿No tienes cuenta?{" "}
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: "Arial",
                  fontWeight: "600",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                <a href="Formulario">Registrarse</a>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sesion;
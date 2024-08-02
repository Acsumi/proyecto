import "./Navbar.css"; // Asegúrate de tener la ruta correcta al archivo CSS
import logo from "../assets/images/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group"; // Importa CSSTransition
import "./trans.css"; // Importa tus estilos CSS



const Formulario = () => {
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
          background: isHovered ? "#002761" : "#fff", // Cambiado el color del fondo basado en el estado hovered
          color: isHovered ? "#FFFFFF" : "#000000",
          border: "0.5px solid #425466", /* Define el grosor y el color del borde */
          borderRadius: 10,
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Arial",
          fontWeight: "700",
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
    <CSSTransition in={true} appear={true} classNames="fade" timeout={300}>

    <div>
      <img
        style={{
          position: "absolute",
          paddingTop: 30,
          top: "calc(2% + 3px)",
          right: 1290,
          width: "3%",
          height: "auto",
        }}
        src={logo}
        alt="logo"
      />

      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 2558.12,
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
       

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/inicio" style={{ textDecoration: "none" }}>
              <CustomButton>Salir</CustomButton>
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
            width: 374.88,
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
              <a
                href="/Inicio"
                style={{ textDecoration: "none", color: "#302F2F" }}
              >
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
            height: 500,
            paddingTop: 5,
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
              height: 350,
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
                className="Title"
                style={{
                  color: "#27272E",
                  fontSize: 28,
                  fontFamily: "Arial",
                  fontWeight: "600",
                  lineHeight: 6,
                  wordWrap: "break-word",
                }}
              >
                Crear cuenta
              </div>
              <div
                className="Title"
                style={{
                  color: "#27272E",
                  fontSize: 16,
                  fontFamily: "Arial",
                  fontWeight: "400",
                  lineHeight: 0.5,
                  paddingTop: 1,
                  wordWrap: "break-word",
                }}
              >
                Comienza a disfrutar la experiencia
              </div>
              <div
                className="FormTitle"
                style={{
                  color: "#425466",
                  fontSize: 14,
                  fontFamily: "Arial",
                  fontWeight: "500",
                  lineHeight: 5.5,
                  wordWrap: "break-word",
                }}
              >
                Nombre de usuario
              </div>
              <div
                className="Input"
                style={{
                  width: "100%",
                  weigth: "100%",
                  background: "#EDF2F7",
                  borderRadius: 6,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                  marginBottom: 10,
                }}
              >
                <input
                  className="Control"
                  style={{
                    flex: 1,
                    height: 40,
                    padding: "0 10px",
                    border: "none",
                    background: "#EDF2F7",
                    color: "#7A828A",
                    fontSize: 14,
                    fontFamily: "Arial",
                    fontWeight: "500",
                  }}
                  type="text"
                  placeholder="Ingresa un nombre"
                />
              </div>
              <div
                className="FormTitle"
                style={{
                  color: "#425466",
                  fontSize: 14,
                  fontFamily: "Arial",
                  fontWeight: "500",
                  lineHeight: 3.5,
                  wordWrap: "break-word",
                }}
              >
                E-mail o Número teléfonico
              </div>
              <div
                className="Input"
                style={{
                  width: "100%",
                  background: "#EDF2F7",
                  borderRadius: 6,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                  marginBottom: 10,
                }}
              >
                <input
                  className="Control"
                  style={{
                    flex: 1,
                    height: 40,
                    padding: "0 10px",
                    border: "none",
                    background: "#EDF2F7",
                    color: "#7A828A",
                    fontSize: 14,
                    fontFamily: "Arial",
                    fontWeight: "500",
                  }}
                  type="text"
                  placeholder="Escribe tu email o número teléfonico"
                />
              </div>
              <div
                className="FormTitle"
                style={{
                  color: "#425466",
                  fontSize: 14,
                  fontFamily: "Arial",
                  fontWeight: "500",
                  lineHeight: 3.5,
                  wordWrap: "break-word",
                }}
              >
                Contraseña
              </div>
              <div
                className="Input"
                style={{
                  width: "100%",
                  background: "#EDF2F7",
                  borderRadius: 6,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                  marginBottom: 10,
                }}
              >
                <input
                  className="Control"
                  style={{
                    flex: 1,
                    height: 40,
                    padding: "0 10px",
                    border: "none",
                    background: "#EDF2F7",
                    color: "#7A828A",
                    fontSize: 14,
                    fontFamily: "Arial",
                    fontWeight: "500",
                  }}
                  type="password"
                  placeholder="Escribe tu contraseña"
                />
              </div>
              <div
                className="FormHelpText"
                style={{
                  color: "#718096",
                  fontSize: 11,
                  fontFamily: "Arial",
                  fontWeight: "400",
                  lineHeight: 2.5,
                  wordWrap: "break-word",
                }}
              >
                Mínimo 8 caracteres
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  style={{ marginRight: ".5px" }} // Espacio entre el checkbox y el texto
                />

                <Link to="/TermCond" style={{ textDecoration: "none" }}>
                  <div
                    className="FormHelpText"
                    style={{
                      color: "#718096",
                      fontSize: 11,
                      fontFamily: "Arial",
                      fontWeight: "400",
                      lineHeight: 2.5,
                      paddingLeft: 25,
                      textDecoration: "underline", // Establece el subrayado
                      cursor: "pointer", // Cambia el cursor al estilo de enlace
                    }}
                  >
                    Acepto los terminos y condiciones.
                  </div>
                </Link>
              </div>
              <div
                className="Button"
                style={{
                  width: 300,
                  height: 40,
                  background: isHovered ? "#002761" : "white",
                  color: isHovered ? "white" : "black",
                  borderRadius: 90,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  marginTop: 20,
                  border: isHovered ? "none" : "1px solid #4E4E4E",
                  cursor: "pointer",
                  transition: "background 0.3s, color 0.3s",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="Label"
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "Arial",
                    fontWeight: "700",
                    lineHeight: 2.5,
                    wordWrap: "break-word",
                    padding: "5px 10px",
                  }}
                >
                  Crear cuenta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </CSSTransition>
  );
};

export default Formulario;

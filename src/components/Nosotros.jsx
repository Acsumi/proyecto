import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import lupa from "../assets/images/robot1.png";
import { CSSTransition } from "react-transition-group"; // Importa CSSTransition
import "./trans.css"; // Importa tus estilos CSS
import { Link } from "react-router-dom";
import Button from "./Inicio";
import nos from "../assets/images/nos.png";

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la página hacia la parte superior cuando se monta el componente
  }, []);

  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const EstiloCampo = {
    color: "#425466",
    fontSize: 14,
    fontFamily: "Arial",
    fontWeight: 500,
    lineHeight: 3.5,
    wordWrap: "break-word",
    marginBottom: 10,
  };

  const EstiloInput = {
    width: "80%",
    background: "#EDF2F7",
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    marginBottom: 10,
  };
  const Button = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="Button"
        style={{
          width: 150,
          height: 30,
          background: isHovered ? "#002761" : "#FFFFFF",
          color: isHovered ? "#FFFFFF" : "#000000",
          border: isHovered ? "none" : "1px solid #ccc", // Añadir borde cuando no está seleccionado
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
  class Rectangle extends React.Component {
    render() {
      const { width, height, color } = this.props;
      const rectangleStyle = {
        width: width,
        height: height,
        backgroundColor: color,
        border: "1px solid #000", // Puedes ajustar el estilo del borde según tus necesidades
      };

      return <div style={rectangleStyle}></div>;
    }
  }

  const handlePlaceOfBirthChange = (event) => {
    setPlaceOfBirth(event.target.value);
  };
  const [accepted, setAccepted] = useState(false);

  const toggleAcceptance = () => {
    setAccepted(!accepted);
  };
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
  const MenuButton = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="Button"
        style={{
          width: 150,
          height: 50,
          background: isHovered ? "#4AB3CA" : "#fff", // Cambiado el color del fondo basado en el estado hovered
          color: isHovered ? "#FFFFFF" : "#000000",
          border: "none", /* Define el grosor y el color del borde */
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
              <MenuButton>Crear cuenta</MenuButton>
            </Link>
            <Link to="/Sesion" style={{ textDecoration: "none" }}>
              <MenuButton>Iniciar sesión</MenuButton>
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
              <a href="/" style={{ textDecoration: "none", color: "#302F2F" }}>
                PBOO
              </a>
            </div>
          </div>
        </div>
      </div>

        <br />
        <br />
        <br />
        <br />

        <div
          style={{
            //contenedor
            width: "40%",
            margin: "0 auto", // Esto centra el contenedor horizontalmente
            border: "none", // Establece el borde del contenedor
            padding: "20px", // Añade espacio interno al contenedor
            marginLeft: "180px", // Mueve el contenedor hacia la derecha
          }}
        >
          <div style={{ width: "100%" }}>
            <br />
            <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <div
                className="SubTitle"
                style={{
                  color: "#27272E",
                  fontSize: 24,
                  fontFamily: "Arial",
                  fontWeight: 600,
                  lineHeight: 2.5,
                  wordWrap: "break-word",
                }}
              >
                Contacta con nosotros
              </div>
            </div>
            <div
              style={{
                color: "#27272E",
                fontSize: 15,
                fontFamily: "Arial",
                fontWeight: 500,
                lineHeight: 1.5,
                wordWrap: "break-word",
              }}
            >
              ¡Gracias por tu interés en compartir tu opinión o reportar algún inconveniente con nuestra app!
            </div>
            </div>

            <br />

            <div>
              <div style={EstiloCampo}>
                <label>Correo electronico</label>
                <div style={EstiloInput}>
                  <input
                    style={{
                      flex: 1,
                      height: 40,
                      padding: "0 10px",
                      border: "none",
                      background: "#EDF2F7",
                      color: "#7A828A",
                      fontSize: 14,
                      fontFamily: "Arial",
                      fontWeight: 500,
                    }}
                    type="email"
                    placeholder="Ingresa tu correo"
                  />
                </div>
              </div>

              {/* Tipo de sangre */}
              <div style={EstiloCampo}>
                <label>Asunto</label>
                <div style={EstiloInput}>
                  <input
                    style={{
                      flex: 1,
                      height: 40,
                      padding: "0 10px",
                      border: "none",
                      background: "#EDF2F7",
                      color: "#7A828A",
                      fontSize: 14,
                      fontFamily: "Arial",
                      fontWeight: 500,
                    }}
                    type="text"
                    placeholder="Asunto"
                  />
                </div>
              </div>

              {/* Trastornos Psicológicos */}
              <div style={EstiloCampo}>
                <label>Descripción</label>
                <div style={EstiloInput}>
                  <textarea
                    style={{
                      flex: 1,
                      height: 80,
                      padding: "10px",
                      border: "none",
                      background: "#EDF2F7",
                      color: "#7A828A",
                      fontSize: 14,
                      fontFamily: "Arial",
                      fontWeight: 500,
                    }}
                    placeholder="Descripción"
                  ></textarea>
                </div>
              </div>

             
             
            </div>

            <br />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div style={{ display: "flex" }}>
             
              <Link to="/Form4" style={{ textDecoration: "none" }}>
              <Button>
                Enviar<span style={{ marginLeft: 5 }}></span>
              </Button>
              </Link>
            </div>
          </div>
          <br />
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(25% + 40px)",
            right: 180,
            width: "25%",
            height: "auto",
          }}
          src={nos}
          alt="Doctora"
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(3deg, #42A2B7 0%, #DEEEFE 100%)",
          }}
        ></div>
      </div>
    </CSSTransition>
  );
};

export default Nosotros;

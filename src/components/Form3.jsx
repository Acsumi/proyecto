import React, { useState, useEffect } from "react";
import lupa from "../assets/images/robot1.png";
import { CSSTransition } from "react-transition-group"; // Importa CSSTransition
import "./trans.css"; // Importa tus estilos CSS
import { Link } from "react-router-dom";
import Button from "./Inicio";

const Form3 = () => {
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
          borderRadius: 70,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginRight: 10, // Espacio entre los botones
          transition: "background 0.3s, color 0.3s, border 0.3s", // Agregar transición
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="Label"
          style={{
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Arial",
            fontWeight: "700",
            lineHeight: 2,
            wordWrap: "break-word",
          }}
        >
          {children}
        </div>
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
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 1108.12,
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
          <div style={{ width: 554.62, opacity: 0.75 }}>
            <a
              href="/Inicio"
              style={{
                textDecoration: "none",
                color: "#4AB3CA",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Inicio
            </a>
            <a
              href="/servicios"
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                paddingLeft: 15,
                wordWrap: "break-word",
              }}
            >
              Servicios
            </a>
            <a
              href="/brigada"
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                paddingLeft: 15,
                wordWrap: "break-word",
              }}
            >
              Brigada
            </a>
            <a
              href="/Nosotros"
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
                fontSize: 18,
                fontFamily: "Arial",
                fontWeight: "700",
                paddingLeft: 15,
                wordWrap: "break-word",
              }}
            >
              Contactos
            </a>
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
              >
                <div
                  style={{
                    width: 180,
                    height: 60,
                    textAlign: "center",
                    color: "black",
                    fontSize: 16,
                    fontFamily: "Arial",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    wordWrap: "break-word",
                  }}
                >
                  <a
                    href="/crear-cuenta"
                    style={{ textDecoration: "none", color: "black" }}
                  ></a>
                </div>
                <div
                  style={{
                    width: 180,
                    height: 60,
                    textAlign: "center",
                    color: "#002761",
                    fontSize: 16,
                    fontFamily: "Arial",
                    fontWeight: "700",
                    lineHeight: 3,
                    textTransform: "uppercase",
                    wordWrap: "break-word",
                  }}
                >
                  <a
                    href="/iniciar-sesion"
                    style={{ textDecoration: "none", color: "#FF5858" }}
                  >
                    SALIR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 214.88,
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

        <br />
        <br />
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
              <div
                className="Titulo"
                style={{
                  color: "#27272E",
                  fontSize: 28,
                  fontFamily: "Arial",
                  fontWeight: 600,
                  lineHeight: 2.5,
                  wordWrap: "break-word",
                }}
              >
                Informacion de perfil
              </div>
            </div>

            <br />

            <div>
              <div style={EstiloCampo}>
                <label>Ficha clínica:</label>
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
                    placeholder="Peso (kg)"
                  />
                </div>
              </div>

              {/* Tipo de sangre */}
              <div style={EstiloCampo}>
                <label>Tipo de Sangre:</label>
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
                    placeholder="Tipo de Sangre"
                  />
                </div>
              </div>

              {/* Trastornos Psicológicos */}
              <div style={EstiloCampo}>
                <label>Trastornos Psicológicos:</label>
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
                    placeholder="Trastornos Psicológicos"
                  ></textarea>
                </div>
              </div>

              {/* Enfermedades Crónicas */}
              <div style={EstiloCampo}>
                <label>Enfermedades Crónicas:</label>
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
                    placeholder="Enfermedades Crónicas"
                  ></textarea>
                </div>
              </div>

              {/* Alergias */}
              <div style={EstiloCampo}>
                <label>Alergias:</label>
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
                    placeholder="Alergias"
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
              <Link to="/Form2">
                <Button>
                  Volver<span style={{ marginLeft: 5 }}></span>
                </Button>
              </Link>
              <Link to="/Form4">
              <Button>
                Siguiente<span style={{ marginLeft: 5 }}></span>
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
          src={lupa}
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

export default Form3;

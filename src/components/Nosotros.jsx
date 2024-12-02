import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import lupa from "../assets/images/robot1.png";
import "./trans.css"; // Importa tus estilos CSS
import { Link } from "react-router-dom";
import Button from "./Inicio";
import nos from "../assets/images/nos.png";
import Menu from './MenuBarra.jsx'; // Importa el componente Sidebar desde Barra.jsx


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
  return (
    <div>
     

     <Menu />

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
  );
};

export default Nosotros;

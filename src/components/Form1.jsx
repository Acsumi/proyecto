import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import img from "../assets/images/robot2.png";
import { CSSTransition } from "react-transition-group"; // Importa CSSTransition
import "./trans.css"; 
import { Link } from "react-router-dom";
import Button from "./Form2";

const Form1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la página hacia la parte superior cuando se monta el componente
  }, []);
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [isHovered, setIsHovered] = useState(false);

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

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
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
                className="SubTitle"
                style={{
                  color: "#27272E",
                  fontSize: 28,
                  fontFamily: "Arial",
                  fontWeight: 600,
                  lineHeight: 2.5,
                  wordWrap: "break-word",
                }}
              >
                Datos Personales
              </div>
            </div>
            <div
              className="FormTitle"
              style={{
                color: "#425466",
                fontSize: 14,
                fontFamily: "Arial",
                fontWeight: 500,
                lineHeight: 5.5,
                wordWrap: "break-word",
              }}
            >
              Nombre(s)
            </div>
            <div
              className="Input"
              style={{
                width: "80%",
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
                  fontWeight: 500,
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
                fontWeight: 500,
                lineHeight: 3.5,
                wordWrap: "break-word",
              }}
            >
              Apellidos
            </div>
            <div
              className="Input"
              style={{
                width: "80%",
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
                  fontWeight: 500,
                }}
                type="text"
                placeholder="Ingresa tus apellidos"
              />
            </div>
            <div
              className="FormTitle"
              style={{
                color: "#425466",
                fontSize: 14,
                fontFamily: "Arial",
                fontWeight: 500,
                lineHeight: 3.5,
                wordWrap: "break-word",
              }}
            >
              Fecha de Nacimiento
            </div>
            <div
              className="Input"
              style={{
                width: "80%",
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
                  fontWeight: 500,
                }}
                type="date"
                placeholder="Ingresa tu fecha de nacimiento"
              />
            </div>
            <div>
              <div
                className="FormTitle"
                style={{
                  color: "#425466",
                  fontSize: 14,
                  fontFamily: "Arial",
                  fontWeight: 500,
                  lineHeight: 5.5,
                  wordWrap: "break-word",
                }}
              >
                Lugar de Nacimiento
              </div>
              <div
                className="Input"
                style={{
                  width: "80%",
                  background: "#EDF2F7",
                  borderRadius: 6,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "flex",
                  marginBottom: 10,
                }}
              >
                <select
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
        fontWeight: 500,
    }}
    value={placeOfBirth}
    onChange={handlePlaceOfBirthChange}
>
    <option value="" disabled selected>Selecciona un lugar</option>
    <optgroup label="Estados de México">
        <option value="Aguascalientes">Aguascalientes</option>
        <option value="Baja California">Baja California</option>
        <option value="Baja California Sur">Baja California Sur</option>
        <option value="Campeche">Campeche</option>
        <option value="Chiapas">Chiapas</option>
        <option value="Chihuahua">Chihuahua</option>
        <option value="Coahuila">Coahuila</option>
        <option value="Colima">Colima</option>
        <option value="Durango">Durango</option>
        <option value="Guanajuato">Guanajuato</option>
        <option value="Guerrero">Guerrero</option>
        <option value="Hidalgo">Hidalgo</option>
        <option value="Jalisco">Jalisco</option>
        <option value="México">México</option>
        <option value="Michoacán">Michoacán</option>
        <option value="Morelos">Morelos</option>
        <option value="Nayarit">Nayarit</option>
        <option value="Nuevo León">Nuevo León</option>
        <option value="Oaxaca">Oaxaca</option>
        <option value="Puebla">Puebla</option>       
        <option value="Ciudad de México">Ciudad de México</option>
        <option value="Estados de México">Estado de México</option>
        <option value="Querétaro">Querétaro</option>
        <option value="Quintana Roo">Quintana Roo</option>
        <option value="San Luis Potosí">San Luis Potosí</option>
        <option value="Sinaloa">Sinaloa</option>
        <option value="Sonora">Sonora</option>
        <option value="Tabasco">Tabasco</option>
        <option value="Tamaulipas">Tamaulipas</option>
        <option value="Tlaxcala">Tlaxcala</option>
        <option value="Veracruz">Veracruz</option>
        <option value="Yucatán">Yucatán</option>
        <option value="Zacatecas">Zacatecas</option>
    </optgroup>
    <option value="Nacido en el extranjero">Nacido en el extranjero</option>
</select>

              </div>
            </div>
            <div>
              <br />
              <p>
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={toggleAcceptance}
                />
                Estoy de acuerdo con los{" "}
                <label
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Términos y Condiciones
                </label>
              </p>
              {accepted && (
                <div style={{ marginTop: "10px" }}>
                  ¡Gracias por aceptar los términos y condiciones!
                </div>
              )}
              <br />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div style={{ display: "flex" }}>
              <Link to="/Inicio">
                <Button>
                  Salir<span style={{ marginLeft: 5 }}></span>
                </Button>
              </Link>
              <Link to="/Form2">
                <Button>
                  Siguiente<span style={{ marginLeft: 5 }}></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "calc(25% + 40px)",
            right: 180,
            width: "25%",
            height: "auto",
          }}
          src={img}
          alt="Doctora"
        />
      </div>
    </CSSTransition>
  );
};

export default Form1;

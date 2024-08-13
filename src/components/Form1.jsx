import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import img from "../assets/images/robot2.png";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { RegisterRequest } from "../api/auth";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const Form1 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [placeOfBirth, setPlaceOfBirth] = useState("");
    const [accepted, setAccepted] = useState(false);

    const handlePlaceOfBirthChange = (event) => {
      setPlaceOfBirth(event.target.value);
    };

    const toggleAcceptance = () => {
      setAccepted(!accepted);
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
              margin: "0 auto",
              border: "none",
              padding: "20px",
              marginLeft: "180px",
            }}
          >
            <form
              onSubmit={handleSubmit((values) => {
                console.log(values);
                RegisterRequest(values);
              })}
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
                    {...register("nombre")}
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
                  Apellido Paterno
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
                    placeholder="Ingresa tu apellido paterno"
                    {...register("apellidoPaterno")}
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
                  Apellido Materno
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
                    placeholder="Ingresa tu apellido materno"
                    {...register("apellidoMaterno")}
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
                    {...register("fechaNacimiento")}
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
                  Lugar de nacimiento
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
                    value={placeOfBirth}
                    onChange={handlePlaceOfBirthChange}
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
                  >
                    <option value="">Selecciona tu estado</option>
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">
                      Baja California Sur
                    </option>
                    <option value="Campeche">Campeche</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Ciudad de México">Ciudad de México</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Durango">Durango</option>
                    <option value="Estado de México">Estado de México</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="Michoacán">Michoacán</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
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
                  </select>
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
                  Términos y condiciones
                </div>
                <div
                  className="Input"
                  style={{
                    width: "80%",
                    borderRadius: 6,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "flex",
                    marginBottom: 10,
                    
                  }}
                >
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={toggleAcceptance}
                    style={{ marginRight: 10 }}
                  />
                  <span style={{ color: "#7A828A", fontSize: 14 }}>
                    Acepto los términos y condiciones
                  </span>
                </div>
                <Link to="/Form2">
                <button
                  type="submit"
                  style={{
                    width: "80%",
                    background: "#2D3748",
                    color: "#FFFFFF",
                    borderRadius: 6,
                    height: 40,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Siguiente
                </button>
                </Link>
              </div>
            </form>
          </div>

          <div
            style={{
              position: "absolute",
              top: "calc(10% + 3px)",
              right: 0,
              width: "25%",
              height: "auto",
            }}
          >
            <img src={img} alt="Robot" style={{ width: "100%" }} />
          </div>
        </div>
      </CSSTransition>
    );
  };

  return (
    <div>
      <Form1 />
    </div>
  );
}

function CustomButton({ children }) {
  return (
    <button
      style={{
        backgroundColor: "#4A5568",
        color: "#FFF",
        border: "none",
        padding: "10px 20px",
        borderRadius: 6,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default RegisterPage;

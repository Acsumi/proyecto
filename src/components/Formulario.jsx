import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

const Formulario = ({ setFormData }) => {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setFormData({ username, emailOrPhone, password });
    navigate("/form1");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CSSTransition in appear timeout={300} classNames="fade">
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
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              backgroundImage: `url("/path/to/your/image.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      style={{ marginRight: ".5px" }}
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
                          textDecoration: "underline",
                          cursor: "pointer",
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
                    onClick={handleCreateAccount}
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
      </div>
    </CSSTransition>
  );
};

export default Formulario;

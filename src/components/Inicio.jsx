import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo de estilos
import logo from "../assets/images/logo.png";
import celu from "../assets/images/celu.png";
import Doctores from "../assets/images/doctores.png";

const Inicio = () => {
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
            <CustomLink href="/">Inicio</CustomLink>
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
              <a href="/" style={{ textDecoration: "none", color: "#302F2F" }}>
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
          paddingTop: 128,
          paddingBottom: 128,
          paddingLeft: 60,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 1191,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 164,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 64,
              display: "inline-flex",
            }}
          >
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
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#1A191E",
                    fontSize: 60,
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    lineHeight: 1.5,
                    wordWrap: "break-word",
                  }}
                >
                  Bienvenido a <br />
                  PBOO
                </div>
                <div
                  style={{
                    width: 600,
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: 20,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  En P-BOO, entendemos la importancia de estar preparados para
                  lo inesperado. Nuestro compromiso es proporcionarte una
                  solución integral que te permita actuar rápidamente en
                  situaciones de peligro.
                </div>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  {/* Contenedor para la palomita */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      background: "#E4F7FF",
                      borderRadius: "50%", // Hacemos el contenedor redondo
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      // Añadimos un borde
                    }}
                  >
                    {/* Parte inferior de la palomita */}
                    <div
                      style={{
                        width: 12,
                        height: 6,
                        borderBottom: "2px solid #002761", // Línea en la parte inferior
                        borderLeft: "2px solid #002761", // Línea en el lado izquierdo
                        transform: "rotate(-45deg)", // Giramos la palomita
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      color: "#1A191E",
                      fontSize: 18,
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Ubicación Real
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 16,
                      display: "inline-flex",
                    }}
                  >
                    {/* Contenedor para la palomita */}
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        background: "#E4F7FF",
                        borderRadius: "50%", // Hacemos el contenedor redondo
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        // Añadimos un borde
                      }}
                    >
                      {/* Parte inferior de la palomita */}
                      <div
                        style={{
                          width: 12,
                          height: 6,
                          borderBottom: "2px solid #002761", // Línea en la parte inferior
                          borderLeft: "2px solid #002761", // Línea en el lado izquierdo
                          transform: "rotate(-45deg)", // Giramos la palomita
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        color: "#1A191E",
                        fontSize: 18,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 2,
                        wordWrap: "break-word",
                      }}
                    >
                      Números de Emergencia
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 16,
                      display: "inline-flex",
                    }}
                  >
                    {/* Contenedor para la palomita */}
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        background: "#E4F7FF",
                        borderRadius: "50%", // Hacemos el contenedor redondo
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        // Añadimos un borde
                      }}
                    >
                      {/* Parte inferior de la palomita */}
                      <div
                        style={{
                          width: 12,
                          height: 6,
                          borderBottom: "2px solid #002761", // Línea en la parte inferior
                          borderLeft: "2px solid #002761", // Línea en el lado izquierdo
                          transform: "rotate(-45deg)", // Giramos la palomita
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        color: "#1A191E",
                        fontSize: 18,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 2,
                        wordWrap: "break-word",
                      }}
                    >
                      Aviso a contactos de emergencia
                    </div>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 16,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 16,
                        display: "inline-flex",
                      }}
                    >
                      {/* Contenedor para la palomita */}
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          background: "#E4F7FF",
                          borderRadius: "50%", // Hacemos el contenedor redondo
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          // Añadimos un borde
                        }}
                      >
                        {/* Parte inferior de la palomita */}
                        <div
                          style={{
                            width: 12,
                            height: 6,
                            borderBottom: "2px solid #002761", // Línea en la parte inferior
                            borderLeft: "2px solid #002761", // Línea en el lado izquierdo
                            transform: "rotate(-45deg)", // Giramos la palomita
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          color: "#1A191E",
                          fontSize: 18,
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          lineHeight: 2,
                          wordWrap: "break-word",
                        }}
                      >
                        Atención por personal especializado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center", // Alinear elementos verticalmente
                  gap: 32,
                  // Espacio entre los elementos
                }}
              >
                <div>
                  <a
                    href="/Sesion"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <button
                      style={{
                        padding: "10px 60px", // Padding uniforme
                        background: "#4AB3CA",
                        borderRadius: 40,
                        border: "none",
                        cursor: "pointer",
                        color: "white",
                        fontSize: 18,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        lineHeight: 2,
                        wordWrap: "break-word",
                      }}
                    >
                      Crear cuenta
                    </button>
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* Contenedor para la palomita */}
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "6px solid transparent",
                      borderBottom: "6px solid transparent",
                      borderLeft: "10px solid #002761",
                      marginRight: "10px",
                    }}
                  />
                  {/* Enlace "Conocer más" */}
                  <div>
                    <a
                      href="/"
                      style={{
                        color: "#002761",
                        fontSize: 18,
                        fontFamily: "Arial",
                        fontWeight: 500,
                        lineHeight: 2,
                        wordWrap: "break-word",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Conocer más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        style={{
          position: "absolute",
          top: "calc(29% + 100px)",
          right: 70,
          width: "25%",
          height: "auto",
        }}
        src={Doctores}
        alt="Doctores"
      />
      {/* Segunda parte*/}
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 60,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 1191,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 164,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 64,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#1A191E",
                fontSize: 60,
                fontFamily: "Arial",
                fontWeight: "bold",
                lineHeight: 1.5,
                wordWrap: "break-word",
              }}
            >
              Tu seguridad
              <br />
              nuestra prioridad.
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
                  width: 600,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 284,
                    padding: 32,
                    borderRadius: 16,
                    border: "2px #E8E8E8 solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "#E9FBFF",
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 28, height: 28, position: "relative" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 200,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 20,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      P-BOO: Tranquilidad al alcance de tu mano.
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 16,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Activa ayuda instantánea con solo pulsar un botón.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 284,
                    padding: 32,
                    borderRadius: 16,
                    border: "2px #E8E8E8 solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "#E9FBFF",
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 28, height: 28, position: "relative" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 200,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 20,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Con P-BOO, mantente protegido en todo momento.
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 16,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Notificación de emergencias y comunicación bidireccional
                      con las autoridades al instante.
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 600,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 284,
                    padding: 32,
                    borderRadius: 16,
                    border: "2px #E8E8E8 solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "#E9FBFF",
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 28, height: 28, position: "relative" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 200,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 20,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Beneficio clave de P-BOO: Tu seguridad es nuestra
                      prioridad.
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 16,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Protección personal las 24 horas, los 7 días de la semana.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 284,
                    padding: 32,
                    borderRadius: 16,
                    border: "2px #E8E8E8 solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "#E9FBFF",
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 28, height: 28, position: "relative" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 200,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 20,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      P-BOO te ofrece la confianza.
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 16,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Localización precisa, comunicación segura y asistencia
                      rápida en caso de emergencia.
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 600,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 284,
                    padding: 32,
                    borderRadius: 16,
                    border: "2px #E8E8E8 solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "#E9FBFF",
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 28, height: 28, position: "relative" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 200,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 20,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Descubre la libertad de sentirte seguro con P-BOO.
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 16,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Protección personal en tu bolsillo, disponible con un
                      simple toque.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 284,
                    padding: 32,
                    borderRadius: 16,
                    border: "2px #E8E8E8 solid",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "#E9FBFF",
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{ width: 28, height: 28, position: "relative" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 200,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 20,
                        fontFamily: "Arial",
                        fontWeight: "bold",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Benefíciate de la versatilidad de P-BOO.
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#1A191E",
                        fontSize: 16,
                        fontFamily: "Arial",
                        fontWeight: "500",
                        lineHeight: 1.8,
                        wordWrap: "break-word",
                      }}
                    >
                      Desde estudiantes hasta profesionales, todos pueden
                      disfrutar de una protección personal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          top: "calc(69% + 900px)",
          right: 140,
          width: "20%",
          height: "auto",
        }}
        src={celu}
        alt="celu"
      />

      <div
        style={{
          width: "100%",
          height: "50%",
          paddingTop: 50,
          paddingBottom: 50,
          background: "#E9FBFF",
          marginTop: 100,
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
            paddingLeft: 50,
            paddingTop: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 32,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              height: 228,
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
                height: 140,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "#1A191E",
                  fontSize: 60,
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  lineHeight: 1.5,
                  wordWrap: "break-word",
                }}
              ></div>
            </div>
            <div
              style={{
                height: 578,
                paddingLeft: 700,
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
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 35,
                  background: "white",
                  borderRadius: 10,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background: "#FFC9C9",
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    display: "flex",
                  }}
                >
                  <div
                    style={{ width: 28, height: 28, position: "relative" }}
                  />
                </div>
                <div
                  style={{
                    flex: "1 10 10",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "#1A191E",
                      fontSize: 18,
                      fontFamily: "Arial",
                      fontWeight: "Bold",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Notificaciones seguras.
                  </div>
                  <div
                    style={{
                      color: "rgba(26, 25, 30, 0.50)",
                      fontSize: 16,
                      fontFamily: "Arial",
                      fontWeight: "500",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Alerta a tus contactos.
                  </div>
                </div>
                <div
                  style={{
                    color: "#1A191E",
                    fontSize: 18,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                ></div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 24,
                  background: "white",
                  borderRadius: 10,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background: "#FFC9C9",
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    display: "flex",
                  }}
                >
                  <div
                    style={{ width: 28, height: 28, position: "relative" }}
                  />
                </div>
                <div
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "#1A191E",
                      fontSize: 18,
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Brenda alertó.
                  </div>
                  <div
                    style={{
                      color: "rgba(26, 25, 30, 0.50)",
                      fontSize: 16,
                      fontFamily: "Arial",
                      fontWeight: "500",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Tlajomulco de Zuñiga.
                  </div>
                </div>
                <div
                  style={{
                    color: "#1A191E",
                    fontSize: 18,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  15:23 p.m
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 24,
                  background: "white",
                  borderRadius: 10,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background: "#FFC9C9",
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    display: "flex",
                  }}
                >
                  <div
                    style={{ width: 28, height: 28, position: "relative" }}
                  />
                </div>
                <div
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "#1A191E",
                      fontSize: 18,
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Brenda alertó (2)
                  </div>
                  <div
                    style={{
                      color: "rgba(26, 25, 30, 0.50)",
                      fontSize: 16,
                      fontFamily: "Arial",
                      fontWeight: "500",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Llamar a linea de emergencias.
                  </div>
                </div>
                <div
                  style={{
                    color: "#1A191E",
                    fontSize: 18,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  15:33 p.m
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 24,
                  background: "white",
                  borderRadius: 10,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background: "#FFC9C9",
                    borderRadius: 8,
                  }}
                />
                <div
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "#1A191E",
                      fontSize: 18,
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Ubicación cambió.
                  </div>
                  <div
                    style={{
                      color: "rgba(26, 25, 30, 0.50)",
                      fontSize: 16,
                      fontFamily: "Arial",
                      fontWeight: "500",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Abrir app.
                  </div>
                </div>
                <div
                  style={{
                    color: "#1A191E",
                    fontSize: 18,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  15:45 p.m
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  paddingTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 24,
                  background: "white",
                  borderRadius: 10,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    background: "#9FFFA3",
                    borderRadius: 8,
                  }}
                />
                <div
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "#1A191E",
                      fontSize: 18,
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    ¡Hey, todo bien!
                  </div>
                  <div
                    style={{
                      color: "rgba(26, 25, 30, 0.50)",
                      fontSize: 16,
                      fontFamily: "Arial",
                      fontWeight: "500",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
                    Nuevo mensaje.
                  </div>
                </div>
                <div
                  style={{
                    color: "#1A191E",
                    fontSize: 18,
                    fontFamily: "Arial",
                    fontWeight: "500",
                    lineHeight: 2,
                    wordWrap: "break-word",
                  }}
                >
                  16:02 p.m
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              paddingLeft: 50,
              paddingTop: 60,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 32,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                height: 228,
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
                  height: 140,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    color: "#1A191E",
                    fontSize: 60,
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    lineHeight: 1,
                    wordWrap: "break-word",
                  }}
                >
                  Tu mejor
                  <br />
                  compañero, PBOO.
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#1A191E",
                  marginTop: 10,
                  fontSize: 20,
                  fontFamily: "Arial",
                  fontWeight: "500",
                  lineHeight: 1.5,
                  wordWrap: "break-word",
                }}
              >
                Soluciones adaptadas a las necesidades
                <br />
                individuales del usuario.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 160,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            height: 612,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 64,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "flex-end",
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 600,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#1A191E",
                  fontSize: 64,
                  fontFamily: "Arial",
                  fontWeight: "Bold",
                  lineHeight: 1,
                  wordWrap: "break-word",
                }}
              >
                P-BOO: tu compañero confiable en situaciones críticas.
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  color: "#1A191E",
                  fontSize: 20,
                  fontFamily: "Arial",
                  fontWeight: "500",
                  lineHeight: 2,
                  wordWrap: "break-word",
                }}
              >
                Benefíciate de una solución innovadora que te protege a ti y a
                tus seres queridos, dondequiera que vayas.
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

export default Inicio;

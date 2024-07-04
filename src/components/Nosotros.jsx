import nos from "../../assets/images/nos.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Nosotros = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
              <a href="/" style={{ textDecoration: "none", color: "#302F2F" }}>
                PBOO
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          width: 610,
          height: 606,
          left: 753,
          top: 0,
          position: 'absolute',
          borderRadius: 20,
          overflow: 'hidden',
        }}
      ></div>
      <div
        style={{
          width: 353,
          left: 193,
          top: 17.5,
          position: 'absolute',
          color: '#363940',
          fontSize: 32,
          fontFamily: 'Arial',
          fontWeight: '700',
          lineHeight: 8,
          wordWrap: 'break-word',
        }}
      >
        Contacta con nosotros
      </div>

      <div
        style={{
          width: 460,
          height: 318,
          left: 193,
          top: 232,
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: 460,
            height: 166,
            paddingTop: 95,
            paddingBottom: 25,
            left: 10,
            
            top: 152,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 17,
            display: 'inline-flex',
          }}
        >
          <div
            style={{
              width: 160,
              height: 350,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'inline-flex',
            }}
          >
            <input
              type="text"
              style={{
                width: 160,
                height: 46,
                padding: 20,
                borderRadius: 4,
                border: '1px #CAD1E1 solid',
              }}
              placeholder="Nombre (opcional)"
            />
          </div>
          <div
            style={{
              width: 283,
              height: 350,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'inline-flex',
            }}
          >
            <input
              type="email"
              style={{
                width: 280,
                height: 46,
                padding: 20,
                borderRadius: 4,
                border: '1px #CAD1E1 solid',
              }}
              placeholder="Correo electrónico (opcional)"
            />
          </div>
        </div>
        <div
          style={{
            width: 460,
            height: 166,
            left: 0,
            top: 150,
            position: 'absolute',
          }}
        >
          <textarea
            style={{
              width: 500,
              height: 166,
              padding: 20,
              borderRadius: 4,
              border: '1px #CAD1E1 solid',
            }}
            placeholder="Descripción"
          />
        </div>
        <div
          style={{
            width: 460,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex',
          }}
        >
          <input
            type="text"
            style={{
              width: 460,
              height: 46,
              padding: 20,
              borderRadius: 4,
              border: '1px #CAD1E1 solid',
            }}
            placeholder="Asunto"
          />
        </div>
      </div>
   
    
        <div
          style={{
            width: 410,
            left: 193,
            top: 179,
            position: "absolute",
            color: "#778299",
            fontSize: 16,
            fontFamily: "Arial",
            fontWeight: "400",
            lineHeight: 2.1,
            wordWrap: "break-word",
          }}
        >
          ¡Gracias por tu interés en compartir tu opinión o reportar algún
          inconveniente con nuestra app!{" "}
        </div>

        <div
          style={{
            width: 160,
            height: 46,
            left: 193,
            top: 558,
            position: "absolute",
          }}
        >
          <div
            className="Button"
            style={{
              width: 200,
              height: 40,
              background: isHovered ? "#002761" : "white",
              color: isHovered ? "white" : "black",
              borderRadius: 90,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: 180,
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
                lineHeight: 1.5,
                wordWrap: "break-word",
                padding: "5px 10px",
              }}
            >
              Enviar
            </div>
          </div>
        </div>
        
      </div>
      
      
      <img
        style={{
          position: "absolute",
          top: "calc(32% + 30px)",
          right: 150,
          width: "26%",
          height: "auto",
        }}
        src={nos}
        alt="nos"
      />    
    </div>
    
  );
};

export default Nosotros;

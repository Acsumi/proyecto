import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo de estilos
import logo from "../assets/images/logo.png";
import brigada from "../assets/images/brigada.jpg";

const Brigada = () => {
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
                <CustomLink href="/Soporte">Soporte</CustomLink>
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
        

          <img style={{width: 1000, height: 620, paddingTop:150,paddingLeft:250}} src={brigada}
        alt="brigada" />
<div style={{width: 1101, height: 94, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
  <div style={{alignSelf: 'center',textAlign:'center',paddingLeft:330, paddingTop:1000,color: '#1A191E', fontSize: 28, fontFamily: 'Arial', fontWeight: 'bold', lineHeight: 3, wordWrap: 'break-word'}}>Brigadistas capacitados: Fortaleciendo la seguridad <br/> en la UTZMG con PBOO</div>
  <div style={{alignSelf: 'center',textAlign:'justify', paddingLeft:325,color: '#1A191E', fontSize: 18, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Nuestro servicio de capacitación se enfoca en preparar a brigadistas dentro de la UTZMG para actuar eficazmente en situaciones de emergencia. Mediante un programa integral, nuestros expertos capacitadores proporcionan formación en primeros auxilios, evacuación de emergencia, manejo de incendios y otros procedimientos de seguridad. Estos brigadistas, equipados con conocimientos y habilidades actualizados, juegan un papel vital en la promoción de un entorno seguro y en la respuesta efectiva ante cualquier eventualidad en el campus universitario. Nuestro objetivo es empoderar a la comunidad estudiantil y al personal de la UTZMG para que estén preparados y puedan actuar de manera rápida y coordinada en situaciones críticas, contribuyendo así a la seguridad y el bienestar de todos los miembros de la comunidad universitaria.</div>
  <div style={{alignSelf: 'center',textAlign:'justify', paddingLeft:325,color: '#1A191E', fontSize: 18, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>

Aquí tienes algunos datos curiosos sobre los brigadistas y PBOO:
<br/>
1. Los brigadistas son parte fundamental de la comunidad universitaria, capacitados para actuar en situaciones de emergencia y promover la seguridad en el campus.
<br/>
2. PBOO ofrece capacitación especializada para brigadistas dentro de la UTZMG, brindándoles habilidades en primeros auxilios, evacuación de emergencia, manejo de incendios y otras técnicas de seguridad.
<br/>
3. Los brigadistas son líderes en su comunidad, responsables de guiar a otros estudiantes y personal en caso de una situación de crisis.
<br/>
4. La formación de brigadistas no solo beneficia a la UTZMG, sino que también proporciona a los estudiantes habilidades valiosas que pueden aplicar en su vida cotidiana y futuras carreras.
<br/>
5. PBOO se enorgullece de colaborar con la UTZMG para fortalecer la seguridad en el campus y empoderar a los brigadistas para que sean defensores activos de la seguridad y el bienestar de la comunidad universitaria.

    </div>
</div>



    </div>
    );
  };
  
  export default Brigada;
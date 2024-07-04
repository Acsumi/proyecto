import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importa el archivo de estilos
import logo from "../../assets/images/logo.png";

const Soporte = () => {
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
          <br/>
          <br/>
          <br/>
          <br/>
           <br/>
            <br/>
             <br/>

             <div style={{width: 1680, height: 432, paddingTop: 30, paddingBottom: 30, background: '#E9FBFF', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
  <div style={{height: 176, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
    <div style={{height: 176, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{alignSelf: 'stretch', color: '#1A191E', fontSize: 80, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 1.5, paddingTop:18,wordWrap: 'break-word',paddingRight:800}}>¿Cómo podemos<br/>ayudarte?</div>
    </div>
  </div>
  <div style={{width: 380, height: 429, left: 953, top: 190, position: 'absolute', background: 'white', borderRadius: 50, overflow: 'hidden', border: '10px #1A191E solid'}}>
    <div style={{width: 305, left: 37, top: 43, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{width: 24, height: 24, position: 'relative'}}>
        <div style={{width: 16, height: 15.56, left: 4, top: 4.22, position: 'absolute', background: '#1A191E'}}></div>
      </div>
      <div style={{color: '#1A191E', fontSize: 20, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Soporte Técnico</div>
      <div style={{width: 24, height: 24, position: 'relative'}}>
        <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', background: '#1A191E'}}></div>
      </div>
    </div>
    <div style={{height: 95, paddingTop: 20, paddingBottom: 30, paddingLeft: 20, paddingRight: 20, left: 0, top: 705, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div style={{justifyContent: 'center', alignItems: 'flex-start', gap: 44, display: 'inline-flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 16.50, height: 17.17, left: 2.75, top: 2.08, position: 'absolute', background: '#1A191E'}}></div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Home</div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 18.33, height: 18.33, left: 1.83, top: 1.83, position: 'absolute', background: '#1A191E'}}></div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Savings</div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 18.33, height: 16.50, left: 1.83, top: 2.75, position: 'absolute', background: '#1A191E'}}></div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Cards</div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
          <div style={{width: 22, height: 22, position: 'relative'}}>
            <div style={{width: 14.67, height: 19.25, left: 3.67, top: 0.92, position: 'absolute', background: '#1A191E'}}></div>
          </div>
          <div style={{color: '#1A191E', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Account</div>
        </div>
      </div>
    </div>
    <div style={{height: 344, left: 30, top: 109, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 40, height: 40, background: '#5BB5A2', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>PB</div>
        </div>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Hola Jessica, ¿En qué podemos<br/>ayudarte?</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Tengo un problema con <br/>mi dispositivo.</div>
        </div>
        <div style={{width: 40, height: 40, background: '#5BB5A2', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>JA</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 40, height: 40, background: '#5BB5A2', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>PB</div>
        </div>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Muy bien, ¿me puedes dar tu ID de<br/>cliente?</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-end', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>123456</div>
        </div>
        <div style={{width: 40, height: 40, background: '#5BB5A2', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>JA</div>
        </div>
      </div>
      <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 40, height: 40, background: '#5BB5A2', borderRadius: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
          <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 22.40, wordWrap: 'break-word'}}>NL</div>
        </div>
        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, background: '#F8F8F8', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{color: 'rgba(26, 25, 30, 0.50)', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>One moment please.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div style={{width: 1200, height: 322, paddingTop: 96, paddingBottom: 96, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex',paddingLeft:120}}>
  <div style={{height: 130, padding: 32, background: '#4AB3CA', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'inline-flex'}}>
      <div style={{width: 353, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{width: 253, color: 'white', fontSize: 28, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Still have questions?</div>
        <div style={{opacity: 0.70, color: 'white', fontSize: 18, fontFamily: 'Arial', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>We are here to help.</div>
      </div>
      <div style={{flex: '1 1 0', height: 50, justifyContent: 'flex-end', alignItems: 'center', gap: 96, display: 'flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{width: 40, height: 40, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 22, height: 22, position: 'relative'}}>
              <div style={{width: 16.50, height: 16.50, left: 2.75, top: 2.75, position: 'absolute', background: 'white'}}></div>
            </div>
          </div>
          <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 25.20, wordWrap: 'break-word'}}>+49 176 123 456</div>
            <div style={{opacity: 0.70, color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Support Hotline</div>
          </div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
          <div style={{width: 40, height: 40, background: 'rgba(255, 255, 255, 0.20)', borderRadius: 100, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 22, height: 22, position: 'relative'}}>
              <div style={{width: 20.17, height: 18.33, left: 1.83, top: 0.92, position: 'absolute', background: 'white'}}></div>
            </div>
          </div>
          <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>help@banko.com</div>
            <div style={{opacity: 0.70, color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word'}}>Support Email</div>
          </div>
        </div>
        <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: '#1A191E', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <div style={{color: 'white', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '500', lineHeight: 18, wordWrap: 'break-word'}}>Chat with us</div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
  };
  
  export default Soporte;
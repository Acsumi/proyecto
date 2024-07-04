import React from "react";
import doctora from "../../assets/images/doctora.png";

const Roberto = () => {
  return (
    <div>
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
              href="/"
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.87)",
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
                color: "#002761",
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
                    href="/Formulario"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    crear cuenta
                  </a>
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
                    href="/Sesion"
                    style={{ textDecoration: "none", color: "#002761" }}
                  >
                    Iniciar sesión
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

      <img
        style={{
          position: "absolute",
          top: "calc(25% + 30px)",
          right: 90,
          width: "14%",
          height: "auto",
        }}
        src={doctora}
        alt="Doctora"
      />
    </div>
  );
};

export default Roberto;

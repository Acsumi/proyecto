import React from "react";
import { Link } from "react-router-dom";

const Roberto = () => {
  return (
    <div style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ textAlign: "justify" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <span
            style={{
              color: "#3E4958",
              fontSize: 20,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 10,
              wordWrap: "break-word",
            }}
          >
            Fecha de última actualización: 28 de Marzo de 2024
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            Queremos informarte sobre cómo gestionamos la información recopilada
            durante el uso del demo de P-BOO (Pánico Botón de Operación) y
            establecer las responsabilidades necesarias para garantizar la
            seguridad de tus datos.
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Identificación y Clasificación de Activos de Información
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            En el proceso de desarrollo y funcionamiento de P-BOO, manejamos dos
            categorías principales de información:
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Datos de Usuarios:
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            Incluyen información personal identificable (PII) como nombres,
            direcciones, números de teléfono, direcciones de correo electrónico,
            números de identificación, así como datos biométricos en caso de
            utilizar autenticación biométrica. Además, se registran las
            actividades de los usuarios, incluyendo la hora y la ubicación de la
            activación del P-BOO.
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Datos Confidenciales:
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            Estos comprenden información interna del sistema, como algoritmos y
            protocolos de comunicación, claves de encriptación y certificados
            para la protección de la comunicación. También se incluyen datos de
            registro de eventos del sistema, que detallan alertas y
            notificaciones a las autoridades, así como registros específicos de
            activación del P-BOO.
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            La clasificación de estos activos se realiza de la siguiente manera:
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Datos de usuarios:
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            Clasificación como Confidencial debido a la necesidad de proteger
            contra el robo de identidad o el acceso no autorizado.
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Información de Proyectos:
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            Clasificación como Interna, ya que la divulgación no autorizada de
            esta información podría afectar el funcionamiento adecuado del
            sistema.
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Registros de Activación de P-BOO:
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            Clasificación como Confidencial, ya que la información sobre cuándo
            y dónde se activa el botón de pánico puede considerarse sensible y
            debe protegerse.
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Acceso y Control de Acceso
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            Para garantizar la seguridad de la información, implementamos un
            sistema de control de acceso basado en roles (RBAC): Identificamos
            tres roles de usuario principales: Usuario Normal, Administrador y
            Operador de Emergencias. Cada uno de estos roles tiene asignados
            permisos específicos, determinados por su función en el sistema. La
            autenticación de usuarios y la verificación de roles al iniciar
            sesión aseguran que solo tengan acceso a funciones y datos
            autorizados. Además, se lleva a cabo una auditoría y monitoreo para
            detectar y prevenir accesos no autorizados. Es fundamental realizar
            actualizaciones y mantenimiento constantes en la configuración de
            RBAC para adaptarse a cambios en responsabilidades o la
            incorporación de nuevos roles.
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: 1,
              wordWrap: "break-word",
            }}
          >
            Desarrollo Seguro
            <br />
          </span>
          <span
            style={{
              color: "#3E4958",
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "400",
              textTransform: "uppercase",
              lineHeight: 1,
              paddingTop: 100,
              wordWrap: "break-word",
            }}
          >
            En el proceso de desarrollo de P-BOO, seguimos estrictamente las
            normas impuestas por las leyes mexicanas. Se realizan pruebas beta
            para evaluar la efectividad del producto, su tiempo de respuesta y
            para mejorar continuamente las interfaces tanto para usuarios como
            para operadores.
            <br />
          </span>
        </div>
      </div>

      {/* Contenido de la ventana */}

      {/* Botón de Cerrar */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Link to="/Formulario" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#002761",
              color: "white",
              padding: "10px 20px",
              borderRadius: 5,
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Cerrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Roberto;

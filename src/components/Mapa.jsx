import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Importa Leaflet para crear el icono personalizado
import { FaExclamationCircle } from "react-icons/fa";
import Sidebar from "./Barra.jsx";
import UserBadge from "./Icono.jsx";
import "./Mapa.css";
import ubi from "../assets/images/ubi.png"; // Importa la imagen de ubicación

const CustomButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="Button"
      style={{
        width: 290,
        height: 50,
        background: isHovered ? "#002761" : "#fff",
        color: isHovered ? "#FFFFFF" : "#000000",
        border: "0.5px solid #425466",
        borderRadius: 10,
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: 700,
        wordWrap: "break-word",
        transition: "background 0.3s, color 0.3s",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaExclamationCircle
        style={{
          marginRight: 8,
          position: "absolute",
          left: 40,
        }}
      />
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

const Mapa = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Posición por defecto
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          setLoaded(true);
        },
        (error) => {
          console.error("Error obteniendo la geolocalización: ", error);
          setLoaded(true);
        }
      );
    } else {
      console.error("Geolocalización no es soportada por este navegador.");
      setLoaded(true);
    }
  }, []);

  // Crea un nuevo ícono de marcador con la imagen personalizada
  const customIcon = new L.Icon({
    iconUrl: ubi,
    iconSize: [38, 38], // Ajusta el tamaño del ícono
    iconAnchor: [19, 38], // Ajusta el punto de anclaje del ícono
    popupAnchor: [0, -38], // Ajusta el punto de anclaje del popup
  });

  return (
    <div>
      <div>
        <UserBadge />
        <Sidebar />
      </div>
      <h1 className="titulo">Mapa General</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "300px",
          marginTop: "20px",
        }}
      >
        <CustomButton>Alertas pendientes</CustomButton>
      </div>
      {loaded ? (
       <MapContainer
       center={position}
       zoom={13}
       style={{
         height: "450px",
         width: "75%",
         margin: "20px auto", // Mantén el margen automático para centrar verticalmente
         marginLeft: "20%", // Ajusta el margen izquierdo para mover el mapa hacia la derecha
       }}
     >
       <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       />
       <Marker position={position} icon={customIcon}>
         <Popup>Tu ubicación actual</Popup>
       </Marker>
     </MapContainer>
     
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Cargando mapa...
        </p>
      )}
    </div>
  );
};

export default Mapa;

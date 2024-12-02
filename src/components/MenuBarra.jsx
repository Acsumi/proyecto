import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MenuBarra.css"; // Importa los estilos
import logo from "../assets/images/logo.png";

const Inicio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  // Detectar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CustomLink = ({ href, children }) => (
    <a href={href} className="custom-link" onClick={closeMenu}>
      {children}
    </a>
  );

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={logo} alt="logo" className="navbar-logo" />
          <span className="navbar-title">PBOO</span>
        </div>
        <button onClick={toggleMenu} className="menu-button">
          ☰
        </button>
        <nav ref={menuRef} className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <CustomLink href="/">Inicio</CustomLink>
          <CustomLink href="/servicios">Servicios</CustomLink>
          <CustomLink href="/brigada">Brigada</CustomLink>
          <CustomLink href="/nosotros">Contactos</CustomLink>
          <div className="navbar-buttons">
            <CustomLink href="/crear-cuenta">Crear cuenta</CustomLink>
            <CustomLink href="/iniciar-sesion">Iniciar sesión</CustomLink>
          </div>
          {menuOpen && (
            <button className="close-button" onClick={closeMenu}>
              ✖
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Inicio;

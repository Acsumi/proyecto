import React, { useState } from 'react';
import Modal from 'react-modal'; // Importa react-modal
import './Barra.css'; // Estilo CSS para el sidebar
import { BiMessageSquareDetail } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate

import { FaHome, FaFileAlt, FaMap, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Importamos los iconos de Font Awesome
import img from "../assets/images/logo.png"; // Importamos la imagen

// Configura el modal
Modal.setAppElement('#root'); // Esto es necesario para la accesibilidad

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
  const navigate = useNavigate(); // Hook para redirigir

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleConfirmExit = () => {
    handleCloseModal();
    navigate('/inicio'); // Redirige al usuario a la ruta /inicio
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={img} alt="Robot" className="sidebar-logo" />
        <h1>PBOO</h1>
      </div>
      <ul className="sidebar-menu">
        <li><a href="/Principal"><FaHome /> Principal</a></li>
        <li><a href="/Reporte1"><FaFileAlt /> Reporte</a></li>
        <li><a href="/Mapa"><FaMap /> Mapa General</a></li>
        <li><a href="/Mensajes"><FaEnvelope /> Mensajes</a></li>
        <li><a href="/Respaldo"><BiMessageSquareDetail /> Respaldo</a></li>
        <div className="sidebar-footer">
          <button className="sidebar-menu" onClick={handleShowModal}>
            <FaSignOutAlt /> Salir
          </button>
        </div>
      </ul>

      {/* Modal de confirmación */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Confirmación de Salida"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Confirmación</h2>
        <p>¿Estás seguro de que deseas salir?</p>
        <button className="modal-button secondary" onClick={handleCloseModal}>No</button>
        <button className="modal-button primary" onClick={handleConfirmExit}>Sí</button>
      </Modal>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: isOpen ? "block" : "none",
      zIndex: 1,
    },
    modal: {
      backgroundColor: "#fefefe",
      margin: "15% auto",
      padding: "20px",
      border: "1px solid #888",
      width: "80%",
      display: isOpen ? "block" : "none",
      animation: "slide-down 0.5s",
    },
    closeButton: {
      color: "#aaa",
      float: "right",
      fontSize: "28px",
      fontWeight: "bold",
      "&:hover": {
        color: "#000",
        textDecoration: "none",
        cursor: "pointer",
      },
    },
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <div style={modalStyle.overlay} onClick={closeModal}></div>
      <div style={modalStyle.modal}>
        <span style={modalStyle.closeButton} onClick={closeModal}>
          &times;
        </span>
        <h2>Modal Content</h2>
        <p>This is a modal window.</p>
      </div>
    </div>
  );
};

export default Modal;

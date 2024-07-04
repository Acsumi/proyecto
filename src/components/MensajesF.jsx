import React, { useState } from 'react';
import Sidebar from './Barra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import './Mensajes.css'; // Importa los estilos CSS para el componente Principal

const MensajesF = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="container-fluid">
      <div className="row">
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-right">
          <h1 className="titulo">Mensajes</h1>
          <div className="table-responsive">
            <div className="tabla-container">
              <table className="table table-bordered tabla-alertas">
                <thead>
                  <tr>
                    <th>Correo</th>
                    <th>Fecha</th>
                    <th>Leído</th>
                    <th>Mensaje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                    className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                    onClick={handleButtonClick}
                    style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                    >
                    Ver Mensaje
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                    className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                    onClick={handleButtonClick}
                    style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                    >
                    Ver Mensaje
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                    className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                    onClick={handleButtonClick}
                    style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                    >
                    Ver Mensaje
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                        className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                        onClick={handleButtonClick}
                        style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                        >
                        Ver Mensaje
                        </button>
                    </td>
                  </tr>
                  <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                    className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                    onClick={handleButtonClick}
                    style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                    >
                    Ver Mensaje
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                    className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                    onClick={handleButtonClick}
                    style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                    >
                    Ver Mensaje
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                    className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                    onClick={handleButtonClick}
                    style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                    >
                    Ver Mensaje
                    </button>
                    </td>
                  </tr> <tr>
                    <td>correo@example.com</td>
                    <td>2024-04-12</td>
                    <td>Si</td>
                    <td>
                    <button
                    className={`btn btn-success custom-button ${isSelected ? 'selected' : ''}`}
                    onClick={handleButtonClick}
                    style={{ fontSize: '16px' }} // Ajusta el tamaño de la letra según sea necesario
                    >
                    Ver Mensaje
                    </button>
                    </td>
                  </tr>

                  {/* Agrega más filas según sea necesario */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Contenido principal de la aplicación */}
        </div>
      </div>
    </div>
  );
};

export default MensajesF;

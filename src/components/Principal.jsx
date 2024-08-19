import React from 'react';
import Sidebar from './Barra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import Estadis from './Estadis.jsx'; // Importa el componente Estadis desde Estadis.jsx
import Grafica2 from './Grafica2.jsx'; // 
import './Principal.css'; // Importa los estilos CSS para el componente Principal
import UserBadge from './Icono.jsx'; // Asegúrate de ajustar la ruta al archivo si está en una ubicación diferente

const Principal = () => {
  return (

    <div className="container-fluid">
      <UserBadge  />

      <div className="row">
        <Sidebar /> {/* Utiliza el componente Sidebar */}
        <div className="col-md-6 offset-md-3">
        <br />
          <Grafica2 />

        </div>
      </div>
      <div className="row">
      <div className="col-md-6 offset-md-3 text-right">
        <div className="table-responsive">
          <h1 className="titulo">Alertas</h1>
          <div className="table-container">
            <table className="table table-bordered tabla-alertas">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nivel de prioridad</th>
                  <th>Hora de emisión</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alto</td>
                  <td>10:30 AM</td>
                  <td>2024-04-11</td>
                  <td className="status status-pendiente">Pendiente</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bajo</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                  <td className="status status-resuelto">Resuelto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bajo</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                  <td className="status status-resuelto">Resuelto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bajo</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                  <td className="status status-resuelto">Resuelto</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bajo</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                  <td className="status status-resuelto">Resuelto</td>
                </tr>
               
                {/* Agrega más filas según sea necesario */}
              </tbody>
              
            </table>
            
          </div>
        </div>
      </div>
    </div>
    <br />
                <br />
                <br />
                <br />
      <div className="row">
        <div className="col-md-12">
          {/* Contenido principal de la aplicación */}
        </div>
      </div>
    </div>
  );
};

export default Principal;

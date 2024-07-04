import React from 'react';
import Sidebar from './Barra.jsx'; // Importa el componente Sidebar desde Barra.jsx
import Estadis from './Estadis.jsx'; // Importa el componente Estadis desde Estadis.jsx
import Estadis2 from './Estadis2.jsx'; // Importa el componente Estadis2 desde Estadis2.jsx;
import './Respaldo.css'; // Importa los estilos CSS para el componente Principal

const Reporte = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-right">
        <h1 className="titulo">Historial De Respaldo</h1>
          <div className="table-responsive">
          <div className="tabla-container">

            <table className="table table-bordered tabla-alertas">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hora</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
              
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                 <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11:45 AM</td>
                  <td>2024-04-12</td>
                </tr>
                
                

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

export default Reporte;

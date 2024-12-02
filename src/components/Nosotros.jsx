import React, { useEffect } from "react";
import "./Nosotros.css";
import { Link } from "react-router-dom";
import nos from "../assets/images/nos.png";
import Menu from "./MenuBarra.jsx";
import Pie from "./Pie.jsx";


const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Menu />
      <div className="container">
        {/* Título */}
        <div className="SubTitle">Contacta con nosotros</div>

        {/* Descripción */}
        <div className="description">
        "¡Te agradecemos mucho por tomarte el tiempo para compartir tu opinión o reportar cualquier inconveniente que hayas experimentado con nuestra aplicación! Tu feedback es invaluable para nosotros, ya que nos permite mejorar constantemente y ofrecerte una experiencia aún mejor. Nos importa profundamente que tu experiencia sea lo más satisfactoria posible, y tu colaboración es fundamental para seguir mejorando. Si tienes más sugerencias o inquietudes, no dudes en hacérnoslas saber. ¡Estamos aquí para ayudarte!"        </div>

        {/* Imagen */}
        <div className="image-container">
          <img src={nos} alt="Doctora" />
        </div>

        {/* Formulario */}
        <div className="form-container">
          <div className="input-container">
            <label>Correo electrónico</label>
            <input type="email" placeholder="Ingresa tu correo" />
          </div>

          <div className="input-container">
            <label>Asunto</label>
            <input type="text" placeholder="Asunto" />
          </div>

          <div className="input-container">
            <label>Descripción</label>
            <textarea placeholder="Descripción"></textarea>
          </div>

          <Link to="/Form4" className="Button">
            Enviar
          </Link>
        </div>
      </div>
      <Pie/>
    </div>
  );
};

export default Nosotros;

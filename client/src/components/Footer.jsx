import React from "react";
import "./estilos/Footer.css";

const Footer = () => {
  return (
    <div className="main-Footer">
      <div className="redes-container">
        <a href="https://www.facebook.com/" className="foot-btn">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/" className="foot-btn">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/" className="foot-btn">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/" className="foot-btn">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="derechos">
        <p>2022 HENRY FITNESS Argentina. Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Footer;

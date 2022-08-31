import React from "react";
import "./estilos/Footer.css";
/* import logoNike from "./estilos/logoMarcas/pngwing.com.png";
import logoNB from "./estilos/logoMarcas/newBalance.png"; */
const Footer = () => {
  return (
    <div className="main-FooterLanding">
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
      {/*  <div className="LogoNike">
        <img className="nike-img" src={logoNike} alt="nike" />
        <img className="nb-img" src={logoNB} alt="newBalance" />
      </div> */}

      <div className="derechosLanding">
        <p>2022 HENRY FITNESS Argentina. Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Footer;

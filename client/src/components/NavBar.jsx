import React from "react";
import { Link } from "react-router-dom";
import "./estilos/NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to={"/"}>
        <img
          src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468"
          alt="LogoApp"
          className="img-navBar"
        />
      </Link>
      <div className="div-1">
        <a id="home" href="/inicio/home">
          Inicio
        </a>
      </div>
      <div className="div-2">
        <Link id="perfil" to={"/inicio/Perfil"}>
          Perfil
        </Link>
      </div>
      <div className="div-3">
        <Link id="staff" to={"/inicio/Profesionales"}>
          Profesionales
        </Link>
      </div>
      <div className="div-4">
        <Link id="turnos" to={"/inicio/Turnos"}>
          Turnos
        </Link>
      </div>
      <div className="div-5">
        <Link id="sobreNosotros" to={"/inicio/SobreNosotros"}>
          Sobre Nosotros
        </Link>
      </div>
    </nav>
  );
}

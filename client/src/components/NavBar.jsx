import React from "react";
import { Link } from "react-router-dom";
import "./estilos/NavBar.css";
import logo from "./estilos/logo nav/1.png";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to={"/inicio/home"}>
        <img src={logo} alt="LogoApp" className="img-navBar" />
      </Link>
      <div className="div-1">
        <a id="actividades" href="/inicio/Actividades">
          ACTIVIDADES
        </a>
      </div>
      <div className="div-2">
        <Link id="turnos" to={"/inicio/Turnos"}>
          TURNOS
        </Link>
      </div>
      <div className="div-3">
        <Link id="staff" to={"/inicio/Profesionales"}>
          STAFF
        </Link>
      </div>
      <div className="div-4">
        <Link id="sobreNosotros" to={"/inicio/SobreNosotros"}>
          SOBRE NOSOTROS
        </Link>
      </div>
      <div className="div-5">
        <Link id="miPerfil" to={"/inicio/Perfil"}>
          MI PERFIL
        </Link>
      </div>
    </nav>
  );
}

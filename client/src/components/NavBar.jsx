import React from "react";
import { Link } from "react-router-dom";
import "./estilos/NavBar.css";
import logo from "./estilos/logo nav/1.png";

export default function NavBar({ logged, user }) {
  if (logged, user.length) {
    return (
      <nav className="nav">
        <Link to={"/home"}>
          <img src={logo} alt="LogoApp" className="img-navBar" />
        </Link>
        <div className="div-1">
          <a id="actividades" href="/Actividades">
            ACTIVIDADES
          </a>
        </div>
        <div className="div-2">
          <Link id="turnos" to={"/Turnos"}>
            TURNOS
          </Link>
        </div>
        <div className="div-3">
          <Link id="staff" to={"/Profesionales"}>
            STAFF
          </Link>
        </div>
        <div className="div-4">
          <Link id="sobreNosotros" to={"/SobreNosotros"}>
            SOBRE NOSOTROS
          </Link>
        </div>
        <div className="div-5">
          <Link id="miPerfil" to={"/Perfil"}>
            MI PERFIL
          </Link>
        </div>
      </nav>
    );
  }
  else {
    return (
      <nav className="nav">
        <Link to={"/home"}>
          <img src={logo} alt="LogoApp" className="img-navBar" />
        </Link>
        <div className="div-1">
          <a id="actividades" href="/Actividades">
            ACTIVIDADES
          </a>
        </div>
        {/* <div className="div-2">
          <Link id="turnos" to={"/Turnos"}>
            TURNOS
          </Link>
        </div> */}
        <div className="div-3">
          <Link id="staff" to={"/Profesionales"}>
            STAFF
          </Link>
        </div>
        <div className="div-4">
          <Link id="sobreNosotros" to={"/SobreNosotros"}>
            SOBRE NOSOTROS
          </Link>
        </div>
        <div className="div-5">
          <Link id="miPerfil" to={"/loginUser"}>
            LOG IN
          </Link>
        </div>
      </nav>
    );
  }
}

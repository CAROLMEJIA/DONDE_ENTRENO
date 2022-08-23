import React from "react";
import { Link } from "react-router-dom";
import "../estilos/NavBar.css";
import logo from "../estilos/logo nav/1.png";

export default function NavBarAdmin() {
  return (
    <nav className="nav">
      <Link to={"/home/admin"}>
        <img src={logo} alt="LogoApp" className="img-navBar" />
      </Link>
      <div className="div-1">
        <Link id="actividades" to="/Actividades/admin">
          ACTIVIDADES
        </Link>
      </div>
      <div className="div-2">
        <Link id="turnos" to={"/Turnos/admin"}>
          TURNOS
        </Link>
      </div>
      <div className="div-3">
        <Link id="staff" to={"/Profesionales/admin"}>
          STAFF
        </Link>
      </div>
      <div className="div-4">
        <Link id="staff" to={"#"}>
          CERRAR SESIÓN
        </Link>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../estilos/NavBar.css";
import logo from "../estilos/logo nav/logoNav.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";

export default function NavBarAdmin() {
  const dispatch = useDispatch();

  const cerrarSesion = () => {
    localStorage.clear();
    dispatch(logoutUser());
  };

  return (
    <nav className="nav">
      <Link to={"/home/admin"}>
        <img src={logo} alt="LogoApp" className="img-navBar" />
      </Link>
      <div className="div-1">
        <Link id="actividades" to="/PerfilAdmin/ActivAdmCards">
          ACTIVIDADES
        </Link>
      </div>
      <div className="div-2">
        <Link id="turnos" to={"/PerfilAdmin/TurnosAdmin"}>
          TURNOS
        </Link>
      </div>
      <div className="div-3">
        <Link id="staff" to={"/PerfilAdmin/ProfCardsAdmin"}>
          STAFF
        </Link>
      </div>
      <div className="div-3">
        <Link id="staff" to={"/MembCards"}>
          MEMBRESÍAS
        </Link>
      </div>
      <div className="div-4">
        <Link onClick={cerrarSesion} id="staff" to={"/Home"}>
          CERRAR SESIÓN
        </Link>
      </div>
    </nav>
  );
}

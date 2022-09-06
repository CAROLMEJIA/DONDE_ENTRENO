import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getActivities, getProfessionals } from "../../redux/actions.js";
import NavBarAdmin from "./NavBarAdmin";
import Footer from "../Footer";
import "../estilos/Home.css";
import PanelUsuarios from "./PanelUsuarios.jsx";

export default function HomeAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  return (
    <div className="homeContainer">
      <NavBarAdmin />
      <h1 className="h1-homeAdm">¡Bienvenido @Admin!</h1>
      <div className="suspendidos">
        {/* <h4 className="h4-users">Todos los Usuarios:</h4> */}
        <a href="/PanelInactiveUser" className="susp-user">
          Usuarios Suspendidos
        </a>
      </div>
      <div>
        <PanelUsuarios />
      </div>
      <Footer />
    </div>
  );
}

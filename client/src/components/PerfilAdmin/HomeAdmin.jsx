import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActivities, getProfessionals } from "../../redux/actions.js";
import NavBarAdmin from "./NavBarAdmin";
import AHC from "../ActivityHomeCards";
import PHC from "../ProfessionalHomeCards.jsx";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "../estilos/Home.css";
import GraficoHome from "./GraficosHome.jsx";

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
      <div>
        <GraficoHome />
      </div>
      <Footer />
    </div>
  );
}

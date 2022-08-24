import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import "./estilos/Landing.css";


export default function Landing() {
  return (
    <div className="LandingContainer">
      <Carrusel className="Carrusel" />
    </div>
  );
}

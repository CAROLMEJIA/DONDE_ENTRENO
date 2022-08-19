import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import "./estilos/Landing.css";

export default function Landing() {
  return (
    <div className="LandingContainer">
      <Carrusel className="Carrusel" />
      <br />
      <div className = 'buttonContainer'>
        <div className="btn1">
          <Link to="/loginUser">
            <span className="text-1">QUIERO ENTRENAR</span>
            <span className="text-2">LOG IN</span>
          </Link>
        </div>
        <br />
        <div className="btn">
          <Link to="/loginAdmin">
            <span className="text-1">SOY ADMIN</span>
            <span className="text-2">LOG IN</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

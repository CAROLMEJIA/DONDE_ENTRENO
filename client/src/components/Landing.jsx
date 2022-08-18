import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "./Carrusel";
import "./estilos/Landing.css";

export default function Landing() {
  return (
    <div className="LandingContainer">
      <Carrusel />
      <div className="Logo-container1">
        <Link to="/loginUser">
          <img
            id="logo-btn"
            src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468"
            alt="logo"
          />
        </Link>
        <Link to="/loginAdmin">
          <img
            id="logo-btn2"
            src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468"
            alt="logo"
          />
        </Link>
      </div>
      {/* <div className="Logo-container2">
      </div> */}
    </div>
  );
}

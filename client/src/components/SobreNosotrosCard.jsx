import React from "react";
import "./estilos/SobreNosotrosCard.css";
import img from "./estilos/nosotros/user2.png";

export default function SobreNosotrosCard(){

    return(
        <>
        <div className="Card-Contenedor">
        <div className="Card">
          <img
            alt="imagen"
            className="img-card"
            src={img}
          ></img>
          <div className="hCard">
            <h2 id="hName">Andi Haller</h2>
            <p id="pInfo">Info</p>
          </div>
        </div>
      </div>

      <div className="Card-Contenedor">
        <div className="Card">
          <img
            alt="imagen"
            className="img-card"
            src={img}
          ></img>
          <div className="hCard">
            <h2 id="hName">Agus Viera</h2>
            <p id="pInfo">Info</p>
          </div>
        </div>
      </div>

      <div className="Card-Contenedor">
        <div className="Card">
          <img
            alt="imagen"
            className="img-card"
            src={img}
          ></img>
          <div className="hCard">
            <h2 id="hName">Carolina Mejía</h2>
            <p id="pInfo">Info</p>
          </div>
        </div>
      </div>

      <div className="Card-Contenedor">
        <div className="Card">
          <img
            alt="imagen"
            className="img-card"
            src={img}
          ></img>
          <div className="hCard">
            <h2 id="hName">Gaspar Muñoz</h2>
            <p id="pInfo">Info</p>
          </div>
        </div>
      </div>

      <div className="Card-Contenedor">
        <div className="Card">
          <img
            alt="imagen"
            className="img-card"
            src={img}
          ></img>
          <div className="hCard">
            <h2 id="hName">José Correa</h2>
            <p id="pInfo">Info</p>
          </div>
        </div>
      </div>

      <div className="Card-Contenedor">
        <div className="Card">
          <img
            alt="imagen"
            className="img-card"
           src={img}
          ></img>
          <div className="hCard">
            <h2 id="hName">Marko Schneider</h2>
            <p id="pInfo">Info</p>
          </div>
        </div>
      </div>
      </>
    )
}
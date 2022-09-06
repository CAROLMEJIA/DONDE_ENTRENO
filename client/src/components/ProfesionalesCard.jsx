import React from "react";
import "./estilos/ProfCard.css";

export default function ProfCard(props) {
  return (
    <div className="Card-Container">
      <div className="ProfCard">
        <img
          alt="imagen de staff"
          className="img-Pcard"
          src={props.image}
        ></img>
        <div className="h-card">
          <h2 id="h-name">{props.name.toUpperCase()}</h2>
          <p id="p-info">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

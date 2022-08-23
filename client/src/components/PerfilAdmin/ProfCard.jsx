import React from "react";
import "../estilos/ProfCard.css";

export default function ProfCardAdmin(props) {
  return (
    <div className="Card-Container">
      <div className="ProfCard">
        <div>
          <a href="/PerfilAdmin/EditProf">
            <img
              className="Edit-icon"
              src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
              alt="icon-edit"
            />
          </a>
          <button className="Close-btn" onClick={props.deleteProfe(props.id)}>
            X
          </button>
        </div>

        <img
          alt="imagen de staff"
          className="img-Pcard"
          src={props.image}
        ></img>
        <div className="h-card">
          <h2 id="h-name">{props.name}</h2>
          <h4 id="h4-name">ID: {props.id}</h4>
          <p id="p-info">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

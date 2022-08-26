import React from "react";
import "../estilos/ProfCard.css";

export default function ProfCardAdmin(props) {
  return (
    <div className="Card-Activity">
      <div className="face front">
        <img
          alt="imagen de staff"
          className="img-cardActivity"
          src={props.image}
        ></img>
        <h2 className="h-activityF">{props.name}</h2>
      </div>
      <div className="face back">
        <h2 className="h-activityB">{props.name}</h2>
        <p className="p-activity">{props.info}</p>

        <div className="Link-turnos">
          <a href={`/PerfilAdmin/EditProf/${props.id}`}>
            <button className="button-editar">Editar</button>
          </a>
          <button
            className="button-onclose"
            onClick={() => props.handleOnClick(props.id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}

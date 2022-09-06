import React from "react";

import "../estilos/ActivityCard.css";

export default function ActivAdmCard(props) {
  return (
    <div className="Card-Activity">
      <div className="face front">
        <img
          alt="imagen de activity"
          className="img-cardActivity"
          src={props.image}
        ></img>
        <h2 className="h-activityF">{props.name.toUpperCase()}</h2>
      </div>
      <div className="face back">
        <h2 className="h-activityB">{props.name.toUpperCase()}</h2>
        <p className="p-activity">{props.description}</p>
        <div className="Link-turnos">
          <button
            className="button-onclose"
            onClick={(e) => props.handleOnClick(props.id, e)}
          >
            BORRAR
          </button>
        </div>
      </div>
    </div>
  );
}

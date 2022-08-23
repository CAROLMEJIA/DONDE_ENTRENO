import React from "react";
import { useDispatch } from "react-redux";
import "../estilos/ActivityCard.css";

export default function ActivAdmCard(props) {
  const dispatch = useDispatch();

  return (
    <div className="Card-Activity">
      <div className="face front">
        <img
          alt="imagen de activity"
          className="img-cardActivity"
          src={props.image}
        ></img>
        <h2 className="h-activityF">{props.name}</h2>
      </div>
      <div className="face back">
        <h2 className="h-activityB">{props.name}</h2>
        <p className="p-activity">{props.description}</p>
        <div className="Link-turnos">
          <button
            className="LinkCard"
            onClick={dispatch(props.deleteActiv(props.id))}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}

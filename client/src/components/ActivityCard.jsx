import React from "react";
import { Link, useParams } from "react-router-dom";
import "./estilos/ActivityCard.css";

let userls = JSON.parse(localStorage.getItem("usuario"));

if(!userls) {
  userls = false;
}

export default function ActivityCard(props) {
  if (userls) {
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
            <Link className="LinkCard" to={`/Turnos/${props.name}`}>
              Turnos
            </Link>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="activity-container">
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
              <Link className="LinkCard" to="/loginUser">
                Turnos
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

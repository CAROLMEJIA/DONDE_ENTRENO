import React from "react";
import { Link } from "react-router-dom";
import "./estilos/ActivityCard.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ActivityCard(props, ) {

  if (true) {
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
            <Link className="LinkCard" to="/Turnos">
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

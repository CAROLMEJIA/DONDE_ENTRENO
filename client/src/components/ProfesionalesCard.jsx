import React from "react";

export default function ProfCard(props) {
  return (
    <div className="Card">
      <img alt="imagen de staff" className="img-card" src={props.image}></img>
      <div className="h-card">
        <h2>{props.name}</h2>
        <p>{props.info}</p>
      </div>
    </div>
  );
}

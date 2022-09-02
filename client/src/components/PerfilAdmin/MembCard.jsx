import React from "react";
import logo from "../estilos/logo nav/logoNav.png";
import "../estilos/membershipCards.css";

const MembCard = (info) => {
  return (
    <div className="Card-Member">
      <div className="face front">
        <h2 className="hmember">Membresía</h2>
        <img alt="HenryLogo" className="img-cardMembership" src={logo} />
        <h2 className="h-memberF">{info.type.toUpperCase()}</h2>
      </div>
      <div className="face back">
        <h2 className="h-memberB">{info.type.toUpperCase()}</h2>
        <p className="p-member">{info.description}</p>
        <p className="p-member">{info.price} U$D</p>
        <div className="Link-turnos">
          <a href={`/EditMemb/${info.id}`}>
            <button className="button-editar">Editar</button>
          </a>
          <button
            className="button-onclose"
            onClick={() => info.handleOnClick(info.id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembCard;

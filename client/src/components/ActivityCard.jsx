import React from "react";

export default function ActivityCard(props) {
    return (
        <div className="Card-Activity">
            <img alt="imagen de activity" className="img-cardActivity" src={props.image}></img>
            <div className="h-cardActivity">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
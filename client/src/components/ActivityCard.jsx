import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./estilos/ActivityCard.css";
import { ratingActv } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function ActivityCard(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ratingActv());
  }, [dispatch]);
  const rating = useSelector((state) => state.ratingCard);
  var filtro = [];
  if (rating.length > 0) {
    filtro = rating.filter((r) => r.activityId === props.id);
    if (filtro.length > 0) {
      var array = [];
      var span = filtro[0].rating;
      if (span === 1) {
        array.push(span);
        array.push("hola");
        array.push("hola");
        array.push("hola");
        array.push("hola");
      } else if (span === 2) {
        array.push(1);
        array.push(span);
        array.push("hola");
        array.push("hola");
        array.push("hola");
      } else if (span === 3) {
        array.push(1);
        array.push(2);
        array.push(span);
        array.push("hola");
        array.push("hola");
      } else if (span === 4) {
        array.push(1);
        array.push(2);
        array.push(3);
        array.push(span);
        array.push("hola");
      } else if (span === 5) {
        array.push(1);
        array.push(2);
        array.push(3);
        array.push(4);
        array.push(span);
      }
    }
  }

  if (props.userls) {
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
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div className="estrellitas">
            <h6 className="h5-votos">
              {filtro.length > 0 ? filtro[0].votes : null} Votos recibidos
            </h6>
            {array &&
              array?.map((e, index) => {
                return typeof e !== "string" ? (
                  <span id="pintada" key={index} className="fa fa-star checked" />
                ) : (
                  <span id="despintada" key={index} className="fa fa-star"></span>
                );
              })}
          </div>

          <div className="Link-turnos">
            <Link
              className="LinkCard"
              to={`/Turnos/${props.name.toUpperCase()}`}
            >
              Turnos
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="activity-container">
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
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="estrellitas">
              <h6 className="h5-votos">
                {filtro.length > 0 ? filtro[0].votes : null} Votos recibidos
              </h6>
              {array &&
                array?.map((e) => {
                  return typeof e !== "string" ? (
                    <span id="pintada" key={e} className="fa fa-star checked" />
                  ) : (
                    <span id="despintada" key={e} className="fa fa-star"></span>
                  );
                })}
            </div>
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

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../dropdownNav/NavBar.jsx";
import "./MisDatos.css";
import henry from "./logito.png";
import { Link } from "react-router-dom";
import {
  getUserInfo,
  subscriptionUser,
  getUserActivityList,
  postRating,
  getUserRatingList,
} from "../../redux/actions.js";

const MisDatos = () => {
  let userls = JSON.parse(localStorage.getItem("usuario"));

  if (!userls) {
    userls = false;
  }

  const user = useSelector((state) => state.user);
  const userSus = useSelector((state) => state.subscription);
  const activityList = useSelector((state) => state.userActivityList);
  const userRatingList = useSelector((state) => state.userRatingsList);

  const [ratingsDisplay, setRatingsDisplay] = useState([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getUserInfo(id));
    dispatch(subscriptionUser(id));
    dispatch(getUserActivityList(id));
    dispatch(getUserRatingList(id));
  }, [dispatch]);

  useEffect(() => {
    let superArray = activityList;
    superArray = superArray.map((a) => {
      for (let i = 0; i < userRatingList.length; i++) {
        if (userRatingList[i].activityId === a.id) {
          a.voted = true;
          a.value = userRatingList[i].value;
        }
      }
      return a;
    });

    setRatingsDisplay(superArray);
  }, [dispatch, activityList, userRatingList]);

  const handleClickStar = (activityId, value) => {
    const obj = {
      activityId: activityId,
      userId: id,
      value: value,
    };
    dispatch(postRating(obj));
    window.location.href = `/MisDatos/${id}`;  
  };

  return (
    <>
      <div className="misDatos">
        <NavBar userls={userls} />
        <div className="datosContainer">
          <div className="containDatosBox">
            <div className="misDTitlte">
              <h2>MIS DATOS</h2>
            </div>
            <img src={user.image} className="container-image-perfil" />

            <div className="elementosDatos">
              <h5 className="element">Nombre: {user.name}</h5>
              <h5 className="element">
                Fecha de nacimiento: {user.birthday ? user.birthday : "-"}
              </h5>
              <h5 className="element">DNI: {user.dni ? user.dni : "-"}</h5>
              <h5 className="element">
                Dirección:{" "}
                {user.address
                  ? user.address.charAt(0).toUpperCase() + user.address.slice(1)
                  : "-"}
              </h5>
            </div>
            <div className="buttonEdit">
              <Link to={`/MisDatosEdit/${user.id}`}>
                <button className="buttonEditStyle">EDITAR</button>
              </Link>
            </div>
            <div className="misDTitlte">
              <h2>MEMBRESIA</h2>
            </div>
            <div className="elementosDatos">
              {userSus.membership ? (
                userSus.subscription.state ? (
                  <>
                    <h5 className="element">
                      Tipo: {} {userSus.membership.type}{" "}
                    </h5>
                    <h5 className="element">
                      Vence: {}{" "}
                      {new Date(
                        userSus.subscription.end_date
                      ).toLocaleDateString()}{" "}
                    </h5>{" "}
                  </>
                ) : (
                  <h5 className="element">
                    Membresía venció el{" "}
                    {new Date(
                      userSus.subscription.end_date
                    ).toLocaleDateString()}
                  </h5>
                )
              ) : (
                <h5 className="element"> No se encuentran membresías </h5>
              )}
            </div>
            <div className="misDTitlte">
              <h2>CLASES</h2>
            </div>
            <div className="elementosDatos">
              {ratingsDisplay?.map((act) => {
                return act.voted === true ? (
                    <h5 className="element" key={act.id}>
                      {" "}
                      {act.name} {act.value}
                    </h5>
                ) : (
                  <h5 className="element" key={act.id}>
                    {" "}
                    <span>{act.name}</span>{" "}
                    <span>
                      <button onClick={() => handleClickStar(act.id, 1)}>
                        1
                      </button>
                      <button onClick={() => handleClickStar(act.id, 2)}>
                        2
                      </button>
                      <button onClick={() => handleClickStar(act.id, 3)}>
                        3
                      </button>
                      <button onClick={() => handleClickStar(act.id, 4)}>
                        4
                      </button>
                      <button onClick={() => handleClickStar(act.id, 5)}>
                        5
                      </button>
                    </span>
                  </h5>
                );
              })}
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a
          href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20el%20gimnasio"
          className="whatsapp"
          target="_blank"
        >
          {" "}
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </>
  );
};
export default MisDatos;

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../dropdownNav/NavBar.jsx";
import "./MisDatos.css";
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
  useEffect(() => {
    dispatch(getUserInfo(userls.findUser.id));
    dispatch(subscriptionUser(userls.findUser.id));
    dispatch(getUserActivityList(userls.findUser.id));
    dispatch(getUserRatingList(userls.findUser.id));
  }, [dispatch]);

  useEffect(() => {
    let superArray = activityList;
    superArray = superArray.map((a) => {
      for (let i = 0; i < userRatingList.length; i++) {
        if (userRatingList[i].activityId === a.id) {
          a.voted = true;
          a.value = userRatingList[i].value;
          let arrEstrellitas = [];
          for (let i = 1; i <= 5; i++) {
            if (i <= a.value) {
              arrEstrellitas.push("1");
            } else {
              arrEstrellitas.push("2");
            }
          }
          a.estrellitas = arrEstrellitas;
        }
      }
      return a;
    });

    setRatingsDisplay(superArray);
  }, [dispatch, activityList, userRatingList]);

  const handleClickStar = (activityId, value) => {
    const obj = {
      activityId: activityId,
      userId: userls.findUser.id,
      value: value,
    };
    dispatch(postRating(obj));
    window.location.href = `/MisDatos/${userls.findUser.id}`;
  };

  function cambiarClass(votos, id) {
    for (let i = 1; i <= votos; i++) {
      let btnEst = document.getElementById(i + (id * 10));
      btnEst.setAttribute(
        "class",
        "pintada botonEstrellado fa fa-star checked"
      );
    }
  }

  function sacarClass(votos, id) {
    for (let i = 1; i <= votos; i++) {
      let btnEst = document.getElementById(i + (id * 10));
      btnEst.setAttribute("class", "botonEstrellado fa fa-star checked");
    }
  }

  return (
    <div className="misDatos">
      <NavBar userls={userls} />
      <div className="totalContainer">
        <div className="containerDerecha">
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
              <Link to={`/MisDatosEdit/${userls.findUser.id}`}>
                <button className="buttonEditStyle">EDITAR</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="containerIzquierda">
          <div className="containerArriba">
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
                <h5 className="notFound"> No se encuentran membresías </h5>
              )}
            </div>
          </div>
          <div className="containerAbajo">
            <div className="misDTitlte">
              <h2>CLASES</h2>
            </div>
            <div className="elementosDatos">
              {ratingsDisplay?.map((act) => {
                return act.voted === true ? (
                  <h5 className="element" key={act.id}>
                    {" "}
                    <span className="span-de-name">{`${act.name} : `}</span>
                    {act.estrellitas?.map((e, index) => { return e === "1" ? (
                      <span key={index + 100} className="pintada botonEstrellado fa fa-star"
                      ></span>
                    ) : (<span key={index + 100} className="botonEstrellado fa fa-star"
                    ></span>)
                    }
                    )}
                  </h5>
                ) : (
                  <h5 className="element" key={act.id}>
                    {" "}
                    <span className="span-de-name">{`${act.name} : `}</span>
                    {" "}
                    <span>
                      <span
                        id={1 + (act.id * 10)}
                        className="botonEstrellado fa fa-star"
                        onMouseLeave={() => sacarClass(1, act.id)}
                        onMouseOver={() => cambiarClass(1, act.id)}
                        onClick={() => handleClickStar(act.id, 1)}
                      ></span>
                      <span
                        id={2 + (act.id * 10)}
                        className="botonEstrellado fa fa-star"
                        onMouseLeave={() => sacarClass(2, act.id)}
                        onMouseOver={() => cambiarClass(2, act.id)}
                        onClick={() => handleClickStar(act.id, 2)}
                      ></span>
                      <span
                        id={3 + (act.id * 10)}
                        className="botonEstrellado fa fa-star"
                        onMouseLeave={() => sacarClass(3, act.id)}
                        onMouseOver={() => cambiarClass(3, act.id)}
                        onClick={() => handleClickStar(act.id, 3)}
                      ></span>
                      <span
                        id={4 + (act.id * 10)}
                        className="botonEstrellado fa fa-star"
                        onMouseLeave={() => sacarClass(4, act.id)}
                        onMouseOver={() => cambiarClass(4, act.id)}
                        onClick={() => handleClickStar(act.id, 4)}
                      ></span>
                      <span
                        id={5 + (act.id * 10)}
                        className="botonEstrellado fa fa-star"
                        onMouseLeave={() => sacarClass(5, act.id)}
                        onMouseOver={() => cambiarClass(5, act.id)}
                        onClick={() => handleClickStar(act.id, 5)}
                      ></span>
                    </span>
                  </h5>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MisDatos;

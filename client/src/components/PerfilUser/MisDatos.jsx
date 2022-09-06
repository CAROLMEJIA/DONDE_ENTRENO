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
  ratingActv,
  postRating,
} from "../../redux/actions.js";

const MisDatos = () => {
  let userls = JSON.parse(localStorage.getItem("usuario"));

  if (!userls) {
    userls = false;
  }

  const user = useSelector((state) => state.user);
  const userSus = useSelector((state) => state.subscription);
  const activityList = useSelector((state) => state.userActivityList);
  const ratingList = useSelector((state) => state.ratingCard);

  const [test, setTest] = useState();

  const [input, setInput] = useState({});

  const handleInput = (e) => {
    console.log(e.name);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.name);

    //dispatch(editUser(input));
    //alert("Datos editados exitosamente");
    //window.location.href = `/MisDatos/${user.id}`
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getUserInfo(id));
    dispatch(subscriptionUser(id));
    dispatch(getUserActivityList(id));
    dispatch(ratingActv());
  }, [dispatch]);

  const handleClickStar = (activityId, value) => {
    const obj = {
      activityId: activityId,
      userId: id,
      value: value,
    };
    console.log("Boton Rate: ", obj);
    dispatch(postRating(obj));
  };

  //console.log ('user', user)
  //console.log("sus", userSus);
  //console.log("Activity List: ", activityList);
  //console.log("Rating List: ", ratingList);

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
              <Link to={`/MisDatosEdit/${user.id}`}>
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
                      Tipo: { } {userSus.membership.type}{" "}
                    </h5>
                    <h5 className="element">
                      Vence: { }{" "}
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
              {activityList?.map((act) => {
                return (
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
      </div>
    </div>

  )
};
export default MisDatos;

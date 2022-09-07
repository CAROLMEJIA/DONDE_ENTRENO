import React from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getTurns, subscriptionUser, getUserActivityList } from "../redux/actions";
import FilterActivity from "./FilterActivity";
import NavBar from "./dropdownNav/NavBar.jsx";
import "./estilos/Calendario.css";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import SubscripcionAct from './PerfilUser/SubscripcionAct'

export default function Calendario() {
  const dispatch = useDispatch();
  const { nameA } = useParams();
  const allturnos = useSelector((state) => state.allTurn);
  const filtrado = allturnos.filter((turn) => turn.activity?.name.toUpperCase() === nameA.toUpperCase());
  const activityList = useSelector((state) => state.userActivityList);

  let dias = [];
  let horas = [];

  let userls = JSON.parse(localStorage.getItem("usuario"));
  useEffect(() => {
    dispatch(subscriptionUser(userls.findUser.id))
    dispatch(getTurns(filtrado));
    dispatch(getUserActivityList(userls.findUser.id));

  }, [dispatch]);

  const subscripto = useSelector((state) => state.subscription);
  function convertirDias(d) {
    switch (d) {
      case 1:
        return "lunes";
      case 2:
        return "martes";
      case 3:
        return "miercoles";
      case 4:
        return "jueves";
      case 5:
        return "viernes";
      case 6:
        return "sabado";
      case 7:
        return "domingo";
    }
  }

  function convertirHoras(h) {
    switch (h) {
      case 7:
        return "07:00:00";
      case 8:
        return "08:00:00";
      case 9:
        return "09:00:00";
      case 10:
        return "10:00:00";
      case 11:
        return "11:00:00";
      case 12:
        return "12:00:00";
      case 13:
        return "13:00:00";
      case 14:
        return "14:00:00";
      case 15:
        return "15:00:00";
      case 16:
        return "16:00:00";
      case 17:
        return "17:00:00";
      case 18:
        return "18:00:00";
      case 19:
        return "19:00:00";
      case 20:
        return "20:00:00";
      case 21:
        return "21:00:00";
    }
  }


  for (let i = 7; i <= 21; i++) {
    dias = [];
    for (let j = 1; j <= 7; j++) {
      let aux = "";
      for (let k = 0; k < filtrado.length; k++) {
        if (
          convertirHoras(i) === filtrado[k].time &&
          convertirDias(j).toLocaleLowerCase() === filtrado[k].day.toLowerCase()
        ) {
          aux = filtrado[k];
        }
      }
      dias.push(aux);
    }
    horas.push(dias);
  }

  if (!userls) {

    userls = false;
  }

  var membresia = false;

  if (Object.keys(subscripto).length > 0) {
    if (subscripto !== "El usuario no tiene una suscripción") {
      //console.log('sub', subscripto);
      membresia = true
    }
  }
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <div className="calendarContanierDiv">
      <NavBar userls={userls} />
      <div className="div-btn-actv">
      <div className="current_date">
        <p className="h4-form"> 
          {'Fecha: ' + day + "/" + month + "/" + year}
        </p>
      </div>
        <FilterActivity nameA={nameA} />
        {membresia && <SubscripcionAct capacity={filtrado[0]?.capacity} activity={nameA} id={filtrado[0]?.activity.id} listAct={activityList} />}
      </div>
      <Table striped hover className="miTabla">
        <thead>
          <tr className="titulosCalendario">
            <th></th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
            <th>Domingo</th>
          </tr>
        </thead>
        <tbody>
          {horas?.map((d, index) => (
            <tr key={index}>
              <td className="titulosCalendario">{index + 7}:00 hs</td>
              {d?.map((h, index2) => (
                <td key={index2}>
                  <div className="tdDivContainerCardCalendar">
                    {typeof h === "object" ? (
                      <div className="activityCardCalendar">
                        <h5 className="activityCardCalendarTitulo">
                          {h.activity.name.toUpperCase()}
                        </h5>
                        <p className="textoActivityCard">
                          Duración: {h.duration} h
                        </p>
                        <p className="textoActivityCard">Cupos: {h.capacity}</p>
                      </div>
                    ) : (
                      h
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}

import React from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getTurns, deletTurn } from "../../redux/actions";
import NavBarAdmin from "./NavBarAdmin";
import "../estilos/Calendario.css";
import Footer from "../Footer";
import FilterActivityAdmin from "./FilterAdmin";
import Swal from "sweetalert2";

export default function Calendario() {
  const dispatch = useDispatch();
  const turns = useSelector((state) => state.turns);

  let dias = [];
  let horas = [];

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

  useEffect(() => {
    dispatch(getTurns(turns));
  }, [dispatch]);

  for (let i = 7; i <= 21; i++) {
    dias = [];
    for (let j = 1; j <= 7; j++) {
      let aux = "";
      for (let k = 0; k < turns.length; k++) {
        if (
          convertirHoras(i) === turns[k].time &&
          convertirDias(j) === turns[k].day.toLowerCase()
        ) {
          aux = turns[k];
        }
      }
      dias.push(aux);
    }
    horas.push(dias);
  }
  function handleOnClick(id, e, h) {
    e.preventDefault();
    Swal.fire({
      title: "Estas Seguro?",
      color: "#DFCB44",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "eliminar",
      confirmButtonColor: "#c72b2b",
      denyButtonText: `cancelar`,
      denyButtonColor: "#DFCB44",
      background: "#000000dc",
    }).then((result) => {
      if (result.isConfirmed) {
        turns.filter((turn) => turn.id !== id);
        dispatch(deletTurn(id, h));
      } else if (result.isDenied) {
        Swal.fire({
          title: "Turno guardado",
          color: "#DFCB44",
          confirmButtonText: `Continuar`,
          confirmButtonColor: "#DFCB44",
          background: "#000000dc",
        });
      }
    });
  }

  return (
    <div className="calendarContanierDiv">
      <NavBarAdmin />

      <div className="Select-SumTurn-Cont">
        <FilterActivityAdmin />
        <a href="/PostTurn" className="sumar-Turn">
          Agregar Turno
        </a>
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
          {horas.map((d, index) => (
            <tr key={index}>
              <td className="titulosCalendario">{index + 7}:00 hs</td>
              {d?.map((h, index2) => (
                <td key={index2}>
                  <div className="tdDivContainerCardCalendar">
                    {typeof h === "object" ? (
                      <div className="activityCardCalendar">
                        <button
                          onClick={(e) =>
                            handleOnClick(h.id, e, h.activity.name)
                          }
                          className="button-cerrar"
                        >
                          X
                        </button>

                        <h5 className="activityCardCalendarTitulo">
                          {h.activity?.name && h.activity.name.toUpperCase()}
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

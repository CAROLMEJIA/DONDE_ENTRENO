import React, { useEffect, useState } from "react";
import {
  filterByActivity,
  getActivities,
  getTurns,
  getAllTurns,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./estilos/FilterActivity.css";
import { useNavigate } from "react-router-dom";

let first = true;

export default function FilterActivity(props) {
  const navigate = useNavigate();

  const allActivities = useSelector((state) => state.activitiesBackUp);
  const turnos = useSelector((state) => state.allTurn);
  const [selectActivity, setSelectActivity] = useState("");
  const dispatch = useDispatch();
  const filtro = turnos.filter(
    (f) => f.activity !== null || f.turn !== undefined
  );

  useEffect(() => {
    if (turnos.length > 0 && first) {
      first = false;
      const actividad = filtro
        ? filtro.filter((act) => {
            return (
              act.activity.name.toUpperCase() === props.nameA.toUpperCase()
            );
          })
        : turnos.filter((act) => {
            return (
              act.activity.name.toUpperCase() === props.nameA.toUpperCase()
            );
          });
      dispatch(getTurns(actividad));
    }
  }, [turnos]);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllTurns());
  }, [dispatch]);

  const todasActividades = allActivities.filter(
    (e) => e.name.toUpperCase() !== props.nameA.toUpperCase()
  );

  function handleFilterByActivity(e) {
    first = false;
    e.preventDefault();
    setSelectActivity(e.target.value.toUpperCase());
    navigate(`/Turnos/${e.target.value.toUpperCase()}`);
    const actividad = filtro
      ? filtro.filter((act) => {
          return (
            act.activity.name.toUpperCase() === e.target.value.toUpperCase()
          );
        })
      : turnos.filter((act) => {
          return (
            act.activity.name.toUpperCase() === e.target.value.toUpperCase()
          );
        });

    if (actividad.length > 0) {
      console.log(actividad);
      dispatch(getTurns(actividad));
    } else {
      dispatch(getTurns([]));
    }

    dispatch(filterByActivity(e.target.value.toUpperCase()));
  }
  return (
    <div className="container-filterActivity">
      <select
        className="dropdown-filtro filter"
        id="btn-order"
        value={selectActivity}
        onChange={(e) => handleFilterByActivity(e)}
      >
        {props.nameA && (
          <option value={props.nameA}>{props.nameA.toUpperCase()}</option>
        )}
        {todasActividades &&
          todasActividades.map((el) => (
            <option className="opt" value={el.name} key={el.id}>
              {el.name?.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  filterByActivity,
  getActivities,
  getTurns,
  getAllTurns,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./estilos/FilterActivity.css";




let first = true;

export default function FilterActivity(props) {
  console.log('prop', props.nameA);
  const allActivities = useSelector((state) => state.activitiesBackUp);
  const turnos = useSelector((state) => state.allTurn);
  const [selectActivity, setSelectActivity] = useState("");
  const dispatch = useDispatch();
  const filtro = turnos.filter(f => f.activity !== null);

  useEffect(() => {

    if (turnos.length > 0 && first) {
      first = false;
      const actividad = filtro ? filtro.filter((act) => {
        return act.activity.name === props.nameA;
      }) : turnos.filter((act) => {
        return act.activity.name === props.nameA
      });
      dispatch(getTurns(actividad));
    }

  }, [turnos]);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllTurns());
  }, [dispatch]);

  const todasActividades = allActivities.filter(e => e.name !== props.nameA);


  function handleFilterByActivity(e) {
    first = false;
    e.preventDefault();
    setSelectActivity(e.target.value);
    window.location.assign(`/Turnos/${e.target.value}`);

    const actividad = filtro ? filtro.filter((act) => {
      return act.activity.name === e.target.value;
    }) : turnos.filter((act) => {
      return act.activity.name === e.target.value;
    })

    if (actividad.length > 0) {
      console.log(actividad);
      dispatch(getTurns(actividad));
    } else {
      dispatch(getTurns([]));
    }

    dispatch(filterByActivity(e.target.value));
  }
  return (
    <div className="container-filterActivity">
      <select
        className="dropdown filter"
        id="btn-order"
        value={selectActivity}
        onChange={(e) => handleFilterByActivity(e)}
      >
        {props.nameA && (<option value={props.nameA}>{props.nameA}</option>)}
        {todasActividades &&
          todasActividades.map((el) => (
            <option
              className="opt"
              value={el.name}
              key={el.id}
            >
              {el.name}
            </option>

          ))}
      </select>
    </div>
  );
}

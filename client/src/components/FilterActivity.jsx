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

export default function FilterActivity() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllTurns());
  }, [dispatch]);

  const allActivities = useSelector((state) => state.activitiesBackUp);
  const turnos = useSelector((state) => state.allTurn);

  const [selectActivity, setSelectActivity] = useState("");

  useEffect(() => {
    if (turnos.length > 0 && first) {
        first = false;
        console.log("Hoalaaaa")
      const actividad = turnos.filter((act) => {
        return act.activity.name === turnos[0].activity.name;
      });
      dispatch(getTurns(actividad));
    }
  }, [turnos]);

  function handleFilterByActivity(e) {
    first = false;
    e.preventDefault();
    setSelectActivity(e.target.value);

    const actividad = turnos.filter((act) => {
      return act.activity.name === e.target.value;
    });

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
        {allActivities &&
          allActivities.map((el) => (
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

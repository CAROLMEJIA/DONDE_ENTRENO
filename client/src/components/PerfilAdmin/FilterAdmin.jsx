import React, { useEffect, useState } from "react";
import {
  filterByActivity,
  getActivities,
  getTurns,
  getAllTurns,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../estilos/FilterActivity.css";

let first = true;

export default function FilterActivityAdmin() {
  const allActivities = useSelector((state) => state.activitiesBackUp);
  const turnos = useSelector((state) => state.allTurn);
  const turns = useSelector((state) => state.turns);
  const [selectActivity, setSelectActivity] = useState("");
  const dispatch = useDispatch();
  console.log("selec", selectActivity);
  const turfilt = turnos.filter(
    (tu) => tu.activity !== null || tu.turn !== undefined
  );

  useEffect(() => {
    if (turnos.length > 0 && first) {
      first = false;
      const actividad =
        turfilt.length > 0
          ? turfilt.filter((act) => {
              return act.activity?.name === allActivities[0]?.name;
            })
          : turns.filter((act) => {
              return act.activity.name === turns[0].activity.name;
            });
      dispatch(getTurns(actividad));
    }
  }, [turnos]);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllTurns());
  }, [dispatch]);

  function handleFilterByActivity(e) {
    first = false;
    e.preventDefault();
    setSelectActivity(e.target.value);

    const actividad =
      turfilt.length > 0
        ? turfilt.filter((act) => {
            return act.activity.name === e.target.value;
          })
        : turns.filter((act) => {
            return act.activity.name === e.target.value;
          });

    if (actividad.length > 0) {
      console.log("act", actividad);
      dispatch(getTurns(actividad));
    } else {
      dispatch(getTurns([]));
    }

    dispatch(filterByActivity(e.target.value));
  }
  return (
    <div className="container-filterActivity">
      <select
        className="dropdown-filtro filter"
        id="btn-order"
        value={selectActivity}
        onChange={(e) => handleFilterByActivity(e)}
      >
        {allActivities &&
          allActivities.map((el) => (
            <option className="opt" value={el.name} key={el.id}>
              {el.name?.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
}

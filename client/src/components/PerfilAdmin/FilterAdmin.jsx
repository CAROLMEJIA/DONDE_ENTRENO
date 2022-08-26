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
    const [selectActivity, setSelectActivity] = useState("");
    const dispatch = useDispatch();
    const filtro = turnos.filter(f => f.activity !== null);
    console.log('eia', filtro);

    useEffect(() => {

        if (turnos.length > 0 && first) {
            first = false;
            const actividad = filtro ? filtro.filter((act) => {
                return act.activity.name === filtro[0].activity.name;
            }):turnos.filter((act) => {
                return act.activity.name === turnos[0].activity.name; });
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

        const actividad = filtro ? filtro.filter((act) => {
            return act.activity.name === e.target.value;
        }):turnos.filter((act) => {
            return act.activity.name === e.target.value; })

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
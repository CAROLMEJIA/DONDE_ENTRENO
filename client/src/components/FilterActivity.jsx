import React, { useEffect, useState } from 'react';
import { filterByActivity, getActivities, getTurns, getAllTurns } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './estilos/FilterActivity.css'

export default function FilterActivity() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivities());
        dispatch(getAllTurns());
    }, [dispatch]);
    const allActivities = useSelector((state) => state.activitiesBackUp);
    const turnos = useSelector((state) => state.allTurn);

    const [selectActivity, setSelectActivity] = useState("");



    function handleFilterByActivity(e) {
        e.preventDefault();
        setSelectActivity(e.target.value);

        const actividad = turnos.filter((act) => {
            return act.activity.name === e.target.value
        })


        if (actividad.length > 0) {
            dispatch(getTurns(actividad))
        }
        else {
            dispatch(getTurns([]))
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
                <option className="opt" >Actividades: </option>
                {allActivities &&
                    allActivities.map((el) => (
                        <option className="opt" value={el.name} key={el.id}>
                            {el.name}
                        </option>
                    ))}
            </select>

        </div>
    )
}
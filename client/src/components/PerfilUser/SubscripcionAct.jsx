import React, { useEffect, useState } from "react";
import {
    getActivities,
    updateCapacity,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";




export default function SubscripcionAct() {
    const allActivities = useSelector((state) => state.activitiesBackUp);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);


    function handleClick(e, id) {
        e.preventDefault();
        if (id !== undefined) {
            const obj = {
                activityId: id
            }
            dispatch(updateCapacity(obj))
            return alert('Se subscribio correctamente');
        }
    }
    return (
        <div>
            A cual actividad desea subsbribirse:
            <select
                className="dropdown filter"
                id="btn-order"
                onChange={(e) => handleClick(e)}
            >
                <option selected hidden>Actividades: </option>
                {allActivities.map((el) => (
                    <option className="opt"
                        onClick={(e) => handleClick(e, el.id)} key={el.id}>
                        {el.name.toUpperCase()}
                    </option>

                ))}
            </select>
        </div>
    )
}
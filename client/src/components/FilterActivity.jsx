import React, { useEffect } from 'react';
import { filterByActivity, getActivities, getTurns, getAllTurns } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function FilterActivity() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivities());
        dispatch(getAllTurns());
    }, [dispatch]);
    const allActivities = useSelector((state) => state.activitiesBackUp);
    const turnos = useSelector((state) => state.allTurn);


    function handleFilterByActivity(e) {
        e.preventDefault();

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
                className="order-Activity"
                id="btn-order"
                value="Activity"
                onChange={(e) => handleFilterByActivity(e)}
            >
                <option className="order_option" >Activities: </option>
                {allActivities &&
                    allActivities.map((el) => (
                        <option className="order_option" value={el.name} key={el.id}>
                            {el.name}
                        </option>
                    ))}
            </select>

        </div>
    )
}
import React, { useEffect } from 'react';
import { filterByActivity, getActivities } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function FilterActivity() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);
    const allActivities = useSelector((state) => state.activitiesBackUp);
    
    function handleFilterByActivity(e) {
        e.preventDefault();

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
                <option >all</option>
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
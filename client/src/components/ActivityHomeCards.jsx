import React from "react";
import ActivityCard from "./ActivityCard.jsx";
import { useSelector } from "react-redux";
import "./estilos/AHC.css";

const AHC = ({ userls }) => {


    const activities = useSelector((state) => state.activities);
    const activitiesHome = activities.slice(0, 3)

    return (
        <div className='Cards-Activity'>
            {activitiesHome?.map(act => (
                <ActivityCard
                    key={act.id}
                    userls={userls}
                    id={act.id}
                    name={act.name}
                    image={act.image}
                    description={act.description}
                />
            ))}
        </div>
    )

};

export default AHC;

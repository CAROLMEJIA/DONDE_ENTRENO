import React from "react";
import ActivityCard from "./ActivityCard.jsx";
import { useSelector } from "react-redux";
import './estilos/AHC.css'

const AHC = () => {
    
    const activities = useSelector((state) => state.activities);
    const activitiesHome = activities.slice(1, 4)

    return (
        <div className = 'Cards-Activity'>
            {activitiesHome?.map(act => (
                <ActivityCard
                    key = {act.id}
                    name = {act.name}
                    image = {act.image}
                    description = {act.description}
                />
            ))}
        </div>
    ) 
};

export default AHC
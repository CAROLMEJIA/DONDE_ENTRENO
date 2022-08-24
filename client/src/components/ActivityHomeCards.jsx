import React from "react";
import ActivityCard from "./ActivityCard.jsx";
import { useSelector } from "react-redux";
import './estilos/AHC.css'

const AHC = ({logged, user}) => {
    
    const activities = useSelector((state) => state.activities);
    const activitiesHome = activities.slice(0, 3)

    return (
        <div className = 'Cards-Activity'>
            {activitiesHome?.map(act => (
                <ActivityCard
                    logged = {logged}
                    user = {user}
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
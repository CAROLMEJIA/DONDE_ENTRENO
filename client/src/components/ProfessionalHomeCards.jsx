import React from "react";
import ProfCard from './ProfesionalesCard';
import { useSelector } from "react-redux";
import './estilos/AHC.css'

const PHC = () => {
    
    const profes = useSelector((state) => state.professionals);
    let profesHome = [];
    if(Array.isArray(profes)){
        profesHome = profes.slice(0, 3)
    }
   

    return (
        <div className = 'Cards-Activity'>
            {profesHome? profesHome.map(e => (
                <ProfCard
                    key={e.id}
                    image={e.image} 
                    name={e.name} 
                    info={e.info}
                />
            ))
            :null
        }
        </div>
    ) 
};

export default PHC
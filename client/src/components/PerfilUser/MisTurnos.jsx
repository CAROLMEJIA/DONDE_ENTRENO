import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTurns } from "../../redux/actions";


const MisTurnos = () => {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
    const classPass = useSelector(state => state.allTurn)
    

    useEffect(() => {
        
    })
    
    return (
        <>
        <div className = 'miPerfilHome'>

        </div>

        </>
    )
}
export default MisTurnos
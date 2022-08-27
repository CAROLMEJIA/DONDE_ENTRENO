import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


const MisTurnos = () => {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch()
    })
    return (
        <>
        <div className = 'miPerfilHome'>

        </div>

        </>
    )
}
export default MisTurnos
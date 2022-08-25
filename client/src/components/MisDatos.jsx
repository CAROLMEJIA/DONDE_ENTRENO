import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import NavBar from "./dropdownNav/NavBar.jsx";


const MisDatos = () => {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch()
    })
    return (
        <>
        <div className = 'misDatos'>
        <NavBar/>


        </div>

        </>
    )
}
export default MisDatos
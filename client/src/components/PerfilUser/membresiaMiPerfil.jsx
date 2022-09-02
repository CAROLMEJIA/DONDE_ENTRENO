import React from "react";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getMemberships } from "../redux/actions.js";
import MembershipCard from '../MembresiaCard.jsx';
import './estilos/MHC.css'

const membresiaMisDatos = ({userls}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getMemberships())
    }, [dispatch])

    console.log("membresia", membresias)

    return (
        <>
            <div className = 'Cards-member'>
                {membresias?.map(mem => (
                    <MembershipCard
                        userls = {userls}
                        key = {mem.id}
                        id = {mem.id}
                        type = {mem.type}
                        price = {mem.price}
                        description = {mem.description}
                    />
                ))}
            </div>
        </>
    )
}

export default MCH
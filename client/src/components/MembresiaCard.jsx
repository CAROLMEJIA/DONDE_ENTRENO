import React from "react";
import logo from './estilos/Logo NAV/1.png'
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getMemberships } from "../redux/actions.js";


const MembershipCard = (info) => {
        return (
            <div className = "Card-Activity">
                <div className = "face front">
                    <img
                        alt = "imagen de activity"
                        className = "img-cardActivity"
                        src = {logo}
                    ></img>
                    <h2 className = "h-activityF">{info.type}</h2>
                </div>
                <div className = "face back">
                    <p className = "p-activity">{info.description}</p>
                    <p className = "p-activity">{info.price}</p>
                    <div className = "Link-turnos">
                        SUBSCRIBIRME
                    </div>
                </div>
            </div>
        )
}


const Memberships = () => {
    const membresias = useSelector(state => state.membresias)
    const dispatch = useDispatch(dispatch)

    
    useEffect(() => {
        dispatch(getMemberships())
    }, [dispatch])


    return (
        <>
            <div className = 'Cards-Activity'>
                {membresias?.map(mem => (
                    <MembershipCard
                        key = {mem.id}
                        tipo = {mem.type}
                        image = {mem.price}
                        description = {mem.description}
                    />
                ))}
            </div>
        </>
    )
}

export default Memberships
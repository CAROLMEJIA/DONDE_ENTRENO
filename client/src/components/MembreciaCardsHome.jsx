import React from "react";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getMemberships } from "../redux/actions.js";
import MembershipCard from './MembresiaCard';

const MCH = () => {
    const membresias = useSelector(state => state.memberships)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getMemberships())
    }, [dispatch])

    console.log("membresia", membresias)

    return (
        <>
            <div className = 'Cards-Activity'>
                {membresias?.map(mem => (
                    <MembershipCard
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
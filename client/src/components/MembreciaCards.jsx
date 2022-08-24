import React from "react";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getMemberships } from "../redux/actions.js";
import MembershipCard from './MembresiaCard';


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
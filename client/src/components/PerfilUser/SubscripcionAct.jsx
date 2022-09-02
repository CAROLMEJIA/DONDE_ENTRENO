import React, { useEffect, useState } from "react";
import {
    updateCapacity,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




export default function SubscripcionAct(props) {
    console.log('pp', props.capacity, props.id, props.activity);
    const dispatch = useDispatch();
    const navigate = useNavigate();




    function handleClick(e) {
        e.preventDefault();
        if (props.id !== undefined) {
            if (props.capacity === 0) {
                Swal.fire({
                    title: "La actividad no tiene cupo",
                    icon: 'warning',
                    color: '#DFCB44',
                    confirmButtonText: "continuar",
                    confirmButtonColor: '#DFCB44',
                    background: '#000000dc'
                })

            } else {
                const obj = {
                    activityId: props.id
                }
                dispatch(updateCapacity(obj))
                Swal.fire({
                    title: "Se subscribio correctamente",
                    icon: 'success',
                    color: '#DFCB44',
                    confirmButtonText: "continuar",
                    confirmButtonColor: '#DFCB44',
                    background: '#000000dc'
                });

            }
        }
    }
    return (
        <div>
            Subscribirse a la actividad:
            <button
                /* className="dropdown filter" */
                id="btn-order"
                onClick={(e) => handleClick(e)}
                className="opt"
            >
                {`${props.activity.toUpperCase()}`}
            </button>
        </div>
    )
}
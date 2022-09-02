import React from "react";
import {
    getTurns,
    updateCapacity,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../estilos/Calendario.css";




export default function SubscripcionAct(props) {
    console.log('pp', props.capacity, props.id, props.activity);
    const dispatch = useDispatch();
    const navigate = useNavigate();




    async function handleClick(e) {
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
                await Swal.fire({
                    title: "Se subscribio correctamente",
                    icon: 'success',
                    color: '#DFCB44',
                    confirmButtonText: "continuar",
                    confirmButtonColor: '#DFCB44',
                    background: '#000000dc'
                });

                /*  navigate(`/Turnos/${props.activity}`)  */
                window.location.assign(`/Turnos/${props.activity}`)

            }

        }
    }
    return (
        <div className='subscription-Act'>
            <button
                 /* className="dropdown-filtro" */ 
                 className="btn-peton"
                id="btn-order"
                onClick={(e) => handleClick(e)}
                
            > SUBSCRIBIRSE A 
                {` ${props.activity.toUpperCase()}`}
            </button>
        </div>
    )
}




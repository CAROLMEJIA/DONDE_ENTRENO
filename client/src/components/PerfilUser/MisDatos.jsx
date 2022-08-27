import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../dropdownNav/NavBar.jsx'
import './MisDatos.css'
import henry from './logito.png'
import { Link } from "react-router-dom";

const MisDatos = () => {
    // const userData = useSelector(state => state.user)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch()
    // })
    let user = JSON.parse(localStorage.getItem("usuario"));
    
    return (
        <>
        <div className = 'misDatos'>
        <NavBar/>
            <div className="datosContainer">
                <div className="containDatosBox">
                    <div className="misDTitlte">
                        <h2 >MIS DATOS</h2>
                    </div>
                        <img src={henry}  className="containerHENRY"/>
                    <div className="elementosDatos">
                        <h5 className="element">ID Cliente: 378AC12P</h5>
                        <h5 className="element">Nombre: Juancho Tacorta</h5>
                        <h5 className="element">Fecha de nacimiento: 13/07/1998</h5>
                        <h5 className="element">DNI: 40.985.321</h5>
                        <h5 className="element">Dirección: Segurola y Habana 4310, séptimo piso</h5>
                        <h5 className="element">Contraseña: ************ </h5>
                    </div>
                    <div className="buttonEdit">
                        <Link to = '/MisDatosEdit'>
                            <button className="buttonEditStyle">EDITAR</button>
                        </Link>
                    </div>
                </div> 
            </div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20el%20gimnasio" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
        </div>

        </>
    )
}
export default MisDatos
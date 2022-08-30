import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import NavBar from '../dropdownNav/NavBar.jsx'
import './MisDatos.css'
import henry from './logito.png'
import { Link } from "react-router-dom";
import { getUserInfo } from "../../redux/actions.js";

const MisDatos = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [dispatch])

    console.log ('user', user)
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
                        <h5 className="element">ID Cliente: {user.id}</h5>
                        <h5 className="element">Nombre: {user.name}</h5>
                        <h5 className="element">Fecha de nacimiento: {user.birthday ? user.birthday : '-'}</h5>
                        <h5 className="element">DNI: {user.dni? user.dni : '-'}</h5>
                        <h5 className="element">Dirección: {user.address? user.address.charAt(0).toUpperCase() + user.address.slice(1) : '-'}</h5>
                    </div>
                    <div className="buttonEdit">
                        <Link to = {`/MisDatosEdit/${user.id}`}>
                            <button className="buttonEditStyle">EDITAR</button>
                        </Link>
                    </div>
                </div> 
            </div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20el%20gimnasio" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
        </div>

        </>
    )
}
export default MisDatos
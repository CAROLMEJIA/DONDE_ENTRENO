import React from "react";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import NavBar from '../dropdownNav/NavBar.jsx'
import './MisDatos.css'
import henry from './logito.png'
import { Link } from "react-router-dom";
import { getUserInfo, subscriptionUser } from "../../redux/actions.js";
import ModalEdit from "./ModalEdit.jsx"



const MisDatos = () => {

    let userls = JSON.parse(localStorage.getItem("usuario"));

    if(!userls) {
      userls = false;
    }

    const user = useSelector(state => state.user)
    const userSus = useSelector(state => state.subscription)

    const [input, setInput] = useState({})

    const handleInput = (e) => {
        console.log(e.name)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.name)

        //dispatch(editUser(input));
        //alert("Datos editados exitosamente");
        //window.location.href = `/MisDatos/${user.id}`
    }

    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getUserInfo(id));
        dispatch(subscriptionUser(id));
    }, [dispatch])

    //console.log ('user', user)
    console.log ('sus', userSus)

    return (
        <>
        <div className = 'misDatos'>
        <NavBar userls={userls} />
            <div className="datosContainer">
                <div className="containDatosBox">
                    <div className="misDTitlte">
                        <h2>MIS DATOS</h2>
                    </div>
                    <img src={user.image}  className="container-image-perfil"/>

                    <div className="elementosDatos">
                        {/* <h5 className="element">ID Cliente: {user.id}</h5> */}
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
                    <div className="misDTitlte">
                        <h2>MEMBRESIA</h2>
                    </div>   
                    <div className="elementosDatos">
                        { userSus.membership ? <>
                        <h5 className="element">Tipo: { } {userSus.membership.type} </h5>
                        <h5 className="element">Vence: { } {new Date(userSus.subscription.end_date).toLocaleDateString()} </h5> </>: <h5 className="element"> No tiene membresía activa </h5>}
                    </div>
                    <div className="misDTitlte">
                        <h2>CLASES</h2>
                    </div>   
                    <div className="elementosDatos">
                        {

                        }
                        <h5 className="element">SPINNING - puntuar </h5>
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
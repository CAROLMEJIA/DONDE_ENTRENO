import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from '../dropdownNav/NavBar.jsx'
import './MisDatos.css'
import henry from './logito.png'
import { getUserInfo, editUser } from "../../redux/actions.js";
const EditMisDatos = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [dispatch])

    const [input, setInput] = useState(
        {
            id: id,
            address: ""
        }
    )
    
    console.log(input)

    const handleInput = (e) => {
        console.log(e.name)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser(input));
        alert("Datos editados exitosamente");
        window.location.href = `/MisDatos/${user.id}`
    }
    return (
        <>
            <div className='misDatos'>
                <NavBar />
                <div className="datosContainer">
                    <div className="containDatosBox">
                        <div className="misDTitlte">
                            <h2 >MIS DATOS</h2>
                        </div>
                        <img src={henry} className="containerHENRY" />
                        <form className="elementosDatos" onSubmit={(e) => handleSubmit(e)}>
                            <h5 className="element">ID Cliente: {user.id}</h5>
                            <h5 className="element">Nombre: {user.name}</h5>
                            <h5 className="element">Fecha de nacimiento: {user.birthday ? user.birthday : '-'}</h5>
                            <h5 className="element">DNI: {user.dni ? user.dni : '-'}</h5>
                            <div className='elementInput' >
                                <label>Dirección: </label>
                                <input
                                    placeholder="Nueva dirección..."
                                    type="text"
                                    className="inputEdit"
                                    name='address'
                                    value={input.address}
                                    onChange={(e) => handleInput(e)}
                                />
                            </div>
                            <div className='elementInput'>
                                <label >Contraseña: </label>
                                <input
                                    placeholder="Nueva contraseña..."
                                    type="text"
                                    className="inputEdit"
                                    name='password'
                                    value={input.password}
                                    onChange={(e) => handleInput(e)}
                                />
                            </div>
                        </form>
                        <div className="buttonEdit">
                            <button className="buttonEditStyle" type="submit" onClick={handleSubmit}>LISTO</button>
                        </div>
                    </div>
                </div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <a href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20el%20gimnasio" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
            </div>

        </>
    )
}
export default EditMisDatos
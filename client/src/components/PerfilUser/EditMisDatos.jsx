import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { FormGroup, Input } from "reactstrap";
import NavBar from '../dropdownNav/NavBar.jsx'
import './MisDatos.css'
import { getUserInfo, editUser } from "../../redux/actions.js";
import { Link } from 'react-router-dom'

let aux = false;

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
        }
    )

    const [image, setImagen] = useState();


    const upLoadImage = async (e) => {
        aux = true;
        const body = new FormData();
        const files = e.target.files;
        body.append("file", files[0]);
        body.append("upload_preset", "HenryFitnes");

        const img = await fetch(
            "https://api.cloudinary.com/v1_1/dwfwppodd/image/upload",
            {
                method: "POST",
                body: body,
            }
        );

        const file = await img.json();

        setImagen(file.secure_url);
        setInput({
            ...input,
            ["image"]: file.secure_url
        })
    };

    const handleInput = (e) => {
        //console.log(e.target.name)

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (aux && image.includes("fakepath")) {
        } else {
            dispatch(editUser(input));
            //alert("Datos editados exitosamente");
            window.location.href = `/MisDatos/${user.id}`

        }
    }

    let userls = JSON.parse(localStorage.getItem("usuario"));

    if (!userls) {
        userls = false;
    }

    return (
        <>
            <div className='misDatos'>
                <NavBar userls={userls} />
                <div className="editContainer">
                    <div className="containDatosBox">
                        <div className="misDTitlte">
                            <h2 >MIS DATOS</h2>
                        </div>
                        <form className="elementosDatos" onSubmit={(e) => handleSubmit(e)}>
                            <div className='elementInput' >
                                <label a="img-actv">
                                    <FormGroup
                                        value={image}
                                        onChange={(e) => setImagen(e.target.value)}
                                    >
                                        <Input
                                            id="img-actv"
                                            type="file"
                                            name="carpeta"
                                            placeholder="Sube tu imagen aqui..."
                                            onChange={upLoadImage}
                                        />
                                    </FormGroup>
                                </label>
                            </div>
                            <div className='elementInput' >
                                <label>Nombre: </label>
                                <input
                                    placeholder={user.name}
                                    type="text"
                                    className="inputEdit"
                                    name='name'
                                    value={input.name}
                                    onChange={(e) => handleInput(e)}
                                />
                            </div>
                            <div className='elementInput' >
                                <label>Fecha de nacimiento: </label>
                                <input
                                    placeholder={user.birthday ? user.birthday : null}
                                    type="date"
                                    className="inputEdit"
                                    name='birthday'
                                    value={input.birthday}
                                    onChange={(e) => handleInput(e)}
                                />
                            </div>
                            <div className='elementInput' >
                                <label>Documento: </label>
                                <input
                                    placeholder={user.dni ? user.dni : "Número de DNI"}
                                    type="text"
                                    className="inputEdit"
                                    name='dni'
                                    value={input.dni}
                                    onChange={(e) => handleInput(e)}
                                />
                            </div>
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
                        </form>
                        <Link to={`/RecuperarContrasena/?mail=${user.mail}`}>
                                <button className='buttonRecuperarCont' href={`/RecuperarContrasena/?mail=${user.mail}`}>RECUPERAR CONTRASEÑA</button>
                        </Link>
                        <div className="buttonEdit">
                            <button className="buttonEditStyle" type="submit" onClick={handleSubmit}>LISTO</button>
                            <Link to={`/MisDatos/${user.id}`}>
                                <button className='buttonBackMD' href={`/MisDatos/${user.id}`}>ATRAS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default EditMisDatos
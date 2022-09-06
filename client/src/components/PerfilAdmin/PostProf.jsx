import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProf } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import "../estilos/SumarActForm.css";
import NavBarAdmin from "./NavBarAdmin";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function PostProf() {
  const [name, setName] = useState("");
  const [image, setImagen] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const upLoadImage = async (e) => {
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
  };

  function handleSubmit(event) {
    event.preventDefault();

    const obj = { name, image, info };
    if (!name || !image || !info) {
      return Swal.fire({
        icon: 'warning',
        title: "No se pudo agregar el profesional",
        color: '#DFCB44',
        confirmButtonText: "Volver",
        confirmButtonColor: '#DFCB44',
        background: '#000000dc'
      });
    }

    if (Object.keys(error).length > 0) {
      return Swal.fire({
        icon: 'warning',
        title: "No se pudo agregar el profesional",
        color: '#DFCB44',
        confirmButtonText: "Volver",
        confirmButtonColor: '#DFCB44',
        background: '#000000dc'
      });
    } else {
      setName("");
      setImagen("");
      setInfo("");
      dispatch(postProf(obj));
      return Swal.fire({
        icon: 'success',
        title: `Sumaste a ${name} al Staff`,
        color: '#DFCB44',
        confirmButtonText: "Continuar",
        confirmButtonColor: '#DFCB44',
        background: '#000000dc'
      });
    }
  }

  function validateValue({ name, image, info }) {
    let errors = {};
    if (!name) {
      errors.name = "Nombre es requerido";
    } else if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(name)) {
      errors.name = "Nombre es Inválido";
    }
    if (!image) {
      errors.image = "Imagen es requerida";
    }
    if (!info) {
      errors.info = "Información es requerida";
    } else if (info.length > 200) {
      errors.info = "No puede superar los 200 caracteres";
    }

    return errors;
  }

  return (
    <div>
      <NavBarAdmin />
      <div className="FormActContainer">
        <h1 className="h1-form">AGREGAR STAFF</h1>
        <div>
          <Link to="/PerfilAdmin/ProfCardsAdmin" className="volver-Profs">
            VOLVER
          </Link>
        </div>
        <div className="FormCard">
          <form
            onSubmit={handleSubmit}
            onChange={() =>
              setError(
                validateValue({
                  name,
                  image,
                  info,
                })
              )
            }
            className="FormContainer"
          >
            {/*-----------------IMG-------------------*/}
            <h4 className="h4-form">Imagen:</h4>
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

              {error.image && <p className="error">{error.image}</p>}
            </label>
            {/*-----------------NOMBRE-------------------*/}
            <h4 className="h4-form">Nombre:</h4>
            <label a="name-prof">
              <Form.Control
                id="name-actv"
                name="name-prof"
                type="text"
                placeholder="Nombre del Profesional..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                /*  required */
              ></Form.Control>{" "}
              {error.name && <p className="error">{error.name}</p>}
            </label>
            {/*-----------------INFO-------------------*/}
            <h4 className="h4-form">Información:</h4>
            <label a="info-prof">
              <Form.Control
                id="description-actv"
                name="info-prof"
                type="text"
                placeholder="Información del Profesional..."
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                /* required */
              ></Form.Control>
              {error.info && <p className="error">{error.info}</p>}
            </label>
            <div className="sumarFormContainer">
              <input
                className="sumar-actForm"
                type="submit"
                value={"SUMAR STAFF"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

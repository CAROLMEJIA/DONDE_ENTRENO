import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postActiv } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import NavBarAdmin from "./NavBarAdmin";
import "../estilos/SumarActForm.css";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function PostActiv() {
  const [name, setName] = useState("");
  const [image, setImagen] = useState("");
  const [description, setDescription] = useState("");
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

    const obj = { name, image, description };

    if (!name || !image || !description) {
      return Swal.fire({
        icon: 'warning',
        title: "Faltan llenar campos",
        color: '#DFCB44',
        confirmButtonText: "Volver",
        confirmButtonColor: '#DFCB44',
        background: '#000000dc'
      });
    }

    if (Object.keys(error).length > 0) {
      return Swal.fire({
        icon: 'warning',
        title: "No se pudo agregar la actividad",
        color: '#DFCB44',
        confirmButtonText: "Volver",
        confirmButtonColor: '#DFCB44',
        background: '#000000dc'
      });
    } else {
      setName("");
      setImagen("");
      setDescription("");

      dispatch(postActiv(obj));
      return Swal.fire({
        icon: 'success',
        title: `sumaste ${name} a Actividades`,
        color: '#DFCB44',
        confirmButtonText: "Volver",
        confirmButtonColor: '#DFCB44',
        background: '#000000dc'
      });
    }
  }

  function handleChange({ name, image, description }) {
    let errors = {};
    if (!name) {
      errors.name = "Nombre es requerido";
    } else if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(name)) {
      errors.name = "Nombre es Inválido";
    }
    if (!image) {
      errors.image = "Imagen es requerida";
    }
    if (!description) {
      errors.description = "Información es requerida";
    } else if (description.length > 200) {
      errors.description = "No puede superar los 200 caracteres";
    }

    return errors;
  }

  return (
    <div>
      <NavBarAdmin />
      <div className="FormActContainer">
        <h1 className="h1-form">SUMAR ACTIVIDAD</h1>
        <div>
          <Link to="/PerfilAdmin/ActivAdmCards" className="volver-Profs">
            VOLVER
          </Link>
        </div>
        <div className="FormCard">
          <form
            onSubmit={handleSubmit}
            onChange={() =>
              setError(
                handleChange({
                  name,
                  image,
                  description,
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
            <label a="name-actv">
              <Form.Control
                id="name-actv"
                name="name-actv"
                type="text"
                placeholder="Nombre de la actividad..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
              {error.name && <p className="error">{error.name}</p>}
            </label>
            {/*-----------------INFO-------------------*/}
            <h4 className="h4-form">Descripción:</h4>
            <label a="info-actv">
              <Form.Control
                id="description-actv"
                name="description-actv"
                type="textarea"
                placeholder="Descripción de la Actividad..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
              {error.description && (
                <p className="error">{error.description}</p>
              )}
            </label>
            <div className="sumarFormContainer">
              <input
                className="sumar-actForm"
                type="submit"
                value={"SUMAR ACTIVIDAD"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

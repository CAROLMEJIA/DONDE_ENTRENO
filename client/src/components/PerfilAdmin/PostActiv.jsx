import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postActiv } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import NavBarAdmin from "./NavBarAdmin";
import "../estilos/SumarActForm.css";

export default function PostActiv() {
  const [name, setName] = useState("");
  const [image, setImagen] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const obj = { name, image, description };

    if (!name || !image || !description) {
      return alert("No se pudo agregar la atividad");
    }

    if (Object.keys(error).length > 0) {
      return alert("No se pudo agregar la actividad");
    } else {
      setName("");
      setImagen("");
      setDescription("");

      dispatch(postActiv(obj));
      return alert(`sumaste ${name} a Actividades`);
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
        <h1 className="h1-form">Sumar Actividad</h1>
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
              <Form.Control
                id="img-actv"
                name="img-actv"
                type="text"
                placeholder="Url de Imagen..."
                value={image}
                onChange={(e) => setImagen(e.target.value)}
              ></Form.Control>
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

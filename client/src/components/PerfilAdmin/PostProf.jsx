import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProf } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import "../estilos/SumarActForm.css";
import NavBarAdmin from "./NavBarAdmin";

export default function PostProf() {
  const [name, setName] = useState("");
  const [image, setImagen] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const obj = { name, image, info };
    if (!name || !image || !info) {
      return alert("No se pudo agregar el profesional");
    }

    if (Object.keys(error).length > 0) {
      return alert("No se pudo agregar el profesional");
    } else {
      setName("");
      setImagen("");
      setInfo("");
      dispatch(postProf(obj));
      return alert(`Sumaste a ${name} al Staff`);
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
        <h1 className="h1-form">Sumar Profesional</h1>
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
            <label a="img-prof">
              <Form.Control
                id="img-actv"
                name="img-prof"
                type="text"
                placeholder="Url de Imagen..."
                value={image}
                onChange={(e) => setImagen(e.target.value)}
                /* required */
              ></Form.Control>
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
                value={"SUMAR PROFESIONAL"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

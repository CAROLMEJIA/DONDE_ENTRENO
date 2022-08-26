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

    dispatch(postActiv(obj));
    return alert(`sumaste ${name} a Actividades`);
  }

  function handleChange(event) {
    event.preventDefault();

    if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(name)) {
      setError({ name: "Nombre Invalido" });
    } else {
      setError({});
    }
  }

  return (
    <div>
      <NavBarAdmin />
      <div className="FormActContainer">
        <h1 className="h1-form">Sumar Actividad</h1>
        <div className="FormCard">
          <form
            onSubmit={handleSubmit}
            onChange={handleChange}
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
                required
              ></Form.Control>
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
                required
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
                required
              ></Form.Control>
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

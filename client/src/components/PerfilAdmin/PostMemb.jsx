import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMembership } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import "../estilos/SumarActForm.css";
import NavBarAdmin from "./NavBarAdmin";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function PostMemb() {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const obj = { type, price, description };
    if (!type || !price || !description) {
      return Swal.fire({
        icon: "warning",
        title: "No se pudo agregar la membresía",
        color: "#DFCB44",
        confirmButtonText: "Volver",
        confirmButtonColor: "#DFCB44",
        background: "#000000dc",
      });
    }

    if (Object.keys(error).length > 0) {
      return Swal.fire({
        icon: "warning",
        title: "No se pudo agregar la membresía",
        color: "#DFCB44",
        confirmButtonText: "Volver",
        confirmButtonColor: "#DFCB44",
        background: "#000000dc",
      });
    } else {
      setType("");
      setPrice("");
      setDescription("");
      dispatch(postMembership(obj));
      return Swal.fire({
        icon: "success",
        title: `Sumaste Membresía`,
        color: "#DFCB44",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#DFCB44",
        background: "#000000dc",
      });
    }
  }

  function validateValue({ type, price, description }) {
    let errors = {};
    if (!type) {
      errors.type = "El tipo de membresía es requerido";
    } else if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(type)) {
      errors.type = "El tipo de membresía es Inválido";
    }
    if (!price) {
      errors.image = "El precio es requerido";
    }
    if (!description) {
      errors.description = " La descripción es requerida";
    } else if (description.length > 100) {
      errors.description = "No puede superar los 200 caracteres";
    }

    return errors;
  }

  return (
    <div>
      <NavBarAdmin />
      <div className="FormActContainer">
        <h1 className="h1-form">SUMAR MEMBRESIA</h1>
        <div>
          <Link to="/MembCards" className="volver-Profs">
            VOLVER
          </Link>
        </div>
        <div className="FormCard">
          <form
            onSubmit={handleSubmit}
            onChange={() =>
              setError(
                validateValue({
                  type,
                  price,
                  description,
                })
              )
            }
            className="FormContainer"
          >
            {/*-----------------TYPE-------------------*/}
            <h4 className="h4-form">Tipo de Membresía:</h4>
            <label a="type-prof">
              <Form.Control
                id="name-actv"
                type="text"
                placeholder="Tipo de Membresía..."
                value={type}
                onChange={(e) => setType(e.target.value)}
                /*  required */
              ></Form.Control>
              {error.type && <p className="error">{error.type}</p>}
            </label>
            {/*-----------------PRICE-------------------*/}
            <h4 className="h4-form">Precio:</h4>
            <label a="type-prof">
              <Form.Control
                id="name-actv"
                type="number"
                placeholder="Precio..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                /*  required */
              ></Form.Control>{" "}
              {error.price && <p className="error">{error.price}</p>}
            </label>
            {/*-----------------DESCRIPTION-------------------*/}
            <h4 className="h4-form">Descripción:</h4>
            <label a="info-prof">
              <Form.Control
                id="description-actv"
                type="text"
                placeholder="Descripción de la Membresía..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                /* required */
              ></Form.Control>
              {error.description && (
                <p className="error">{error.description}</p>
              )}
            </label>
            <div className="sumarFormContainer">
              <input
                className="sumar-actForm"
                type="submit"
                value={"SUMAR MEMBRESÍA"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

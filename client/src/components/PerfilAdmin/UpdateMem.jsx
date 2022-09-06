import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMembership } from "../../redux/actions";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import "../estilos/SumarActForm.css";
import NavBarAdmin from "./NavBarAdmin";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateMemb() {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      type,
      price,
      description,
    };
    console.log("obj", obj);
    if (!type && !price && !description) {
      return Swal.fire({
        icon: "warning",
        title: "Faltan llenar campos",
        color: "#DFCB44",
        confirmButtonText: "Volver",
        confirmButtonColor: "#DFCB44",
        background: "#000000dc",
      });
    }
    dispatch(updateMembership(id, obj));
    setType("");
    setPrice("");
    setDescription("");
    return Swal.fire({
      title: "Actualizaste Membresía",
      icon: "success",
      color: "#DFCB44",
      confirmButtonText: "Continuar",
      confirmButtonColor: "#DFCB44",
      background: "#000000dc",
    });
  }

  return (
    <div>
      <NavBarAdmin />
      <div className="FormActContainer">
        <h1 className="h1-form">Editar Membresía</h1>
        <div>
          <Link to="/MembCards" className="volver-Profs">
            VOLVER
          </Link>
        </div>
        <div className="FormCard">
          <form onSubmit={handleSubmit} className="FormContainer">
            {/*-----------------PRICE-------------------*/}
            <h4 className="h4-form">Price:</h4>
            <label a="name-prof">
              <Form.Control
                id="name-actv"
                name="name-prof"
                type="number"
                placeholder="Precio.."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </label>

            {/*-----------------TYPE-------------------*/}
            <h4 className="h4-form">Type:</h4>
            <label a="name-prof">
              <Form.Control
                id="name-actv"
                name="name-prof"
                type="text"
                placeholder="Tipo de membresía..."
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></Form.Control>
            </label>
            {/*-----------------DESCRIPTION-------------------*/}
            <h4 className="h4-form">Description:</h4>
            <label a="info-prof">
              <Form.Control
                id="description-actv"
                name="info-prof"
                type="text"
                placeholder="Descripcion..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </label>
            <div className="sumarFormContainer">
              <input
                className="sumar-actForm"
                type="submit"
                value={"MODIFICAR MEMBRESIA"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

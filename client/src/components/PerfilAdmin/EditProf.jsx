import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProf } from "../../redux/actions";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import "../estilos/SumarActForm.css";
import NavBarAdmin from "./NavBarAdmin";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

export default function EditProf() {
  const [name, setName] = useState("");
  const [image, setImagen] = useState("");
  const [info, setInfo] = useState("");
  /*   const [id, setId] = useState(""); */
  const dispatch = useDispatch();
  const { id } = useParams();

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

    const obj = { name, image, info, id };
    if (!name && !image && !info) {
      return alert("Faltan llenar campos");
    }
    setName("");
    setImagen("");
    setInfo("");
    dispatch(editProf(obj));
    return alert("Actualizaste Profesional");
  }

  return (
    <div>
      <NavBarAdmin />
      <div className="FormActContainer">
        <h1 className="h1-form">Editar Profesional</h1>
        <div>
          <Link to="/PerfilAdmin/ProfCardsAdmin" className="volver-Profs">
            Ver Profesionales
          </Link>
        </div>
        <div className="FormCard">
          <form onSubmit={handleSubmit} className="FormContainer">
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
              ></Form.Control>
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
              ></Form.Control>
            </label>
            <div className="sumarFormContainer">
              <input
                className="sumar-actForm"
                type="submit"
                value={"MODIFICAR PROFESIONAL"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

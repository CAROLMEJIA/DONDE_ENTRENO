import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProf } from "../../redux/actions";
import { useParams } from "react-router";

export default function EditProf() {
  const [name, setName] = useState("");
  const [image, setImagen] = useState("");
  const [info, setInfo] = useState("");
  /*   const [id, setId] = useState(""); */
  const dispatch = useDispatch();
  const { id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();

    const obj = { name, image, info, id };
    if (!name && !image && !info) {
      return alert("Faltan llenar campos");
    }

    dispatch(editProf(obj));
    return alert("Actualizaste Profe");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*-----------------IMG-------------------*/}
        <label a="img-prof">
          <input
            id="img-prof"
            name="img-prof"
            type="text"
            placeholder="URL IMG"
            value={image}
            onChange={(e) => setImagen(e.target.value)}
          ></input>
        </label>
        {/* {/*-----------------ID-------------------
        <label a="id-prof">
          <input
            id="id-prof"
            name="id-prof"
            type="number"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          ></input>
        </label> */}
        {/*-----------------NOMBRE-------------------*/}
        <label a="name-prof">
          <input
            id="name-prof"
            name="name-prof"
            type="text"
            placeholder="NOMBRE"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        {/*-----------------INFO-------------------*/}
        <label a="info-prof">
          <input
            id="info-prof"
            name="info-prof"
            type="text"
            placeholder="INFO"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></input>
        </label>
        <input type="submit" value={"MODIFICAR PROFE"} />
      </form>
    </div>
  );
}

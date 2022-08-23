import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postActiv } from "../../redux/actions";

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
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {/*-----------------IMG-------------------*/}
        Imagen:
        <label a="img-actv">
          <input
            id="img-actv"
            name="img-actv"
            type="text"
            placeholder="URL IMG"
            value={image}
            onChange={(e) => setImagen(e.target.value)}
            required
          ></input>
        </label>
        {/*-----------------NOMBRE-------------------*/}
        Nombre:
        <label a="name-actv">
          <input
            id="name-actv"
            name="name-actv"
            type="text"
            placeholder="NOMBRE"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          {error.name && <p>{error.name}</p>}
        </label>
        {/*-----------------INFO-------------------*/}
        Descripcion:
        <label a="info-actv">
          <input
            id="description-actv"
            name="description-actv"
            type="text"
            placeholder="DESCRIPCION"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
        </label>
        <input type="submit" value={"SUMAR ACTIVIDAD"} />
      </form>
    </div>
  );
}

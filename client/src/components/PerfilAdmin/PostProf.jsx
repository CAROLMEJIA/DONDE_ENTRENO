import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProf } from "../../redux/actions";

export default function PostProf() {
  const [name, setName] = useState("");
  const [image, setImagen] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const obj = { name, image, info };

    dispatch(postProf(obj));
    return alert("Sumaste Profe al Staff");
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
        <label a="img-prof">
          <input
            id="img-prof"
            name="img-prof"
            type="text"
            placeholder="URL IMG"
            value={image}
            onChange={(e) => setImagen(e.target.value)}
            required
          ></input>
        </label>
        {/*-----------------NOMBRE-------------------*/}
        Nombre:
        <label a="name-prof">
          <input
            id="name-prof"
            name="name-prof"
            type="text"
            placeholder="NOMBRE"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          {error.name && <p>{error.name}</p>}
        </label>
        {/*-----------------INFO-------------------*/}
        Info:
        <label a="info-prof">
          <input
            id="info-prof"
            name="info-prof"
            type="text"
            placeholder="INFO"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
          ></input>
        </label>
        <input type="submit" value={"SUMAR PROFE"} />
      </form>
    </div>
  );
}

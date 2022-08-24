import React, { useEffect } from "react";
import "./estilos/Registeruser.css";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { postRegister } from "../redux/actions";

export function validate(register) {
  const error = {};
  if (!register.name) {
    error.name = "*name is required*";
  } else if (/\d/.test(register.name)) {
    error.name = "invalid, not included number";
  }
  if (!register.mail) {
    error.mail = "*mail is required*";
  }
  return error;
}

export default function Registeruser() {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [register, setRegister] = useState({
    name: "",
    mail: "",
    usuario: "",
    password: "",
    connected: false,
  });

  function handleChange(e) {
    setRegister({ ...register, [e.target.name]: e.target.value });
    let objetovalidate = validate({
      ...register,
      [e.target.name]: e.target.value,
    });
    setError(objetovalidate);
  }

  function handleChangeconnected(e) {
    if (register.connected == "on") {
      setRegister({ ...register, [e.target.name]: false });
    } else {
      setRegister({ ...register, [e.target.name]: e.target.value });
    }
  }

  function sendUser(e) {
    e.preventDefault(e);
    dispatch(postRegister(register));
    setRegister({
      name: "",
      mail: "",
      usuario: "",
      password: "",
      connected: false,
    });
  }

  return (
    <div className="containeruser">
      <div className="containerregister">
        <div className="image"></div>
        <div className="userform">
          <h2 className="fw-bold text-center py-4">Registrarse</h2>
          <form className="formgroup" onSubmit={sendUser}>
            <div className="mb-2.5">
              <label htmlFor="name" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="ingresa tu nombre"
                name="name"
                value={register.name}
                className="form-control"
                onChange={handleChange}
              ></input>
              <div className="valid-feedback">¡Campo obligatorio! |</div>

              {error.name && <p>{error.name}</p>}
            </div>

            <div className="mb-2">
              <label htmlFor="correo" className="form-label">
                Correo electronico
              </label>
              <input
                type="email"
                placeholder="ingresa tu correo electronico"
                name="mail"
                value={register.mail}
                className="form-control"
                onChange={handleChange}
              ></input>
              {error.mail && <p>{error.mail}</p>}
            </div>

            <div className="mb-2">
              <label htmlFor="user" className="form-label">
                Nombre de usuario
              </label>
              <input
                type="text"
                placeholder="ingresa tu alias"
                name="usuario"
                className="form-control"
                value={register.usuario}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="ingresa tu password"
                name="password"
                value={register.password}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="containerbutton">
              <div className="mb-4">
                <input
                  type="checkbox"
                  name="connected"
                  className="form-check-input"
                  onChange={handleChangeconnected}
                />
                <label htmlFor="connected" className="form-check-label">
                  Mantenerme conectado
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={error.name && error.mail ? true : false}
                  className="button"
                >
                  registrarse
                </button>
              </div>
            </div>
          </form>
          <div className="container"></div>
        </div>
      </div>
    </div>
  );
}

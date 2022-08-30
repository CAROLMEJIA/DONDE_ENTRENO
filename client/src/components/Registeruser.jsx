
import "./estilos/Registeruser.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRegister, deleteformregister } from "../redux/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateregister = useSelector((state) => state.register);
  const loggedUser = useSelector((state) => state.logged);
 
  const [error, setError] = useState({});
  const [register, setRegister] = useState({
    name: "",
    mail: "",
    password: "",
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
    if (register.connected === "on") {
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
      password: "",
      connected: false,
    });
  }

  if(loggedUser){

    Swal.fire({
      title:"Excelente",
      text: "Usuario Registrado con exito",
      icon: "success",
      confirmButtonColor:'#23252E',
      confirmButtonText: "Seguir"
    }).then((result) => {
     dispatch(deleteformregister())
      navigate("/Home")
    })
  }

    
  if(validateregister==="Faltan datos obligatorios."){
    Swal.fire({
      title:"Perdon",
      text: validateregister,
      icon: "error",
      confirmButtonColor:'#23252E',
      confirmButtonText: "volver a registro"

    }).then((result)=>{
      dispatch(deleteformregister())
      
    })
  
    }

    if(validateregister==="Error al crear usuario"){
      Swal.fire({
        title:"Perdon",
        text: validateregister,
        icon: "error",
        confirmButtonColor:'#23252E',
        confirmButtonText: "volver a registro"
  
      }).then((result)=>{
        dispatch(deleteformregister())
        
      })
    
      }

      if(validateregister==="Error al crear usuario"){
        Swal.fire({
          title:"Perdon",
          text: validateregister,
          icon: "error",
          confirmButtonColor:'#23252E',
          confirmButtonText: "volver a login"
    
        }).then((result)=>{
          dispatch(deleteformregister())
          
        })
      
        }



  return (
    <div className="containeruser">
      <div className="containerregister">
        <div className="image"></div>
        <div className="userform">
          <h2 className="registrate">REGISTRATE</h2>
          <form className="formgroup" onSubmit={sendUser}>
            <div className="mb-2.5">
              <label htmlFor="name" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={register.name}
                className="form-control"
                onChange={e => handleChange(e)}
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
                placeholder="Ingresa tu correo electronico"
                name="mail"
                value={register.mail}
                className="form-control"
                onChange={handleChange}
              ></input>
              {error.mail && <p>{error.mail}</p>}
            </div>
            {/* <div className="mb-2">
              <label htmlFor="user" className="form-label">
                Nombre de usuario
              </label>
              <input
                type="text"
                placeholder="Ingresa tu alias"
                name="usuario"
                className="form-control"
                value={register.usuario}
                onChange={handleChange}
              ></input>
            </div> */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Ingresa tu password"
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
                  className="buttonR"
                >
                  REGISTRARSE
                </button>
              </div>
            </div>
            <div className="Yate">
              <a className="Yate" href='/loginUser'>Ya tengo cuenta</a>
            </div>
          </form>
          <div className="container"></div>
        </div>
      </div>
    </div>
  );
}

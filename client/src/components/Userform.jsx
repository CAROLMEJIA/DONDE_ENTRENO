import React, { useEffect, useState } from "react";
import "./estilos/Userform.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, deleteAlert, regiterFacebook_Google } from "../redux/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function validate(login) {
  const error = {};
  if (!login.mail) {
    error.mail = "*mail is required*";
  }
  if (!login.password) {
    error.password = "*password is required*";
  }
  return error;
}

const Login = () => {
  const clientId = "704047841570-i6n8lvda54ako40u5173qcd8os0qfphk.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client.auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);
};

export default function Userform() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const messagelogger = useSelector((state) => state.loggedmensage);
  const loggedUser = useSelector((state) => state.logged);
  const userAdmin = useSelector((state) => state.user);

  const [error, setError] = useState({});
  const [login, setLogin] = useState({
    mail: "",
    password: "",
  });
  //console.log(messagelogger)
  
  if(messagelogger==="Mail y/o contraseña incorrecta"){

    Swal.fire({
      title: "Acceso Denegado",
      text: messagelogger,
      icon: "error",
      confirmButtonColor: '#23252E',
      confirmButtonText: "volver a intentarlo"

    }).then((result) => {
      dispatch(deleteAlert())
    })
  }
  if (messagelogger === "Contraseña incorrecta") {
    Swal.fire({
      title: "Acceso Denegado",
      text: messagelogger,
      icon: "error",
      confirmButtonColor: '#23252E',
      confirmButtonText: "volver a intentarlo"

    }).then((result) => {
      dispatch(deleteAlert())
    })

    if(messagelogger==="Contraseña incorrecta"){
      Swal.fire({
        title:"Acceso Denegado",
        text: messagelogger,
        icon: "error",
        confirmButtonColor:'#23252E',
        confirmButtonText: "volver a intentarlo"
  
      }).then((result)=>{
        dispatch(deleteAlert())
      })
    
      }
   

      if(messagelogger==="Error de login"){
        Swal.fire({
          title:"Acceso Denegado",
          text: messagelogger,
          icon: "error",
          confirmButtonColor:'#23252E',
          confirmButtonText: "volver a intentarlo"
    
        }).then((result)=>{
          dispatch(deleteAlert())
        })
      
        }
  }

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
    let objetovalidate = validate({
      ...login,
      [e.target.name]: e.target.value,
    });
    setError(objetovalidate);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (login.mail.length > 0 && login.password.length > 0) {
      dispatch(userLogin(login));
      setLogin({
        mail: "",
        password: "",
      });
    } else if (login.mail.length > 0 && login.password.length === 0) {

      Swal.fire({
        title: "Ups!",
        text: "Hacen falta datos",
        icon: "warning",
        confirmButtonText: "De nuevo"
      })
    }else if(login.mail.length>0 && login.password.length==0){

      Swal.fire({
        
        title:"Ups!",
        text: "Hacen falta datos!!",
        icon: "warning",
        confirmButtonText: "De nuevo"
      })

    }
    else{
      Swal.fire({
        title: "Ups!",
        text: "Debes escribir tus datos!",
        icon: "warning",
        confirmButtonText: "De nuevo"
      })
    }
  }
  if (loggedUser === true) {
    if(userAdmin.admin) {
      return navigate("/home/admin");
    }
    navigate("/Home")
  }
  const responseFacebook = (responsef) => {
    if (responsef.name) {
      const loginfb = {
        name: responsef.name,
        password: responsef.userID,
        mail: responsef.email,
      };
      dispatch(regiterFacebook_Google(loginfb));
      if(loggedUser==true){
        navigate("/Home")
      }
    }
  };

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    
    if (response.profileObj) {
      const loginGoogle = {
        name: response.profileObj.name,
        password: response.profileObj.googleId,
        mail: response.profileObj.email,
      };
      console.log('google', loginGoogle);
      dispatch(regiterFacebook_Google(loginGoogle));
      if(loggedUser==true){
        navigate("/Home") 
      }
    }
  };

  // console.log(messagelogger?.token)
  return (
    <div className="containerform">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>INGRESA</h3>
            </div>
            <div className="cardbody">
              <form onSubmit={handleLogin}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Correo..."
                    name="mail"
                    value={login.mail}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password..."
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Recordarme
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Log In"
                    className="loginbtnA"
                    disabled={error.name ? true : false}
                  />
                  {error.password && <p className="p">{error.password}</p>}
                  {error.mail && <p className="p">{error.name}</p>}

                </div>
              </form>
            </div>
            <div className="footer">
              <div className="buttons mb-3">
                <FacebookLogin
                  appId="500036998618970"
                  fields="name,email,picture"
                  textButton="ingresa con facebook"
                  callback={responseFacebook}
                  cssClass="facebook"
                  icon={
                    <i
                      className="bi bi-facebook"
                      style={{ marginRight: "5px", marginLeft: "10px" }}
                    >
                      {" "}
                    </i>
                  }
                />

                <GoogleLogin
                  clientId="704047841570-i6n8lvda54ako40u5173qcd8os0qfphk.apps.googleusercontent.com"
                  buttonText="ingresa con google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  onChange={responseFacebook}
                />
              </div>

              <div className="d-flex justify-content-center links ">
                <a className="linkToRegister" href="/register">No tienes cuenta? Registrate</a>
              </div>
              <div className="d-flex justify-content-center">
                <a className="linkToRegister" href="/Home">Ir al Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

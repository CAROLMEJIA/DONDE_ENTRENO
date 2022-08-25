import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./estilos/Userform.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { userLogin,deleteAlert,regiterFacebook_Google} from "../redux/actions";
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
  const clientId ="704047841570-i6n8lvda54ako40u5173qcd8os0qfphk.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client.auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);
};

export default function Userform() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const messagelogger = useSelector((state) => state.loggedmensage);
  const loggedUser = useSelector((state) => state.logged);
  console.log(loggedUser)
  const [error, setError] = useState({});
  const [login, setLogin] = useState({
    mail: "",
    password: "",
  });

  
  if(messagelogger==="El email es incorrecto"){
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
    if(login.mail.length>0 && login.password.length>0){
      dispatch(userLogin(login));
      setLogin({
        mail: "",
        password: "",
      });
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
        
        title:"Ups!",
        text: "no enviaste nada!!",
        icon: "warning",
        confirmButtonText: "De nuevo"
      })


    }
  

  }
  if(loggedUser==true){
    navigate("/Home")
  }
  const responseFacebook = (responsef) => {
    if (responsef.name) {
      const loginfb = {
        name: responsef.name,
        password: responsef.userID,
        email: responsef.email,
      };
      dispatch(regiterFacebook_Google(loginfb));
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


      dispatch(regiterFacebook_Google(loginGoogle));
      
    }
  };

  // console.log(messagelogger?.token)


  return (
    <div className="containerform">
    
    
 
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Ingresa</h3>
            </div>
            <div class="cardbody">
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
                    placeholder="mail"
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
                    placeholder="password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                  />
                </div>
                <div class="row align-items-center remember">
                  <input type="checkbox" />
                  Recordarme
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                    disabled={error.name?true:false}
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
                <Link to="/register">
                  No tienes cuenta?<a href="#">Registrarse</a>
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Olvidaste tu contraseña</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

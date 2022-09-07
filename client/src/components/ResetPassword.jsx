import React,{useState} from "react";
import "./estilos/ResetPassword.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { newPassword} from "../redux/actions";
import { useDispatch,useSelector } from "react-redux";





const  ResetPassword=()=>{
const queryString=window.location.search;
const urlParams=new URLSearchParams(queryString);
const mail=urlParams.get("mail")
const Resetpassword = useSelector((state) => state.resetpassword);
console.log(Resetpassword )
 const navigate = useNavigate();
 const dispatch=useDispatch();

 const [user,setUser]=useState({
 password:"",
 confirmpassword:"",
 mail:""
 });
 user.mail=mail;
 
 const handleSubmit=(e)=>{
  e.preventDefault();
  if(user.password!=user.confirmpassword){

    Swal.fire({
      title:"Revisa!!!",
      text: "la contraseña no coincide",
      icon: "warning",
      color: "#DFCB44",
      confirmButtonColor:'#DFCB44',
      confirmButtonText: "volver",
      background: "#000000dc",

    })
  }
  if(user.password==user.confirmpassword){
         dispatch(newPassword(user))}
  if(Resetpassword=="Su contraseña ha sido actualizada"){
    Swal.fire({
      title:"Bravo!!!",
      text: Resetpassword,
      icon: "success",
      color: "#DFCB44",
      confirmButtonColor:'#DFCB44',
      confirmButtonText: "ir a login",
      background: "#000000dc",

    }).then((result)=>{
      navigate("/loginUser")
    })


  }

  }
 
  

 

  const handlevalidation=(e)=>{
    
    setUser({ ...user, [e.target.name]: e.target.value });
  }




return(
          <div className="containerform2">
         <div className="container2">
          <div className="card2">
            <div className="card-header">
              <h3>Restaura tu contraseña</h3>
            </div>
            <div className="cardbody">
              <form onSubmit={handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    value={user.password}
                    onChange={handlevalidation}
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
                    placeholder="Confirma tu contraseña"
                    name="confirmpassword"
                    value={user.confirmpassword}
                    onChange={handlevalidation}
                  />
                </div>















               
                <div className="form-group">
                  <input
                    type="submit"
                    value="Recuperar"
                    className="loginbtnA"
              
                  />
                </div>
              </form>
          
          </div>
        </div>
        </div>
        </div>
)
}
export default ResetPassword
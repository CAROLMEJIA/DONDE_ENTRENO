import React,{useEffect} from "react";
import  "./estilos/Registeruser.css";
import {useState} from "react";
import GoogleLogin from 'react-google-login';
import {gapi} from "gapi-script";
import FacebookLogin from 'react-facebook-login';
import {useDispatch} from "react-redux";
import { postRegister } from "../redux/actions";



export function validate(register){
  const error={};
  if(!register.name){
      error.name="*name is required*";
  }else if(/\d/.test(register.name)){
      error.name="invalid, not included number";
  } if(!register.email){
    error.email="*email is required*";
  }
  return error
  }






export default function Registeruser() {



  const dispatch=useDispatch();
  const [error,setError]=useState({})
  const [register,setRegister]=useState({
    name:"",
    email:"",
    usuario:"",
    password:"",
    connected:false,
  })
 
 

function handleChange(e){
  setRegister({...register,[e.target.name]:e.target.value})
  let objetovalidate=validate({...register,[e.target.name]:e.target.value})
    setError(objetovalidate)
}

function handleChangeconnected(e){
  if(register.connected=="on"){
  setRegister({...register,[e.target.name]:false})}
  else{ 
    setRegister({...register,[e.target.name]:e.target.value}) }


}

function sendUser(e){
  e.preventDefault(e)
  dispatch(postRegister(register))
  setRegister({
    name:"",
    email:"",
    usuario:"",
    password:"",
    connected:false,
  })
}


  return (
      <div className="containeruser">
             <div className="containerregister">
                <div class="image">
        

                </div>
                 <div className="userform">
                    <h2 class="fw-bold text-center py-4">Registrarse</h2>
                              <form className="formgroup"  onSubmit={sendUser}>
                                <div className="mb-2.5">

                                    <label for="name" class="form-label">Nombre Completo</label>
                                     <input type="text" placeholder="ingresa tu nombre" name="name" value={register.name} class="form-control" onChange={handleChange}></input>
                                     <div class="valid-feedback">
      ¡Campo obligatorio!
    |</div>

                                     {error.name && (<p >{error.name}</p>)}

                                </div>

                                <div className="mb-2">
                                     <label for="correo" class="form-label">Correo electronico</label>
                                     <input type="email" placeholder="ingresa tu correo electronico" name="email" value={register.email}  class="form-control" onChange={handleChange}></input>
                                     {error.email && (<p >{error.email}</p>)}
                                </div>

                                <div className="mb-2">

                                  <label for="user" class="form-label">Nombre de usuario</label>
                                  <input type="text" placeholder="ingresa tu alias" name="usuario" class="form-control" value={register.usuario}  onChange={handleChange}></input>
                                  </div>
                                <div className="mb-4">
                                     <label for="password" class="form-label">Contraseña</label>
                                     <input type="password" placeholder="ingresa tu password" name="password"  value={register.password} class="form-control" onChange={handleChange}></input>
                                </div>
                                <div className="containerbutton">
                                <div className="mb-4">
                                  <input type="checkbox" name="connected" class="form-check-input"  onChange={handleChangeconnected}/>
                                  <label for="connected" class="form-check-label">Mantenerme conectado</label>
                                </div>
                                <div>
                                <button type="submit"  disabled={(error.name && error.email)?true:false} className="button">registrarse</button>
                                </div> 
                                </div> 
                              </form>
                                      <div class="container">  
                                  </div>

                </div>
              </div>


      </div>


  );
}

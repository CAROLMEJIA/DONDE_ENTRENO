import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./estilos/Userform.css";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {gapi} from "gapi-script";
import {useDispatch} from "react-redux";
import { userLogin } from "../redux/actions";


  
  export function validate(login){
	const error={};
	if(!login.name){
		error.name="*name is required*";
	}
	if(!login.password){
	  error.password="*password is required*";
	}
	return error
	}

  const Login=()=>{
    
	const clientId="704047841570-i6n8lvda54ako40u5173qcd8os0qfphk.apps.googleusercontent.com";
   useEffect(()=>{gapi.load("client.auth2",()=>{gapi.auth2.init({clientId:clientId})})},[]) }


export default function Userform() {
	const dispatch=useDispatch();
    const [error,setError]=useState({})
	const [login,setLogin]=useState({
		name:"",
		password:"",
		email:""
	})
	function handleChange(e){
		setLogin({...login,[e.target.name]:e.target.value})
		let objetovalidate=validate({...login,[e.target.name]:e.target.value})
         setError(objetovalidate)
	}


  function handleLogin(e){
	e.preventDefault(e)
	
	dispatch(userLogin(login))
	setLogin({
		name:"",
		password:"",
	  })
	
  }
  const responseFacebook = (responsef) => {
	if(responsef.name){
	const loginfb={
		name:responsef.name,
		passsword:responsef.userID,
		email: responsef.email,	
	}
	dispatch(userLogin(loginfb))
}


	
  }

  const responseGoogle = (response) => {
	console.log(response.profileObj)
	if(response.profileObj){
		const loginGoogle={
			name:response.profileObj.name,
			passsword:response.profileObj.userID,
			email: response.profileObj.email,	
		}
		dispatch(userLogin(loginGoogle))
  }

  }



  return (
   <div  className="containerform">
    <div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Ingresa</h3>
			
			</div>
			<div class="cardbody" >
				<form onSubmit={handleLogin}>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						
						<input type="text" className="form-control" placeholder="email" name="name" value={login.name} onChange={handleChange}/>
					
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password"  name="password" value={login.password} onChange={handleChange}/>
						
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Recordarme
						
					</div>
					<div class="form-group">
						<input type="submit" value="Login"   disabled={(!error.name && !error.email)?false:true} className="btn float-right login_btn"/>
						{error.password && (<p className="p" >{error.password}</p>)}
						{error.name && (<p className="p">{error.name}</p>)}
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
                                      icon={<i className="bi bi-facebook" style={{marginRight:'5px',marginLeft:'10px'}}> </i>}/>

					<GoogleLogin
                                                   clientId="704047841570-i6n8lvda54ako40u5173qcd8os0qfphk.apps.googleusercontent.com"
                                                   buttonText="ingresa con google"
                                                   onSuccess={responseGoogle}
                                                    onFailure={responseGoogle} 
                                                   cookiePolicy={'single_host_origin'}
												   onChange={responseFacebook}/>
												  

										   
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

import React,{useState} from "react";
import axios from axios;
import Swal from "sweetalert2";


const  ForgotPassword=()=>{
 const [loading, setloading]=useState(false)
 const [mail, setMail]=useState("")
 const handleSubmit=()=>{
    e.preventDefault();
 }

  const handleEmail=(e)=>{
    setMail({ ...mail, [e.target.name]: e.target.value });
  }


return(

    <div>
   <form>
         <h3>Recuperar Contraseña</h3>
        <div>Correo Electronico</div>
        <input type="email" name="mail" placeholder="Introduce tu email" Onchange={handleEmail} required/>
        <div>
       <button type="submit">Enviar</button>
   </div>
   </form>
    </div>
)
}
export default ForgotPassword
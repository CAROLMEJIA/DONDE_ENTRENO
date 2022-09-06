import React, { useState } from "react";
import "./estilos/ForgotPassword.css";
import { forgotPassword, deleteMessagePassword } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const messageforgotpassword = useSelector((state) => state.forgotpassword)
  console.log(messageforgotpassword)

  const [loading, setloading] = useState(false)
  const [usermail, setUsermail] = useState({


    mail: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(usermail))
  }

  const handleEmail = (e) => {
    setUsermail({ ...usermail, [e.target.name]: e.target.value });
  }

  if (messageforgotpassword === "El email no esta en base de datos") {
    Swal.fire({
      title: "Email incorrecto",
      text: messageforgotpassword,
      icon: "error",
      color: "#DFCB44",
      confirmButtonColor: '#DFCB44',
      confirmButtonText: "volver a intentarlo",
      background: "#000000dc",

    }).then((result) => {
      dispatch(deleteMessagePassword())
    })

  }

  if (messageforgotpassword.length > 35) {

    Swal.fire({
      title: "Revisa!!!",
      text: messageforgotpassword,
      icon: "success",
      color: "#DFCB44",
      confirmButtonColor: '#DFCB44',
      confirmButtonText: "volver a login",
      background: "#000000dc",

    }).then((result) => {
      dispatch(deleteMessagePassword())
      navigate("/loginUser")
    })



  }

  return (
    <div className="containerform1">
      <div className="container1">
        <div className="card1">
          <div className="card-header">
            <h3>Haz olvidado tu contraseña?</h3>
          </div>
          <div className="cardbody">
            <form onSubmit={handleSubmit}>
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
                  value={usermail.mail}
                  onChange={handleEmail}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="RECUPERAR"
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
export default ForgotPassword
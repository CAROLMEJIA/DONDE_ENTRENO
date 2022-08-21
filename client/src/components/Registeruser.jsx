import React from "react";
import  "./estilos/Registeruser.css";

export default function Registeruser() {
  return (
      <div className="containeruser">
             <div className="containerregister">
                <div class="image">
        

                </div>
                 <div className="userform">
                    <h2 class="fw-bold text-center py-4">Registrarse</h2>
                              <form className="formgroup">
                                <div className="mb-3">

                                    <label for="name" class="form-label">Nombre Completo</label>
                                     <input type="text" placeholder="ingresa tu nombre" name="name" class="form-control"></input>
                                </div>

                                <div className="mb-2">
                                     <label for="correo" class="form-label">Correo electronico</label>
                                     <input type="email" placeholder="ingresa tu correo electronico" name="correo" class="form-control"></input>
                                </div>

                                <div className="mb-2">

                                  <label for="user" class="form-label">Nombre de usuario</label>
                                  <input type="text" placeholder="ingresa tu nombre" name="usuario" class="form-control"></input>
                                  </div>
                                <div className="mb-4">
                                     <label for="password" class="form-label">Contraseña</label>
                                     <input type="password" placeholder="ingresa tu password" name="password" class="form-control"></input>
                                </div>
                                <div className="containerbutton">
                                <div className="mb-4">
                                  <input type="checkbox" name="connected" class="form-check-input"/>
                                  <label for="connected" class="form-check-label">Mantenerme conectado</label>
                                </div>
                                <div>
                                <button type="submit"  className="button">registrarse</button>
                                </div> 
                                </div> 
                              </form>
                                      <div class="container">
                                          <div class="row">
                                          <div class="col-12">iniciar sesion</div>
                                          </div>
                               <div className="row">
                                     <div className="col">
                                      <button class="btn btn-outline-primary w-100 h-80 my-1">
                                          <div className="row align-items-center">
                                          <div className="col-3">
                                                  <i class="bi bi-facebook width=32"></i>
                                          </div>
                                          <div className="col-2 text-center">
                                              facebook
                                          </div>
                                          </div>
                                      </button>
                                     </div>
                                     <div class="col">
                                     <button class="btn btn-outline-danger w-100 h-80 my-1">
                                          <div class="row align-items-center">
                                          <div class="col-3">
                                                    <i class="bi bi-google"></i>
                                          </div>
                                          <div className="col-2 text-center">
                                              Google
                                          </div>
                                          </div>
                                      </button>



                                      </div>
                               </div>
                                      

                                        
                                  </div>
                          
                </div>
              </div>


      </div>


  );
}

// </div>

// <div class="col">

// <form >

// <div class="form-row">
// <label >Nombre</label>
// <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese Nombre"/>

// </div>
// <div class="form-row">
// <label >Email</label>
// <input type="apellido" class="form-control" placeholder="Ingrese Apellido"/>
// </div>

// <div class="form-row">
// <label>Password</label>
// <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
// </div>

// <div class="form-row">
// <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
// <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <div class="buttonregister">
// <button type="submit" class="btn float-right login_btn">Submit</button>
// </div>
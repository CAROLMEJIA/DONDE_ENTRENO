import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./estilos/FormPago.css";
import { stripeAction } from "../redux/actions.js"
import { getMemberships, updatePayment, subscriptionUser, updateSubscription } from "../redux/actions.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

//Por favor solo modificar del código solo el valor que reciben las variables y los estilos, el resto del código no

export default function FormPago() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const memberships = useSelector((state) => state.memberships)
  const subscription = useSelector((state) =>state.subscription)
  let payment = useSelector((state) =>state.payment)
  let payment_error = useSelector((state) => state. payment_error)
  let user = JSON.parse(localStorage.getItem("usuario"));
  const [input, setInput] = useState(
    {
      name: "",
      dni: "",
      address: "",
      birthday: ""
    }
  );

  let membership = id == 1 ? memberships[0] : memberships[1]
  let suscrip = subscription=== undefined ? false : true
  let info = {}

  
  useEffect(() => {
    dispatch(getMemberships())
    if(user === null){
      user = false
    }
    if(user){
      dispatch(subscriptionUser(user.findUser.id))
    }
    
  },[dispatch])

  
   if (membership && user) {
      info = {
        userId: user.findUser.id,
        membershipId: id,
        membershipPrice: membership.price,
        membershipType: membership.type,
        dni: input.dni,
        address: input.address,
        birthday: input.birthday
      }

  }// en este objeto coloqué la información que necesito mientras se conecta este formulario con las card de membresía

  function handdleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      console.log(paymentMethod, info);
      dispatch(stripeAction(paymentMethod, info))
      elements.getElement(CardElement).clear();

    }
  };

  
  /*useEffect(() =>{
    console.log("soy el console.log")
    if(suscrip){
      if(subscription !== "El usuario no tiene una suscripción"){
        Swal.fire({
          title: "Ya tiene una memebresía activa",
          color: "#DFCB44",
          icon: "error",
          confirmButtonColor: '#23252E',
          confirmButtonText: "OK",
          background: "#000000dc",
    
        }).then((result) => {
          dispatch(updateSubscription())
          suscrip = false
          navigate("/Home")
        })
      }
      
   }

  }, [membresiaActiva = false])*/

  if(suscrip){
    if( Object.entries(subscription).length > 1){

      if(typeof subscription !== "string"){
        Swal.fire({
          title: "Ya tiene una memebresía activa",
          color: "#DFCB44",
          icon: "error",
          confirmButtonColor: '#23252E',
          confirmButtonText: "OK",
          background: "#000000dc",
    
        }).then((result) => {
          dispatch(updateSubscription())
          suscrip = false
          navigate("/Home")
        })
      }
     
    }
    
 }// acá verifico lo que hay en subscripción mostrar el alert si ya tiene una
  
  

  if(payment_error.message){
    Swal.fire({
      title: payment_error.message,
      color: "#DFCB44",
      icon: "error",
      confirmButtonColor: '#23252E',
      confirmButtonText: "Try Again",
      background: "#000000dc",

    })
    dispatch(updatePayment())
  }else if(payment.id){
      Swal.fire({
      title: "Successful Purchase",
      color: "#DFCB44",
      icon: "success",
      confirmButtonColor: '#23252E',
      confirmButtonText: "OK",
      background: "#000000dc",

    }).then((result) => {
       navigate("/Home")
       dispatch(updatePayment())
     })
    
  }

  const cardStyle = { //Estos estilos no moverlos de acá por favor porque solo así se aplican al componente que da stripe
    style: {
      base: {
        iconColor: "#DFCB44",
        color: "#FFFEFA",
        padding: "25px",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#FFFEFA"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  if(user === null){
    user = false
  }

  if(!user){
    return(
      <>
      {navigate("/loginUser")}
      </>
    )
  }else if(user){
    return (
      <>
      {
        membership === undefined ?
         <h1>Cargando...</h1>

         : 
         <form className="form-pago" onSubmit={handleSubmit}>
         <h2>{`MEMBRESÍA ${membership ? membership.type.toUpperCase() : null}`}</h2>
         <h3>{`USD $${membership ? membership.price : null}`}</h3>

         <input value={input.name} name="name" onChange={(e) => handdleInput(e)} placeholder="Name" className="inputUser"></input>
         <input value={input.dni} name="dni" onChange={(e) => handdleInput(e)} placeholder="Dni" className="inputUser"></input>
         <input value={input.address} name="address" onChange={(e) => handdleInput(e)} placeholder="Address" className="inputUser"></input>
         <input value={input.birthday} name="birthday" onChange={(e) => handdleInput(e)} placeholder="Date of Birth" className="inputUser"></input>

         <div className="div-card-element">
           <CardElement id="card-element" options={cardStyle} />
         </div>
         <button className="boton" disabled={!stripe}>Pagar</button>
       </form>
      }
      </>

     )
    }
  }


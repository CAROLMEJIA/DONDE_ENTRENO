import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./estilos/FormPago.css";
import { stripeAction } from "../redux/actions.js"
import { getMemberships } from "../redux/actions.js";

//Por favor solo modificar del código solo el valor que reciben las variables y los estilos, el resto del código no

export default function FormPago() {

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const {id} = useParams();
  const memberships = useSelector((state) =>state.memberships)
  let user = JSON.parse(localStorage.getItem("usuario"));
  const [input, setInput] = useState(
    {
        name:"",
        dni: "",
        address: "",
        birthday: ""
    }
);
  let membership={}
  let info ={}

  useEffect(() => {
    dispatch(getMemberships())
  }, [dispatch])


  if(membership){
      if(memberships[0]?.id === id){
        membership = memberships[0];
      }else{
        membership = memberships[1];
      }
  }
 

  
  if(membership){
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
  
  function handdleInput(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })

  }

  console.log(input)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      console.log(paymentMethod);
      dispatch(stripeAction(paymentMethod, info))
      elements.getElement(CardElement).clear();

    }
  };

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

  return (
    <form className="form-pago" onSubmit={handleSubmit}>
      <h2>{`MEMBRESÍA ${membership? membership.type.toUpperCase() : null}`}</h2>
      <h4>{`USD $${membership? membership.price : null}`}</h4>
      
      <input value={input.name} name="name" onChange={(e) => handdleInput(e)} placeholder="Name"></input>
      <input value={input.dni} name="dni" onChange={(e) => handdleInput(e)} placeholder="Dni"></input>
      <input value={input.address} name="address" onChange={(e) => handdleInput(e)} placeholder="Address"></input>
      <input value={input.birthday} name="birthday" onChange={(e) => handdleInput(e)} placeholder="Date of Birth"></input>
     
      <div className="div-card-element">
        <CardElement id="card-element" options={cardStyle} />
      </div>
      <button className="boton" disabled={!stripe}>Pagar</button>
    </form>
  )
}



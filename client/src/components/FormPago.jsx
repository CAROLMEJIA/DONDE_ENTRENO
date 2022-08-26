import React from "react";
import { useDispatch } from "react-redux";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import "./estilos/FormPago.css";
import {stripeAction} from "../redux/actions.js"

//Por favor solo modificar del código solo el valor que reciben las variables y los estilos, el resto del código no

export default function FormPago(){

    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();

    let info = {
        userId: 1,
        membershipId: 1,
        membershipPrice: 10000,
        membershipType: "Plan anual"       
    } // en este objeto coloqué la información que necesito mientras se conecta este formulario con las card de membresía

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if(!error){
            console.log(paymentMethod);
            dispatch(stripeAction(paymentMethod, info))//Nesesito que me pases por favor todos los datos en un objeto que se llame info porque acá envío la información que necesito
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

    return(
       
            <form  className ="form-pago" onSubmit={handleSubmit}>
                <h2>Plan anual</h2>
                <h4>$100</h4>
                <div className="div-card-element">
                <CardElement id="card-element" options={cardStyle}/>
                </div>
                <button className="boton">Pagar</button>

            </form>
        
    )
}



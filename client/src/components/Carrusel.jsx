import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./estilos/Carrusel.css";

export default function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <img src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468" />
          <h4>"No eres lo que logras... Eres lo que superas."</h4>
          <p>Arnold Schwarzenegger</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <img src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468" />
          <h4>
            "No lo dudes, no tengas miedo, hoy da el primer paso hacia tus
            sueños."
          </h4>
          <p>Rocky Balboa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <img src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468" />
          <h4>"Cuida de tu cuerpo. Es el único lugar que tienes para vivir"</h4>
          <p>Jim Rhon</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

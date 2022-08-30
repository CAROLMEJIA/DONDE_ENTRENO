import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./estilos/Carrusel.css";

export default function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
            <img
              className="logoApp"
              src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468"
              alt="Logo App"
            />
          <div className="frase">
            <h4>"NO ERES LO QUE LOGRAS, ERES LO QUE SUPERAS"</h4>
            <p>Arnold Schwarzenegger</p>
          </div>
          <div className="btn1">
            <Link to="/Home">
              <span className="text-1">QUIERO ENTRENAR</span>
              <span className="text-2">HOME</span>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
            <img
              className="logoApp"
              src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468"
              alt="Logo App"
            />
          <div className="frase">
            <h4>
              "A LA CIMA NO SE LLEGA SUPERANDO A LOS DEMÁS, SINO SUPERÁNDOTE A
              TI MISMO"
            </h4>
            <p>ROCKY BALBOA</p>
          </div>
            <div className="btn1">
              <Link to="/Home">
                <span className="text-1">QUIERO ENTRENAR</span>
                <span className="text-2">HOME</span>
              </Link>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
            <img
              className="logoApp"
              src="https://media.discordapp.net/attachments/1008816754333597787/1009552811454890106/1.png?width=468&height=468"
              alt="Logo App"
            />
          <div className="frase">
            <h4>"CUIDA TU CUERPO, ES EL ÚNICO LUGAR QUE TIENES PARA VIVIR"</h4>
            <p>JIM RHON</p>
          </div>
          <div className="btn1">
            <Link to="/Home">
              <span className="text-1">QUIERO ENTRENAR</span>
              <span className="text-2">HOME</span>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
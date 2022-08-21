import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slice1 from "./estilos/Carrousel HOME/1.png";
import slice2 from "./estilos/Carrousel HOME/2.png";
import slice3 from "./estilos/Carrousel HOME/3.png";
import { Link } from "react-router-dom";

const CarruselHome = () => {
    return (
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <Link to="/Actividades">
            <img className="imgHome" src={slice1} alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Link to="/Turnos">
            <img className="imgHome" src={slice2} alt="Second slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Link to="/Profesionales">
            <img className="imgHome" src={slice3} alt="Third slide" />
          </Link>
        </Carousel.Item>
      </Carousel>
    );
  };

  export default CarruselHome
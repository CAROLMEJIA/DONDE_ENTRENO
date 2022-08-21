import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getActivities, getProfessionals } from "../redux/actions.js";
import Carousel from "react-bootstrap/Carousel";
import slice1 from "./estilos/fotos home/1.png";
import slice2 from "./estilos/fotos home/2.png";
import slice3 from "./estilos/fotos home/3.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./estilos/Home.css";

const Carusel = () => {
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

const Home = () => {
  const activities = useSelector((state) => state.activities);
  const profes = useSelector((state) => state.professionals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  const handleReset = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <div className="carusel">
          <Carusel className="caruso" />
        </div>
      </div>
    </>
  );
};

export default Home;

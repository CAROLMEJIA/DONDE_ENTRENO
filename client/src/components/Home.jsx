import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getActivities, getProfessionals } from "../redux/actions.js";
import { Link } from "react-router-dom";
import "./estilos/Home.css";
import NavBar from "./NavBar";
import CarruselHome from './CarruselHome.jsx'
import AHC  from './ActivityHomeCards';
import PHC from "./ProfessionalHomeCards.jsx";
import Footer from './Footer';

const Home = () => {
  const activities = useSelector((state) => state.activities);
  const profes = useSelector((state) => state.professionals);
  console.log('activ', activities)


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
          <CarruselHome className="caruso" />
        </div>
        <div className= "containerText">
          <h5>ACTIVIDADES</h5>
          <h6>Conoce más sobre nuestras Actividades y reserva un turno</h6>
        </div>
        <AHC/>
        <div className="containerBTNVERMAS">
          <Link to = '/Actividades'>
            <button className = "buttonVM">Ver mas</button>
          </Link>
        </div>
        <div className= "containerText">
          <h5>NUESTRO STAFF</h5>
        </div>
        <PHC/>
        <div className="containerBTNVERMAS">
          <Link to = '/Profesionales'>
            <button className = "buttonVM">Conocelos!</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;

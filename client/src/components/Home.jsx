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
import MCH from "./MembreciaCardsHome.jsx";
import Footer from './Footer';

const Home = () => {
  const activities = useSelector((state) => state.activities);
  const profes = useSelector((state) => state.professionals);
  const logged = useSelector ((state) => state.logged)
  const user = useSelector((state) => state.user)

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
      <NavBar 
          logged = {logged}
          user = {user}
      />
      <div className="homeContainer">
        <div className="carusel">
          <CarruselHome 
          className="caruso"
          logged = {logged}
          user = {user}
           />
        </div>
        <div className= "containerText">
          <h5>ACTIVIDADES</h5>
          <h6>Conoce más sobre nuestras Actividades y reserva un turno</h6>
        </div>
        <AHC
          logged = {logged}
          user = {user} 
        />
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
        <div className= "containerText">
          <h5>MEMBRESIAS HENRY FITNESS</h5>
          <h6>Accede a una de nuestras membresias y disfruta del mejor gimnasio de Buenos Aires</h6>
        </div>
        <MCH/>
      </div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <a href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20el%20gimnasio" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
      <Footer/>
    </>
  );
};

export default Home;

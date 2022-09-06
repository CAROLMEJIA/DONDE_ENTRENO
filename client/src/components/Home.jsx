import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActivities, getProfessionals } from "../redux/actions.js";
import { Link } from "react-router-dom";
import "./estilos/Home.css";
import NavBar from "./dropdownNav/NavBar.jsx";
import CarruselHome from "./CarruselHome.jsx";
import AHC from "./ActivityHomeCards";
import PHC from "./ProfessionalHomeCards.jsx";
import MCH from "./MembreciaCardsHome.jsx";
import Footer from "./Footer";

const Home = () => {
  useSelector((state) => state.activities);
  useSelector((state) => state.professionals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  let userls = JSON.parse(localStorage.getItem("usuario"));

  if (!userls) {
    userls = false;
  }

  return (
    <>
      <div className="homeContainer">
        <NavBar userls={userls} />
        <div className="carusel">
          <CarruselHome className="caruso" userls={userls} />
        </div>
        <div className="containerText">
          <h5>ACTIVIDADES</h5>
          <h6>Conoce más sobre nuestras Actividades y reserva un turno</h6>
        </div>
        <AHC userls={userls} />
        <div className="containerBTNVERMAS">
          <Link to="/Actividades">
            <button className="buttonVM">VER MAS</button>
          </Link>
        </div>
        <div className="containerText">
          <h5>NUESTRO STAFF</h5>
          <h6>
            Conoce a todos los profesionales que te acompañaran en Henry Fitness
          </h6>
        </div>
        <PHC />
        <div className="containerBTNVERMAS">
          <Link to="/Profesionales">
            <button className="buttonVM">CONOCELOS</button>
          </Link>
        </div>
        <div className="containerTextM">
          <h5>MEMBRESIAS HENRY FITNESS</h5>
          <h6>
            Accede a una de nuestras membresias y disfruta del mejor gimnasio de
            Buenos Aires
          </h6>
        </div>
        <MCH userls={userls} />
      </div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <a
        href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20el%20gimnasio"
        className="whatsapp"
        target="_blank"
      >
        {" "}
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </>
  );
};

export default Home;

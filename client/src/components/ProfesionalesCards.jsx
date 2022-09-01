import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals } from "../redux/actions";
import ProfCard from "./ProfesionalesCard";
import NavBar from "./dropdownNav/NavBar.jsx";
import Footer from "./Footer";
import "./estilos/ProfCards.css";
import Loader from "./Loader";

export default function ProfCards() {
  const dispatch = useDispatch();
  const Profesionales = useSelector((state) => state.professionals);
  const logged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  let userls = JSON.parse(localStorage.getItem("usuario"));

  if (!userls) {
    userls = false;
  }

  return (
    <div className="profContainer">
      <div>
        <NavBar userls={userls} />
      </div>
      <div className="CardsProf">
        {typeof Profesionales !== "string" ? (
          Profesionales?.map((e) => (
            <ProfCard key={e.id} image={e.image} name={e.name} info={e.info} />
          ))
        ) : (
          <Loader />
        )}
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
    </div>
  );
}

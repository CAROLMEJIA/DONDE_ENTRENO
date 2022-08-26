import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals } from "../redux/actions";
import ProfCard from "./ProfesionalesCard";
import NavBar from "./dropdownNav/NavBar.jsx";
import Footer from './Footer';
import "./estilos/ProfCards.css";

export default function ProfCards() {
  const dispatch = useDispatch();
  const Profesionales = useSelector((state) => state.professionals);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="CardsProf">
        {typeof Profesionales !== "string" ? (

          Profesionales?.map((e) => (
          <ProfCard key={e.id} image={e.image} name={e.name} info={e.info} />
          ))
                
        ) : (
          <p className="p-profe">{Profesionales}</p>
        )}
      </div>
      <Footer/>
    </div>
  );
}

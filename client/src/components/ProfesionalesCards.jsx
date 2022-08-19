import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals } from "../redux/actions";
import ProfCard from "./ProfesionalesCard";
import NavBar from "./NavBar";
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
        {Profesionales !== String ? (
          Profesionales.map((e) => (
            <ProfCard key={e.id} image={e.image} name={e.name} info={e.info} />
          ))
        ) : (
          <p>{Profesionales}</p>
        )}
      </div>
    </div>
  );
}

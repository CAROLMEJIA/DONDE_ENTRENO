import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals } from "../redux/actions";
import ProfCard from "./ProfesionalesCard";
import NavBar from "./NavBar";

export default function ProfCards() {
  const dispatch = useDispatch();
  const Profesionales = useSelector((state) => state.professionals);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {console.log("SoyProfesionales", Profesionales)}

      {Profesionales !== String ? (
        Profesionales.map((e) => (
          <ProfCard key={e.id} image={e.image} name={e.name} info={e.info} />
        ))
      ) : (
        <p>{Profesionales}</p>
      )}
    </div>
  );
}

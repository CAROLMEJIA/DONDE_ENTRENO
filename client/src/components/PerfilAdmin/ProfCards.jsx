import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals, deleteProf } from "../../redux/actions";
import ProfCardAdmin from "../PerfilAdmin/ProfCard";
import NavBarAdmin from "../PerfilAdmin/NavBarAdmin";
import Footer from "../Footer";
import "../estilos/ProfCards.css";

export default function ProfCardsAdmin() {
  const dispatch = useDispatch();
  const Profesionales = useSelector((state) => state.professionals);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  function handleOnClick(id) {
    Profesionales.filter((prof) => prof.id !== id);
    dispatch(deleteProf(id));
  }

  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div className="sumarContainer">
        <a href="/PerfilAdmin/PostProf" className="sumar-act">
          Sumar Profe
        </a>
      </div>
      <div className="CardsProf">
        {typeof Profesionales !== "string" ? (
          Profesionales?.map((e) => (
            <ProfCardAdmin
              key={e.id}
              image={e.image}
              name={e.name}
              info={e.info}
              handleOnClick={handleOnClick}
              id={e.id}
            />
          ))
        ) : (
          <p className="p-profe">{Profesionales}</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
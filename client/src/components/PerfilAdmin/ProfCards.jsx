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
  }, []);

  function handleOnClick(id) {
    Profesionales.filter((prof) => prof.id !== id);
    dispatch(deleteProf(id));
  }

  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div>
        <a href="/PerfilAdmin/PostProf">Sumar Profe</a>
      </div>
      <div className="CardsProf">
        {typeof Profesionales !== "string" ? (
          Profesionales?.map((e) => (
            <ProfCardAdmin
              key={e.id}
              image={e.image}
              name={e.name}
              id={e.id}
              info={e.info}
              handleOnClick={handleOnClick}
            />
          ))
        ) : (
          <p className="p-profe">NO SE ENCUENTRAN PROFESIONALES, AGREGUE ALGUNO</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

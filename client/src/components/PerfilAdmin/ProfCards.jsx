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

  function deleteProfe(id) {
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
              deleteProfe={deleteProfe}
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

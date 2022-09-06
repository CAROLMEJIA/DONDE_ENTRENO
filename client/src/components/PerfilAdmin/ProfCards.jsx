import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals, deleteProf } from "../../redux/actions";
import ProfCardAdmin from "../PerfilAdmin/ProfCard";
import NavBarAdmin from "../PerfilAdmin/NavBarAdmin";
import Footer from "../Footer";
import "../estilos/ProfCards.css";
import Swal from "sweetalert2";

export default function ProfCardsAdmin() {
  const dispatch = useDispatch();
  const Profesionales = useSelector((state) => state.professionals);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch]);

  function handleOnClick(id) {
    Swal.fire({
      title: 'Estas Seguro?',
      color: '#DFCB44',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'eliminar',
      confirmButtonColor:'#c72b2b',
      denyButtonText: `cancelar`,
      denyButtonColor: '#DFCB44',
      background: '#000000dc'
    }).then((result) => {
      if (result.isConfirmed) {
        Profesionales.filter((prof) => prof.id !== id);
        dispatch(deleteProf(id));
      } else if (result.isDenied) {
        Swal.fire({
          title: "Profesional guardado",
          color: '#DFCB44',
          confirmButtonText: "Continuar",
          confirmButtonColor: '#DFCB44',
          background: '#000000dc'
        });
      }
    })
    
  }

  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div className="sumarContainer">
        <a href="/PerfilAdmin/PostProf" className="sumar-act">
          AGREGAR STAFF
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
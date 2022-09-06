import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMemberships, deleteMembership } from "../../redux/actions";
import MembCard from "../PerfilAdmin/MembCard";
import NavBarAdmin from "../PerfilAdmin/NavBarAdmin";
import Footer from "../Footer";
import "../estilos/ProfCards.css";
import Swal from "sweetalert2";


export default function MembCards() {
  const dispatch = useDispatch();
  const Membresias = useSelector((state) => state.memberships);
 

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  function handleOnClick(id) {
    Swal.fire({
      title: "Estas Seguro?",
      color: "#DFCB44",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "eliminar",
      confirmButtonColor: "#c72b2b",
      denyButtonText: `cancelar`,
      denyButtonColor: "#DFCB44",
      background: "#000000dc",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Membresias.filter((memb) => memb.id !== id);
        await dispatch(deleteMembership(id));
        window.location.href = "/MembCards"
        
      } else if (result.isDenied) {
        Swal.fire({
          title: "Membresía guardada",
          color: "#DFCB44",
          confirmButtonText: "Continuar",
          confirmButtonColor: "#DFCB44",
          background: "#000000dc",
        });
      }
      dispatch(getMemberships());
    });
  }

  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div className="sumarContainer">
        <a href="/PostMemb" className="sumar-act">
          SUMAR MEMBRESIA
        </a>
      </div>

      <div className="CardsProf">
        {typeof Membresias !== "string" ? (
          Membresias?.map((e) => (
            <MembCard
              key={e.id}
              type={e.type}
              price={e.price}
              description={e.description}
              handleOnClick={handleOnClick}
              id={e.id}
            />
          ))
        ) : (
          <p className="p-profe">{Membresias}</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

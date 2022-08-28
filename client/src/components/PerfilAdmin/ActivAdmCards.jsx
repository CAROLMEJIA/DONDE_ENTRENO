import React from "react";
import ActivAdmCard from "./ActivAdmCard";
import NavBarAdmin from "./NavBarAdmin";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, deleteActiv } from "../../redux/actions";
import "../estilos/ActivityCards.css";
import Footer from "../Footer";
import Swal from "sweetalert2";

export default function ActivAdmCards() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleOnClick(id, e) {
    e.preventDefault();
    Swal.fire({
      title: 'Estas Seguro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'eliminar',
      denyButtonText: `guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteActiv(id))
      } else if (result.isDenied) {
        alert('actividad guardada')
      }
    })
  }

  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div className="sumarContainer">
        <a href="/PerfilAdmin/PostActiv" className="sumar-act">
          Sumar Actividad
        </a>
      </div>
      <div className="Cards-Activity">
        {Array.isArray(activities) ? (
          activities?.map((e) => (
            <ActivAdmCard
              handleOnClick={handleOnClick}
              key={e.id}
              image={e.image}
              name={e.name}
              id={e.id}
              description={e.description}
            />
          ))
        ) : (
          <p className="p-acti">No se encontró ninguna actividad</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

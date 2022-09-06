import React from "react";
import ActivAdmCard from "./ActivAdmCard";
import NavBarAdmin from "./NavBarAdmin";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, deleteActiv, getAllTurns } from "../../redux/actions";
import "../estilos/ActivityCards.css";
import Footer from "../Footer";
import Swal from "sweetalert2";

export default function ActivAdmCards() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const turnos = useSelector((state) => state.allTurn);

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getAllTurns());
  }, [dispatch]);

  function handleOnClick(id, e) {
    e.preventDefault();
    Swal.fire({
      title: "Estas Seguro?",
      icon: 'warning',
      color: '#DFCB44',
      showDenyButton: true,
      confirmButtonText: "eliminar",
      confirmButtonColor:'#c72b2b',
      denyButtonText: `cancelar`,
      denyButtonColor: '#DFCB44',
      background: '#000000dc'
    }).then((result) => {
      const activityExists = turnos.find((t) => {
        return t.activityId === id;
      });
      
      if (result.isDenied) {
        return "Wii";
      }

      if (activityExists) {
        Swal.fire({
          title: "No se pudo borrar",
          text: "Tiene turnos asociados!",
          color: '#DFCB44',
          icon: "error",
          background: '#000000dc',
          confirmButtonColor: "#c72b2b",
          confirmButtonText: "volver a intentarlo",
        });
        return "Wii";
      }

      if (result.isConfirmed) {
        dispatch(deleteActiv(id));
      }
    });
  }

  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div className="sumarContainer">
        <a href="/PerfilAdmin/PostActiv" className="sumar-act">
          SUMAR ACTIVIDAD
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

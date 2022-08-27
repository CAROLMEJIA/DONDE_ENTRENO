import React from "react";
import ActivAdmCard from "./ActivAdmCard";
import NavBarAdmin from "./NavBarAdmin";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, deleteActiv } from "../../redux/actions";
import "../estilos/ActivityCards.css";
import Footer from "../Footer";

export default function ActivAdmCards() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleOnClick(id, e) {
    e.preventDefault();
    dispatch(deleteActiv(id));
    alert("Actividad se borro correctamente.");
    window.location.reload();
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

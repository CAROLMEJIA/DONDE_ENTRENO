import React from "react";
import ActivAdmCard from "./ActivAdmCard";
import NavBarAdmin from "./NavBarAdmin";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, deleteActiv } from "../../redux/actions";
import "../estilos/ActivityCards.css";
import Footer from "../Footer";

export default function ActivAdmCards() {

  const activities = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const handleDelete = (id) => {
    activities.filter(act => act.id !== id)
    dispatch(deleteActiv(id))
    alert('Actividad borrada correctamente')
  }

  return (
    <div>
      <div>
        <NavBarAdmin />
      </div>
      <div>
        <a href="/PerfilAdmin/PostActiv">Sumar Actividad</a>
      </div>
      <div className="Cards-Activity">
        {Array.isArray(activities) ? (
          activities?.map((e) => (
            <ActivAdmCard
              handleDelete={handleDelete}
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

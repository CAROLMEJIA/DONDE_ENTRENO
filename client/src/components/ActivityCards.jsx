import React from "react";
import ActivityCard from "./ActivityCard";
import NavBar from "./dropdownNav/NavBar.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../redux/actions";
import "./estilos/ActivityCards.css";
import Footer from './Footer';

export default function ActivityCards(props) {
  
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="Cards-Activity">
        {Array.isArray(activities) ? (
          activities?.map((e) => (
            <ActivityCard
              key={e.id}
              image={e.image}
              name={e.name}
              description={e.description}
            />
          ))
        ) : (
          <p className="p-acti">No se encontró ninguna actividad</p>
        )}
      </div>
      <Footer/>
    </div>
  );
}

  


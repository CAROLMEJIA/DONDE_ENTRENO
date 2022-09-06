import React from "react";
import ActivityCard from "./ActivityCard";
import NavBar from "./dropdownNav/NavBar.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities } from "../redux/actions";
import "./estilos/ActivityCards.css";
import Footer from "./Footer";

export default function ActivityCards(props) {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const logged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(getActivities());

  }, [dispatch]);

  let userls = JSON.parse(localStorage.getItem("usuario"));

  if (!userls) {
    userls = false;
  }

  return (
    <div>
      <div>
        <NavBar userls={userls} />
      </div>
      <div className="Cards-Activity">
        {Array.isArray(activities) ? (
          activities?.map((e) => (
            <ActivityCard
              key={e.id}
              id={e.id}
              image={e.image}
              name={e.name}
              description={e.description}
              userls={userls}
            />
          ))
        ) : (
          <p className="p-acti">No se encontró ninguna actividad</p>
        )}
      </div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <a
        href="https://wa.me/5493515930559?text=Me%20gustaría%20saber%20mas%20sobre%20el%20gimnasio"
        className="whatsapp"
        target="_blank"
      >
        {" "}
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </div>
  );
}

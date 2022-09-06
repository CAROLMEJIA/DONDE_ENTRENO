import React, { useEffect } from "react";
import NavBar from "./dropdownNav/NavBar.jsx";
import "./estilos/SobreNosotros.css";
import img from "./estilos/nosotros/img-gimnasio.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getGymInfo } from "../redux/actions.js";
import FooterAdm from "./PerfilAdmin/FooterAdm.jsx";

export default function SobreNosotros() {
  const dispatch = useDispatch();
  const gymInfo = useSelector((state) => state.gymInfo);
  const logged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getGymInfo());
  }, []);

  let userls = JSON.parse(localStorage.getItem("usuario"));

  if (!userls) {
    userls = false;
  }

  return (
    <div>
      <NavBar userls={userls} />
      <div className="contenedor-general">
        <img src={img} className="img-gym"></img>
        {gymInfo
          ? gymInfo.map((g) => {
              return (
                <div className="contenedor-info">
                  <p className="description">{g.description}</p>
                  <div className="info">
                    <div className="div-cont">
                      <h2 className="h2-t">Dirección</h2>
                      <p className="address">{g.address}</p>
                    </div>
                    <div className="div-cont">
                      <h2 className="h2-t">Teléfono</h2>
                      <p className="phone">{g.phone}</p>
                    </div>
                    <div className="div-cont">
                      <h2 className="h2-t">Horario</h2>
                      <p className="horarios"> 7am - 21pm</p>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        <h2 className="h2-text">ABIERTO TODOS LOS DÍAS</h2>
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
      <FooterAdm />
    </div>
  );
}

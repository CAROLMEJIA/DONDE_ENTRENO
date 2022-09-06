import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import DropDown from "./DropDown.jsx";
import logo from "../estilos/logo nav/logoNav.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";
import DropDown2 from "./DropDown2.jsx";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const cerrarSesion = () => {
    localStorage.clear();
    dispatch(logoutUser());
    navigate("/home");
    window.location.href = "/home";
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  let userls = JSON.parse(localStorage.getItem("usuario"));

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  if (userls) {
    return (
      <>
        <nav className="navbar">
          <Link to="/Home" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="LogoApp" className="img-navBar" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Actividades"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ACTIVIDADES
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/Turnos/BOXEO"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                TURNOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Profesionales"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                STAFF
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/SobreNosotros"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SOBRE NOSOTROS
              </Link>
            </li>
            <li
              className="nav-item nav-item-ocultos"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={`/MisDatos/${userls.findUser.id}`}
                className="nav-links"
              >
                MI PERFIL
              </Link>
            </li>
            <li
              className="nav-item nav-item-ocultos"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/Home"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  cerrarSesion();
                }}
              >
                SALIR
              </Link>
            </li>
            <li
              className="nav-item nav-item-menu"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <DropDown2 user={userls} />
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar">
          <Link to="/Home" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="LogoApp" className="img-navBar" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Actividades"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ACTIVIDADES
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/loginUser"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                TURNOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Profesionales"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                STAFF
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/SobreNosotros"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SOBRE NOSOTROS
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/loginUser"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                LOG IN
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
};

export default NavBar;

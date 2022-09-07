import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./DropDown2.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logoutUser, getUserInfo } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

function DropDown2({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userReducer = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUserInfo(user.findUser.id))
}, [dispatch])

  const cerrarSesion = () => {
    localStorage.clear();
    dispatch(logoutUser()); 
    navigate("/home");
    window.location.href = "/home";
  };
  return (
    <>
      <NavDropdown
        className="mi-dropdown-perfil"
        title={
          <div className="pull-rigth mi-dropdown-perfil-item imgContainer">
            {user.findUser.name.toUpperCase()}
            <img className="thumbnail-image" src={userReducer.image} alt="" />
          </div>
        }
      >
        <Dropdown.Item className="mi-dropdown-perfil-item" >
          <Link
            className="mi-dropdown-perfil-link"
            to={`/MisDatos/${user.findUser.id}`}
          >
            MI PERFIL
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="mi-dropdown-perfil-item">
          <Link
            to="/Home"
            className="mi-dropdown-perfil-link"
            onClick={() => {
              cerrarSesion();
            }}
          >
            <i className="fa fa-sign-out">{}</i>
            {} SALIR
          </Link>
        </Dropdown.Item>
      </NavDropdown>
    </>
  );
}

export default DropDown2;

// title: 'MI CUENTA',
// path: '/datosuser',
// cName: 'dropdown-link'
// },
// {
// title: 'MI MEMBRESIA',
// path: '/Membership',
// cName: 'dropdown-link'
// },
// {
// title: 'MIS TURNOS',
// path: '/userTurns',
// cName: 'dropdown-link'
// },
// {
// title: 'Cerar Sesion',
// path: '/Home',
// cName: 'dropdown-link'

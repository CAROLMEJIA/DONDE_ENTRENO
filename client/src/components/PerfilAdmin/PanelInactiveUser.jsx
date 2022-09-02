import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInactiveUsers,
  eliminarUser,
  habilitarUser,
} from "../../redux/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../estilos/PanelUser.css";
import NavBarAdmin from "./NavBarAdmin";
import Footer from "../Footer";

export default function PanelInactiveUser() {
  const dispatch = useDispatch();
  const usuarioInactivo = useSelector((state) => state.usuarioInactivo);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getInactiveUsers());
  }, [dispatch]);

  async function borrarUser(id) {
    /*  console.log("HOLAAAAAA"); */
    let paranoid = false;

    dispatch(eliminarUser(id, paranoid));

    const result = await Swal.fire({
      title: "Usuario Eliminado Correctamente",
      color: "#DFCB44",
      icon: "success",
      confirmButtonColor: "#23252E",
      confirmButtonText: "OK",
      background: "#000000dc",
    });
    navigate("/home/admin");
    dispatch(getInactiveUsers());
  }

  async function HabilitarUsers(e, id) {
    e.preventDefault();
    dispatch(habilitarUser(id));

    const result = await Swal.fire({
      title: "Usuario Habilitado Correctamente",
      color: "#DFCB44",
      icon: "success",
      confirmButtonColor: "#23252E",
      confirmButtonText: "OK",
      background: "#000000dc",
    });
    navigate("/PanelInactiveUser");
    dispatch(getInactiveUsers());
  }

  return (
    <div className="calendarContanierDiv">
      <NavBarAdmin />
      <div className="suspendidos">
        <a href="/home/admin" className="susp-user">
          Volver a Home
        </a>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Mail</th>
            <th>Habilitar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {usuarioInactivo
            ? usuarioInactivo.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.mail}</td>
                    <td>
                      <button
                        onClick={(e) => HabilitarUsers(e, user.id)}
                        className="borrar-user"
                      >
                        Habilitar
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => borrarUser(user.id)}
                        className="borrar-user"
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}

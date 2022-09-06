import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, eliminarUser } from "../../redux/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../estilos/PanelUser.css";

export default function PanelUsuarios() {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  async function suspenderUser(id) {
    let paranoid = true;
    console.log("componente", id, paranoid);

    dispatch(eliminarUser(id, paranoid));

    const result = await Swal.fire({
      title: "Usuario Suspendido Correctamente",
      color: "#DFCB44",
      icon: "success",
      confirmButtonColor: "#23252E",
      confirmButtonText: "OK",
      background: "#000000dc",
    });
    navigate("/home/admin");
    dispatch(getAllUsers());
  }

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
    dispatch(getAllUsers());
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Mail</th>
          <th>Suspender</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {usuarios
          ? usuarios.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.mail}</td>
                  <td>
                    <button
                      onClick={() => suspenderUser(user.id)}
                      className="suspender-user"
                    >
                      Suspender
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
  );
}

{
  /* <thead>
  <tr>
    <th>#</th>
    <th>Nombre</th>
    <th>Mail</th>
    <th>Habilitar</th>
    <th>Borrar</th>
  </tr>
</thead>
<tbody>
  {usuarios
    ? usuarios.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.mail}</td>
            <td>
              <button onClick={() => suspenderUser(user.id)}>
                Habilitar
              </button>
            </td>
            <td>
              <button onClick={() => borrarUser(user.id)}>Borrar</button>
            </td>
          </tr>
        );
      })
    : null}
</tbody> */
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postClasspass, getActivities } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import "../estilos/SumarActForm.css";
import NavBarAdmin from "./NavBarAdmin";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function PostTurn() {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activitiesBackUp);

  const [duracion, setDuration] = useState("");
  const [hora, setHora] = useState("");
  const [capacidad, setCapasity] = useState("");
  const [day, setDay] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();

    let time = "";
    if (hora < 10) {
      time = "0" + hora.toString();
    } else {
      time = hora.toString();
    }

    time = time + ":00";

    const duration = duracion.toString();
    const capacity = capacidad.toString();

    const obj = { duration, time, capacity, day };
    if (!duration || !time || !capacity || !day) {
      return Swal.fire({
        icon: "warning",
        title: "No se pudo agregar el turno",
        color: "#DFCB44",
        confirmButtonText: "Volver",
        confirmButtonColor: "#DFCB44",
        background: "#000000dc",
      });
    }

    if (Object.keys(error).length > 0) {
      return Swal.fire({
        icon: "warning",
        title: "No se pudo agregar el turno",
        color: "#DFCB44",
        confirmButtonText: "Volver",
        confirmButtonColor: "#DFCB44",
        background: "#000000dc",
      });
    } else {
      setHora("");
      setDuration("");
      setCapasity("");
      setDay("");
      dispatch(postClasspass(id, obj));
      return Swal.fire({
        icon: "success",
        title: "Sumaste turno al calendario",
        color: "#DFCB44",
        confirmButtonText: "Continuar",
        confirmButtonColor: "#DFCB44",
        background: "#000000dc",
      });
    }
  }

  function handleChange({ duracion, hora, capacidad, day, id }) {
    let errors = {};

    if (!id) {
      errors.actividad = "Seleccionar Actividad";
    }
    if (!duracion) {
      errors.duracion = "Duración es requerida";
    } else if (duracion < 1 || duracion > 3) {
      errors.duracion = "Duración invalida: Entre 1 y 3";
    }
    if (!hora) {
      errors.hora = "Hora es requerida";
    } else if (hora < 7 || hora > 21) {
      errors.hora = "Hora invalida: Entre 07 y 21";
    }
    if (!capacidad) {
      errors.capacidad = "Capacidad es requerida";
    } else if (capacidad < 1 || capacidad > 30) {
      errors.capacidad = "Capacidad invalida: Entre 1 y 30";
    }
    if (!day) {
      errors.day = "Dia es requerido";
    }
    console.log("Errores: ", errors);
    return errors;
  }

  return (
    <div>
      <NavBarAdmin />
      <div className="FormTurnContainer">
        <h1 className="h1-form">Sumar Turno</h1>
        <div>
          <Link to="/PerfilAdmin/TurnosAdmin" className="volver-Profs">
            Ver Turnos
          </Link>
        </div>
        <div className="FormCard">
          <form
            onSubmit={handleSubmit}
            onChange={() =>
              setError(
                handleChange({
                  duracion,
                  hora,
                  capacidad,
                  day,
                  id,
                })
              )
            }
            className="FormContainerTurn"
          >
            {/*-----------------ACTIVIDADES-------------------*/}

            <div className="container-filterActivityForm">
              <select
                onChange={(e) => setId(e.target.value)}
                className="dropdown-filtro filter"
              >
                <option className="opt" selected hidden key="99">
                  Actividades:{" "}
                </option>
                {allActivities &&
                  allActivities.map((el) => (
                    <option className="opt" value={el.id} key={el.id}>
                      {el.name}
                    </option>
                  ))}
              </select>
              {error.actividad && <p className="error">{error.actividad}</p>}
            </div>

            {/*-----------------DURATION-------------------*/}
            <h4 className="h4-form">Duración:</h4>
            <label a="duracion-turns">
              <Form.Control
                id="name-actv"
                name="duracion-turns"
                type="number"
                min="1"
                max="3"
                placeholder="Duración..."
                value={duracion}
                onChange={(e) => setDuration(e.target.value)}
              ></Form.Control>
              {error.duracion && <p className="error">{error.duracion}</p>}
            </label>
            {/*-----------------HORA-------------------*/}
            <h4 className="h4-form">Hora:</h4>
            <label a="hora-actv">
              <Form.Control
                id="name-actv"
                name="hora-actv"
                type="number"
                min="7"
                max="21"
                placeholder="Entre 07 y 21"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              ></Form.Control>
              {error.hora && <p className="error">{error.hora}</p>}
            </label>
            {/*-----------------DAY-------------------*/}
            <h4 className="h4-form">Dia:</h4>
            <label a="day-turn">
              <div className="container-filterActivityForm">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="dropdown-filtro filter"
                >
                  <option className="opt" selected hidden key="99">
                    Día:
                  </option>
                  <option className="opt" key="1" value="lunes">
                    Lunes
                  </option>
                  <option className="opt" key="2" value="martes">
                    Martes
                  </option>
                  <option className="opt" key="3" value="miercoles">
                    Miercoles
                  </option>
                  <option className="opt" key="4" value="jueves">
                    Jueves
                  </option>
                  <option className="opt" key="5" value="viernes">
                    Viernes
                  </option>
                  <option className="opt" key="6" value="sabado">
                    Sabado
                  </option>
                  <option className="opt" key="7" value="domingo">
                    Domingo
                  </option>
                </select>
                {error.day && <p className="error">{error.day}</p>}
              </div>
            </label>
            {/*-----------------capacidad-------------------*/}
            <h4 className="h4-form">Capacidad:</h4>
            <label a="capacidad-turn">
              <Form.Control
                id="name-actv"
                name="capacidad-tur"
                type="number"
                min="1"
                max="30"
                placeholder="Capacidad..."
                value={capacidad}
                onChange={(e) => setCapasity(e.target.value)}
              ></Form.Control>
              {error.capacidad && <p className="error">{error.capacidad}</p>}
            </label>
            <div className="sumarFormContainer">
              <input
                className="sumar-actForm"
                type="submit"
                value={"SUMAR TURNO"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

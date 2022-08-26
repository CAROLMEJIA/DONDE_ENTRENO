import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postClasspass, getActivities } from "../../redux/actions";

export default function PostTurn() {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activitiesBackUp);
  console.log(allActivities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const [duracion, setDuration] = useState("");
  const [hora, sethora] = useState("");
  const [capacidad, setCapasity] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  const [error, setError] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const time = hora.toString();
    const duration = duracion.toString();
    const capacity = capacidad.toString();

    const obj = { duration, time, capacity, day, date };

    dispatch(postClasspass(id, obj));

    return alert(`Agregaste un Turno`);
  }

  function handleChange(event) {
    event.preventDefault();

    if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(day)) {
      setError({ day: "Dia Invalido" });
    } else {
      setError({});
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        {/*-----------------ACTIVIDADES-------------------*/}
        <select onChange={(e) => setId(e.target.value)}>
          {allActivities &&
            allActivities.map((el) => (
              <option className="opt" value={el.id} key={el.id}>
                {el.name}
              </option>
            ))}
        </select>
        {/*-----------------DURATION-------------------*/}
        Duracion:
        <label a="duracion-turns">
          <input
            id="duracion-turns"
            name="duracion-turns"
            type="number"
            placeholder="Duracion..."
            value={duracion}
            onChange={(e) => setDuration(e.target.value)}
            required
          ></input>
        </label>
        {/*-----------------TIEMPO-------------------*/}
        Tiempo:
        <label a="hora-actv">
          <input
            id="hora-actv"
            name="hora-actv"
            type="time"
            placeholder="Ej: 19:00:00 ..."
            value={hora}
            onChange={(e) => sethora(e.target.value)}
            required
          ></input>
        </label>
        {/*-----------------DAY-------------------*/}
        Dia:
        <label a="day-turn">
          <input
            id="day-turn"
            name="day-turn"
            type="text"
            placeholder="Day..."
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          ></input>
          {error.day && <p>{error.day}</p>}
        </label>
        {/*-----------------capacidad-------------------*/}
        Capacidad:
        <label a="capacidad-turn">
          <input
            id="capacidad-tur"
            name="capacidad-tur"
            type="number"
            placeholder="Capacidad..."
            value={capacidad}
            onChange={(e) => setCapasity(e.target.value)}
            required
          ></input>
        </label>
        {/*-----------------DATE-------------------*/}
        Fecha:
        <label a="date-turn">
          <input
            id="date-tur"
            name="date-tur"
            type="date"
            placeholder="Fecha..."
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          ></input>
        </label>
        <input type="submit" value={"AGREGAR TURNO"} />
      </form>
    </div>
  );
}

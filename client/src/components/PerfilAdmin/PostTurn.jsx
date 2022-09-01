// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { postClasspass, getActivities } from "../../redux/actions";
// import Form from "react-bootstrap/Form";
// import "../estilos/SumarActForm.css";
// import NavBarAdmin from "./NavBarAdmin";

// export default function PostTurn() {
//   const dispatch = useDispatch();
//   const allActivities = useSelector((state) => state.activitiesBackUp);
//   console.log(allActivities);

//   useEffect(() => {
//     dispatch(getActivities());
//   }, [dispatch]);

//   const [input, setInput] = useState ({
//     duracion: "",
//     hora: "",
//     duracion: "",
//     day: "",
//     date: "",
//     id: ""
//   })

//   const [errors, setErrors] = useState({
//     duracion: "",
//     hora: "",
//     duracion: "",
//     day: "",
//     date: "",
//     id: ""
//   });

//   function handleSubmit(e) {
//     e.preventDefault();
//     const time = hora.toString();
//     const duration = input.duracion.toString();
//     const capacity = input.capacidad.toString();
//     if (!errors.duracion || !errors.hora || !errors.duracion || !errors.day || !errors.date || !errors.id){
//       dispatch(postClasspass(input));
//       return alert(`Sumaste turno al calendario`);
//     }
//     else{
//       alert("no flaco para")
//     }
//   }

//   function errores (e) {
//     let errors = {};

//     if (!e.duracion) {
//       errors.duracion = "Duración es requerida";
//     }
//     if (e.hora > 3 || e.hora < 1) {
//       errors.hora = "Max 3 Min 1";
//     }
//     if (e.capacidad > 30 && e.capacidad < 1) {
//       errors.capacidad = "Max 30 min 1";
//     }
//     if (e.date < 1 || e.date > 30) {
//       errors.date = "Fecha erronea";
//     }
//     return errors;  
//   }

//   const handleDuracion = (e) => {
//     if (!errors.duracion ){
//       setInput({
//         ...input,
//         duracion: e.target.value
//       })
//     }
//   }

//   return (
//     <div>
//       <NavBarAdmin />
//       <div className="FormTurnContainer">
//         <h1 className="h1-form">Sumar Turno</h1>
//         <div className="FormCard">
//           <form
//             onSubmit={handleSubmit}
//             onChange={() =>
//               setError(
//                 handleChange({
//                   duracion,
//                   hora,
//                   capacidad,
//                   day,
//                   date,
//                 })
//               )
//             }
//             className="FormContainerTurn"
//           >
//             {/*-----------------ACTIVIDADES-------------------*/}

//             <div className="container-filterActivityForm">
//               <select
//                 onChange={(e) => setId(e.target.value)}
//                 className="dropdown filter"
//               >
//                 {allActivities &&
//                   allActivities.map((el) => (
//                     <option className="opt" value={el.id} key={el.id}>
//                       {el.name}
//                     </option>
//                   ))}
//               </select>
//             </div>

//             {/*-----------------DURATION-------------------*/}
//             <h4 className="h4-form">Duración:</h4>
//             <label a="duracion-turns">
//               <Form.Control
//                 id="name-actv"
//                 name="duracion-turns"
//                 type="number"
//                 placeholder="Duración..."
//                 value={duracion}
//                 onChange={(e) => setDuration(e.target.value)}
//               ></Form.Control>
//               {error.duracion && <p className="error">{error.duracion}</p>}
//             </label>
//             {/*-----------------HORA-------------------*/}
//             <h4 className="h4-form">Hora:</h4>
//             <label a="hora-actv">
//               <Form.Control
//                 id="name-actv"
//                 name="hora-actv"
//                 type="time"
//                 placeholder="Ej: 19:00:00 ..."
//                 value={hora}
//                 onChange={(e) => setHora(e.target.value)}
//               ></Form.Control>
//               {error.hora && <p className="error">{error.hora}</p>}
//             </label>
//             {/*-----------------DAY-------------------*/}
//             <h4 className="h4-form">Dia:</h4>
//             <label a="day-turn">
//               <div className="container-filterActivityForm">
//                 <select
//                   value={day}
//                   onChange={(e) => setDay(e.target.value)}
//                   className="dropdown filter"
//                 >
//                   <option className="opt" value="lunes">
//                     Lunes
//                   </option>
//                   <option className="opt" value="martes">
//                     Martes
//                   </option>
//                   <option className="opt" value="miercoles">
//                     Miercoles
//                   </option>
//                   <option className="opt" value="jueves">
//                     Jueves
//                   </option>
//                   <option className="opt" value="viernes">
//                     Viernes
//                   </option>
//                   <option className="opt" value="sabado">
//                     Sabado
//                   </option>
//                   <option className="opt" value="domingo">
//                     Domingo
//                   </option>
//                 </select>
//                 {error.day && <p className="error">{error.day}</p>}
//               </div>
//             </label>
//             {/*-----------------capacidad-------------------*/}
//             <h4 className="h4-form">Capacidad:</h4>
//             <label a="capacidad-turn">
//               <Form.Control
//                 id="name-actv"
//                 name="capacidad-tur"
//                 type="number"
//                 placeholder="Capacidad..."
//                 value={capacidad}
//                 onChange={(e) => setCapasity(e.target.value)}
//               ></Form.Control>
//               {error.capacidad && <p className="error">{error.capacidad}</p>}
//             </label>
//             {/*-----------------DATE-------------------*/}
//             <h4 className="h4-form">Fecha:</h4>
//             <label a="date-turn">
//               <Form.Control
//                 id="name-actv"
//                 name="date-tur"
//                 type="date"
//                 placeholder="Fecha..."
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               ></Form.Control>
//               {error.date && <p className="error">{error.date}</p>}
//             </label>
//             <div className="sumarFormContainer">
//               <input
//                 className="sumar-actForm"
//                 type="submit"
//                 value={"SUMAR TURNO"}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

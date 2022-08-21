import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Userform from "./components/Userform";
import Registeruser from "./components/Registeruser"
import ProfCards from "./components/ProfesionalesCards";
import Home from "./components/Home";
import ActivityCards from "./components/ActivityCards";
import Calendario from "./components/Calendario";
import Perfil from "./components/Perfil";
import SobreNosotros from "./components/SobreNosotros";


function App() {
  return (
    <div className="App">
      <Routes>

        <Route exact path={"/"} element={<Landing />} />
        <Route exact path={"/loginUser"} element={<Userform />} />
        <Route path={"/register"} element={<Registeruser/>} />
        <Route exact path="/Profesionales" element={<ProfCards />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Actividades" element={<ActivityCards />} />
        <Route exact path={"/Turnos"} element={<Calendario />} /> 
        <Route exact path={"/Perfil"} element={<Perfil/>} /> 
        <Route exact path={"/SobreNosotros"} element={<SobreNosotros/>} /> 

      </Routes>
    </div>
  );
}

export default App;

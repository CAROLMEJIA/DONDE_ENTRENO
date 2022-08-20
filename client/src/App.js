import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import ProfCards from "./components/ProfesionalesCards";
import Userform from "./components/Userform";
import Home from "./components/Home";
import ActivityCards from "./components/ActivityCards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/loginUser" element={<Userform />} />
        <Route exact path="/Profesionales" element={<ProfCards />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/Actividades" element={<ActivityCards />} />
        {/* <Route exact path={"/Turnos"} element={<Turnos />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import ProfCards from "./components/ProfesionalesCards";
import Userform from "./components/Userform";
import Home from "./components/Home";
import ActivityCards from "./components/ActivityCards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route path={"/inicio"} element={<NavBar />} />
        <Route exact path={"/loginUser"} element={<Userform />} />
        <Route exact path="/inicio/Profesionales" element={<ProfCards />} />
        <Route exact path={"/inicio/home"} element={<Home />} />
        <Route exact path={"/inicio/Actividades"} element={<ActivityCards />} />

      </Routes>
    </div>
  );
}

export default App;

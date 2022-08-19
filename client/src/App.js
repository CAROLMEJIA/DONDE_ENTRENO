import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import ProfCards from "./components/ProfesionalesCards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/inicio" element={<NavBar />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/inicio/Profesionales" element={<ProfCards />} />
      </Routes>
    </div>
  );
}

export default App;

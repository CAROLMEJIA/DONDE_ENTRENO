import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Userform from "./components/Userform";
import Registeruser from "./components/Registeruser"
function App() {
  return (
    <div className = 'App'>
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route exact path={"/loginUser"} element={<Userform />} />
        <Route path={"/inicio"} element={<NavBar />} />
        <Route path={"/register"} element={<Registeruser/>} />
      </Routes>
    </div>
  );
}

export default App;

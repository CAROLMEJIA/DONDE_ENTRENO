import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className = 'App'>
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
<<<<<<<<< Temporary merge branch 1
       
=========
        <Route path={"/inicio"} element={<NavBar />} />
>>>>>>>>> Temporary merge branch 2
      </Routes>
    </div>
  );
}

export default App;

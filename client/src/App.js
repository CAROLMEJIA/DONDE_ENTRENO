import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
<<<<<<< HEAD
       
=======
        <Route path={"/inicio"} element={<NavBar />} />
>>>>>>> 1842e77eb85f6342e6ccd78fb65ddac2e0670b31
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Userform from "./components/Userform";
import Registeruser from "./components/Registeruser";
import ProfCards from "./components/ProfesionalesCards";
import Home from "./components/Home";
import ActivityCards from "./components/ActivityCards";
import Calendario from "./components/Calendario";
import Perfil from "./components/Perfil";
import SobreNosotros from "./components/SobreNosotros";
import EditProf from "./components/PerfilAdmin/EditProf";
import ProfCardsAdmin from "./components/PerfilAdmin/ProfCards";
import PostProf from "./components/PerfilAdmin/PostProf";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route exact path={"/loginUser"} element={<Userform />} />
        <Route path={"/register"} element={<Registeruser />} />
        <Route exact path="/Profesionales" element={<ProfCards />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Actividades" element={<ActivityCards />} />
        <Route exact path={"/Turnos"} element={<Calendario />} />
        <Route exact path={"/Perfil"} element={<Perfil />} />
        <Route exact path={"/SobreNosotros"} element={<SobreNosotros />} />
        <Route exact path={"/PerfilAdmin/EditProf"} element={<EditProf />} />
        <Route exact path={"/PerfilAdmin/PostProf"} element={<PostProf />} />
        <Route
          exact
          path={"/PerfilAdmin/ProfCardsAdmin"}
          element={<ProfCardsAdmin />}
        />
      </Routes>
    </div>
  );
}

export default App;

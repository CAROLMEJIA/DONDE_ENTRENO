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

import MisDatos from "./components/PerfilUser/MisDatos"
import MisTurnos from "./components/MisTurnos";
import SobreNosotros from "./components/SobreNosotros";
import EditProf from "./components/PerfilAdmin/EditProf";
import ProfCardsAdmin from "./components/PerfilAdmin/ProfCards";
import PostProf from "./components/PerfilAdmin/PostProf";
import ActivAdmCards from "./components/PerfilAdmin/ActivAdmCards";
import PostActiv from "./components/PerfilAdmin/PostActiv";
import HomeAdmin from "./components/PerfilAdmin/HomeAdmin";
import TurnosAdmin from "./components/PerfilAdmin/TurnosAdmin";
import PostTurn from "./components/PerfilAdmin/PostTurn";
import FormPago from "./components/FormPago";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import EditMisDatos from './components/PerfilUser/EditMisDatos';
const stripePromise = loadStripe(
  "pk_test_51LaLmECkMsPLr7DYKQfb8XNqiDoPVUUici2K5tqUhZyOSTiQl06ouE3DSI3ni5sT6qJGdbqhkTvyGQ788z4xABrI00Dt6rHkeB"
);

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
        <Route exact path={"/Turnos/:nameA"} element={<Calendario />} />
        <Route exact path={"/MisDatos"} element={<MisDatos />} />
        <Route exact path={"/MisDatosEdit"} element={<EditMisDatos />} />
        <Route exact path={"/MisTurnos"} element={<MisTurnos />} />
        <Route exact path={"/SobreNosotros"} element={<SobreNosotros />} />
        <Route exact path={"/home/admin"} element={<HomeAdmin />} />
        <Route
          exact
          path={"/PerfilAdmin/EditProf/:id"}
          element={<EditProf />}
        />
        <Route exact path={"/PerfilAdmin/PostProf"} element={<PostProf />} />
        <Route
          exact
          path={"/PerfilAdmin/ProfCardsAdmin"}
          element={<ProfCardsAdmin />}
        />
        <Route
          exact
          path={"/PerfilAdmin/ActivAdmCards"}
          element={<ActivAdmCards />}
        />
        <Route exact path={"/PerfilAdmin/PostActiv"} element={<PostActiv />} />
        <Route
          exact
          path={"/PerfilAdmin/TurnosAdmin"}
          element={<TurnosAdmin />}
        />
        <Route exact path={"/PostTurn"} element={<PostTurn />} />
        <Route
          path={"/pago"}
          element={
            <Elements stripe={stripePromise}>
              <FormPago />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
import FitnessPlan from "./components/FitnessPlan.js";
import Kurse from "./components/Kurse.js";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.js";
import { Login } from "./components/Login.js";
import { Register } from "./components/Register.js"
import UserPanel from "./components/UserPanel.jsx";
import { useState } from "react";
import { ImpressumPage } from "./pages/ImpressumPage.js";
import { KontaktPage } from "./pages/KontaktPage.js";
import { UserSportgeraetePage } from "./pages/UserSportgeraetePage.js";
import { UserBmiRechnerPage } from "./pages/UserBmiRechnerPage.js";
import { UserEinstellungenPage } from "./pages/UserEinstellungenPage.js";
import { UserKalorieRechnerPage } from "./pages/UserKalorieRechnerPage.js";
import { UserKursePage } from "./pages/UserKursePage.js";
import { UserVertragInfosPage } from "./pages/UserVertragInfosPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/fitness-plan" element={<FitnessPlan />} />
        <Route path="/kurse" element={<Kurse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/userPanel" element={<UserPanel />} />
        <Route path="/usersportgeraete" element={<UserSportgeraetePage />} />
        <Route path="/userbmirechner" element={<UserBmiRechnerPage />} />
        <Route path="/usereinstellungen" element={<UserEinstellungenPage />} />
        <Route path="/userkalorierechner" element={<UserKalorieRechnerPage />} />
        <Route path="/userkurse" element={<UserKursePage />} />
        <Route path="/uservertraginfos" element={<UserVertragInfosPage />} />


      </Routes>

    </>

  );
}

export default App;


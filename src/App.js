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
      </Routes>

    </>

  );
}

export default App;


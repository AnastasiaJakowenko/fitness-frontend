import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
import FitnessPlan from "./components/FitnessPlan.js";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { RegisterPage } from "./pages/RegisterPage.js"
import UserPanel from "./components/UserPanel.jsx";
import { ImpressumPage } from "./pages/ImpressumPage.js";
import { KontaktPage } from "./pages/KontaktPage.js";
import { UserSportgeraetePage } from "./pages/UserSportgeraetePage.js";
import { UserBmiRechnerPage } from "./pages/UserBmiRechnerPage.js";
import { UserEinstellungenPage } from "./pages/UserEinstellungenPage.js";
import { KalorienRechnerPage } from "./pages/KalorienRechnerPage.js";
import { UserKursePage } from "./pages/UserKursePage.js";
import { UserVertragInfosPage } from "./pages/UserVertragInfosPage.js";
import { Calendar1 } from "./components/Calendar1.js";
import { RegisterContextProvider } from "./context/registerContext.js";
import { LoginContextProvider, LogoutContextProvider } from "./context/loginContext.js";


function App() {
  return (
    <>
      <RegisterContextProvider>
        <LoginContextProvider>
          <LogoutContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/fitness-plan" element={<FitnessPlan />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/kontakt" element={<KontaktPage />} />
              <Route path="/userPanel" element={<UserPanel />} />
              <Route path="/usersportgeraete" element={<UserSportgeraetePage />} />
              <Route path="/bmirechner" element={<UserBmiRechnerPage />} />
              <Route path="/usereinstellungen" element={<UserEinstellungenPage />} />
              <Route path="/kalorienrechner" element={<KalorienRechnerPage />} />
              <Route path="/userkurse" element={<UserKursePage />} />
              <Route path="/uservertraginfos" element={<UserVertragInfosPage />} />
              <Route path="/userkurse" element={<Calendar1 />} />
            </Routes>
          </LogoutContextProvider>
        </LoginContextProvider>
      </RegisterContextProvider>
    </>
  );
}

export default App;


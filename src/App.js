import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About.js";
import FitnessPlan from "./components/FitnessPlan.js";
import Kurse from "./components/Kurse.js";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.js";
import { Login } from "./components/Login.js";
import { Register } from "./components/Register.js"
import UserPanel from "./components/UserPanel.jsx";
import { ImpressumPage } from "./pages/ImpressumPage.js";
import { KontaktPage } from "./pages/KontaktPage.js";
import { UserSportgeraetePage } from "./pages/UserSportgeraetePage.js";
import Bmi from "./components/Bmi.js";
import { UserEinstellungenPage } from "./pages/UserEinstellungenPage.js";
import Kalorien from "./components/KalorienRechner.js";
import { UserKursePage } from "./pages/UserKursePage.js";
import { UserVertragInfosPage } from "./pages/UserVertragInfosPage.js";
import Calendar from "./components/Calendar.js";



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
        <Route path="/bmirechner" element={<Bmi />} />
        <Route path="/usereinstellungen" element={<UserEinstellungenPage />} />
        <Route path="/kalorienrechner" element={<Kalorien />} />
        <Route path="/userkurse" element={<UserKursePage />} />
        <Route path="/uservertraginfos" element={<UserVertragInfosPage />} />
        <Route path="/calendar" element={<Calendar />} />


      </Routes>

    </>

  );
}

export default App;


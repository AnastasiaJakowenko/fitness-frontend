import Navigation from "../components/Navigation.js";
import About from "../components/About.js";
import FitnessPlan from "../components/FitnessPlan.js";
import Kurse from "../components/Kurse.js";
import Footer from "../components/Footer.js";
import { Login } from "../components/Login.js"
export const HomePage = () => {
    return (
        <>
            <Navigation />
            <About />
            <FitnessPlan />
            <Kurse />
            <Footer />
            <Login />
        </>
    );
}
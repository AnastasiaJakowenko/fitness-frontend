import Navigation from "../components/Navigation.js";
import About from "../components/About.js";
import FitnessPlan from "../components/FitnessPlan.js";
import Kurse from "../components/Kurse.js";
import Footer from "../components/Footer.js";

export const HomePage = ({ logoutHandler }) => {
    return (
        <>
            <Navigation logoutHandler={logoutHandler} />
            <About />
            <FitnessPlan />
            <Kurse />
            <Footer />
        </>
    );
}
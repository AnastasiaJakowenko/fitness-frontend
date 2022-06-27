import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
<<<<<<< HEAD
import Navigation from "./components/Navigation.js";
import About from "./components/About.js";
import FitnessPlan from "./components/FitnessPlan.js";
import Kurse from "./components/Kurse.js";
import Footer from "./components/Footer.js";

function App() {
  return (
      <div className="App">
        <Navigation />
        <About />
        <FitnessPlan />
        <Kurse />
        <Footer />
      </div>
=======
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import FitnessPlan from './components/FitnessPlan.js';

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
      </div>
      <div>
        <About />
      </div>
      <div>
        <FitnessPlan />
      </div>
    </>

>>>>>>> fitness-plan
  );
}

export default App;

//kommentar

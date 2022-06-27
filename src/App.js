import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
import Navigation from "./components/Navigation.js";
import About from "./components/About.js";
import FitnessPlan from "./components/FitnessPlan.js";
import Kurse from "./components/Kurse.js";
import Footer from "./components/Footer.js";
import Impressum from "./components/Impressum.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <About />
        <FitnessPlan />
        <Kurse />
        <Footer />
{/*         <Switch>
        <div ClassName="content">
          <Route path="/Impressum">
          <Impressum />
          </Route>
          </div>
          </Switch> */}
      </div>

    </Router>
  );
}

export default App;

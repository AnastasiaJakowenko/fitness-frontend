import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import Navigation from './components/Navigation.js';
import About from './components/About.js';
function App() {
  return (
    <>
    <div className="App">
     <Navigation/>
    </div>
    <div>
      <About/>
    </div>
    </>
  );
}

export default App;

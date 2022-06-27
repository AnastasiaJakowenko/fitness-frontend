import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';
import { Login } from "./pages/login.js";
import { Home } from "./pages/home.js"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { NavLink, Routes, Route, Navigate } from "react-router-dom"
 const App = () => {
  return (
    <div className="App">
      <Router>
       
          <Route path="/" component={Home} />
          <Route path="/" render={() => <Home />} />

          {/* <Route path="/" element={<Home/>} 
        /> */}
           <Route path="/login" component={Login} />
          <Route path="/login" render={() => <Login />} />
          
          
      
      </Router>
    </div>

  );
}

 ReactDOM.render(<App />, document.getElementById('root'));
export default App;

//kommentar

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Example = () => <p>Example Komponente</p>;

// const App = () => {
//   return (
//     <Router>
//       <Route path="/example" component={Example} />
//       <Route path="/example" render={() => <Example />} />
//     </Router>
//   );
// };


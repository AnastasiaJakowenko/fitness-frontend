// import React from "react";
import "../style/tools.css";


function Tools() {
    return (
      <>
           <h1>Tools</h1>
        <a href="/userbmirechner" className="a_tools"><div className="bmi">
            <p className="tools_p">BMI Rechner</p>
        </div></a>
       <a href="/kalorienrechner" className="a_tools"> <div className="kalorien">
            <p className="tools_p">Kalorien Rechner</p>
        </div></a>
       
      </>
    );
  }
  
  export default Tools;
  
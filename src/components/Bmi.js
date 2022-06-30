import React, { useState } from "react";
import "../style/bmi.css"
const Bmi = () => {
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const handleBmi = () => {
        let val = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(val);
        if (val < 18.5) {
            setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
            setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
            setInfo("Overweight");
        } else {
            setInfo("Obese");
        }
    };
    return (
        <div className="container">
            <h1 className="bmi_h1">BMI Calculator</h1>

            <div className="input_container">
                <input className="input_bmi"
                    type="text"
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Größe in cm"
                />
                <input className="input_bmi"
                    type="text"
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Gewicht in kg"
                />
            </div>
            <div className="bmi_button_container">
                <button className="bmi_button" onClick={handleBmi}>Berechnen</button>
                </div>
               <div className="ergebnisse_container">
                <h1 className="ergebnisse">{bmi}</h1>
                <h2 className="ergebnisse">{info}</h2>
                
                </div>
            
        </div>
    );
};

export default Bmi;

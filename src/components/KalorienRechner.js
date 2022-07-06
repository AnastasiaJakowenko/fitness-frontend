import React, { useState } from "react";
import "../style/kalorienrechner.css"
const Kalorien = () => {
    const [kalorienZahl, setkalorienZahl] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [age, setAge] = useState()
    const [gender, setGender] = useState()

    const handleChange=(e)=>{
        setGender(e.target.value)
    }
   
    const handleKalorienZahl = () => {

        let frauenFormel = (655,1 +(9,6 * Number(weight)) + (1,8*Number(height)) - (4,7 * Number(age))).toFixed(1)
        let mannerFormel = (66,47 +(13,7 * Number(weight)) + (5*Number(height)) - (6,8 * Number(age))).toFixed(1)

        let val ;
        if(gender === "Male"){
            val = mannerFormel
        }else{
            val= frauenFormel
        }
        setkalorienZahl(val);
   
    };
    return (
        <div className="container">
            <h1 className="bmi_h1">Kalorienrechner</h1>

            <div className="input_container1">
                <input className="input_bmi"
                    type="text"
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Größe in cm"
                />
                <input className="input_bmi"
                    type="text"
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Alter"
                />

            </div>
            {/* hier sind radio bottons die als icons aussehen . wir haben zeile 8 useState gender gemacht und in zeile 10 ziehen wir der user auswahl(male/female) um das weiter füe formel zu benutzen */}
            <div className="input_container2">
                <label>
                    <input className="input_radio" type="radio" value="Male"   onChange={handleChange}name="gender" />
                    <i class="fa-solid fa-person "></i>
                </label>
                <label>
                    <input className="input_radio" type="radio" value="Female"   onChange={handleChange}name="gender" />
                    <i class="fa-solid fa-person-dress"></i>
                </label>

                <input className="input_bmi"
                    type="text"
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Gewicht in kg"
                />
            </div>
            {/* hier ist button */}
            <div className="bmi_button_container">
                <button className="bmi_button" onClick={handleKalorienZahl}>Berechnen</button>
            </div>
            {/* hier unsere arrow */}
            <div className="animation"></div>
            
            <div className="ergebnisse_container" >

                <h1 className="ergebnisse">Deine tägliche Kalorienbedarf ist {kalorienZahl} Kalorien pro Tag</h1>
              
            </div>
           
            <h2>Welche Rolle spielt der Kalorienverbrauch beim Abnehmen?</h2>
            <p> Eine große, denn der Grundumsatz macht 50 bis 70 Prozent des gesamten Energiebedarfs aus.

                Wichtig dabei: Menschen mit einem hohen Muskelanteil haben einen höheren Grundumsatz, da Muskeln stoffwechselaktiv sind, sodass du im Ruhezustand (Sitzen oder Liegen) mehr Energie verbrauchst, je mehr Muskelmasse du hast.

                Wer abnehmen möchte, sollte also versuchen, seinen Muskelanteil nach oben zu schrauben – zum Beispiel durch gezieltes Krafttraining.

                Der Grundumsatz ist von den vier Faktoren Gewicht, Größe, Alter und Geschlecht abhängig und gilt als Energiemenge in 24 Stunden, auch als „Ruhe-Nüchtern-Umsatz“ bezeichnet.

                Allerdings darf der Grundumsatz nicht mit deinem täglichen Kalorienbedarf verwechselt werden – das sind zwei Paar Schuhe.</p>

        </div>
    );
};

export default Kalorien;

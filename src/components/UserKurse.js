import React from "react";
import "../style/userkurse.css";
import { useState } from "react";

function UserKurse() {
    const [calendar, setCalendar] = useState(false)
    const zeigCalendar = () => {
        setCalendar(true);
    }
    const [buttonClickedYoga, setButtonClickedYoga] = useState(false)
    const onButtonClickYoga = () => {
        setButtonClickedYoga(true);
        setButtonClickedZumba(false);
        setButtonClickedSelbstverteidigung(false)
    }
    const [buttonClickedZumba, setButtonClickedZumba] = useState(false)
    const onButtonClickZumba = () => {
        setButtonClickedZumba(true);
        setButtonClickedYoga(false);
        setButtonClickedSelbstverteidigung(false)
    }
    const [buttonClickedSelbstverteidigung, setButtonClickedSelbstverteidigung] = useState(false)
    const onButtonClickSelbstverteidigung = () => {
        setButtonClickedSelbstverteidigung(true);
        setButtonClickedZumba(false);
        setButtonClickedYoga(false)
    }
    return (
        <>
            <div className="userKurse">
                <h1>Hallo {"userName"}. Das sind deine Kurse</h1>
                <div className="userKurseNav">
                    <div className="userKurseNavRechts">
                        <div>
                            <a href="/calendar">
                                <i className="fa-regular fa-calendar-days" onClick={() => zeigCalendar()} ></i>
                            </a>
                        </div>
                        <div>
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </div>
                        <div>
                            <p>Heute</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="userKurseHeading">
                    <button onClick={() => onButtonClickYoga()}><h3>Yoga</h3></button>
                    <button onClick={() => onButtonClickZumba()}><h3>Zumba</h3></button>
                    <button onClick={() => onButtonClickSelbstverteidigung()}><h3>Selbstverteidigung</h3></button>
                </div>
                {buttonClickedYoga && <h1>test Yoga</h1>}
                {buttonClickedZumba && <h1>test Zumba</h1>}
                {buttonClickedSelbstverteidigung && <h1>test Selbstverteidigung</h1>}
            </div>
        </>
    )
}
export default UserKurse;

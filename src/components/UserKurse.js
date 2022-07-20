import React from "react";
import "../style/userkurse.css";
import { useState } from "react";
import { Calendar1 } from "./Calendar1.js";
import { UserKurseTabellen } from "./UserKurseTabellen.js";

function UserKurse() {
  // zum backend schicken
  /*     const dateSlots = [{
            date: Wed Jul 13 2022,
            courseSlots:{ 
                yoga: [9, 11],
                zumba: [17]
            }
        }] */

  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const zeigCalendar = () => {
    setCalendar(true);
  };

  const onDateClick = (date) => {
    setDate(date);
    setCalendar(false);
  };

  const [buttonClickedYoga, setButtonClickedYoga] = useState(false);
  const onButtonClickYoga = () => {
    setButtonClickedYoga(true);
    setButtonClickedZumba(false);
    setButtonClickedSelbstverteidigung(false);
  };
  const [buttonClickedZumba, setButtonClickedZumba] = useState(false);
  const onButtonClickZumba = () => {
    setButtonClickedZumba(true);
    setButtonClickedYoga(false);
    setButtonClickedSelbstverteidigung(false);
  };
  const [buttonClickedSelbstverteidigung, setButtonClickedSelbstverteidigung] =
    useState(false);
  const onButtonClickSelbstverteidigung = () => {
    setButtonClickedSelbstverteidigung(true);
    setButtonClickedZumba(false);
    setButtonClickedYoga(false);
  };

  return (
    <>
      <div className="userKurse">
        <h1>Hallo SportlerIn. Das sind deine Kurse</h1>
        <div className="userKurseNav">
          <div className="userKurseNavRechts">
            <div onClick={() => zeigCalendar()}>
              <i
                className="fa-regular fa-calendar-days"
              ></i>
            </div>
            <div>
              <i className="fa-solid fa-circle-arrow-left"></i>
            </div>
            <div  onClick={() => new Date()()}>
              <p>Heute</p>
            </div>
            <div>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
          </div>
        </div>
        {calendar && (
            <Calendar1 date={date} setDate={onDateClick} />
        )}
        <div className="userKurseHeading">
          <button onClick={() => onButtonClickYoga()}>
            <h6>Yoga</h6>
          </button>
          <button onClick={() => onButtonClickZumba()}>
            <h6>Zumba</h6>
          </button>
          <button onClick={() => onButtonClickSelbstverteidigung()}>
            <h6>Selbstverteidigung</h6>
          </button>
        </div>
        {buttonClickedYoga && <UserKurseTabellen date={date} kurs={"Yoga"} />}
        {buttonClickedZumba && <UserKurseTabellen date={date} kurs={"Zumba"} />}
        {buttonClickedSelbstverteidigung && (<UserKurseTabellen date={date} kurs={"Selbstverteidigung"} />)}
      </div>
    </>
  );
}
export default UserKurse;

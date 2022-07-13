import React from "react";
import "../style/userkurse.css";
import { useState } from "react";

function UserKurse() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const onButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <>
      <div className="userKurse">
        <h1>Hola {"userName"}, das sind deine Kurse</h1>
        <div className="userKurseNav">
          <div className="userKurseNavRechts">
            <div>
              <a href="/calendar">
                <i className="fa-regular fa-calendar-days"></i>
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
          <button onClick={onButtonClick}>
            <h2>Yoga</h2>
          </button>
          <h2>Zumba</h2>
          <h2>Selbstverteidigung</h2>
        </div>
        {buttonClicked && (
          <>
            <table>
              <caption>
                Frei <br />
                Belegt
                <br />
                Gebucht
              </caption>
              <tr>
                <th>DATUM</th>
                <th>9 Uhr</th>
                <th>11 Uhr</th>
                <th>17 Uhr</th>
                <th>19 Uhr</th>
              </tr>
              <tr>
                <th>Yogakurs1</th>
                <th>
                  <button>{}</button>
                </th>
                <th>
                  <button></button>
                </th>
                <th>
                  <button></button>
                </th>
                <th>
                  <button></button>
                </th>
              </tr>
              <h3>test</h3>
            </table>
          
            </>
        )}
      </div>
    </>
  );
}

export default UserKurse;

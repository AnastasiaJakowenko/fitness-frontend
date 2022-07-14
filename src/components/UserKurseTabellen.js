import React from "react";
import { useState } from "react";
export function UserKurseTabellen(props) {
  /*   const [color, setColor] = useState() */
  /* setColor("#28b1de") */
  /* const th = document.getElementsByClassName('th');
th.addEventlistener('click',function onclick(){
    th.style.backgroundColor = 'green'
}) */

  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Frei");
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
    setButtonText(
    //   if(buttonText === "Frei"){
    //   buttonText("Gebucht")
    // }
    // else {
    //   "Frei"
    // }
      )

      
    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <>
      <table>
        <caption>
          Frei background
          <br />
          Belegt rot
          <br />
          Gebucht grün
        </caption>
        <tr>
          <th>{props.date.toDateString()}</th>
          <th>9 Uhr</th>
          <th>11 Uhr</th>
          <th>17 Uhr</th>
          <th>19 Uhr</th>
        </tr>
        <tr>
          <th>Yogakurs1</th>
          <th
            style={{
              backgroundColor: isActive ? "green" : "",
              color: isActive ? "white" : "",
            }}
            onClick={handleClick}
          >{buttonText}
            
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
        {/* <p>lorem ipsum dolor sit amet, consectetur adipis</p> */}
      </table>
    </>
  );
}

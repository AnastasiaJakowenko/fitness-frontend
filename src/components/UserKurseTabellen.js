import React from "react";
import { useState } from "react";
import { Toggle } from "./UserKurseTabellenButton.js";

export function UserKurseTabellen(props) {
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Frei");
  const handleClick = () => {
    setIsActive((current) => !current);
    setButtonText();
  };

  return (
    <>
      <table>

        <tr>
          <th>{props.date.toDateString()}</th>
          <th>9 Uhr</th>
          <th>11 Uhr</th>
          <th>17 Uhr</th>
          <th>19 Uhr</th>
        </tr>
        <tr>
          <th>Yogakurs</th>
          <th>
            <Toggle />
          </th>
          <th>
            <Toggle />
          </th>
          <th>
            <Toggle />
          </th>
          <th>
            <Toggle />
          </th>
        </tr>
        
      </table>
      <p>lorem ipsum dolor sit amet, consectetur adipis</p>



    </>
  );
}

/*   const [color, setColor] = useState() */
/* setColor("#28b1de") */
/* const th = document.getElementsByClassName('th');
th.addEventlistener('click',function onclick(){
    th.style.backgroundColor = 'green'
}) */

// style={{
//   backgroundColor: isActive ? "green" : "",
//   color: isActive ? "white" : "",
// }}
// onClick={handleClick}


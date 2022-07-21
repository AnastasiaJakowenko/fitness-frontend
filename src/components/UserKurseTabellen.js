import React from "react";
// import { useState } from "react";
import { Toggle } from "./UserKurseTabellenButton.js";

export function UserKurseTabellen(props) {
  // const [isActive, setIsActive] = useState(false);
  // const [buttonText, setButtonText] = useState("Frei");
/*   const handleClick = () => {
    // setIsActive((current) => !current);
    // setButtonText();
  }; */

  return (
    <>
      <table>
        <tr>
          <th>{props.date.toDateString()}</th>
          <th className="kursname">{props.kurs}</th>
        </tr>
        <tr>
          <td>9 Uhr</td>
          <td className="td-button"><Toggle /></td>
        </tr>
        <tr>
          <td>11 Uhr</td>
          <td className="td-button"><Toggle /></td>
        </tr>
        <tr>
          <td>17 Uhr</td>
          <td className="td-button"><Toggle /></td>
        </tr>
        <tr>
          <td>19 Uhr</td>
          <td className="td-button"><Toggle /></td>
        </tr>
      </table>



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


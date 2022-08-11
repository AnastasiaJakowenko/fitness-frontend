import React from "react";
import { BookingBtn } from "./UserKurseTabellenButton.js";

export function UserKurseTabellen(props) {

  return (
    <>
      <table>
        <tr>
          <th>{props.date.toDateString()}</th>
          <th className="kursname">{props.kurs}</th>
        </tr>
        <tr>
          <td>9 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
        </tr>
        <tr>
          <td>11 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
        </tr>
        <tr>
          <td>17 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
        </tr>
        <tr>
          <td>19 Uhr</td>
          <td className="td-button"><BookingBtn /></td>
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


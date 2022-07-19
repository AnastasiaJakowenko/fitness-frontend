
import Calendar from 'react-calendar';
import '../style/calendar.css';
import { useState } from "react";



export const Calendar1 =(props)=> {

  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false)
  const zeigCalendar = () => {
      setCalendar(true);
  }

  return (
    <>
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={props.setDate} value={props.date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {props.date.toDateString()}
        <button onClick={() => setCalendar(false)} >Fertig</button>
      </p>
    </div>
    </>
  );
}

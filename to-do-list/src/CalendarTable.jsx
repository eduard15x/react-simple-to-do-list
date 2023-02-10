import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const CalendarTable = ({y, z}) => {
    // const [date, setDate] = useState(new Date())
    // const selectedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

    return (
        <div className="calendar-container">
            <Calendar onChange={z}/>
            <p>{y}</p>
        </div>
    );
}

export default CalendarTable;

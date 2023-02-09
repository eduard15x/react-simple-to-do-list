import { useState } from 'react';
import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';

const CalendarTable = ({todayDate, setTodayDate, showToday, changee}) => {
    return (
        <div className="calendar-container">
            <Calendar onChange={changee}/>
            <p>
                { showToday }
            </p>
        </div>
    );
}
 
export default CalendarTable;

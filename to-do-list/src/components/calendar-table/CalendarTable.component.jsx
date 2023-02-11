import { useState } from 'react';
import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';

const CalendarTable = ({z}) => {

    const [showCalendar, setShowCalendar] = useState('d-none');

    return (
        <div className='calendar-container'>
            <button
                className='calendar-container__btn'
                onClick={() => showCalendar === 'd-none' ? setShowCalendar('') : setShowCalendar('d-none')}>{showCalendar === 'd-none' ? 'Show calendar' : 'Hide Calendar'}</button>
            <Calendar className={`my-calendar ${showCalendar}`} onChange={z}/>
        </div>
    );
}

export default CalendarTable;

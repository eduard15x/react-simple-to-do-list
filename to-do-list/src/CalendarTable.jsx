import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';

const CalendarTable = ({y, z}) => {

    return (
        <div className="calendar-container">
            <Calendar onChange={z}/>
            <p>{y}</p>
        </div>
    );
}

export default CalendarTable;

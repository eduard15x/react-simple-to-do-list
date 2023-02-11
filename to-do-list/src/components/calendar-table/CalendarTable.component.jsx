import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';

const CalendarTable = ({z}) => {

    return (
        <div className="calendar-container">
            <Calendar onChange={z}/>
        </div>
    );
}

export default CalendarTable;

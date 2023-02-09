import Calendar from 'react-calendar';	
import 'react-calendar/dist/Calendar.css';

const CalendarTable = ({todayDate, setTodayDate, showToday, changee}) => {
    return (
        <div className="calendar-container">
            <Calendar onChange={changee}/>
            <p>
                {todayDate}
            </p>
            <h1>dada</h1>
        </div>
    );
}
 
export default CalendarTable;

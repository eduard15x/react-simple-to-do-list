import CalendarTable from "./components/calendar-table/CalendarTable.component";
import List from "./components/list/List.component";
import useFetch from "./utilities/useFetch";
import { useEffect, useState } from 'react';
import CreateTask from './components/create-task/CreateTask.component';

function App() {
  // request data from data/task-db.json 
  const  {data: tasks, isPending, error} = useFetch('http://localhost:5000/tasks');  
  // set the date object
  const [date, setDate] = useState(new Date());
  const selectedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

  const [filteredArr, setFilteredArr] = useState(tasks);

  useEffect(() => {
    setFilteredArr(tasks?.filter(el => el.date === selectedDate));
  }, [selectedDate, tasks])

  return (
    <div className="App">
      <div className="tests" aria-label='heading'></div>
      <div className="date-container">
        <h2 className="subtitle-app">My tasks for <span className="subtitle-date" id="xxxx">{selectedDate}</span></h2>
        <CalendarTable z={setDate}/>
      </div>
      <CreateTask currentDate={selectedDate} updatedTask={ setFilteredArr} array={ filteredArr } createTaskNew={ setFilteredArr }/>
      <List array={ filteredArr } isPending={isPending} error={error} updatedTasksNew={ setFilteredArr }/>
    </div>
  );
}

export default App;

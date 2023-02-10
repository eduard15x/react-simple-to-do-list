import CalendarTable from "./CalendarTable";
import List from "./List";
import useFetch from "./useFetch";
import { useState } from 'react';


function App() {
  // get data from data/task-db.json 
  const {data: tasks, isPending, error} = useFetch('http://localhost:5000/tasks');
  // set the date object
  const [date, setDate] = useState(new Date())
  const selectedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  
  return (
    <div className="App">
      <h1>My to-do list</h1>
      <List array={ tasks } isPending={isPending} error={error} valoare={selectedDate}/>
      <CalendarTable z={setDate} y={selectedDate}/>
    </div>
  );
}

export default App;

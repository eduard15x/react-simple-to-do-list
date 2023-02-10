import CalendarTable from "./CalendarTable";
import List from "./List";
import useFetch from "./useFetch";
import { useEffect, useState } from 'react';

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
      <h1>My to-do list</h1>
      <List array={ filteredArr } isPending={isPending} error={error} valoare={selectedDate}/>
      <CalendarTable z={setDate} y={selectedDate}/>
    </div>
  );
}

export default App;

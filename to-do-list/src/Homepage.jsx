import { useState } from "react";
import useFetch from "./useFetch";
import TaskList from "./TaskList";
import CalendarTable from "./Calendar";
import CreateTask from "./CreateTask";

const Homepage = () => {
    const { data: tasks, isPending, error} = useFetch('http://localhost:8000/tasks');

    const [date, setDate] = useState(new Date());
    
    const selectedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    console.log(`this is ${selectedDate}`)

    const changeTasks = () => {
        console.log(selectedDate)
        console.log(selectedDate)
        console.log(selectedDate)
        console.log(selectedDate)
        console.log(`this is ${selectedDate}`)
        console.log(`this is ${selectedDate}`)
        console.log(`this is ${selectedDate}`)
        console.log(`this is ${selectedDate}`)
    }



    return (
        <div className="homepage-container">
            <h1>TO DO LIST</h1>

            {error && <h1>{ error }</h1>}
            {isPending && <h1>Loading...</h1>}
            {
                tasks &&
                <TaskList items={ tasks['9-2-2023'] } />
            }


            <CalendarTable 
                changee={changeTasks}
                todayDate={ date } 
                setTodayDate={ setDate } 
            />
            <CreateTask />
            
        </div>
    );
}
 
export default Homepage;

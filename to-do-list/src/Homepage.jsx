import useFetch from "./useFetch";
import TaskList from "./TaskList";

const Homepage = () => {
    const { data: tasks, isPending, error} = useFetch('http://localhost:8000/tasks');

    return (
        <div className="homepage-container">
            <h1>TO DO LIST</h1>

            {error && <h1>{ error }</h1>}
            {isPending && <h1>Loading...</h1>}
            {tasks &&
            <TaskList items={ tasks } title='Your list for this day:'/>
            }
            
        </div>
    );
}
 
export default Homepage;

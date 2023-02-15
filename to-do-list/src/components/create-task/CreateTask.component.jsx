import { useState} from "react";
import './CreateTask.style.scss';

const CreateTask = ({currentDate, array, createTaskNew}) => {

    const [newTask, setNewTask] = useState('');

    const handleCreate = () => {
        const task = {'task': newTask, 'date': currentDate, 'isDone': false};
        if (!newTask) {
            console.log('task value is empty')
            return
        }   

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        }).then((response) => {
            console.log('new task added');
            setNewTask('');
            response.json().then((serverTask) => {
                array.push(serverTask);
                createTaskNew([...array]);
            })
        })
    }

    return (
        <div className="adding-container">
            <input
                className="adding-container__input"
                required 
                type="text" 
                placeholder="e.g., Read a book"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button
                className="adding-container__btn-add-task"
                type="button" 
                onClick={handleCreate}
            >
                Add task
            </button>
        </div>
    );
}
 
export default CreateTask;

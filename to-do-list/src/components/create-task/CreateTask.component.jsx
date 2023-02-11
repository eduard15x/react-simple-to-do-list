import { useState, useEffect } from "react";

const CreateTask = ({currentDate}) => {

    const [newTask, setNewTask] = useState('');


    const handleCreate = () => {
        const task = {'task': newTask, 'date': currentDate, 'isDone': false};
        if (!newTask) {
            console.log('task emptyu')
            return
        }

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        }).then(() => {
            console.log('new task added');
        })
    }


    return (
        <div>
            <input required type="text" placeholder="e.g., Read a book" onChange={(e) => setNewTask(e.target.value)}/>
            <button type="button" onClick={handleCreate}>Add task</button>
            <p>{newTask}</p>
            <p>{currentDate}</p>
        </div>
    );
}
 
export default CreateTask;

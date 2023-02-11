import { useState } from 'react';
import './List.style.scss';

const List = ({array, isPending, error, valoare}) => {

    const handleDone = (taskObj, dateObj, e) => {
        const updatedTask = {'task': taskObj, 'date': dateObj, 'isDone': true};

        fetch(`http://localhost:5000/tasks/${e}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updatedTask)
        }).then(() => {
            console.log('task edited');
        })
    }

    const handleDelete = (e) => {
        fetch(`http://localhost:5000/tasks/${e}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('task deleted');
        })
    }

    return (
        <div className="tasks-container">
            <h2 className='tasks-container__title'>My tasks for {valoare}</h2>
            {isPending && <p>Loading...</p>}
            {error && <p>{ error }</p>}
            {array && 
                <ul className="tasks-list">
                    {array.map((el) => (
                        <li key={el.id} className='task-item'>
                                <button 
                                    className='task-item__btn-end'
                                    disabled={el.isDone} 
                                    onClick={()=>handleDone(el.task, el.date, el.id)}
                                />
                                <p className={`task-item__text ${el.isDone ? 'text-cut': ''}`}>
                                    {el.task}
                                </p>
                                <button 
                                    className='task-item__btn-remove'
                                    onClick={()=>handleDelete(el.id)}
                                >
                                    X
                                </button>
                            {/* <p>{valoare}</p> */}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}
 
export default List;

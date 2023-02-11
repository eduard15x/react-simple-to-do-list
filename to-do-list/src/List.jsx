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
        <div className="list-container">
            <h2>My tasks for today</h2>
            {isPending && <p>Loading...</p>}
            {error && <p>{ error }</p>}
            {array && 
                <div className="list-items">
                    {array.map((el) => (
                        <div key={el.id} style={{marginBottom: 15 + 'px'}}>
                            <div>
                                <p>{el.task}</p>
                                <p>{el.date}</p>
                                <button onClick={()=>handleDone(el.task, el.date, el.id)}>DONE</button>
                                <button onClick={()=>handleDelete(el.id)}>REMOVE</button>
                            </div>
                            {/* <p>{valoare}</p> */}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
 
export default List;

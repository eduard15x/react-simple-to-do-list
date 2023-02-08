const TaskList = ({items, title}) => {

    return (
        <div className="task-list">
            <h2>{ title }</h2>
            {items.map((x) => (
                <h1 key={x.id}>{x.task}</h1>
            ))}
        </div>
    );
}
 
export default TaskList;

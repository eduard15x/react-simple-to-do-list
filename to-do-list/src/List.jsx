const List = ({array, isPending, error, valoare}) => {

    return (
        <div className="list-container">
            <h2>My tasks for today</h2>
            {isPending && <p>Loading...</p>}
            {error && <p>{ error }</p>}
            {   array && 
                <div className="list-items">
                    {array.map((el) => (
                        <div key={el.id} style={{marginBottom: 15 + 'px'}}>

                            {el.date === valoare ? 
                            <div>
                            <p>{el.task}</p>
                            <p>{el.date}</p>
                            </div> : 
                            ''}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
 
export default List;

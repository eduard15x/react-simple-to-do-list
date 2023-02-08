import { useState } from "react";

const NewTask = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <input type='text' value={ value } onChange={(e) => setValue(e.target.value)}/>
            <button>Add to list</button>
        </div>
    );
}
 
export default NewTask;

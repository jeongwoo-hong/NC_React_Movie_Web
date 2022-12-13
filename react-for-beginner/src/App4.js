import { useState } from "react";

function App4() {
    const [toDo, setToDo] = useState("");
    const onChange = (event) => {
        setToDo(event.target.value);
        console.log(toDo);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        setToDo("");
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do.." />
            <button>Add To Do</button>
        </form>
    </div>
}

export default App4;
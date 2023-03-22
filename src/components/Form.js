import { useState } from "react";
import "./Form.css";

function Form({ 
    setData }) {
    const [todo, setTodo] = useState('')
    const handleSubmit = (e) => {
    e.preventDefault()
    let item = {
        id:  Date.now(),
        text: todo,
        selected:false
    }
    setData((prev) => {
        return [...prev,item]
    })
    setTodo("")
    }

    return <form onSubmit={handleSubmit} className="form">
    <input type="text" className="input"
    placeholder="Add new list item"
    required
    autoComplete="off"
    onChange={(e) => {
        setTodo(e.target.value)
    }}
    value={todo}
    />
     <button className="btn">Add</button>
    </form>;
}

export default Form;

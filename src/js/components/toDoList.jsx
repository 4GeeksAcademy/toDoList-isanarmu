import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    function handleChange(event) {
        setNewTask(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTask();

    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask])
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((element, i) => i !== index);
        setTasks(updateTasks)
    }

    return (
        <>
            <h1>todos</h1>
            <form className="to-do-list" onSubmit={handleSubmit} >
                <div className="list">
                    <input
                        type="text"
                        placeholder="Enter todo..."
                        value={newTask}
                        onChange={handleChange}
                    />
                </div>

                <ul>
                    {tasks.map((element, index) =>
                        <li key={index}>
                            <span className="text">{element} </span>
                            <button type="button" className="delete-button" onClick={() => deleteTask(index)} >X</button>
                        </li>
                    )}
                </ul>
                <div className="footer">
                   {tasks.length} {tasks.length === 1 ? "item left": "items left"}
                </div>


            </form >
        </>
    )
}


export default ToDoList
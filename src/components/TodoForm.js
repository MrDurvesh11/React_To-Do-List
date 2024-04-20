import React, { useState } from "react";

export default function TodoForm({addToDo}) {

  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(taskInput, descriptionInput); 
    // Clears input fields after submission
    setTaskInput("");
    setDescriptionInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          className="todo-input"
          placeholder="Task"
        /><br/><br/>
        <input
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
          type="text"
          className="todo-input"
          placeholder="Description"
        /><br/><br/>
        <button type="submit" className="todo-button">
          Add Task
        </button>
      </form>
    </div>
  );
}
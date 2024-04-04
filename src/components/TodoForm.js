import React, { useState } from "react";

export default function TodoForm(props) {
  
  const [Input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToDo(Input);
    setInput("");

  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input value={Input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="todo-input"
          placeholder="Add the Task"
        />
        <button type="submit" className="todo-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

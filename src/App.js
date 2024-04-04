import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      //id = todos[todos.length - 1].id + 1;
      // ABOVE CODE IS NOT WORKKING PROPERLY OF INSCREMENTING ID
     id = todos.length + 1;


    } 
    let todo = {id:id, text:text,completed:false,important:false};
    let newTodos=[todo, ...todos]
    console.log(newTodos);
    setTodos(newTodos);   

  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const importantTodo = (id) =>{
    let updatedTodos=todos.map((todo)=>{
      if(todo.id===id){
        todo.important=!todo.important;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  let sortedTodos =todos.sort((a,b)=> b.important - a.important)

  return (
    <div class="todo-app">
      <h1>Todo List</h1>
      <TodoForm addToDo={addToDo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo)=>{
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} key={todo.id} todo={todo} />
        )
      })}
    </div>
  );
}

export default App;

import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import React, { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToDo = (text,description) => {
    const currentTime = new Date();
    let id = 1;
    if (todos.length > 0) {
     
     id = todos.length + 1;


    } 
    let todo = {id:id, text:text,desc:description,completed:false,important:false,addedTime: currentTime };
    let newTodos=[...todos,todo ]
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

  // Function to handle drag and drop
  const onDragEnd = (result) => {
    // Destructure data from result
    const { destination, source, draggableId } = result;

    // If destination is null or position unchanged, exit
    if (!destination || destination.index === source.index) {
      return;
    }

    // Reorder todos array
    const newTodos = Array.from(todos);
    const [removed] = newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, removed);

    // Update todos state with reordered array
    setTodos(newTodos);
  };

  useEffect(() => {
    // Check todos every second
    const timer = setInterval(() => {
      const currentTime = new Date();
      // Iterate over todos and check if any todo is not completed and 2 minutes have passed since its addition
      setTodos(todos.map(todo => {
        if (!todo.completed && (currentTime - todo.addedTime) >= 1200) {
          // Update todo to change color
          return { ...todo, important: true };
        }
        return todo;
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [todos]);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (todo.description && todo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  let sortedTodos =todos.sort((a,b)=> b.important - a.important)

  


  return (
    <div class="todo-app">
      <h1>Todo List</h1>
      <TodoForm addToDo={addToDo} />
      <hr className="seperator"/>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        className="search-input "
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          importantTodo={importantTodo}
        />
      ))}
    </div>
  );
  
}

export default App;

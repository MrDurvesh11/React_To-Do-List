import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'
import { PiWarningCircleBold } from 'react-icons/pi'

export default function TodoItem(props) {
    const { todo,removeTodo, completeTodo, importantTodo } = props;
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row "} style={todo.important ? { background: 'red' } : {}}>
            <p>Title: {todo.text}</p>
            {/* Displaying the description */}
            <p>Description: {todo.desc}</p>
            <div className='iconsContainer'>
                <PiWarningCircleBold onClick={() => importantTodo(todo.id)} style={{ marginRight: 5 }} />
                <RiCloseCircleLine className='icon' style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)} />
                <BiCheckCircle className='icon' onClick={() => completeTodo(todo.id)} />
            </div>
        </div>
    )
}

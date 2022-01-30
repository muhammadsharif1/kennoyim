import React, { useState } from 'react';
import './App.scss';

import Todo from './Components/Todo/Todo'

function App () {

    const [todos, setTodos] = useState([
        {
            id: 0,
            text: "Wake up",
            isCompleted: false
        },
        {
            id: 1,
            text: "Hands your hands",
            isCompleted: false
        }
    ]);


    const addTodo = evt => {

        if (evt.code === 'Enter') {
            const newTodo = {
                id: todos[todos.length - 1]?.id + 1 || 0,
                text: evt.target.value.trim(),
                isCompleted: false,
            }

            setTodos([...todos, newTodo])

        }
    }


    const handleDelete = (evt) => {

        const { todoId } = evt.target.dataset

        const foundTodoId = Number(todoId)


        const filteredTodos = todos.filter(todo => todo.id !== foundTodoId)

        setTodos([...filteredTodos]);
    }

    const handleComplete = (evt) => {
        const { todoId } = evt.target.dataset

        const foundTodoId = Number(todoId)

        const foundTodo = todos.find(todo => todo.id === foundTodoId)

        foundTodo.isCompleted = !foundTodo.isCompleted


        setTodos([...todos])
    }



    return (
        <>
            <h1>Todo</h1>


            <input type="text" onKeyUp={addTodo} />

            <ul>
                {todos.length > 0 && todos.map((todo) => (

                    <Todo key={todo.id} handleComplete={handleComplete} handleDelete={handleDelete} todo={todo}>{todo.text}</Todo>

                ))}
            </ul>

        </>
    );
}

export default App;

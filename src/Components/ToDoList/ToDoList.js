import React, { useState } from 'react';
import ToDo from '../ToDo/ToDo';
import ToDoInputForm from '../ToDoInputForm/ToDoInputForm';

function ToDoList() {

    const [todoList, setTodoList] = useState([])
    const [counter, setCounter] = useState(0)
    

    const addToDo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newToDoList = [todo, ...todoList]
        setTodoList(newToDoList);
    }


    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setCounter(1)
        setTodoList(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeToDo = id => {
        const removeArr = [...todoList].filter(todo => todo.id !== id)
        setTodoList(removeArr)

    }

    const completeToDo = id => {
        let updatedToDo = todoList.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodoList(updatedToDo)
    }


    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <ToDoInputForm onSubmit={addToDo} />
            <ToDo
                todoList={todoList}
                completeToDo={completeToDo}
                removeToDo={removeToDo}
                updateTodo={updateTodo}
                setCounter={setCounter}                
            />
        </div>
    )
}

export default ToDoList
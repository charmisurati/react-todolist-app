import React, { useState } from 'react'
import ToDoInputForm from '../ToDoInputForm/ToDoInputForm'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

export default function ToDo({ props, todoList, completeToDo, removeToDo, updateTodo, setCounter }) {


    const [editList, setEditList] = useState({
        id: null,
        value: ''
    })

    const [updateValue, setUpdateValue] = useState('')

    const submitUpdate = value => {
        updateTodo(editList.id, value);
        setEditList({
            id: null,
            value: ''
        });
    };

    if (editList.id) {
        return <ToDoInputForm editList={editList} onSubmit={submitUpdate} counter={1} updateValue={updateValue} />;
    }

    return todoList.map((value, index) => (
        <div className={value.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
            <div key={value.id} onClick={() => completeToDo(value.id)}>
                {value.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeToDo(value.id)}
                    className='delete-icon'
                />
                <TiEdit onClick={() => {
                    setEditList({ id: value.id, value: value.text })
                    setUpdateValue(value.text);
                    setCounter(1)
                }}
                    className='edit-icon' />
            </div>
        </div>
    ))
}

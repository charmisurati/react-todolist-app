import React, { useState, useEffect, useRef } from 'react'

function ToDoInputForm(props) {

    const [input, setInput] = useState('');
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    useEffect(() => {
        if (props.updateValue !== undefined) {
            setInput(props.updateValue)
        }
    }, [])


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('');
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Add a Todo' name="text"
                    className='todo-input' value={input} onChange={handleChange}
                    ref={inputRef} />

                <button className='todo-button'>
                    {
                        props.counter ? 'Update ToDo' : 'Add ToDo'
                    }
                </button>
            </form>
        </div>
    )
}

export default ToDoInputForm
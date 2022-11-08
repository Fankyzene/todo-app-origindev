import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Todolist from '../TodoList/Todolist'

function TodoForm(props, ...todos) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Date.now(),
      text: input,
    })
    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  )
}

export default TodoForm

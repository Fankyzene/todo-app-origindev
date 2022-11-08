import React from 'react'
import { useState } from 'react'
import Todolist from '../TodoList/Todolist'

function TodoForm(props, ...todos) {
  const [input, setInput] = useState('')

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
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      ></input>
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm

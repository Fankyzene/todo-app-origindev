import React from 'react'
import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'

function Todolist() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(...todos)
  }

  return (
    <div>
      <h1>What to do next?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default Todolist

import React from 'react'
import { useState } from 'react'
import Todo from '../Todo/Todo'
import TodoForm from '../TodoForm/TodoForm'

function Todolist() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item)),
    )
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removeArr)
  }

  const completeTodo = (id) => {
    console.log(todos)
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
        return todo
      }
      setTodos(updatedTodos)
      console.log(todos)
    })
  }
  return (
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl m-3 font-bold underline text-gray-100 max-w-sm">
        What to do next?
      </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default Todolist

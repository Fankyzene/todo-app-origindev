import React from 'react'
import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }
  console.log(todos)
  return todos.map((todo, index) => (
    <div class="">
      <div
        className={
          todo.isComplete
            ? 'flex flex-row items-center content-end gap-y-1.5 justify-between text-base p-3 font-mono w-96 h-10 bg-orange-600'
            : 'flex flex-row items-center content-end gap-y-1.5 justify-between text-base p-3 font-mono w-96 h-10 bg-green-600 mt-3'
        }
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="flex flex-row gap-1">
          <div className="delete-icon" onClick={() => removeTodo(todo.id)}>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <div
            className="edit-icon"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  ))
}

export default Todo

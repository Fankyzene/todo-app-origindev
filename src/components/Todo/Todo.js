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

  return todos.map((todo, index) => (
    <div class="">
      <div
        class={
          todo.isComplete
            ? 'flex flex-row items-center content-end gap-y-1.5 justify-between text-base p-3 font-mono w-60 h-10 bg-orange-600'
            : 'flex flex-row items-center content-end gap-y-1.5 justify-between text-base p-3 font-mono w-60 h-10 bg-green-600'
        }
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div class="flex flex-row ">
          <div className="delete-icon" onClick={() => removeTodo(todo.id)}>
            remove
          </div>
          <div
            className="edit-icon"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            edit
          </div>
        </div>
      </div>
    </div>
  ))
}

export default Todo

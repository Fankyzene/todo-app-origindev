import React from 'react'
import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todolist from '../TodoList/Todolist'

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
    <div>
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
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

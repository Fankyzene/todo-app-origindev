import React from 'react'
import { useState, useEffect, useRef } from 'react'

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
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            class="max-w-md"
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
            class="max-w-md"
            onChange={handleChange}
            ref={inputRef}
          />

          <button class="max-w-md">Add todo</button>
        </>
      )}
    </form>
  )
}

export default TodoForm

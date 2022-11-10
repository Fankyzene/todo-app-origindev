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
    <form
      className="flex flex-row items-center justify-items-center w-200 font-mono"
      onSubmit={handleSubmit}
    >
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="flex flex-row items-center content-end gap-y-1.5 justify-between text-base p-3 font-mono w-96 h-9 bg-green-600 mt-3"
            onChange={handleChange}
            ref={inputRef}
          />
          <button class="flex-row content-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add todo"
            value={input}
            name="text"
            className="max-w-md mb-2"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="max-w-md text-2xl pl-2.5 ">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm

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
      class="flex flex-row items-center justify-items-center w-100 font-mono"
      onSubmit={handleSubmit}
    >
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            class="flex flex-row items-center content-end justify-between gap-y-1.5 text-base p-3 font-mono w-auto h-10 bg-green-600"
            onChange={handleChange}
            ref={inputRef}
          />
          <button class="flex-row content-center justify-center">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
            class="max-w-md mb-2"
            onChange={handleChange}
            ref={inputRef}
          />

          <button class="max-w-md text-2xl pl-2.5 ">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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

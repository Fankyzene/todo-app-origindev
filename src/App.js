import React, { useEffect, useState } from 'react'
import Todolist from './components/TodoList/Todolist'

const App = () => {
  return (
    <>
      <header
        className="text-5xl m-1.5 font-bold text-4xl font-mono text-gray-300"
        aria-label="Todo's list"
      >
        Todo's list
      </header>
      <Todolist />
    </>
  )
}

export default App

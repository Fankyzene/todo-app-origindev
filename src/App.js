import React, { useEffect, useState } from 'react'
import Todolist from './components/TodoList/Todolist'

const App = () => {
  return (
    <>
      <header class="font-bold text-4xl font-mono text-gray-300 max-w-md">
        Todo's list
      </header>
      <Todolist />
    </>
  )
}

export default App

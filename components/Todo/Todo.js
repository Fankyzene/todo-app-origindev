import React from 'react'

function Todo() {
    const [todos, setTodos] = React.useState([
        { text: "Learn about React", isCompleted: false },
        { text: "Meet friend for lunch", isCompleted: false },
        { text: "Build really cool todo app", isCompleted: false },
      ]);
  
    return (
      <div>Todo</div>
    )
  }


export default Todo
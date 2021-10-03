import React from 'react';
import Todo from './Todo';

function Done({ todos }) {

  return (
    <div>
      <div className="todo-container">
        <div className="todo-list">
          {todos.map(todo => (
            <Todo key={todo.id} text={todo.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Done


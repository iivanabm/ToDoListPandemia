import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {

  return (
    <div className="todo-container">
      <div className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} text={todo.text} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
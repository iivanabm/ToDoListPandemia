import React from 'react';

const Todo = ({ text }) => {


  return (
    <div className="todo">
      <div className="todo-item" >{text}</div>
    </div>
  );
};

export default Todo;
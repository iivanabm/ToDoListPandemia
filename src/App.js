import React, { useState } from 'react';
import './App.css';
import Done from './components/Done';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo da Pandemia</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <div>
        <h5>Pendente</h5>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <h5>Concluído</h5>
        {todos.completed && <Done />}
      </div>
    </div>
  );
}

export default App;

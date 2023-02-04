import './App.css';

import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

const API = 'http://localhost:5000';

function App() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviou');
  };

  return (
    <div className='App'>
      <h1>Todo</h1>
      <div className='todo-header'>
        <h1>Todo List React</h1>
      </div>
      <div className='form-todo'>
        <h2>Lista</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Tafera:</label>
            <input
              type='text'
              name='title'
              placeholder='Digite aqui sua tarefa'
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <input
            type='submit'
            value='Enviou'
          />
        </form>
      </div>
      <div className='list-todo'>
        <p>Lista de Tarefas:</p>
        {todos.length === 0 && <p>Não há tarefas.</p>}
      </div>
    </div>
  );
}

export default App;

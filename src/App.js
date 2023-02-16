import './App.css';

import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handletaskTheList = () => {
    setTitle('');
    setTodos([...todos, title]);
  };

  return (
    <div className='App'>
      <div className='todo-header'>
        <h1>Todo List React</h1>
      </div>
      <div className='form-todo'>
        <h1>Lista</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Tafera: </label>
            <input
              type='text'
              name='title'
              placeholder='Digite aqui sua tarefa'
              value={title || ''}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <input
            className='input-enviar'
            type='submit'
            value='Enviar'
            onClick={handletaskTheList}
          />
        </form>
      </div>
      <div className='list-todo'>
        <h1>Lista de Tarefas:</h1>
        <div className='div-tarefas'>
          {todos.length === 0 && <p>Não há tarefas.</p>}
          {todos.length !== 0 &&
            todos.map((todo) => (
              <div className='div-container'>
                <h2 key={todo}>{todo} </h2>
                <button className='button-remove'>x</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

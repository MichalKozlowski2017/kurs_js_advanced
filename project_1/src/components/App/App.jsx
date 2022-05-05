import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from '../List/List';
import styles from './App.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
  const [todos, setTodos] = useState([]);
  const [isError, isSetError] = useState(false);

  useEffect(() => {
    if (storage) {
      setTodos(storage);
    }
  }, []);

  useEffect(() => {
    setStorage(localStorage.setItem('todos', JSON.stringify([...todos])));
  }, [todos]);

  const saveTodos = (todosToSave) => {

  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleChecked = (e, id) => {
    const indexOfCheckedElement = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[indexOfCheckedElement].checked = !newTodos[indexOfCheckedElement].checked;
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 2) {
      isSetError(true);
    } else {
      isSetError(false);
      setTodos([...todos, { id: uuidv4(), name: inputValue, checked: false }]);
    }
    setInputValue('');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="write todo"
        />
        {isError ? <div className={styles.error}>Za mało znaków</div> : ''}
        <button type="submit">send todo</button>
      </form>
      <List onCheck={handleChecked} onRemove={handleDelete} todoList={todos} />
    </div>
  );
};

export default App;

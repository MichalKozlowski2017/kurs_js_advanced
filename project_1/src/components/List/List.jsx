import React from 'react';

import styles from './List.module.css';

const List = ({ onCheck, onRemove, todoList }) => {
  if (todoList.length <= 0) return null;
  return <ul className={styles.list}>
      {todoList.map((todo) => (
        <li id={todo.id} className={styles.list__element} key={todo.id}>
          <span className={todo.checked ? styles.done : ''}>{todo.name}</span>
          <div>
            <input onChange={(e) => onCheck(e, todo.id)} type="checkbox"  checked={todo.checked} />
            <button onClick={() => onRemove(todo)}> X </button>
          </div>
        </li>
      ))}
    </ul>;
};

export default List;

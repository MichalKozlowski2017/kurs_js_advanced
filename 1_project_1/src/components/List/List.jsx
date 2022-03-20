import React from "react";

import styles from "./List.module.css";

const List = ({ handleDelete, todoList }) => {
  return (
    <ul className={styles.list}>
      {todoList.map((todo, index) => (
        <li className={styles.list__element} key={index}>
          <span>{todo.name}</span>
          <div>
            <input type="checkbox" className="done" />
            <button onClick={() => handleDelete(index)}> X </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;

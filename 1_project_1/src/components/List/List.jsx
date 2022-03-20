import React from "react";

const List = ({ handleDelete, todoList }) => {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo.name}
          <input type="checkbox" className="done" />
          <button onClick={() => handleDelete(index)}> X </button>
        </li>
      ))}
    </ul>
  );
};

export default List;

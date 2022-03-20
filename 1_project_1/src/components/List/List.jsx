import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.todoList.map((todo, index) => (
        <li key={index}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default List;

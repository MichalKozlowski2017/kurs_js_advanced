import React, { useState, useEffect } from "react";
import List from "../List/List";

const TODO_ARRAY = [
  {
    name: "Wyniesc smieci",
    checked: false,
  },
  {
    name: "Smieci wyniesc",
    checked: false,
  },
  {
    name: "Wyrzucic smieci",
    checked: false,
  },
];

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("todos")) ?? []);
  const [todos, setTodos] = useState([]);
  const [isError, isSetError] = useState(false);

  useEffect(() => {
    setTodos(storage);
  }, []);

  useEffect(() => {
    setStorage(localStorage.setItem("todos", JSON.stringify([...todos])));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((item) => item !== todos[index]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 2) {
      isSetError(true);
    } else {
      isSetError(false);
      setTodos([...todos, { name: inputValue, checked: false }]);
      setStorage(
        localStorage.setItem(
          "todos",
          JSON.stringify([
            ...todos,
            {
              name: inputValue,
              checked: false,
            },
          ])
        )
      );
    }
    setInputValue("");
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
        {isError ? <div className="error">Za mało znaków</div> : ""}
        <button type="submit">send todo</button>
      </form>
      <List handleDelete={handleDelete} todoList={todos} />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import List from "../List/List";

const todos = [
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
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length <= 2) {
      alert("Tekst jest za krótki");
    } else {
      console.log(inputValue);
    }
  };
  return (
    <div>
      <h1>Hello World</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} placeholder="write todo" />
        <button type="submit">send todo</button>
      </form>
      <List todoList={todos} />
    </div>
  );
};

export default App;

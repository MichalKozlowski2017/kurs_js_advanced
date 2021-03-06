// Podstawy

// window - przegladrka
// uzycie - fetch, localStorage
// console.log(window);

// console.log(innerWidth)
// console.log(window.innerWidth)

//
// console.log(document);

// wyszukiwanie elementów

// to zwraca element
// const title = document.querySelector('#title'); //h1 .className #id .className dsa

// console.log(title)

// to zwraca zawsze tablice
// const titles = document.querySelectorAll('h1');

// dodawanie elementów

// const list = document.querySelector('#list');

// list.innerHTML += `<li> przyjść na zajęcia </li>`
// list.innerHTML += `<li> wyprowadzic psa </li>`

// usuwanie

// list.innerHTML = ''; // 1 metoda - usuwanie wnetrznosci
// list.remove(); // 2 metoda - usuwanie z rodzicem

// console.log(list.innerHTML)

// modyfikacja

// const listItems = document.querySelectorAll('#list li')

// console.log(listItems);

// listItems.forEach(item => {
// console.log(item);
// item.classList.add('completed')
// item.classList.remove('completed')
// item.classList.toggle('completed')

// item.style.textDecoration = 'line-through';
// })

// nullish operator
// const todos = JSON.parse(localStorage.getItem('todos')) ?? [];
let todos = JSON.parse(localStorage.getItem("todos"));

if (todos === null) {
  todos = [];
}

const form = document.querySelector("#todo-form");
const draftButton = document.querySelector("#draftButton");
const list = document.querySelector("#list");
const input = document.querySelector("#todo-input");

input.value = localStorage.getItem("draft");

todos.forEach((todo) => {
  list.innerHTML += `<li ${todo.checked ? 'class="completed"' : ""}>
  <input class="check" type="checkbox" ${todo.checked ? "checked" : ""}>
  <span>${todo.name}</span>
  <button type="button"> X </button>
  </li>`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.length <= 2) {
    alert("Nazwa jest za krótka");
  } else {
    // dodawanie elementu listy
    list.innerHTML += `<li>
  <input class="check" type="checkbox">
  <span>${input.value}</span>
  <button type="button"> X </button>
  </li>`;

    localStorage.setItem(
      "todos",
      JSON.stringify([
        ...todos,
        {
          name: input.value,
          checked: false,
        },
      ])
    );

    todos = [
      ...todos,
      {
        name: input.value,
        checked: false,
      },
    ];
    // czyszczenie pola formularza
    input.value = "";
  }
});

list.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    // console.log(event.target); // konkretny klikniety checkbox
    const selectedInput = event.target;

    // na jego rodzicu (czyli li) manipuluje klasa completed, ktora w CSS zmienia styl wyswietlenia
    selectedInput.parentElement.classList.toggle("completed");

    const tempTodos = [];
    list.querySelectorAll("li").forEach((li) => {
      tempTodos.push({
        name: li.querySelector("span").innerHTML,
        checked: li.querySelector(".check").checked,
      });
    });

    todos = tempTodos;

    localStorage.setItem("todos", []);
    localStorage.setItem("todos", JSON.stringify([...tempTodos]));
  }

  if (event.target.tagName === "BUTTON") {
    const selectedButton = event.target;
    selectedButton.parentElement.remove();

    const filteredTodos = todos.filter((todo) => {
      todo.name !== event.target.previousElementSibling;
    });
  }
});

draftButton.addEventListener("click", () => {
  localStorage.setItem("draft", input.value);
});

// Zadanie domowe:

// 1. Dopisac walidacje do formularza
// 2. Dodac do localStorage przypadek w ktorym mam przekreslone zadanie (po name)

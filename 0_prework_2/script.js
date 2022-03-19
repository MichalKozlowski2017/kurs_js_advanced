

const todoList = {
  input: document.querySelector('#addTask'),
  button: document.querySelector('#addBtn'),
  taskList: document.querySelector('#taskList'),

  addTask(text) {
    if(text.length <= 2) {
      alert('Nazwa jest za krótka')
    } else {
      // Add task
      this.taskList.innerHTML += `
        <div class='task' id="task-${document.querySelectorAll('.task').length}">
          <div class="task__name">${text}</div>
          <input class="done" type="checkbox" />
          <button class="delete">
            Delete
          </button>
        </div>
      `

      // Check task
      document.querySelectorAll('.task').forEach((el,i) => {
        el.querySelector('.done').addEventListener('change', function() {
          if(this.checked) {
            el.querySelector('.task__name').style.textDecoration = "line-through"
            el.classList.add('done')
          } else {
            el.querySelector('.task__name').style.textDecoration = "none"
            el.classList.remove('done')
          }
        })
      })
     
      // Delete task
      document.querySelectorAll('.task').forEach((el,i) => {
        el.querySelector('.delete').addEventListener('click', () => {
          el.remove();
        })
      })
      
      this.input.value = "";
    }
  },


  init() {
    this.button.addEventListener('click', (e) => {
      this.addTask(this.input.value)
    })
  }
}


todoList.init();
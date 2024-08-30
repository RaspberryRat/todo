import "./styles.css"
import Todo from "./todo.js"


const newTodoBtn = document.getElementById('add-todo-submit');


newTodoBtn.addEventListener('click', newTodo, false);

function newTodo(event) {
  event.preventDefault();
  console.log("starting...")
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due-date').value;
  const priority = document.querySelector('input[name="priority"]:checked').value;


  const newTodo = new Todo(title, description, dueDate, priority);

  publishTodo(newTodo);
}

function publishTodo(todo) {
  const defaultList = document.getElementById('default');
  const list = document.createElement('ul');
  defaultList.appendChild(list);
  for (const key in todo) {
    let item = document.createElement('li');
    let keyText = document.createElement('div');
    let keyPairText = document.createElement('div');
    if (todo.hasOwnProperty(key)) {
      keyText.innerText = `${key}:`;
      keyPairText.innerText = todo[key];
    }
    item.appendChild(keyText);
    item.appendChild(keyPairText);
    list.appendChild(item);
  }
}

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
  console.log(newTodo)
}

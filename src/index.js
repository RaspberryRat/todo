import "./styles.css"
import Todo from "./todo.js"
import Project from "./project.js"


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

  addToProject(newTodo);

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
      const formattedKey = formatText(key);
      keyText.innerText = `${formattedKey}:`;
      keyPairText.innerText = todo[key];
    }
    item.appendChild(keyText);
    item.appendChild(keyPairText);
    list.appendChild(item);
  }
}

function formatText(text) {
  let wordIndex = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      wordIndex.push(i);
    }
  }

  if (wordIndex.length === 0) {
    return titleCase(text);
  } else {
    let formattedText = text.toLowerCase();
    let arrayText = formattedText.split('');

    for (let i = wordIndex.length - 1; i >= 0; i--) {
      const spaceLocation = wordIndex[i];
      arrayText.splice(spaceLocation, 0, " ");
    }

    formattedText = arrayText.join('');
    return formattedText = titleCase(formattedText);
  }
}

function titleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

const defaultProject = new Project();

function addToProject(item, project = defaultProject) {
  project.addItem(item);
}

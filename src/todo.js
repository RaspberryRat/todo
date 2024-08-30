// What does a todo have?
// Create a class and add title, description, date
export default Todo;



class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

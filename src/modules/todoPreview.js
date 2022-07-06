import createTodoItem from '../modules/todoItem.js';
import closeAddTaskForm from '../index.js'

let todoList = [];

const addTaskForm = document.getElementById("addTaskForm");
addTaskForm.addEventListener("submit", function (e) {
	e.preventDefault();
  todoList.push(createTodoItem());
  addTaskForm.reset();
  closeAddTaskForm();
  console.log(todoList);
});

export default todoList;

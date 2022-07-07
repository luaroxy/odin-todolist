import createTodoItem from '../modules/todoItem.js';
import closeAddTaskForm from '../index.js'

let todoList = [];

const addTaskForm = document.getElementById("addTaskForm");
addTaskForm.addEventListener("submit", function (e) {
	e.preventDefault();
  todoList.push(createTodoItem());
  displayTodoItem(todoList);
  addTaskForm.reset();
  closeAddTaskForm();
});

const mainContent = document.getElementById("mainContent");

const projectName = document.createElement('h1');
projectName.textContent = "Index";
mainContent.appendChild(projectName);

function displayTodoItem(todoList){
  todoList.forEach(element => {
    const todoItem = document.createElement('p');
    todoItem.textContent = element;
    mainContent.appendChild(todoItem);
  });
}


export default todoList;

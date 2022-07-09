import createTodoItem from '../modules/todoItem.js';
import closeAddTaskForm from '../index.js'

let todoList = [];

const addTaskForm = document.getElementById("addTaskForm");
addTaskForm.addEventListener("submit", function (e) {
	e.preventDefault();
  let newTodoItem = createTodoItem();
  todoList.push(createTodoItem());
  displayTodoTasksContainer.appendChild(displayTodoItem(newTodoItem));
  addTaskForm.reset();
  closeAddTaskForm();
});

const displayTodoTasksContainer = document.getElementById("displayTodoTasksContainer");

const projectName = document.createElement('h1');
projectName.textContent = "Index";
displayTodoTasksContainer.appendChild(projectName);

function displayTodoItem (element){
  let todoTask = document.createElement("div");
  let taskCheckbox = document.createElement("input");
  let taskName = document.createElement("h1");
  let taskDescription = document.createElement("p");
  let taskEdit = document.createElement("button");
  let taskDelete = document.createElement("button");
  let taskDuedate = document.createElement("p");
  let taskProject = document.createElement("p");

  todoTask.classList.add("todoTask");

  taskCheckbox.type = "checkbox";
  taskCheckbox.id =  "checkTask";
  taskCheckbox.name = "checkTask";

  taskName.textContent= element.name;
  taskDescription.textContent= element.description ;
  taskDuedate.textContent= element.dueDate;
  taskProject.textContent= element.project;

  todoTask.appendChild(taskCheckbox);
  todoTask.appendChild(taskName);
  todoTask.appendChild(taskDescription);
  todoTask.appendChild(taskDuedate);
  todoTask.appendChild(taskProject);
  todoTask.appendChild(taskEdit);
  todoTask.appendChild(taskDelete);

  return todoTask;
}
  
  

export default todoList;

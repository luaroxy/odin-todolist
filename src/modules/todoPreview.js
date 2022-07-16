import createTodoItem from './todoItem.js';
import TodoList from './todoList.js';
import toggleTaskFormVisibility from '../index.js';
import { v4 as uuidv4 } from 'uuid';

let todoList = new TodoList();
let checkEditTask = {status: "false", id: ""};

const addTaskForm = document.getElementById("addTaskForm");
addTaskForm.addEventListener("submit", function (e) {
	e.preventDefault();
  if (checkEditTask.status==true){
   let taskID = checkEditTask.id;
   document.getElementById(taskID).remove();
   todoList.removeById(taskID);
   checkEditTask.status = false;
  }
  let newTodoItem = createTodoItem();
  todoList.add(newTodoItem);
  displayTodoTasksContainer.appendChild(displayTodoItem(newTodoItem));
  addTaskForm.reset();
  toggleTaskFormVisibility(false);
});

const displayTodoTasksContainer = document.getElementById("displayTodoTasksContainer");

const projectName = document.createElement('h1');
projectName.textContent = "Index";
displayTodoTasksContainer.appendChild(projectName);

function displayTodoItem (element){
  let todoTask = document.createElement("div");
  let checkboxContainer = document.createElement("div");
  let taskCheckbox = document.createElement("input");
  let labelCheckbox = document.createElement("label");
  let taskName = document.createElement("h1");
  let taskDescription = document.createElement("p");
  let taskEdit = document.createElement("button");
  let taskDelete = document.createElement("button");
  let taskDuedate = document.createElement("p");
  let taskProject = document.createElement("p");

  todoTask.classList.add("todoTask");
  todoTask.setAttribute('id',element.id);
  checkboxContainer.classList.add("checkboxContainer");

  taskCheckbox.type = "checkbox";
  let newTaskID = uuidv4();
  taskCheckbox.id =  newTaskID;
  taskCheckbox.name = "checkTask";
  labelCheckbox.htmlFor =  newTaskID;
  setPriorityColor(element,labelCheckbox);
  checkboxContainer.appendChild(taskCheckbox);
  checkboxContainer.appendChild(labelCheckbox);

  taskName.textContent= element.name;
  taskDescription.textContent= element.description ;
  taskDuedate.textContent= element.dueDate;
  taskProject.textContent= element.project;

  taskDelete.classList.add("deleteButton");
  taskDelete.setAttribute('data-taskid',element.id);
  taskDelete.addEventListener("click", deleteTask);

  taskEdit.setAttribute('data-taskid',element.id);
  taskEdit.addEventListener("click", editTask);

  todoTask.appendChild(checkboxContainer);
  todoTask.appendChild(taskName);
  todoTask.appendChild(taskDescription);
  todoTask.appendChild(taskDuedate);
  todoTask.appendChild(taskProject);
  todoTask.appendChild(taskEdit);
  todoTask.appendChild(taskDelete);

  return todoTask;
}
  
function setPriorityColor(element, todoTask){
  let priority = element.priority;
  switch(priority) {
    case "lowPriority":
      todoTask.style.border = "2px solid blue";
      break;
    case "mediumPriority":
      todoTask.style.border = "2px solid yellow";
      break;
    case "highPriority":
      todoTask.style.border = "2px solid red";
      break;
    default:
      todoTask.style.border = "2px solid rgb(80, 80, 80)";
  }
}

function deleteTask(){
  let taskID = this.dataset.taskid;
  document.getElementById(taskID).remove();
  todoList.removeById(taskID);
}

function editTask(){
  let taskID = this.dataset.taskid;
  let itemToEdit = todoList.getItemByID(taskID);
  addTaskForm.elements["taskName"].value = itemToEdit.name;
  addTaskForm.elements["taskDescription"].value = itemToEdit.description;
  addTaskForm.elements["taskDueDate"].value = itemToEdit.dueDate;
  addTaskForm.elements["taskProject"].value = itemToEdit.project;
  addTaskForm.elements["taskPriority"].value = itemToEdit.priority;
  checkEditTask.status = true;
  checkEditTask.id = taskID;
  toggleTaskFormVisibility(true);
}


export default todoList;

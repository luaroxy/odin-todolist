import createTodoItem from '../modules/todoItem.js';
import closeAddTaskForm from '../index.js';
import { v4 as uuidv4 } from 'uuid';

let todoList = [];

const addTaskForm = document.getElementById("addTaskForm");
addTaskForm.addEventListener("submit", function (e) {
	e.preventDefault();
  let newTodoItem = createTodoItem();
  todoList.push(newTodoItem);
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

  todoList.forEach((item,index)=>{
    if(item.id === taskID) todoList.splice(index,1);
  })
}

export default todoList;

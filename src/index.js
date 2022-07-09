import './modules/style.css';
import todoList from './modules/todoPreview.js';

//Open/Close addTaskForm
const addTaskButton = document.getElementById("addTaskButton").addEventListener("click", openAddTaskForm);
const closeAddTaskButton = document.getElementById("closeAddTaskButton").addEventListener("click", closeAddTaskForm);

function openAddTaskForm() {
    document.getElementById("addTaskFormContainer").style.display = "block";
}

function closeAddTaskForm() {
  document.getElementById("addTaskFormContainer").style.display = "none";
}


export default closeAddTaskForm;
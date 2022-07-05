import './modules/style.css';
import todoList from './modules/todoPreview.js';

const content = document.getElementById("content");

const addTaskButton = document.getElementById("addTaskButton").addEventListener("click", openAddTaskForm);
const closeAddTaskButton = document.getElementById("closeAddTaskButton").addEventListener("click", closeAddTaskForm);

function openAddTaskForm() {
    document.getElementById("addTaskForm").style.display = "block";
}

function closeAddTaskForm() {
  document.getElementById("addTaskForm").style.display = "none";
}

console.log(todoList);
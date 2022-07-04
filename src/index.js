import './modules/style.css';
import todoList from './modules/todoPreview.js';

const content = document.getElementById("content");

const addTaskButton = document.getElementById("addTaskButton").addEventListener("click", openAddTaskForm);

function openAddTaskForm() {
    document.getElementById("addTaskForm").style.display = "block";
  }

console.log(todoList);
import './modules/style.css';
import todoList from './modules/todoPreview.js';

//Open/Close addTaskForm
/*
These consts do not reference anything. That's because the `addEventListener` 
function returns void, not a reference to the buttons. So, we might just as 
well remove them.

const addTaskButton = document.getElementById("addTaskButton").addEventListener("click", openAddTaskForm);
const closeAddTaskButton = document.getElementById("closeAddTaskButton").addEventListener("click", closeAddTaskForm);
*/

document.getElementById("addTaskButton")
        .addEventListener("click", () => toggleTaskFormVisibility(true));

document.getElementById("closeAddTaskButton")
        .addEventListener("click", () => toggleTaskFormVisibility(false));

/*
These two are a superb example for the use of a toggle function. It's a personal preference of mine, yours may differ.
This way we have to remember only one function to toggle the visibility of the addTaskForm and also get to reduce repetition.

function openAddTaskForm() {
    document.getElementById("addTaskFormContainer").style.display = "block";
}
function closeAddTaskForm() {
  document.getElementById("addTaskFormContainer").style.display = "none";
}
*/

function toggleTaskFormVisibility(visible)
{
  const displayValue = visible ? 'block' : 'none';
  document.getElementById("addTaskFormContainer").style.display = displayValue;
}

export default toggleTaskFormVisibility;
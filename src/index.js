import './modules/style.css';
import todoList from './modules/todoPreview.js';

document.getElementById("addTaskButton")
        .addEventListener("click", () => toggleTaskFormVisibility(true));

document.getElementById("closeAddTaskButton")
        .addEventListener("click", () => toggleTaskFormVisibility(false));

function toggleTaskFormVisibility(visible)
{
  const displayValue = visible ? 'block' : 'none';
  document.getElementById("addTaskFormContainer").style.display = displayValue;
}

export default toggleTaskFormVisibility;
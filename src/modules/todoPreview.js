import todoItem from '../modules/todoItem.js';

let todoList = [];

let newTodoItem = new todoItem ("Wash dishes");
todoList.push(newTodoItem);
todoList.push(new todoItem ("Laundry","","July 12, 2022","","highPriority"));

export default todoList;

import TodoList from './todoList';
import TodoItem from './todoItem';

export default class AppModel
{
    constructor()
    {
        this.list = new TodoList();
    }

    createAndAddNewTodoItem(name, description, dueDate, project, priority)
    {
        const newTodoItem = new TodoItem(name, description, dueDate, project, priority);
        this.list.add(newTodoItem);

        return newTodoItem;
    }
    removeItemById(id)
    {
        this.list.removeById(id);
    }
}
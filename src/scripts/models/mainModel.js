import TodoList from './todoList';
import TodoItem from './todoItem';
import Project from './project';

export default class MainModel
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

    updateTodoItem(element, name, description, dueDate, project, priority)
    {
        element.model.name = name;
        element.model.description = description;
        element.model.dueDate = dueDate;
        element.model.project = project;
        element.model.priority = priority;

        return element;
    }

    removeItemById(id)
    {
        this.list.removeById(id);
    }

    createNewProject(name)
    {
        return new Project(name);
    }
} 
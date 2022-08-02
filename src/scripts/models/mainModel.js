import TodoList from './todoList';
import TodoItem from './todoItem';
import Project from './project';
import ProjectList from './projectList';

export default class MainModel
{
    constructor()
    {
        this.todoList = new TodoList();
        this.projectList = new ProjectList();
    }

    createAndAddNewTodoItem(name, description, dueDate, project, priority,checkboxStatus)
    {
        const newTodoItem = new TodoItem(name, description, dueDate, project, priority, checkboxStatus);
        this.todoList.add(newTodoItem);

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
        this.todoList.removeById(id);
    }

    createNewProject(name)
    {
        const newProject = new Project(name);
        this.projectList.add(newProject);

        return newProject;
    }

    removeProjectById(id)
    {
        this.projectList.removeById(id);
    }

    updateTodoListLocalStorage()
    {
        window.localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }

    updateProjectListLocalStorage()
    {
        window.localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }

    updateCheckbox(id, value)
    {
        this.todoList.getItemByID(id).checkboxStatus = value;
    }

} 
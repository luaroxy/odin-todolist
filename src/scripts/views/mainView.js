import TodoItemView from "./todoItemView";
import ProjectView from "./projectView";

export default class MainView
{
    getByID(id)
    {
        return document.getElementById(id);
    }

    toggleAddTaskFormVisibility(visible, id)
    {
        const displayValue = visible ? 'block' : 'none';
        this.getByID(id).style.display = displayValue;
    }
    getAddTaskFormElementValueByName(elementName)
    {
        return this.getByID("addTaskForm").elements[elementName].value;
    }

    getAddProjectFormElementValueByName(elementName)
    {
        return this.getByID("addProjectForm").elements[elementName].value;
    }

    resetAndCloseFormByID(formID,formContainerID)
    {
        this.getByID(formID).reset();
        this.toggleAddTaskFormVisibility(false,formContainerID);
    }
    appendTodoItem(item)
    {
        // get template markup and clone element (deep copy)
        let templateContent = this.getByID("todoItemTemplate").content;
        let todoItemDivElementClone = templateContent.cloneNode(true).querySelector("div");
        let todoItemView = new TodoItemView(todoItemDivElementClone, item);

        // then insert cloned markup as new child of todo tasks container
        this.getByID("displayTodoTasksContainer").append(todoItemView.element);

        return todoItemView;
    }
    appendProject(item)
    {
        // Project in sidebar
        let templateContent = this.getByID("projectTemplate").content;
        let projectDivElementClone = templateContent.cloneNode(true).querySelector("div");
        let projectView = new ProjectView(projectDivElementClone, item);
        this.getByID("projectOptions").append(projectView.element);

        // Project in AddTaskForm
        let option = document.createElement("option");
        option.value = item.name;
        option.text = item.name;
        option.id = `checkbox-${item.id}`;
        this.getByID("taskProject").appendChild(option);

        return projectView;
    }
    fillAddFormWhenEdit(todoItemView)
    {
        this.getByID("addTaskForm").elements["taskName"].value = todoItemView.model.name;
        this.getByID("addTaskForm").elements["taskDescription"].value = todoItemView.model.description;
        this.getByID("addTaskForm").elements["taskDueDate"].value = todoItemView.model.dueDate;
        this.getByID("addTaskForm").elements["taskProject"].value = todoItemView.model.project;
        this.getByID("addTaskForm").elements["taskPriority"].value = todoItemView.model.priority;
    }
    updateTodoItem(element)
    {
        let todoItemToUpdate = this.getByID(element.id);
        new TodoItemView(todoItemToUpdate,element.model);
    }
} 
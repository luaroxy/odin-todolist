import TodoItemView from "./todoItemView";

export default class MainView
{
    getByID(id)
    {
        return document.getElementById(id);
    }

    toggleAddTaskFormVisibility(visible)
    {
        const displayValue = visible ? 'block' : 'none';
        this.getByID("addTaskFormContainer").style.display = displayValue;
    }
    getAddTaskFormElementValueByName(elementName)
    {
        return this.getByID("addTaskForm").elements[elementName].value;
    }
    resetAndCloseAddTaskForm()
    {
        this.getByID("addTaskForm").reset();
        this.toggleAddTaskFormVisibility(false);
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
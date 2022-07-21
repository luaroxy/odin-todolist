import TodoItemView from "./todoItemView";

export default class AppView
{
    get addTaskButton()
    {
        return document.getElementById("addTaskButton");
    }
    get addTaskFormContainer()
    {
        return document.getElementById("addTaskFormContainer");
    }
    get addTaskForm()
    {
        return document.getElementById("addTaskForm");
    }
    get closeAddTaskButton()
    {
        return document.getElementById("closeAddTaskButton");
    }
    get todoItemTemplate()
    {
        return document.getElementById("todoItemTemplate");
    }
    get displayTodoTasksContainer()
    {
        return document.getElementById("displayTodoTasksContainer");
    }

    toggleAddTaskFormVisibility(visible)
    {
        const displayValue = visible ? 'block' : 'none';
        this.addTaskFormContainer.style.display = displayValue;
    }
    getAddTaskFormElementValueByName(elementName)
    {
        return this.addTaskForm.elements[elementName].value;
    }
    resetAndCloseAddTaskForm()
    {
        this.addTaskForm.reset();
        this.toggleAddTaskFormVisibility(false);
    }
    appendTodoItem(item)
    {
        // get template markup and clone element (deep copy)
        let templateContent = this.todoItemTemplate.content;

        /*
        we query for the first div because the templateContent above really just returns
        a DocumentFragment, not the actual element; the TodoItemView constructor expects
        an element, though.
        Check: console.log('templateContent', templateContent);
        See also: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
        */
        let todoItemDivElementClone = templateContent.cloneNode(true).querySelector('div');
        let todoItemView = new TodoItemView(todoItemDivElementClone, item);
        
        // then insert cloned markup as new child of todo tasks container
        this.displayTodoTasksContainer.append(todoItemView.element);

        return todoItemView;
    }
}
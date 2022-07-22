export default class MainController
{
    constructor(model, view)
    {
        this.model = model;
        this.view = view;
        this.onEditTodoItem = {status: "false", element: ""};

        // hook up event handlers
        view.addTaskButton.addEventListener("click", () => view.toggleAddTaskFormVisibility(true));
        view.closeAddTaskButton.addEventListener("click", () => this.view.resetAndCloseAddTaskForm());
        view.addTaskForm.addEventListener("submit", (e) => this.onAddTaskFormSubmit(e));
    }

    onAddTaskFormSubmit(e)
    {
        e.preventDefault();

        this.onEditTodoItem.status == true ? this.updateTodoItem() : this.createNewTodoItem();
        this.view.resetAndCloseAddTaskForm();
    }

    createNewTodoItem()
    {
        const newTodoItem = this.createNewTodoItemFromFormInputs();        
        this.appendAndHookUpNewTodoItemFromModel(newTodoItem);
    }

    updateTodoItem()
    {
        const formElements = this.getElementsFromFormInputs();
        const updatedTodoItem = this.model.updateTodoItem(this.onEditTodoItem.element,formElements.name, formElements.desc, formElements.dueDate, formElements.project, formElements.priority)
        this.view.updateTodoItem(updatedTodoItem);
        this.onEditTodoItem.status = false;
    }

    getElementsFromFormInputs()
    {
        const name = this.view.getAddTaskFormElementValueByName("taskName");
        const desc = this.view.getAddTaskFormElementValueByName("taskDescription");
        const dueDate = this.view.getAddTaskFormElementValueByName("taskDueDate");
        const project = this.view.getAddTaskFormElementValueByName("taskProject");
        const priority = this.view.getAddTaskFormElementValueByName("taskPriority");

        return {name, desc, dueDate, project, priority};
    }

    createNewTodoItemFromFormInputs()
    {
        const formElements = this.getElementsFromFormInputs();
        return this.model.createAndAddNewTodoItem(formElements.name, formElements.desc, formElements.dueDate, formElements.project, formElements.priority);
    }

    appendAndHookUpNewTodoItemFromModel(todoItem)
    {
        const newTodoItemView = this.view.appendTodoItem(todoItem);

        // hook up event handlers of new view element
        newTodoItemView.deleteButton.addEventListener("click", 
            () => this.deleteTodoItem(newTodoItemView));

        newTodoItemView.editButton.addEventListener("click", 
            () => this.editTodoItem(newTodoItemView));

        newTodoItemView.checkbox.addEventListener("change", 
            () => this.checkCheckbox(newTodoItemView));

    }
    
    deleteTodoItem(todoItemView)
    {
        this.model.removeItemById(todoItemView.id);
        todoItemView.element.remove();
    }

    editTodoItem(todoItemView)
    {
        this.view.toggleAddTaskFormVisibility(true);
        this.view.fillAddFormWhenEdit(todoItemView);
        this.onEditTodoItem.status = true;
        this.onEditTodoItem.element = todoItemView;
    }

    checkCheckbox(todoItemView)
    {   
        parent = document.getElementById("displayTodoTasksContainer");
        if (todoItemView.checkbox.checked) {
            todoItemView.element.classList.add("onCheckbox");
            parent.append(todoItemView.element);
          } else {
            todoItemView.element.classList.remove("onCheckbox");
            parent.prepend(todoItemView.element);
          }
    }
}


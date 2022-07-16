export default class AppController
{
    constructor(model, view)
    {
        this.model = model;
        this.view = view;

        // hook up event handlers
        view.addTaskButton.addEventListener("click", () => view.toggleAddTaskFormVisibility(true));
        view.closeAddTaskButton.addEventListener("click", () => this.view.resetAndCloseAddTaskForm());
        view.addTaskForm.addEventListener("submit", (e) => this.onAddTaskFormSubmit(e));
    }

    onAddTaskFormSubmit(e)
    {
        // prevent submit
        e.preventDefault();

        const newTodoItem = this.createNewTodoItemFromFormInputs();        
        this.appendAndHookUpNewTodoItemFromModel(newTodoItem);
        this.view.resetAndCloseAddTaskForm();
    }

    createNewTodoItemFromFormInputs()
    {
        // extract properties from view (form elements)
        const name = this.view.getAddTaskFormElementValueByName("taskName");
        const desc = this.view.getAddTaskFormElementValueByName("taskDescription");
        const dueDate = this.view.getAddTaskFormElementValueByName("taskDueDate");
        const project = this.view.getAddTaskFormElementValueByName("taskProject");
        const priority = this.view.getAddTaskFormElementValueByName("taskPriority");

        return this.model.createAndAddNewTodoItem(name, desc, dueDate, project, priority);
    }
    appendAndHookUpNewTodoItemFromModel(todoItem)
    {
        const newTodoItemView = this.view.appendTodoItem(todoItem);

        // hook up event handlers of new view element
        newTodoItemView.deleteButton.addEventListener("click", 
            () => this.deleteTodoItem(newTodoItemView));
    }
    deleteTodoItem(todoItemView)
    {
        this.model.removeItemById(todoItemView.id);
        todoItemView.element.remove();
    }
}
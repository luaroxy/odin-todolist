export default class MainController
{
    constructor(model, view)
    {
        this.model = model;
        this.view = view;
        this.onEditTodoItem = {status: "false", element: ""};

        view.getByID("addTaskButton").addEventListener("click", () => view.toggleAddTaskFormVisibility(true,"addTaskFormContainer"));
        view.getByID("closeAddTaskButton").addEventListener("click", () => view.resetAndCloseFormByID("addTaskForm","addTaskFormContainer"));
        view.getByID("addTaskForm").addEventListener("submit", (e) => this.onAddTaskFormSubmit(e));
        view.getByID("priorityButton").addEventListener("click", () => this.showOrHide("priorityImg","priorityOptions"));
        view.getByID("projectButton").addEventListener("click", () => this.showOrHide("projectImg","projectOptions"));
        view.getByID("addProjectButton").addEventListener("click", () => view.toggleAddTaskFormVisibility(true,"addProjectFormContainer"));
        view.getByID("closeAddProjectButton").addEventListener("click", () => view.resetAndCloseFormByID("addProjectForm","addProjectFormContainer"));
        view.getByID("addProjectForm").addEventListener("submit", (e) => this.onAddProjectFormSubmit(e));
        view.getByID("inbox").addEventListener("click", () => this.filterByProject("Inbox"));
        view.getByID("noPriority").addEventListener("click", () => this.filterByPriority("noPriority", "None"));
        view.getByID("lowPriority").addEventListener("click", () => this.filterByPriority("lowPriority", "Low"));
        view.getByID("mediumPriority").addEventListener("click", () => this.filterByPriority("mediumPriority", "Medium"));
        view.getByID("highPriority").addEventListener("click", () => this.filterByPriority("highPriority", "High"));
        view.getByID("todayButton").addEventListener("click", () => this.filterByDuedate());
        window.addEventListener("load", () => this.retrieveRecords());
    }

    onAddTaskFormSubmit(e)
    {
        e.preventDefault();

        this.onEditTodoItem.status == true ? this.updateTodoItem() : this.createNewTodoItem();
        this.view.resetAndCloseFormByID("addTaskForm","addTaskFormContainer");
    }

    createNewTodoItem()
    {
        const newTodoItem = this.createNewTodoItemFromFormInputs();        
        this.appendAndHookUpNewTodoItemFromModel(newTodoItem);

        this.model.updateTodoListLocalStorage();
    }

    updateTodoItem()
    {
        const formElements = this.getElementsFromFormInputs();
        const updatedTodoItem = this.model.updateTodoItem(this.onEditTodoItem.element,formElements.name, formElements.desc, formElements.dueDate, formElements.project, formElements.priority)
        this.view.updateTodoItem(updatedTodoItem);
        this.onEditTodoItem.status = false;
        
        this.model.updateTodoListLocalStorage();
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

        this.model.updateTodoListLocalStorage();
    }

    editTodoItem(todoItemView)
    {
        this.view.toggleAddTaskFormVisibility(true,"addTaskFormContainer");
        this.view.fillAddFormWhenEdit(todoItemView);
        this.onEditTodoItem.status = true;
        this.onEditTodoItem.element = todoItemView;
    }

    checkCheckbox(todoItemView)
    {   
        parent = this.view.getByID("displayTodoTasksContainer");
        if (todoItemView.checkbox.checked) {
            todoItemView.element.classList.add("onCheckbox");
            parent.append(todoItemView.element);
          } else {
            todoItemView.element.classList.remove("onCheckbox");
            parent.prepend(todoItemView.element);
          }
    }

    showOrHide(imgId, optionsId) 
    {
        if (this.view.getByID(optionsId).style.display == "block") 
        {
            this.view.getByID(imgId).src = "./images/downarrow.svg";
            this.view.toggleAddTaskFormVisibility(false,optionsId);
        }
        else 
        {
            this.view.getByID(imgId).src = "./images/rightarrow.svg";
            this.view.toggleAddTaskFormVisibility(true,optionsId);
        }
    }

    onAddProjectFormSubmit(e)
    {
        e.preventDefault();

        this.createNewProject();
        this.view.resetAndCloseFormByID("addProjectForm","addProjectFormContainer");
    }

    createNewProject()
    {
        const name = this.view.getAddProjectFormElementValueByName("projectName");
        const newProject = this.model.createNewProject(name);      
        this.appendAndHookUpNewProjectFromModel(newProject);

        this.model.updateProjectListLocalStorage();
    }

    appendAndHookUpNewProjectFromModel(newProject)
    {
        const newProjectView = this.view.appendProject(newProject);

        newProjectView.deleteButton.addEventListener("click", 
            () => this.deleteProject(newProjectView));

        newProjectView.projectNameP.addEventListener("click", 
            () => this.filterByProject(newProjectView.projectNameP.textContent));
    }
    
    deleteProject(projectView)
    {
        this.model.removeProjectById(projectView.id);
        projectView.element.remove();

        this.model.updateProjectListLocalStorage();
    }

    filterByProject(projectName)
    {
        let todoListObj = this.model.todoList.itemsById;

        Object.keys(todoListObj).forEach(key => 
            {
                const statusValue = todoListObj[key].project == projectName ? true : false;
                this.view.toggleFilterVisibility(statusValue,key);
            }
        );

        this.view.getByID("titleName").textContent = projectName;
    }

    filterByPriority(priority, priorityName)
    {
        let todoListObj = this.model.todoList.itemsById;

        Object.keys(todoListObj).forEach(key => 
            {
                const statusValue = todoListObj[key].priority == priority ? true : false;
                this.view.toggleFilterVisibility(statusValue,key);
            }
        );

        this.view.getByID("titleName").textContent = `Priority: ${priorityName}`;

        let today = new Date().toJSON().slice(0, 10);
        console.log(today);
    }

    filterByDuedate()
    {
        let today = new Date().toJSON().slice(0, 10);
        let todoListObj = this.model.todoList.itemsById;

        Object.keys(todoListObj).forEach(key => 
            {
                const statusValue = todoListObj[key].dueDate == today ? true : false;
                this.view.toggleFilterVisibility(statusValue,key);
            }
        );

        this.view.getByID("titleName").textContent = "Today";
    }

    retrieveRecords()
    {
        this.retrieveProjects();
        this.retrieveTodoList();
    }

    retrieveProjects()
    {
        if (window.localStorage.getItem('projectList')!== null){
            let temp = (JSON.parse(localStorage.getItem('projectList'))); 
            let projectListObj = temp.projectsById;

            Object.keys(projectListObj).forEach(key => 
            {
                const newProject = this.model.createNewProject(projectListObj[key].name);      
                this.appendAndHookUpNewProjectFromModel(newProject);
            }
        );
        }
    }

    retrieveTodoList()
    {
        if (window.localStorage.getItem('todoList')!== null){
            let temp = (JSON.parse(localStorage.getItem('todoList'))); 
            let todoListObj = temp.itemsById;

            Object.keys(todoListObj).forEach(key => 
            {
                const newTodoItem = this.model.createAndAddNewTodoItem(todoListObj[key].name, todoListObj[key].description, todoListObj[key].dueDate, todoListObj[key].project, todoListObj[key].priority);
                this.appendAndHookUpNewTodoItemFromModel(newTodoItem);
            }
        );
        }
    }
}


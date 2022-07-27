export default class ProjectView
{
    constructor(element, projectModel)
    {
        this.element = element;
        this.model = projectModel;

        this.id = projectModel.id;
        this.name = projectModel.name;
    }

    get projectNameP()
    {
        return this.element.querySelector("p");
    }
    
    get id()
    {
        return this.element.getAttribute("id");
    }

    get deleteButton()
    {
        return this.element.querySelector("button.deleteProjectButton");
    }


    set id(value)
    {
        this.element.setAttribute("id", value);
    }
    
    set name(value)
    {
        this.projectNameP.textContent = value;
    }
    
}
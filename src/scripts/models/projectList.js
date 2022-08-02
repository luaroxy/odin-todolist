export default class ProjectList
{
    constructor()
    {
        this.projectsById = {};
    }
    
    add(newItem)
    {
        this.projectsById[newItem.id] = newItem;
    }

    get items()
    {
        return Object.values(this.itemsById);
    }

    getItemByID(id)
    {
        return this.projectsById[id];
    }

    removeById(id)
    {
        delete this.projectsById[id];
    }
}
export default class TodoList
{
    constructor()
    {
        this.itemsById = {};
    }
    
    add(newItem)
    {
        this.itemsById[newItem.id] = newItem;
    }

    get items()
    {
        return Object.values(this.itemsById);
    }


    removeById(id)
    {
        delete this.itemsById[id];
    }
}
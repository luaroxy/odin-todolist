export default class TodoList
{
    constructor()
    {
        // a simple object will be used as a dictionary to store items (values) by their ids (keys)
        this.itemsById = {};
    }
    
    get items()
    {
        return Object.values(this.itemsById);
    }
    
    add(newItem)
    {
        // attention: if the key already exists, its value will be overwritten
        this.itemsById[newItem.id] = newItem;
    }
    removeById(id)
    {
        delete this.itemsById[id];
    }
}
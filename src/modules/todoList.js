export default class TodoList
{
    constructor()
    {
        this.items = [];
    }
    
    add(newItem)
    {
        this.items.push(newItem);
    }
    removeById(id)
    {
        const indexOfItemWithId = this.items.indexOf(id);
        
        // not found?
        if(indexOfItemWithId == -1)
        {
            return;
        }

        this.items.splice(indexOfItemWithId, 1);
    }
}
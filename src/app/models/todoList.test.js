import TodoList from './todoList';

test('new list should be empty', () => {
    const list = new TodoList();
    expect(list.items).toEqual([]);
});

test('should add item', () => {
    const list = new TodoList();
    const newItem = { id: 0, name: "test" }
    list.add(newItem);
    
    expect(list.items).toEqual([newItem]);
});

test('should remove item', () => {
    const list = new TodoList();
    const newItem0 = { id: 0, name: "test0" }
    const newItem1 = { id: 1, name: "test1" }
    
    list.add(newItem0);
    list.add(newItem1);
    list.removeById(newItem0.id);

    expect(list.items).toEqual([newItem1]);
});
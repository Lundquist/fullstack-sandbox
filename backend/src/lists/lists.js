let { getItem, setItem } = require('../data')

const addList = () => {}

const getLists = async () => {
    return await getItem('lists');
}

const getList = async (id) => {
    const lists = await getItem('lists');
    const todos = await getItem('todos');
    const list = lists.find(list => list.id == id)
    const listTodos = todos.filter(todo => list.todos.includes(todo.id))
    return { list, todos: listTodos }
}

const setTodos = async (listId, todos) => {
    const lists = await getItem('lists');
    const list = lists.find(list => list.id == listId)
    list.todos = todos;
    setItem('lists', lists)
    return;
}

const deleteList = () => {}

module.exports = {
    addList,
    getLists,
    getList,
    setTodos,
    deleteList
}
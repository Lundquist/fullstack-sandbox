let { getItem, setItem } = require('../data')


const addTodo = async () => {
    const todos = await getItem('todos')
    const todo = { id: todos.length + 1, title: '', completed: false }
    todos.push(todo)
    await setItem('todos', todos)
    return todo;
}

const getTodo = async (id) => {
    const todos = await getItem('todos')
    return todos.filter(todo => todo.id === id)
}

const updateTodo = async (todo) => {
    const { id, value } = todo
    const { title, completed } = value
    const todos = await getItem('todos')
    const updatedTodos = todos.map(v => {
        if (v.id == id) {
            v.title = title
            v.completed = completed
        } return v
    })
    await setItem('todos', updatedTodos)
}

const deleteTodo = async (id) => {
    const todos = await getItem('todos')
    const updatedTodos = todos.filter(todo => todo.id != id)
    await setItem('todos', updatedTodos)
}

module.exports = {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo
}
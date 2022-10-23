const storage = require('node-persist');

const todos = [{
    id: 1,
    title: 'First todo of first list!',
    completed: false
},
{
    id: 2,
    title: 'First todo of second list!',
    completed: true
},
{
    id: 3,
    title: 'Second todo of first list!',
    completed: false
},
]

const lists = [{ id: 1, title: "Första listan!", todos: [1, 3] }, { id: 2, title: "Andra listan!", todos: [2] }]

async function initDB() {
    await storage.init();
    await storage.setItem('todos', todos)
    await storage.setItem('lists', lists)
}

const setItem = async (type, item) => {
    return await storage.setItem(type, item)
}

const getItem = async (type) => {
    return await storage.getItem(type)
}



module.exports = { initDB, setItem, getItem }
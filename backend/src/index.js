const express = require('express')
const cors = require('cors')
const { initDB } = require('./data')
const app = express()
const todos = require('./todos/route')
const lists = require('./lists/route')
app.use(cors())
app.use(express.json())
initDB();
app.use('/todos', todos)
app.use('/lists', lists)


const PORT = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

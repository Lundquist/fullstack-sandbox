const express = require("express");
const router = express.Router();
const {
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo
} = require('./todos')
const { setTodos } = require('../lists/lists')
router.route("/")
    .post(async (req, res) => {
        const { list } = req.body
        const newTodo = await addTodo()
        await setTodos(list.id, [...list.todos, newTodo.id])
        res.status(201).send()
    })
router.route("/:id")
    .get(async (req, res) => {
        const { id } = req.params
        res.status(200).send(await getTodo(id))
    })
    .put(async (req, res) => {
        await updateTodo(req.body)
        res.status(200).send()
    })
    .delete(async (req, res) => {
        const { id } = req.params
        await deleteTodo(id)
        res.status(204).send()
    })

module.exports = router;

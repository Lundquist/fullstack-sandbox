const express = require("express");
const router = express.Router();
const {
    getLists,
    getList,
    setTodos
} = require('./lists')
router.route("/")
    .get(async (req, res) => {
        res.status(200).send(await getLists())
    })

router.route("/:id")
    .get(async (req, res) => {
        const { id } = req.params
        res.status(200).send(await getList(id))
    })
    .put(async (req, res) => {
        const {id} = req.params
        const { todos } = req.body
        res.status(201).send(await setTodos(id, todos))
    })

module.exports = router;

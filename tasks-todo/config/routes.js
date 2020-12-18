const express = require('express')
const router = express.Router()

const todoController = require('../todoController')

router.get('/todo', todoController.list)
router.get('/todo/:id', todoController.show)
router.post('/todo', todoController.create)
router.put('/todo/:id',  todoController.update)
router.delete('/todo/:id', todoController.delete)


module.exports = router
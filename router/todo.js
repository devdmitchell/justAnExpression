
const express = require('express')
const router = express.Router()

let todos = [
    {
      id: "haf24jd",
      todo: "do laundry",
      done: "false"
    },
    {
      id: "jp2nkl2",
      todo: "wash dishes",
      done: "true"
    }
  ]

router.get(`/get-all-todos`, (req, res)=>{
    res.json({payload: todos})
})


router.get(`/get-todo-by-id/:id`, (req, res)=>{
  const { id } = req.params
  const todoItem = todos.find(todo => todo.id === id)

  if (!todoItem) {
      return res.json({message:'The Todo ID you are looking for does not exist, please check the ID.'})
  }
  res.json({message: "Todo found", payload: todoItem })
})


router.get('/get-todos-by-done/:done', (req, res) => {
  const { done } = req.params
  const isDone = done === 'true'
  const isNotDone = done === 'false'
  const newDoneArray = todos.filter(todo => todo.done === done)
  res.json({message:`Todos with done status: ${done}`, payload: newDoneArray})
})


router.post('/create-new-todo', (req, res) => {
  const { todo } = req.body
  const newTodo = {
    id: uuidv4(),
    todo: todo,
    done: "false"
}
todos.push(newTodo)
res.json({payload: todos})
})


module.exports = router
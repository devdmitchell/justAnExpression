
const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4

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


// router.get('/get-todos-by-done/:done', (req, res) => {
//   const { done } = req.params
//   const isDone = done === 'true'
//   const isNotDone = done === 'false'
//   const newDoneArray = todos.filter(todo => todo.done === done)
//   res.json({message:`Todos with done status: ${done}`, payload: newDoneArray})
// })


router.get('/get-todos-by-done/:done', (req, res) => {
  const { done } = req.params
  let newDoneArray
  if (done === 'true') {
      newDoneArray = todos.filter((todo) => todo.done === 'true')
      res.json({message:'Array Sorted by done.', payload: newDoneArray})
  }else{
     (done === 'false') 
    {newDoneArray = todos.filter((todo) => todo.done === 'false')}
    res.json({message:'Array Sorted by done.', payload: newDoneArray})
    }})



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





// IN CLASS HELP

//#5
// expect req.params.isDone
//filter
// return the filtered array

router.get('/get-todos-by-done/:isDone', (req, res) => {
const {isDone} = req.params                           //pull out the parameter itself
// const isDone = req.params.isDone
const filteredTodos = todos.filter(function(todo){    //take array of todo and filter it
  return todo.done === isDone
})
res.json({message: 'Array Sorted by done.', payload: filteredTodos})
})


router.post('/create-new-todo', (req, res) => {
  //req.body.todoItem
  const newTodo = {
    id: uuidv4(),
    todo: req.body.todoItem,
    done: "false"
  }
  todos.push(newTodo)
  res.json({message:"Todo added.", payload: todos})
})



module.exports = router

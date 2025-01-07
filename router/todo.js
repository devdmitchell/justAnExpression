
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



module.exports = router
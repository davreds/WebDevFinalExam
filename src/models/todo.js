const mongoose = require('mongoose')
const validator = require('validator')

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

// todoSchema.pre('save', function(next) {
//     const todo = this
//     if( todo.isModified('completed')){
//         todo.completed = false
//         next()
//     } else{
//         todo.completed = false
//         next()
//     }
// })
const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo

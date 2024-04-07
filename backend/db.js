const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://soumyaray2472:soumyaray2472@cluster0.otvx3fa.mongodb.net/todov2')

const todos = mongoose.model('todosTablev2', {
    task: String,
    taskId: String, 
    date: Date
})



module.exports = {todos}
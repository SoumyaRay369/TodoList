const express = require('express')
const app = express();
const { todos } = require('./db');
app.use(express.json());

app.get('/getTodos', async (req, res) => {
    const response = await todos.find()
    res.send(response);
})

app.delete('/deleteTodos', async(req, res) => {
    const response = await todos.deleteMany()
    res.status(200).send({deletedCount: response.deletedCount})
})

app.post('/postTodo', async(req, res) => {
    const newTodo = new todos({
        task: req.body.task,
        taskId: req.body.taskId,
        date: req.body.date
    });
    await newTodo.save();
    res.send('Todos added')
})

app.listen(3000, () => {
    console.log("App running on port 3000")
})
const bodyParser = require("body-parser");
const { request, response } = require("express");
const express = require("express");
const database = require("./database");
const Task = require("./database")

const app = express();
app.use(bodyParser.json());

app.post("/tasks", async(request, response => {
    const { title, content, createdDate, deadline, priortiy } = req.body;
    await database.instance.createdTask(new Task(title, content, createdDate, deadline, priortiy));
    res.send({ message: "Created [${title}] " });
});
app.get("/tasks", async (req, res) => {
    let tasks = await.database.instance.getAllTasks();
    res.send({ tasks: tasks });
});
module.exports = app;
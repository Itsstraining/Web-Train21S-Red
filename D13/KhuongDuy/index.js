const express = require("express");
const app = express();
const mongoose = require('mongoose');

const connectionString = "mongodb+srv://admin:adminadmin@cluster0.bcrde.mongodb.net/tododb?retryWrites=true&w=majority";

/**
 * 
 * @returns {Promise<mongoose.Connection>}
 */
async function ConnectDb() {
    return new Promise((resolve, reject) => {

        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.on('error', (err) => {
            reject(err);
        });
        db.once("open", () => {
            console.log("Connect successfully");
            resolve(db);
        });
    });
}



async function main() {
    try {
        let db = await ConnectDb()
        app.listen('8080', "0.0.0.0", () => {
            console.log("Server is running");
        });

        const taskSchema = new mongoose.Schema({
            name: String,
            content: String,
            createDate: Number,
            deadLine: Number,
            status: String,
        });

        const Task = mongoose.model("Task", taskSchema);

        const task1 = new Task({
            name: "Đi chơi",
            content:"Đi cua gái",
            createDate: Date.now(),
            deadLine: Date.now() + 1000 * 60 * 60,
            status: "Fell",
        });
        await task1.save();
    } catch (err) {
        console.log(err);
    }
}
main();
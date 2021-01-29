const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:String,
    content:String,
    createDate:Number,
    deadLine:Number,
    priority:Number
})

module.exports = taskSchema;
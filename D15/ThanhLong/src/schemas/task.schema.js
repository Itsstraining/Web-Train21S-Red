const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    title:String,
    content:String,
    createdDate:Number,
    deadline:Number,
    priority:Number
});
module.exports = taskSchema;
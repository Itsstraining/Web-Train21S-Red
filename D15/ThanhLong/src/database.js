const mongoose = require("mongoose");
const taskSchema = require("./schemas/task.schema");

class database {
    constructor(connectionString) {
        this.connectionString = connectionString;
        this.Task = mongoose.Model("task", taskSchema);
    }
    async connect() {
        return new Promise((resolve, reject) => {
            mongoose.connect(this.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
            this.connection = mongoose.connection;
            this.connection.on("error", (err) => {
                console.error("Cannot connect to server");
                reject(err);
            });
            this.connection.once("open", () => {
                resolve(this.connection);
            });
        });
    }

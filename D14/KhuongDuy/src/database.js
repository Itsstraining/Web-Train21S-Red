const mongoose = require("mongoose");
const taskSchema = require("./schemas/task.schema");

class Database
{
    /**
     * @type {Database}
     */
    static cache = null;
    constructor(connectionString){
        /**
         * @type {String}
         */
        this.connectionString = connectionString;
        /**
         * @type {mongoose.Model<any>}
         */
        this.task = mongoose.model("task",taskSchema);
    }
    /**
     * @returns {Promise<mongoose.Connection>}
     */
    async connect(){
        return new mongoose.Promise((resolve,reject)=>{
            mongoose.connect(this.connectionString,{useNewUrlParser: true, useUnifiedTopology: true});
            this.connection = mongoose.connection;
            this.connection.on("error",(err)=>{
                console.error("Cannot connect to DB");
                reject(err);
            });
            this.connection.once("open",()=>{
                console.log("Connect successfully");
                resolve(this.connection);
            });
        });
    }
}
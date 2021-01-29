const mongoose = require("mongoose");
const taskShema = require("./shemas/task_schema");
class Database {
    /**
     * @type {Database}
     */
    static _cache = null;
  constructor(connectionString) {
    /**
     * @type {String}
     */
    this.connectionString = connectionString;
    /**
     * @type {mongoose.Model<any>}
     */
    this.Task = mongoose.module("task", taskShema);
  }
  /**
   * @returns {Database}
   */
  static get instance()
  {
      if(this._cache == null){
          this._cache = new Database("");
      }
      return this._cache;
  }

  /**
   * @returns {Promise.<mongoose.Connection>}
   */
  async connect(connectionString) {
        this.connectionString = this.connectionString;
        return new Promise((reslove, rejects) => {
        mongoose.connect(this.connectionString, {useNewUrlParser: true,useUnifiedTopology: true,});
        this.connection = mongoose.connection;
        this.connection.on("error",(err)=>{
        console.log("failed");
        rejects(err);
        });
        this.connection.once("open",()=>{
            console.log("connected !! ");
            reslove(this.connection);
        })
    });
    
}}

module.exports = Database;

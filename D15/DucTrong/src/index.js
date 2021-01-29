const app = require('./sever');
const config = require('./config');
const Database = require('./database');


async function main(){
   Database.instance.connect("mongodb+srv://admin:admin@cluster0.keosc.mongodb.net/tododb?retryWrites=true&w=majority");
   app.listen(config.PORT,()=>{
        console.log("sever is running");
    });
}

main();

const app = require('./sever');
const config = require('./config');

app.listen(config.PORT,config.HOST,()=>{
    console.log("sever is running")
});

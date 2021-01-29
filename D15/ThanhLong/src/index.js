const server = require("./server");
const config = require("./config");
const database = require("./database");

async function main(){
    const db = new database ("mongodb+srv://long:1234@cluster0.cqus5.mongodb.net/long?retryWrites=true&w=majority");
    await db.connect();
    server.listen (config.PORT, config.HOST,() => {
        console.log("Server is running!");
});
}

main();
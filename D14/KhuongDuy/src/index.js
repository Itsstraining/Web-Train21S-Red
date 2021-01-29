const server = require("./server");
const config = require("./config");
const Database = require("./database");

async function main() {
    const db = new Database("mongodb+srv://admin:adminadmin@cluster0.bcrde.mongodb.net/tododb?retryWrites=true&w=majority");
    const db.connect();
    server.listen(config.PORT, config.HOST, () => {
        console.log(`Server is running on ${config.HOST}:${config.PORT}`);
    });
}

main();
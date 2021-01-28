const { rejects } = require("assert");
const express = require("express");
const mongoose = require('mongoose');
const { resolve } = require("path");

const connectionString = "mongodb+srv://long:1234@cluster0.cqus5.mongodb.net/long?retryWrites=true&w=majority"
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

/**
 * @returns {Promise<mongoose.Connection>}
 */
async function connectDb() {
    return new Promise((resolve, rejects) => {
        const db = mongoose.connection;
        db.on('error', (err) => { // on la neu loi se chay lai
            rejects("error");
        });
        db.once("open", () => { //once la chay lien tuc
            console.log("Connect successfully");
            resolve(db);  // ham nay se tra ve cho minh de get,put,update
        })
    })
}

async function main() {
    try {
        let db = await connectDb();
        app.listen(8080, "0.0.0.0", () => {
            console.log("server is running !");
        });
        const SinhVienSchema = new mongoose.Schema({
            name: String,
            age: Number,
            address: String,
            MSSV: Number
        });
        const SinhVien = mongoose.model('SinhVien', SinhVienSchema);
        const sv = new SinhVien({ name: 'Long', age: 21, address:'HCM city', MSSV: 218 });
            let a = await SinhVien.find();
            console.log(a)
    } catch (e) {
        console.error(e)
    }
}





main()



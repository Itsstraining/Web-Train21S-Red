const express = require("express");
const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://admin:admin@cluster0.keosc.mongodb.net/tododb?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

/**
 * @returns {Promise<mongoose.Connection>}
 */
async function connectDb() {
  return new Promise((resolve, reject) => {
    const db = mongoose.connection;
    db.on("error", (err) => {
      reject("error");
    }),
      db.once("open", () => {
        console.log("Connect successfully");
        resolve(db);
      });
  });
}

async function main() {
  try {
    let db = await connectDb();
    app.listen(8080, "0.0.0.0", () => {
      console.log("server is running !");
    });

    const sinhvienSchema = new mongoose.Schema({
      name: String,
      age: Number,
      address: String,
    });

    const SinhVien = mongoose.model("sinhvien", sinhvienSchema);

    const sv = new SinhVien({ name: "trong", age: 10, address: "HCM" });
    // sv.save();

    let a = await SinhVien.find();
    console.log(a)
  } catch (e) {
    console.error(e);
  }
}

main();

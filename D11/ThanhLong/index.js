const express = require('express') //ben trai la ten bien( ten gi cung dc)
const app = express()

app.get('/',(req,res) => {
    const {name} = req.query;
    res.send(`Hello ${name}`)
})

app.listen(8080, '192.168.31.148',() =>{
console.log("Server is running")
})
const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('Hello Trong dep trai')
})

app.get('/duyngu', (res, req) => {
    const {num1, num2} = res.query;
    let tong = parseInt(num1) + parseInt(num2);
    req.send(`Tong la ${tong}`)
})

app.get('/hello', (req,res)=>{
    const {name} =req.query;
    res.send(`Hello ${name}`)
})

app.listen(8080, '192.168.31.209', () =>{
    console.log("Trong dep trai qua")
})

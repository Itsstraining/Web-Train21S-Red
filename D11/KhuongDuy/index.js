const express = require('express')

const app = express()
app.listen(9090,'192.168.31.158',()=>{
    console.log('Trọng ngu')
})

app.get ('/',(req, res)=>{
    res.send('Hello Trọng ngu')
})

app.get ('/trongga',(req, res)=>{
    const {num1, num2} = req.query;
    let sum = parseInt(num1) + parseInt(num2);
    res.send(`<h1>Tổng là`+ ' ' + sum +'</h1>')
})

app.get ('/hello',(req, res)=>{
    const {name} = req.query;
    res.send(`<h1>Hello` + ' ' + name +'</h1>')
})
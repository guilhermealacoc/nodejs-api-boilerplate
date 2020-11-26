const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('Olá mundo!!!')
})

app.get("/contato/:id", (req, res) => {
    const {sit} = req.query;
    const {id} = req.params;   
    return res.json({
         id,
         nome:'cesar',
         sit
     })
})

app.listen(3000, ()=>{
    console.log('Servidor Iniciado na porta 3000')
})
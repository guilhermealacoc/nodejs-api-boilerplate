const express = require("express");

const app = express();

app.use(express.json());

const contatos = ['Cesar', 'Kelly', 'Jessica', 'Marcos'];

app.get("/", (req, res) => {
    return res.json(contatos);
});

app.get("/contatos", (req, res) => {
    return res.json(contatos);
});

app.get("/contatos/:id", (req, res) => {
    const { id } = req.params;
    return res.json({
        nome: contatos[id]
    });
});

app.post("/contatos", (req, res) => {
    const { nome } = req.body;

    contatos.push(nome);

    return res.json(contatos);
})

app.put("/contatos/:id", (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    contatos[id] = nome;

    return res.json(contatos);
});

app.delete("/contatos/:id", (req, res) => {
    const { id } = req.params;
    
    contatos.splice(id, 1);

    return res.json(contatos)
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/contatos");
});
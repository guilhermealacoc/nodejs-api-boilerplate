const { Router }= require('express');

const routes = new Router();

routes.get('/', (req, res) =>{
    res.send("Guilherme de Alacoc");
})

module.exports = routes;
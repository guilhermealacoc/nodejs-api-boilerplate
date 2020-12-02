//const { Router }= require('express');
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) =>{
    res.send("Guilherme de Alacoc");
})


routes.get('/contato', (req, res) =>{
    res.send("Sirhan Babylon");
})
// module.exports = routes;

export default routes;
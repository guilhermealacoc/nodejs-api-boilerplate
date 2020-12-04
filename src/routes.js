import { Router } from 'express';
import User from './app/models/User'
const routes = new Router();

routes.get('/', async (req, res) =>{
    await User.create({
        nome:'Gaabriela',
        email: 'guilherme@teste.com',
        senha: 'teste'
    }, function(err, small){
        if(err) return res.status(400).json({erro: 'Usuario  nao cadastrado'});

        return res.status(200).json({error: 'Usuario cadastrado com sucesso!!!'});
    });
})

routes.get('/contato', (req, res) =>{
    res.send("Sirhan Babylon");
})

export default routes;
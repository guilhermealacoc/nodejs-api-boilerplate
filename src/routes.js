import { Router } from 'express';

// import mongoose from mongoose;

const routes = new Router();

// mongoose.connect('mongodb://localhost/teste', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// }).then(()=>{
//     console.log("Conexão feita com sucesso!!!");
// }).catch((erro) => {
//     ("Erro na conexão" + erro);
// });

routes.get('/', (req, res) =>{
    res.send("Guilherme de Alacoc");
})


routes.get('/contato', (req, res) =>{
    res.send("Sirhan Babylon");
})
// module.exports = routes;

export default routes;
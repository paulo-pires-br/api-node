import express from 'express';
import login from './controllers/login.js'

const app = express();

app.use('/',login);


app.listen(8080,()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});


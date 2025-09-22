import express, {type Request, type Response} from 'express';

const app = express();

app.get("/",(req:Request, res:Response)=>{
    res.send("Bem-vindo Celke!")
});

app.listen(8080,()=>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});


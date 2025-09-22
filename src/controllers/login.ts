import express, {type Request, type Response} from 'express';
import { AppDataSource } from '../data-source.js';

const router = express.Router();

AppDataSource.initialize()
.then(()=>{
    console.log("Conexão com o BD realizada com sucesso");
})
.catch((error)=>{
    console.log("Erro na conexão com o BD:",error);
})

router.get("/",(req:Request, res:Response)=>{
    res.send("Bem-vindo Celke!")
});

export default router;
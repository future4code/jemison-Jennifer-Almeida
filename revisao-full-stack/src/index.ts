import express from 'express';
import cors from 'cors';
import {ping} from './endpoints/ping'
import createClients from './endpoints/createclient'


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,() =>{
    console.log("Servidor rodando na porta 3003");
})

app.get("/ping", ping )

// Adicionar um cliente

app.post("/client", createClients);
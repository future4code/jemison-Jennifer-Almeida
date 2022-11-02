import express, {Request, Response} from 'express'

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

// Exercício 1: Crie uma nova API do zero e desenvolva um endpoint de teste com método GET
// no path “/test” que retorna a mensagem: “Servidor rodando na porta (colocar porta)!”. 

app.get("/test", (req:Request, res:Response) => {          
    res.status(200).send("Servidor rodando na porta 3003!")
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
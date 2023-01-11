import express, {Request, Response} from 'express'
import cors from 'cors'


const app = express()

app.use(express.json())

app.use(cors())

// Exercício 1: Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API.
// Esse endpoint pode responder apenas com um status ou mensagem fixa.

app.get("/", (req:Request, res:Response) => {          
    res.status(200).send("Hello from Express")
})

// Exercício 2:
//Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso.
 //Eles devem possuir as seguintes propriedades:
 // id. name, phone, email, website

 type  Users ={
     id : number,
     name: string,
     phone: number,
     email:string,
     website: string
 }



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

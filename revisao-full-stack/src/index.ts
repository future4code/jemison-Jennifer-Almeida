import express from 'express';
import cors from 'cors';
import {ping} from './endpoints/ping';
import createClient from './endpoints/createClient';
import getAllClients from './endpoints/allClients';
import getAllProducts from './endpoints/allProducts';
import createOrder from './endpoints/createOrder';
import getStock from './endpoints/stock'



const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,() =>{
    console.log("Servidor rodando na porta 3003");
})

// Teste
app.get("/ping", ping )


//Retorna os dados dos clientes.
app.get("/clients", getAllClients);
// Retorna dados do produto 
app.get("/products", getAllProducts);
// Rerorna  o Estoque
app.get("/stock", getStock);



// Adicionar um cliente
app.post("/client", createClient);
// Criar pedido
app.post("/order", createOrder);

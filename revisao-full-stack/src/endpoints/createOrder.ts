import { Request, Response } from "express";
import connection from "../data_base/connections";
import { TProduct } from "../models/Products";

const createOrder = async (req: Request, res: Response) => {
    let erroCode = 400
    try {
        // Dados do request (Vindos do Front)
        const delivery_date = req.body.delivery_date;
        const fk_client = req.body.fk_client;
        const products: TProduct[] = req.body.products;

        if (!delivery_date || !products || !fk_client) {
            throw new Error("Body inválido!")
        }
        //Verificar os produtos em estoque
        await products.forEach(async product => {
            //pegar o stock
            const getStock = await connection.select("qty_stock")
                .from("Case_Products")
                .where({ id: product.id })
            const stockAtual = Number(getStock[0].qty_stock);

            if (stockAtual < product.qty) {
                throw new Error("Produto indisponível no estoque.")
            }


        })


        // Fazer o pedido e atualizar o estoque 
        await products.forEach(async product => {
            // Adicionar um registro 
            await connection("Case_Orders").insert(
                {
                    //new Date().toISOString().slice(0,10) PEGAR A DATA NO FORMADO DD/MM/AA
                    order_date: new Date().toISOString().slice(0, 10),
                    delivery_date,
                    qty: product.qty,
                    fk_client,
                    fk_product: product.id
                })

            // get stock= Pegar o estoque 
            const getStock = await connection.select("qty_stock")
                .from("Case_Products")
                .where({ id: product.id })

            const stockAtual = Number(getStock[0].qty_stock);

            //Atualizar o estoque = stock
            await connection("Case_Products")
                .where({ id: product.id })
                .update({ qty_stock: stockAtual - product.qty })
        })

        res.status(200).send("Pedido realizado com sucesso!")
    } catch (error: any) {
        res.status(erroCode).send({ message: error.message })
    }
}

export default createOrder;
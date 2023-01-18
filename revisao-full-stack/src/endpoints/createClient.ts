import { Request, Response } from "express";
import connection from "../data_base/connections";

 const createClient = async (req: Request, res: Response) => {
    let erroCode = 400
    try {
        const name = req.body.name;
        if (!name) {
            throw new Error("Nome inválido!")
        }
        await connection("Case_Clients").insert({
            name 
        })
        res.status(200).send("Cliente criado com sucesso!") 
    } catch (error: any) {
        res.status(erroCode).send({ message: error.message })
    }
}

export default createClient;
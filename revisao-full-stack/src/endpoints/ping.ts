import { Request, Response } from "express";

export const ping = async (req: Request, res: Response) => {
    let erroCode = 400
    try {
        res.status(200).send("Pong!")
    } catch (error: any) {
        res.status(erroCode).send({ message: error.message });
    }

} 

export default ping;
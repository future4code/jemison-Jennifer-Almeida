import { getProducts } from './../endpoints/getProducts';
import { Product } from './Product';
import {Knex} from "knex";

export class ProductDataBase{
    constructor(private connection:Knex){
        this.connection=connection
    }

    public insertProduct=async(newProduct:Product)=>{
       await this.connection("Labe_Products").insert(newProduct);

    }

    public getProducts=async()=>{
        const result=await this.connection("Labe_Products").select()
        return result;
 
     }
}
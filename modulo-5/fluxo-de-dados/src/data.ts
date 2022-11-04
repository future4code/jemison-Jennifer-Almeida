// Exercício 2:

//Crie um arquivo chamado data.ts que exporta um array de produtos. 
//Cada produto será representado por um objeto com propriedades: id (string), name (string) e price (number). 
//Popule manualmente o array com pelo menos 3 produtos. 
import {PRODUCT} from './type'

export const products: PRODUCT [] = [
    {
        id: 'product1',
        name: 'Apples',
        price: 12
    },
    {
        id: 'product2',
        name: 'Bananas',
        price:  10
    },
    {
        id: 'product3',
        name: 'Mangos',
        price:  17
    },
    {
        id: 'product4',
        name: 'Papayas',
        price:  19
    },
    {
        id: 'product5',
        name: 'Strawberrys',
        price:  16
    },

]


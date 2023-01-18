import React from 'react';
import { MyOrderForms } from './style';

export default function Form() {
    return (
        < MyOrderForms>
            <div id='select-client'>
                <label htmlFor='client'>Nome do cliente: </label>
                <input id='client' list='dataClient'></input>
                <datalist id='dataClient'>
                    <option>Jenni</option>
                    <option>Mozim</option>
                    <option>Fredico</option>
                    <option>Zeuzin</option>
                </datalist>
                <button>Confirmar</button>
            </div>
            <div id='select-product'>
                <label htmlFor='product'>Produto: </label>
                <input id='product' list='dataProduct'></input>
                <datalist id='dataProduct'>
                    <option>Abacaxi</option>
                    <option>Limão</option>
                    <option>Goiaba</option>
                    <option>Maçã</option>
                </datalist>
                <label>Quantidade</label>
                <input id='qty' type={'number'}></input>
                <p >R$: 2,00</p>
                <button>OK</button>
            </div>
            <div id='order'>
                <label htmlFor='deliveryDate'>Data de Entrega (DD/MM/AAAA) </label>
                <input id='deliveryDate'></input>
                <button>Confirmar pedido</button>
            </div>
        </ MyOrderForms>

    );
}
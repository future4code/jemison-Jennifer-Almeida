/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let boasVindas = console.log("Boas vindas ao jogo de Blackjack!")
if (confirm("Quer iniciar uma nova rodada?")) {
   console.log("Nova rodada");
} else {
   console.log("O jogo acabou!")
}


//Iniciando uma rodada

const carta = comprarCarta();
// Sorteia uma carta. Por exemplo, o rei de ouros

//console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

//console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

let pontuacao = carta.valor + carta.valor
let usuario = console.log("Usúario - cartas" , carta.texto, carta.valor && carta.texto, carta.valor && -  pontuacao)
let computador = console.log("Computador - cartas" , carta.texto, carta.valor && carta.texto, carta.valor && -  pontuacao)
if(usuario == computador){
   console.log("Deu empate!")
} else if(usuario == 21 || usuario > computador){
   console.log("Usúario venceu!")
}else {
   console.log("O computador venceu!")

   }













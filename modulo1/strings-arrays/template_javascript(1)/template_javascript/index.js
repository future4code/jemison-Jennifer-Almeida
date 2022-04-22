/* 
1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array);
Nesse caso será impresso no console  o "undefined" para 'a', pois não atribuimos um valor para a let array.
*/

/*array = null
console.log('b. ', array)
O valor de 'b' será "null", pois foi o valor atribuído ao array. */

/*array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
O console irá mostrar o valor 11, pois o .length, mostra a quantidade de elementos presentes no array.
*/

//let i = 0
//console.log('d. ', array[i])
//Nesse caso, foi declarado o valor da variável "let i" e não o valor de um array. Deste modo, o console retornara um erro de sintaxe.

/*
array[i+1] = 19
console.log('e. ', array)
Um novo valor está sendo atribuido ao i.
*/

/*const valor = array[i+6]
console.log('f. ', valor) 
O valor do array não foi atribuído e portanto, o console irá indicar um erro.

const array = [i+6];
*/

/*
2. Leia o código abaixo com atenção:

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

O valor impresso no console será:
 "SUBI NUM ÔNIBUS EM MIRROCOS" e o número de caracteres presentes = 27.
*/

//Exercícios de escrita de código

/*
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
*/

let nomeDoUsuario = prompt("Insira o seu nome");
let emailDoUsuario = prompt("Insira seu e-mail");

console.log(`O e-mail ${emailDoUsuario}, foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
*/
let comidasPreferidas = [
    "Costela",
    "Strogonoff",
    "Lasanha",
    "Caldo",
    "Sorvete",
]
comidasPreferidas.splice(1,0, 'milho');

//  a) Imprima no console o array completo
console.log(comidasPreferidas)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

console.log(`Essas são as minhas comidas preferidas: ${comidasPreferidas}`);

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista.

let comidaUsuraio = prompt("Qual a sua comida favorita?")

comidasPreferidas.splice(1,0, 'milho');

/*
3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no console.
*/

let listaDeTarefas = [];

let tarefa1 = prompt("Digite a primeira tarefa que devera ser realizada.");
let tarefa2 = prompt("Digite a segunda tarefa que devera ser realizada");
let tarefa3 = prompt("Digite a terceira tarefa que devera ser realizada");

let resposta = [tarefa1,tarefa2,tarefa3];
resposta.splice(0,1)
console.log(resposta);

let tarefasCheck = Number(prompt("Digite o número da tarefa que já foi realizada"));






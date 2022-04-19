/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
const bool1 = true
const bool2 = false
const bool3 = !bool2
let resultado = bool1 && bool2
console.log("a. ", resultado)
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
console.log("d. ", typeof resultado) */

//Respostas:

// let resultado = bool1 && bool2
//console.log("a. ", resultado) 
// resultado = false 

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// resultado = false

// resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)
// resultado = false

// console.log("d. ", typeof resultado) 
// booleans

/* 
2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta:
O prompt sempre retorna uma string, para que o código funcione é necessário modificar a string para number. */

/*
3.  Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

let resultado = primeiroNumero + segundoNumero

console.log(resultado) */

// Exercícios de escrita de códigos:


//1- Faça um programa que:
//a) Pergunte a idade do usuário

/*let idadeDoUsurario = Number(prompt("Qual a sua idade?"));
console.log(idadeDoUsurario);

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

let idadeDoAmigx = Number (prompt("Qual a idade do seu melhor amigx?"));
console.log(idadeDoAmigx);

//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

let maisVelhoQueseuAmigo = prompt("Sua idade é maior que a do seu amigo?");
console.log(maisVelhoQueseuAmigo);


//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
let resultado

resultado =  idadeDoAmigx - idadeDoUsurario
console.log ("O resultado da operação é", resultado); */



//2- Faça um programa que:

//a) Peça ao usuário que insira um número **par**

//b) Imprima na console **o resto da divisão** desse número por 2.

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

/*let numeroPar = Number(prompt("Insira um número par"));
console.log (numeroPar);

resultado = numeroPar / 2
console.log("O resultado é", resultado);

resultado = numeroPar % 2
console.log(resultado); */

// O programa acusa que o número inserido não é par.


//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
/*const diasDoAno = 365
const horasDoDia = 24
const mesesDoAno = 12

let idade = Number (prompt("Quantos anos você tem?"));

   // a) A idade do usuário em meses
    resultado = idade * mesesDoAno

    console.log("O resultado é", resultado)
   
    //b) A idade do usuário em dias
    resultado = idade * diasDoAno

   console.log("O resultado é", resultado);

   // c) A idade do usuário em horas

   resultado = idade * horasDoDia * diasDoAno
   console.log(resultado) */

   /* 
   4- Faça um programa que pergunte ao usuário dois números. 
   Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.*/

let A = Number(prompt("Insira o primeiro número"));
let B = Number(prompt("Insira o segundo número"));

console.log(A)
console.log(B)

console.log(A>B);
console.log(A===B);
console.log(A % B === 0);
console.log(B % A === 0);


  

   





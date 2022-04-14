/*
1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Resposta:
A variável foi declarada utilizando o let, que pode ter ser valor alterado. Desta forma, podemos dizer que o b, recebeu o valor 10. 
O comando console.log(b), irá imprimir o valor de b.
*/

/* 
2- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) 

Resposta:
Quando o programa for executado, será impresso os valores: 10, 20 e 10.
*/

/*
3- Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Respostas:
let jornadaDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let remuneraçãoDiária = prompt ("Quanto você recebe por dia?")
alert("Voce recebe ${t/p} por hora")
*/

//Exercícios de escrita de código
/*
1- Construa um programa, seguindo os seguintes passos
a) Declare uma variável para armazenar um nome, sem atribuir um valor.
*/
let primeiroNome = "jennifer"
// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade = 28
// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
// Resposta:
console.log(typeof "let primeiroNome");
console.log(typeof "idade");
// Foram criadas duas "strings".
/*
d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

Resposta:
Tivemos a impressão de strings, pois pedimos um conjunto de informações, como por exemplo, idade e nome. 
*/
// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// Resposta:
let nome = prompt("Qual é o seu nome?");
let anos = prompt("Qual é a sua idade?");

console.log(typeof nome);
console.log(typeof anos);
//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// Resposta:
console.log(typeof nome);
console.log(typeof anos);
// O tipo das variáveis são strings, pois possuem um conjunto de informações.

// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.

//Resposta:
console.log("Olá", nome, "você tem", anos, "de idade.");

/*
2-  Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    
    
    "Você está usando uma roupa azul hoje?" - SIM

Respostas:
*/
let vestido = prompt("Você está usando vestido hoje?");
let pet = prompt("Você possuí pets de estimação?");
let vinho = prompt("Você degusta vinhos?");

console.log(vestido);
console.log(pet);
console.log(vinho);

/*
"Você está usando vestido hoje?" - SIM
"Você possuí pets de estimação?" - SIM
"Você degusta vinhos?" - NÃO
*/

// 3- 
//let a = 10 
//let b = 25

/* let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10 */

//let a = 10
//let b = 25 
//let c = a 

//a = b 
//c = b

let a = 60
let b = 40
console.log("O valor novo de (a) é", a)// O novo valor de a é 60
console.log("O novo valor de (b) é", b)// O novo valor de b é 40




console.log("O novo valor de a é, ")



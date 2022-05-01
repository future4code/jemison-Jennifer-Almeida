/*
Exercícios de interpretação de código

1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza? 
O código pede ao usuário  que insira um número e realiza o teste para verificar se o número inserido é par.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
 Se o usuário inserir números pares, será impresso no console a mensagem "Passou no teste".

c) Para que tipos de números a mensagem é "Não passou no teste"?
Se os números digitados pelo usuário forem ímpares, será impresso no console a mensagem "Não passou no teste".

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)



a) Para que serve o código acima?
O código permite que o usuário insira uma fruta e imprime seu nome e valor.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O console irá mostrar a seguinte mensagem: " O preço da fruta  Maçã é R$ 5."

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
Se retirassemos o "break" do case "Pêra", o console iria imprimir o valor 5, que está logo abaixo do default.

3. Leia o código abaixo:


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
A primeira linha está declarando e atribuindo o valor de número, que pede ao usuário para digitar um número.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Para o número 10 seria exibida a mensagem "Esse número passou no teste"
Para o número -10, existiria um erro, pois "mensagem" não foi declarada no scopo global.

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Sim. A variável "mensagem", não foi declarada no scopo global. POrtanto, fora do bloco, ela não possuí um valor definido.

Exercícios de escrita de código

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    */
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

let idadeDoUsuario = Number(prompt("Qual a sua idade?"));

function permiteDirigir(idadeDoUsuario) {
    if (idadeDoUsuario >= 18) {
        console.log("Você pode dirigir.")
    } else {
        console.log("Você não pode dirigir.")
    }


}
permiteDirigir(idadeDoUsuario);

/*
2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

let turnoQueEstuda = prompt("Em qual turno você estuda? Digite M(matutino), V(Vespertino) ou N(Noturno)");
let matutino = "m"
let vespertino = "v"
let noturno = "n"

function mensagemAluno(turnoQueEstuda, matutino, vespertino) {
    if (turnoQueEstuda == matutino) {
        console.log("Bom dia!");

    } else if (turnoQueEstuda == vespertino) {
        console.log("Boa tarde!");
    } else {
        console.log("Boa noite!");
    }

}

mensagemAluno(turnoQueEstuda, matutino, vespertino);


//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (turnoQueEstuda) {
    case matutino:
        console.log("Bom dia!");
        break

    case vespertino:
        console.log("Boa tarde!");
        break

    default:
        console.log("Boa noite!");

}

/*
4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

let generoDofilme = prompt("Qual o gênero do filme que você irá assitir?");
let valorDoIngresso = Number(prompt("Qual o valor do ingresso?"));

function irAoCinema(generoDofilme, valorDoIngresso) {
    if (generoDofilme == "fantasia" && valorDoIngresso < 15) {
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :( ")
    }
}
irAoCinema(generoDofilme, valorDoIngresso);
/*

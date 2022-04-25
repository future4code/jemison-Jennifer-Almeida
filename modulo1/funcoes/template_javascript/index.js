// Exercícios de interpretação de código
/*
1. Leia os códigos abaixo:

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?

No console sera impressso o resultado da função. 

console.log(minhaFuncao(2))
Será impresso o valor 10

console.log(minhaFuncao(10))
Será impresso  o valor 50.

b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
O resultado não iria aparecer no console, seria apenas guardado na função.*/

/*
2. Leia o código abaixo:

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

Essa função pede que o úsuario insira um texto, depois retorna o mesmo com todos os caracteres em letra mínuscula e verifica se existe a palavra "cenoura" no texto do usúario.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`

    eu gosto de cenoura // TRUE

     ii.  `CENOURA é bom pra vista`

    cenoura é bom pra vista// TRUE

     iii. `Cenouras crescem na terra`

    cenouras crescem da terra // TRUE */

/*
Exercícios de escrita de códigos.

1. Escreva as funções explicadas abaixo:

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
*/

/*function imprimeMensagem() {
console.log(`Eu sou a Jenni, tenho 28 anos, moro em Belo Horizonte e sou professora.`)
}

imprimeMensagem();

//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/

function informacoesPessoais(nome, idade, endereco, profissao) {


    const frase = (`Meu nome é ${nome}, tenho ${idade}, moro em ${endereco}, e sou ${profissao}.`)
    console.log(frase)

}

informacoesPessoais("Jenni", 28, "BH", "professora");

/*
2. Escreva as funções explicadas abaixo: */

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function somaDoisNumeros(numero1, numero2) {
    let resultado = numero1 + numero2
    console.log(`O resultado é ${resultado}`);
    return resultado
}

somaDoisNumeros(9, 5);

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function primeiroNumeroMaiorOuIgualSegundo(numero1, numero2) {
    let resultado = numero1 >= numero2
    console.log(`O resultado é ${resultado}`);
    return resultado
}
primeiroNumeroMaiorOuIgualSegundo(45, 12);

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function numeroPar(numero) {

    let resultado = numero % 2 === 0
    console.log(`O resultado é ${resultado}`);

    return resultado
}
numeroPar(26);

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function recebeString(mensagem) {
    let tamanho = mensagem.length
    console.log(`A string é \"${mensagem.toUpperCase()}\" e o seu tamanho é ${tamanho}`);
}

recebeString("O proletáriado não tem um dia de paz.");

/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10*/


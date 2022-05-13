// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
//Escreva uma função que recebe um array como parâmetro e retorna 
//a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
    let tamanhoDoArray = array.length
    // console.log(tamanhoDoArray);
    return tamanhoDoArray
}


// EXERCÍCIO 02
// Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 
function retornaArrayInvertido(array) {
    let arrayInvertido = array.reverse();
    // console.log(arrayInvertido)
    return arrayInvertido
}


// EXERCÍCIO 03
// Escreva uma função que recebe um array de números e retorne o array 
// com os números em ordem crescente. 

function retornaArrayOrdenado(array) {
    let arrayOrdenado = array.sort((a, b) => a - b);
    return arrayOrdenado


}


// EXERCÍCIO 04
// Escreva uma função que receba um array de números e retorne um novo array com apenas
// os números **pares** desse array de entrada.
function retornaNumerosPares(array) {
    const par = array => array % 2 === 0
    let numerosPares = array.filter(par)

    //console.log(`Os números pares do array são: ${numerosPares}`)
    return numerosPares
}


// EXERCÍCIO 05
// Escreva uma função que recebe um array de números e retorna um array
// com os números pares elevados a 2.

function retornaNumerosParesElevadosADois(array) {

    let novoArrayPares = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            novoArrayPares.push(array[i] * array[i]);


        }
    }

    return novoArrayPares
}


// EXERCÍCIO 06
// Escreva uma função que receba um array de números e retorne o maior número dele.

function retornaMaiorNumero(array) {
    let maiorNumeroDoArray = Math.max(...array);

    return maiorNumeroDoArray

}


// EXERCÍCIO 07
// Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:
// maiorNumero → contém o maior número
// maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
// diferenca → contém a diferença entre eles (deve ser um **número positivo** sempre)

function retornaObjetoEntreDoisNumeros(num1, num2) {

    // PQQQQQ NÃO FUNCIONAAAA CEM OR AMADO! ME SOCCORE @Deus 

    let newObjetos = {

        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: maiorNumero % Math.min(num1, num2) == 0,
        diferenca: maiorNumero - Math.min(num1, num2)

    }
    return newObjetos
}


// EXERCÍCIO 08
// Escreva uma função que, recebendo um número N como parâmetro, 
// retorne os N primeiros números pares

function retornaNPrimeirosPares(n) {
    /* let arrayN = [n];
     let retornaPrimeirosPares = n.sort((a, b) => a - b); 
         arrayN.push(n);
         if (arrayN % 2 == 0) {
         return arrayN
     }
     return retornaPrimeirosPares 

    let arrayN = n.map((item, indice) => {
        if (n.item % 2 == 0) {
            return arrayN
        }

    })*/ 

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
// Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores 
// (NESTA ORDEM): o segundo maior e o segundo menor número do array original. 

function retornaSegundoMaiorESegundoMenor(array) {
    let arrayNovo = [];
    array.sort((a, b) => a - b);
    arrayNovo.push(array[1])
    arrayNovo.push(array[array.length - 1 - [1]]);
    return arrayNovo
}

// EXERCÍCIO 11
// Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco. 
// Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
/*
// entrada
{
   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

// saída
"Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel 
e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci." */

function retornaChamadaDeFilme(filme) {
    let nomeDoFilme = filme.nome
    let anoDoFilme = filme.ano
    let diretorDoFilme = filme.diretor
    let elenco = ([filme.atores])

    return `Venha assistir ao filme ${nomeDoFilme}, de ${anoDoFilme} dirigido por, ${diretorDoFilme}
    e estrelado por ${elenco}. `
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaAnoninimizada = {
        ...pessoa,
        nome: "Anônimo"
    }
    return pessoaAnoninimizada.nome
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.50)
    })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.50)
    })

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let arrayOrdemAlfabetica = [];
    const consultasOrdenadasAlfabeticamente = consultas.sort((a, b) => {
        arrayOrdemAlfabetica.push(consultas[i])
        return a.localeCompare(b);

    })
    return consultasOrdenadasAlfabeticamente
}
// retornaArrayOrdenadoAlfabeticamente(consultas);

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
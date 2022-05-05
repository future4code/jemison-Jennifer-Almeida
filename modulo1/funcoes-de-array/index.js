/*
Exercícios de interpretação de código

 1. Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

 a) O que vai ser impresso no console?
 No console será impresso um novo array "A", contendo as informações do array anterior (nome e apelido), além da posição de cada item.

  2. Leia o código abaixo 

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)


a) O que vai ser impresso no console?
Será impresso os nomes contidos no arrayA, pois o callback solicita o item.nome.

3. Leia o código abaixo 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

a) O que vai ser impresso no console?
No console será impresso a posição de cada item, o item em si e o tamanho do array. É importante lembrar que o objeto 2 " { nome: "Letícia Chijo", apelido: "Chijo" }"
não será impresso, pois temos um !== no callback.

Exercícios de escrita de código

1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

a) Crie um novo array que contenha apenas o nome dos doguinhos */

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const arrayApenasNomes = pets.map((item, index, array) => {
    return item.nome
})
console.log(arrayApenasNomes);

// b) Crie um novo array apenas com os [cachorros salsicha]

const arrayApensSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(arrayApensSalsicha);

// c)  Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const arrayApensPoodle = pets.filter((item, index, array, mensagem) => {
    let novaMensagem = (`"Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!"`)
    if (item.raca === "Poodle") {
        console.log(novaMensagem)

    }
})
console.log(arrayApensPoodle)

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item

const novaArrayNomes = produtos.map((item, index, array) => {
    return item.nome
})
console.log(novaArrayNomes);

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

//c) c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const arrayBebidas = produtos.filter((produto, indice, array) => {
    return produto.categoria == "Bebidas"
})
console.log(arrayBebidas);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const arrayExclusivo = produtos.map((produto, indice, array) => {

    let selecionaNomes = produtos.includes("Ypê")
    console.log(selecionaNomes)

})
console.log(arrayExclusivo.includes("Ypê"));


// e)Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

let i = 0

const arrayFrase = produtos.map((item, indice, array) => {

for( i = 0; i<10; i++ ){
    console.log(`Compre ${nome} por ${preco}.`)

}
})
console.log(arrayFrase[i])


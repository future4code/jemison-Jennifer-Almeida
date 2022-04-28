/*
Exercícios de interpretação de código

1. Leia o código abaixo

const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario:  "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]);


a) O que vai ser impresso no console?

No console irá ser impresso a primeira posição do array elenco = "Matheus Nachtergaele ";
O último elemento do array elenco = "Virginia Cavendish";
O elemento [2] do array transmissoesHoje = {canal: "Globo", horario: "14h"}

2. Leia o código abaixo

const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)


a) O que vai ser impresso no console?

console.log(cachorro)
Irá imprimir as informações da const cachorro;

console.log(gato)
Irá imprimir as informações do const cachorro, entretanto, com o nome:"Juba"

console.log(tartaruga)
Irá imprimir as informações do const tartaruga, entretanto, com o nome "Jubo".


b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
A sintaxe dos três pontos, permite que seja feita uma copia do objeto, sem que o mesmo seja alterado com as informações inseridas na cópia.

3. Leia o código abaixo

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
  nome: "Caio",
  idade: 23,
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
O console irá imprimir undefined.

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
A sintaxe do console.log está incorreta. Para que o valor seja impresso é necessário trocar a vírgula por ponto.
Ex:

console.log(minhaFuncao(pessoa. "backender"))
console.log(minhaFuncao(pessoa. "altura"))
*/

/*
Exercícios de escrita de código

1. Resolva os passos a seguir: 

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
*/

let individuo = {
    nome: "Jennifer",
    apelidos: ["Jenni", "Jey-Jey", "Gnifer"],
}
function nomeEApelido(nome, apelidos) {
    console.log(`Eu sou ${individuo.nome}, mas pode me chamar de: ${individuo.apelidos}.`);
}
nomeEApelido(individuo.nome, individuo.apelidos);

//console.log(individuo.nome);
//console.log(individuo.apelidos.length);

/*
2. Resolva os passos a seguir: 

a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão.
*/

let informacoesPessoais = {

    nome: "Jennifer",
    idade: 28,
    profissao: "Bióloga"
}
let novasInformacoes = { ...informacoesPessoais, nome: "Alessandra" }
console.log(informacoesPessoais, novasInformacoes);

function recebeInformacoes(informacoesPessoais, novasInformacoes) {

    let arrayInformacoes = [informacoesPessoais, novasInformacoes];
    console.log(typeof (informacoesPessoais.nome, novasInformacoes.nome));
    console.log(informacoesPessoais.nome.length, novasInformacoes.nome.length);
    console.log(typeof (informacoesPessoais.idade, novasInformacoes.idade));
    console.log(typeof (informacoesPessoais.profissao, novasInformacoes.profissao));
    console.log(informacoesPessoais.profissao.length, novasInformacoes.profissao.length);

    return arrayInformacoes

}
recebeInformacoes(informacoesPessoais, novasInformacoes);

/*
3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    */

let carrinho = [];
let supermercado = {
    carrinho: [],

}
// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)


let frutaBanana = {
    nome: "Banana",
    disponibilidade: true
}
let frutaMorango = {
    nome: "Morango",
    disponibilidade: true
}

let frutaCaqui = {
    nome: "Caqui",
    disponibilidade: true
}
// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
function recebeFruta(frutaMorango, frutaBanana, frutaCaqui) {
    carrinho.push(frutaMorango, frutaBanana, frutaCaqui);
    console.log(carrinho);
}
recebeFruta(frutaBanana, frutaMorango, frutaCaqui);
// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

/*
Desafios:

1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
*/
function informacoesDoUsuario() {

    let nome = prompt("Qual o seu nome?");
    let idade = Number(prompt("Qual a sua idade?"));
    let profissao = prompt("Qual a sua profissão?");

    console.log(nome);
    console.log(idade);
    console.log(profissao);
}
informacoesDoUsuario();

let novasInformacoesDoUsuario = { ...informacoesDoUsuario }
console.log(typeof (novasInformacoesDoUsuario));

/*
2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true
*/



function recebeDoisFilmes(filme) {


    let primeiroFilme = {

        nome: "Send help",
        anoDeLancamento: 2023,
    }

    let segundoFilme = {
        nome: "Rindo de nervoso",
        anoDeLancamento: 2024,

    }

    console.log(primeiroFilme);
    console.log(segundoFilme);

    let perguntaUm = ("O primeiro filme foi lançado antes do segundo?" == false);
    let perguntaDois = (!"O primeiro filme foi lançado no mesmo ano do segundo?" == true);

    return perguntaUm

}

recebeDoisFilmes();



// Vou organizar a questão 2.


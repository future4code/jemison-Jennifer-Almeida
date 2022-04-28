// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura do retângulo"));
  let largura = Number(prompt("Digite a largura do retângulo"));

  let areaDoRetangulo = altura * largura;

  console.log(areaDoRetangulo);

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt("Qual o ano atual");
  let anoNascimento = prompt("Qual seu ano de nascimento?");

  let idade = anoAtual - anoNascimento;

  console.log(idade);


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."


  let nome = prompt("Qual o seu nome?");
  let idade = Number(prompt("Qual a sua idade?"));
  let email = prompt("Qual o seu e-mail?");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Qual a sua cor favorita?");
  let cor2 = prompt("Qual a sua cor favorita?");
  let cor3 = prompt("Qual a sua cor favorita?");

  let vetor = [cor1, cor2, cor3];

  let array = new Array();
  array.push(cor1, cor2, cor3);
  console.log(array);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  let novaString = string
  let stringMaiuscula = (novaString.toUppercase());
  return stringMaiuscula


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let espetaculo = custo
  let vendas = valorIngresso

  let vendasTotais = espetaculo / vendas

  return vendasTotais

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let primeiraString = string1
  let segundaString = string2

  return primeiraString.length === segundaString.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  let ultimoElemento = array[array.length - 1]
  console.log(ultimoElemento)

  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp

  return array


}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  let primeiraString = string1.toUpperCase()
  let segundaString = string2.toUpperCase()
  let retornaStrings = primeiraString == segundaString
  console.log(retornaStrings);

  return retornaStrings

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoPresente = Number(prompt("Em que ano estamos?"));
  let dataDeNascimento = Number(prompt("Qual o seu ano de nascimento?"));
  let emissaoRg = Number(prompt("Qual a data de emissão do seu RG?"));
  let idadeAtual = anoPresente - dataDeNascimento

  let idadeRg = anoPresente - emissaoRg

  let regraUm = idadeAtual <= 20 && idadeRg >= 5
  let regraDois = idadeAtual > 20 && idadeAtual <= 50 && idadeRg >= 10
  let regraTres = idadeAtual > 50 && idadeRg >= 15

  console.log(regraUm || regraDois || regraTres);


}
//checaRenovacaoRG();

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

let ehBissexto = (ano % 4 == 0) && !( ano % 100 == 0 && ano % 400 !== 0);
return ehBissexto


  
}

// EXERCÍCIO 15/
function checaValidadeInscricaoLabenu() {
  let maiorIdade = prompt("Você tem mais de 18 anos?");
  let ensinoMedio = prompt("Você possuí ensino médio completo?");
  let dedicacaoExcluisiva = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  console.log(maiorIdade === 'sim' && ensinoMedio === 'sim' && dedicacaoExcluisiva === 'sim');


}

  
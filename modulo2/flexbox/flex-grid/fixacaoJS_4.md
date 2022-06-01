`function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const array = arrayDeNumeros.filter((numero) => numero === numeroEscolhido);
  if(array.length > 0){
    return (`O número ${numeroEscolhido} aparece ${array.length}x`)
  }else{
    return "Número não encontrado"
  }
  
  
}`

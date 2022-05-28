``function calculaPrecoTotal(quantidade) {
  let precoComDesconto = quantidade * 1.00
  let precoNormal = quantidade * 1.30
  if(quantidade < 12){
    return precoNormal
   } else {
      return precoComDesconto
    }
  }
``

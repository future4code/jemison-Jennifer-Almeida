ˋˋˋ 
 function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 let comissao = (100 * qtdeCarrosVendidos) + (0.05 * valorTotalVendas)
 let salarioFinal = salarioFixo + comissao

 return salarioFinal
}
ˋˋˋ 
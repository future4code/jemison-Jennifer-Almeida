``function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
const novoArrayAnimais = []

for(let i = 0; i < animais.length; i++){
  let nome = animais[i].nome
  novoArrayAnimais.push(nome)
}

return novoArrayAnimais

}
``

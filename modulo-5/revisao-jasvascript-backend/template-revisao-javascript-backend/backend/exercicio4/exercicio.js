// Exercício 4: Gerador de itens únicos

// A ideia é unir duas listas de objetos, mas sem repetir os que possuem o mesmo valor em uma propriedade.

const firstList = [
    {
        nome: 'Amora'
    },
    {
        nome: 'Graviola'
    }
]

const secondList = [
    {
        nome: 'Graviola'
    },
    {
        nome: 'Maracujá'
    },
    {
        nome: 'Banana'
    }
]

const definitiveList = []

const bothLists = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (!definitiveList.find(obj => obj.nome === arr1[i].nome)) {
            definitiveList.push(arr1[i])
        } 
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!definitiveList.find(obj => obj.nome === arr2[i].nome)) {
            definitiveList.push(arr2[i])
        }
    }
}

bothLists(firstList, secondList)
console.log(definitiveList)
// Exercício 4: Gerador de itens únicos

// A ideia é unir duas listas de objetos, mas sem repetir os que possuem o mesmo valor em uma propriedade.

const firstList = [
    {
        nome: 'Amora'
    },
    {
        nome: 'Graveola'
    }
]

const secondList = [
    {
        nome: 'Maracujá'
    },
    {
        nome: 'Graveola'
    }
]

const definitiveList = []

const bothLists = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (definitiveList.indexOf(arr1[i]) === -1) {
            definitiveList.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (definitiveList.indexOf(arr2[i]) === -1) {
            definitiveList.push(arr2[i])
        }
    }
}

bothLists(firstList, secondList)
console.log(definitiveList)
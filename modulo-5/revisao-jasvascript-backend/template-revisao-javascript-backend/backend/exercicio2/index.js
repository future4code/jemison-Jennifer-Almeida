const regex = new RegExp('[A-Za-z]')
const clients =
    [
        { id: 1, nome: 'Laura' },
        { id: 2, nome: 'Beatriz' },
        { id: 3, nome: 'Stella' },
        { id: 4, nome: 'Bianca' }
    ]

const newClientes = (id, name) => {
    if (regex.test(name)) {
        clients.push({ id: id, nome: name })
    } else {
        console.log('Cliente não cadastrado')
    }
}
newClientes(5, 'Marina')
console.log(clients)


//Exercício 2.2

const multiplicationTable = []

const newTable = (number, limite) => {
    if (number <= 10) {
        for (i = 1; i < (limite + 1); i++) {
            multiplicationTable.push(`${number} x ${i} = ${number * i}`)
        }

    }

}
newTable(2, 8)
console.log(multiplicationTable)

/*Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. 
Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. 
Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. 
Exemplo:
// entrada
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }

] 
Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos.
 Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, 
 atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.*/

type Clients = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const allClients: Clients[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }

]

const negativeBalance = (array: Clients[]) => {
    array.map((Clients) => {
        const firstValue = 0
        const result = Clients.debitos.reduce((previousValue, currentValue) => 
        previousValue + currentValue, firstValue)
        let updatedBalance = (Clients.saldoTotal-result)
        if (updatedBalance < 0) {
            Clients.saldoTotal = updatedBalance
            Clients.debitos = []
            console.log(Clients)
        }
    })
}

negativeBalance(allClients)

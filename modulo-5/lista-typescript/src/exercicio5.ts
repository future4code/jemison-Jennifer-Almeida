/*Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro 
e retorne uma lista com apenas os emails dos usuários “admin”.

 [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] */


enum ROLE {
    user = 'user',
    admin = 'admin'
}

type Persons = {

    name: string,
    email: string,
    role: ROLE
}

const people: Persons[] = [
    {name: "Rogério", email: "roger@email.com", role: ROLE.user},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.admin},
	{name: "Aline", email: "aline@email.com", role: ROLE.user},
	{name: "Jéssica", email: "jessica@email.com", role:ROLE.user},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.user},  
	{name: "Carina", email: "carina@email.com", role: ROLE.admin}
]

const adminsOnly = (array:Persons[]) =>{
    let newList: string[] = []
    array.map((Persons) => {
        if (Persons.role === ROLE.admin) {
            newList.push(Persons.email)
        }
    })
    console.log(newList)
}

adminsOnly(people)


// Exerecício 3: Sistema de login


const conts = []


const regexEmail = new RegExp('[A-Za-z.-_]{3,}@[A-Za-z.-_]{2,}[.][a-z]{2,3}')
const regexSenha = new RegExp('.{6,}')

const login = (email, senha) => {
    if (regexEmail.test(email) && regexSenha.test(senha)) {
        conts.push({ email: email, password: senha })
    }if (regexEmail.test(email) === false) {
        console.log('Digite um e-mail válido!')
    }if (regexSenha.test(senha) === false) {
        console.log('A senha deve possuir no mínimo 6 caracteres')
    } 
}

login('jenni@gmail.com', '123456')
console.log(conts)
/*Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. 
Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme.
 Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: */


enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

const Choicegenero = process.argv[4] as GENERO

const movies = (name: string, year: number, genre: GENERO, grade?: number) => {
    console.log(grade !== undefined ? `nome: ${name}, anoLancamento: ${year}, genero: ${genre}, pontuacao: ${grade}` : `nome: ${name}, anoLancamento: ${year}, genero: ${genre}`)
}


movies(process.argv[2], Number(process.argv[3]), Choicegenero , Number(process.argv[5]))
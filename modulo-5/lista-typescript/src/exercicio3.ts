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
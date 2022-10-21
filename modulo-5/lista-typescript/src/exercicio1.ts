
/* COMANDOS BÁSICOS
npm run nome do script = para rodar o script
 touch .gitignore = criar o gitignore
 tsc --init = tsconfig.json




**   LISTA TS

1. Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”).
 A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato: 

```tsx
"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" */


const personalData = (name:string, day:number, month:number, year:number):string =>{
    return `Olá, me chamo ${name} e nasci no dia ${day} do mês ${month} do ano de ${year}}`

} 
console.log(personalData("Jenni",24,7,1993));
 
 
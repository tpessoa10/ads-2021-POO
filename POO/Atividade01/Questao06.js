var readlineSync = require('readline-sync')
var cont = 0
var acumulador = 0
var sequencia = 1
var media

while(cont < 10)
{
    sequencia = parseInt(readlineSync.question("Digite um numero: "))
    acumulador = acumulador + sequencia
    cont = cont + 1
}
media = acumulador / cont

console.log("O total da soma é ", acumulador)
console.log("A media é de ", media)
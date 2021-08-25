var readlineSync = require('readline-sync')
var num = 0
let vetor = []

while (num < 5)
{
    num = num + 1
    var numeros = (readlineSync.question("Digite um numero: "))
    vetor[num] = numeros

} 

console.log(vetor)

var readlineSync = require('readline-sync')
var num = 0
let vetor1 = []
var cont = 0
var cont_val = 0
var a = 0
while (num < 20)
{
    num = num + 1
    var numeros = (readlineSync.question("Digite um numero: "))
    vetor1[num] = numeros

}

while(cont < 20)
{
    cont = cont + 1
    a = vetor1[cont]   
    if (a % 2 == 0)
    {
        cont_val = cont_val + 1 
    }
    
}
console.log(vetor1)
console.log("Quantidade de valores pares é ", cont_val)   

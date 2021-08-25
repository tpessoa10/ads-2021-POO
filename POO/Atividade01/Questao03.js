var readlineSync = require('readline-sync')
var valor_1 =  parseInt(readlineSync.question('Valor 1: '))
var valor_2 =  parseInt(readlineSync.question('Valor 2: '))
var valor_3 =  parseInt(readlineSync.question('Valor 3: '))

if (valor_1 > valor_2 && valor_2 > valor_3)
{
    console.log('O maior é ',valor_1)
}
if (valor_1 > valor_3 && valor_3 > valor_2)
{
    console.log('O maior é ',valor_1)
}
if (valor_2 > valor_1 && valor_1 > valor_3)
{
    console.log('O maior é ',valor_2)
}
if (valor_2 > valor_3 && valor_3 > valor_1)
{
    console.log('O maior é ',valor_2)
}
if (valor_3 > valor_1 && valor_1 > valor_2)
{
    console.log('O maior é ',valor_3)
}
if (valor_3 > valor_2 && valor_2 > valor_1)
{
    console.log('O maior é ',valor_3)
}
if (valor_1 > valor_2 && valor_2 == valor_3)
{
    console.log('O maior é ',valor_1)

}
if (valor_2 > valor_1 && valor_1 == valor_3)
{
    console.log('O maior é ',valor_2)

}
if (valor_3 > valor_1 && valor_1 == valor_3)
{
    console.log('O maior é ',valor_3)

}
if (valor_1 == valor_2 && valor_2 == valor_3)
{
    console.log("Números iguais")
}
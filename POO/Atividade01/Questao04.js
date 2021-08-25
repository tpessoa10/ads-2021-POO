var readlineSync = require('readline-sync')
var num = parseInt(readlineSync.question("Digite um numero: "))

if (num == 1)
{
    console.log("Janeiro")
}
else if (num == 2)
{
    console.log("Fevereiro")
}
else if (num == 3)
{
    console.log("Março")
}
else if (num == 4)
{
    console.log("Abril")
}
else if (num == 5)
{
    console.log("Maio")
}
else if (num == 6)
{
    console.log("Junho")
}
else if (num == 7)
{
    console.log("Julho")
}
else if (num == 8)
{
    console.log("Agosto")
}
else if (num == 9)
{
    console.log("Setembro")
}
else if (num == 10)
{
    console.log("Outubro")
}
else if (num == 11)
{
    console.log("Novembro")
}
else if (num == 12)
{
    console.log("Dezembro")
}
else {
    console.log("Mês inválido")
}

/*Questao 01*/
let num: number[] = [1,2,3]
var ac: number = 0
for(var n in num){
    ac = ac + num[n]
    console.log(ac)
}               

/*Questao 02*/
/*Retorna uma contagem de 1 a 5 e ao final retorna 'Undefined' por estar 
acessando uma posição vazia*/

/*Questao 03*/
let num: number[] = [5,1,3,2,7,0,6,4,8,9]
// ordem crescente
console.log(num.sort())
//ordem decrescente
console.log(num.sort().reverse())

/*Questao 04*/
let str: string = 'Instituto Federal do Piauí'
//exibir string em maiúsculo
console.log(str.toUpperCase())
//achar string através do indice
console.log(str.charAt(10))
//achar indice através de uma string
console.log(str.indexOf('o',9))
//dividir a frase em um array de string
console.log(str.split(' '))
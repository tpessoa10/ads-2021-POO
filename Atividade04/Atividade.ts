/*Questao 01 - Sim, pois a variável quantReservas não foi inicializada e nem está atribuida em um construtor.*/
/*Questao 02 */
class Hotel {
    quantReservas : number ;
    adicionarReserva(quantReservas: number) : void {
    quantReservas++;
    }
    
    constructor(quantReservas: number){
        this.quantReservas = quantReservas
    }
    }
    
    let hotel : Hotel = new Hotel(2);
    console.log(hotel.quantReservas);
    
/*Questao 03 - Por conta do construtor, o argumento deve ser passado dentro de  new Radio(), por exemplo,
let r : Radio = new Radio(10); */

/* Questao 04 A - O resultado dos dois prints é 90, pois c1 está apontando para o mesmo objeto c2*/
/* Questao 04 B - É excluido da memória pela própia linguagem */

/*Questao 05*/

class jogador{
    forca : number;
    nivel : number
    pontos_atuais : number

    constructor(forca: number, nivel: number, pontos_atuais: number){
        this.forca = forca
        this.nivel = nivel
        this.pontos_atuais = pontos_atuais
    }

    pontos_relativos_ataque(pontos_relativos: number): void{
        pontos_relativos = this.forca * this.nivel    
    }

    atacar(outro_jogador: jogador, subtracao_jogador : number): number{
        subtracao_jogador =  (+this.pontos_relativos_ataque) - (+outro_jogador.pontos_relativos_ataque)
        return subtracao_jogador
    }
}

let j1 : jogador = new jogador(10, 10, 100)
let j2 : jogador = new jogador(5, 5, 50)

console.log(j1.pontos_relativos_ataque(0))
console.log(j2.pontos_relativos_ataque(0))
j1.atacar(j2, 0)
console.log(j1.pontos_relativos_ataque(0))
console.log(j2.pontos_relativos_ataque(0))


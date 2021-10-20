/*Questao 01 - Sim, pois a variável quantReservas não foi inicializada e nem está atribuida em um construtor.*/
/*Questao 02 */
var Hotel = /** @class */ (function () {
    function Hotel(quantReservas) {
        this.quantReservas = quantReservas;
    }
    Hotel.prototype.adicionarReserva = function (quantReservas) {
        quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
console.log(hotel.quantReservas);
/*Questao 03 - Por conta do construtor, o argumento deve ser passado dentro de  new Radio(), por exemplo,
let r : Radio = new Radio(10); */
/* Questao 04 A - O resultado dos dois prints é 90, pois c1 está apontando para o mesmo objeto c2*/
/* Questao 04 B - É excluido da memória pela própia linguagem */
/*Questao 05*/
var jogador = /** @class */ (function () {
    function jogador(forca, nivel, pontos_atuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    jogador.prototype.pontos_relativos_ataque = function (pontos_relativos) {
        pontos_relativos = this.forca * this.nivel;
    };
    jogador.prototype.atacar = function (outro_jogador, subtracao_jogador) {
        subtracao_jogador = (+this.pontos_relativos_ataque) - (+outro_jogador.pontos_relativos_ataque);
        return subtracao_jogador;
    };
    return jogador;
}());
var j1 = new jogador(10, 10, 100);
var j2 = new jogador(5, 5, 50);
console.log(j1.pontos_relativos_ataque(0));
console.log(j2.pontos_relativos_ataque(0));
j1.atacar(j2, 0);
console.log(j1.pontos_relativos_ataque(0));
console.log(j2.pontos_relativos_ataque(0));

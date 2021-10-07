/*Questao 01 - Objetos são analogias a elementos do mundo real, no qual possuem caracteristicas e comportamentos
Classes são enquadramentos de objetos em categorias conforme os atributos e métodos*/
/*Questao02 - Atributos são caracteristicas e propiedades que os objetos possuem, ex: Objeto conta bancária possui
os atributos número, saldo, titular. Métodos são comportamentos do objeto ou acões que um objeto pode realizar,
ex : Objeto conta bancária pode creditar, debitar, transferir e etc.*/
/* Questao03 -

Atributo | Sistema importante | Sistemas não importante|
Peso     |      Academia      |        Faculdade       |
Tipo de  CNH | DETRAN         |        Escola          |
Tipo Sanguíneo | Hospital     |        Mercado         |
Habilidade Destra | Academia  |        Escola          |
Percent. de gordura | Academia|        Faculdade       |
Saldo na conta |Conta bancária|        Escola          |
Etinia | Orfanato             |        Super Mercado   | */
/* Questao04A - Sim, pois o atributo representaria o titular da conta */
/*Questao 04B - Não. Objeto representaria melhor

/* Questao 05 - Aluno, professor, matéria, horário, calendário, boletim */
/* Questao 06 - Objeto - Jogador, atributos - vida, ataque, defesa, dano, dano critico, nível, métodos - atacar, defender,
esquivar, upar.
Objeto - NPC, atributos - vida, itens, métodos - interagir, vender, comprar.
Objeto - Inimigo, atributos - vida, ataque, defesa, dano, itens, nível métodos - atacar, defender, esquivar, soltar item
Objeto - Item, atributos - valor, raridade, nível, métodos - refinar, comprar, vender */
/*Questao 07*/
var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.l1 = 0;
        this.l2 = 0;
    }
    Retangulo.prototype.Calcula_Perimetro = function () {
        return (this.l1 + this.l2) * 2;
    };
    return Retangulo;
}());
var r;
r = new Retangulo();
r.l1 = 90;
r.l2 = 10;
console.log('Perimetro é  =', r.Calcula_Perimetro());
/*Questao08*/
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = 0;
    }
    Circulo.prototype.Area_Circulo = function () {
        return (Math.pow(this.raio, 2)) * 3.14;
    };
    Circulo.prototype.Perimetro_Circulo = function () {
        return 2 * 3.14 * this.raio;
    };
    return Circulo;
}());
var c;
c = new Circulo();
c.raio = 10;
console.log('Area do circulo é:', c.Area_Circulo());
console.log('Perímetro dor circulo é: ', c.Perimetro_Circulo());
/* Questao09 */
var SintuacaoFinanceira = /** @class */ (function () {
    function SintuacaoFinanceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    SintuacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SintuacaoFinanceira;
}());
var x;
x = new SintuacaoFinanceira();
x.valorCreditos = 1000;
x.valorDebitos = 100;
console.log('O saldo é:', x.saldo());

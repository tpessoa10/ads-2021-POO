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

class Retangulo {
    l1 : number = 0;
    l2 : number = 0;

    Calcula_Perimetro(): number{
        return (this.l1 + this.l2) * 2;
    }
}

let r : Retangulo
r = new Retangulo()
r.l1 = 90
r.l2 = 10
console.log('Perimetro é  =', r.Calcula_Perimetro())

/*Questao08*/

class Circulo {
    raio : number = 0;

    Area_Circulo(): number{
        return (this.raio**2) * 3.14;
    }

    Perimetro_Circulo(): number{
        return 2 * 3.14 * this.raio;
    }
}

let c : Circulo;
c = new Circulo();
c.raio = 10;
console.log('Area do circulo é:', c.Area_Circulo());
console.log('Perímetro dor circulo é: ', c.Perimetro_Circulo());

/* Questao09 */

class SintuacaoFinanceira{
    valorCreditos : number = 0;
    valorDebitos : number = 0;

    saldo() : number {
        return this.valorCreditos - this.valorDebitos;
    }
} 

let x : SintuacaoFinanceira;
x = new SintuacaoFinanceira();
x.valorCreditos = 1000;
x.valorDebitos = 100;
console.log('O saldo é:',x.saldo());
/*Questao 01*/
class Calculadora{
    private operando1: number
    private operando2: number

    constructor(operando1: number, operando2: number){
        this.operando1 = operando1
        this.operando2 = operando2
    }

    public soma(): void{
        console.log(this.operando1 + this.operando2)
    }

    public subtracao(): void{
        console.log(this.operando1 - this.operando2)
    }
}

let cal1 : Calculadora = new Calculadora(2,1)
cal1.soma()
cal1.subtracao()

cal1.operando1 = 5

/*Não é possível acessar 'operando1' pois é privado*/

/*Questao 02*/
class Hora{
    private hora: number
    private minuto: number
    private segundo: number

    constructor(hora: number, minuto: number, segundo: number){
        this.hora = hora
        this.minuto = minuto
        this.segundo = segundo
    }

    public lerHora(horaLida: number){
        this.hora = horaLida
    }

    public lerMinuto(minutoLido: number){
        this.minuto = minutoLido
    }

    public lerSegundo(segundoLido: number){
        this.segundo = segundoLido
    }

    public exibirHora(){
        console.log(this.hora, ':', this.minuto, ':', this.segundo)
    }
}

let hora1: Hora = new Hora(10,30,45)
hora1.lerHora(12)
hora1.lerMinuto(20)
hora1.lerSegundo(47)
hora1.exibirHora()

/*Questao 03 e 04*/
class Conta {
	private numero: String;
	private saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		if (this.saldo >= valor) {
			this.saldo = this.saldo - valor;
		}
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

    get lerSaldo(){
        return this.saldo
    }

}

class Banco {
	private contas: Conta[] = [];
	
	public inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this.contas.push(conta);
        }
	}
	
	public consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	public alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	public excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	public depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    public sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    public transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    public calcularQuantidadeContas(): number {
        return this.contas.length;
    }

    public calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (conta of this.contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    public calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }
}


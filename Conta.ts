var rl = require('readline-sync')
//erica, liuji, isabela, eduarda, miguel, pedro, francisco e alexandre 
export let bancoContas: Array<Conta> = []


export class Conta {
    public nome: string
    public senha: number
    public saldo: number
    public idade: number
    public cpf: number
    public conta: boolean
    public tipoconta: number
    public historico: Array<string> = []
    constructor(nome: string, senha: number, idade: number, cpf: number, tipoconta: number) {
        this.nome = nome
        this.senha = senha
        this.saldo = 0
        this.idade = idade
        this.cpf = cpf
        this.tipoconta = tipoconta
    }

    public setSaldo(): void {
        this.saldo = rl.questionInt('Digite o valor do seu deposito: ')
        console.log(`O seu saldo é ${this.saldo}`)
    }

    public getSaldo(): void {
        console.log(`Seu saldo é ${this.saldo}`)
    }

    public saque(): void {
        let valorSaque = rl.questionInt('Digite o valor que deseja sacar: ')
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque
            this.historico.push(valorSaque)
            console.log(`Seu novo saldo é ${this.saldo}`)
        } else {
            console.log('Saldo insuficiente')
        }

    }

    public deposito(): void {
        let valorDeposito = rl.questionInt('Digite o valor que deseja depositar: ')
        this.saldo += valorDeposito
        console.log(`Seu novo saldo é ${this.saldo}`)
    }

    transferencias(outraConta: Conta): void {
        let valorTransferencia = rl.questionInt('Digite o valor que deseja transferir: ')
        if (this.saldo >= valorTransferencia) {
            this.saldo -= valorTransferencia
            outraConta.saldo += valorTransferencia
            console.log(`A quantia de ${valorTransferencia} foi transferida. Seu novo saldo é ${this.saldo}`)
        } else {
            console.log('Saldo insuficiente')
        }

    }

    public geraExtrato(): void {
        console.log(`Cliente :${this.nome} \n o saldo do cliente é: ${this.saldo}, \n Numero da Conta: ${this.cpf}`)
    }


}
export class ContaPoupanca extends Conta {
    constructor(nome: string, senha: number, idade: number, cpf: number, tipoconta: number) {
        super(nome, senha, idade, cpf, tipoconta)
        this.conta=false
    }

    public jurosPoupanca(): void {
        let valorPoupanca = rl.questionInt('Digite o valor que deseja aplicar: ')
        let tempo = rl.questionInt('Digite o tempo em anos: ')
        let juros = valorPoupanca * 0.05 * tempo
        console.log(`Seu juros é ${juros}`)
    }

    public rendimentos(): void {
        let valorRendimento = rl.questionInt('Digite o valor que deseja aplicar: ')
        let tempo = rl.questionInt('Digite o tempo em anos: ')
        let rendimento = valorRendimento * 0.50 * tempo
        console.log(`Seu rendimento é ${rendimento}`)
    }

    public getSaldo(): void {
        console.log(`Seu saldo é ${this.saldo}`)

    }
    public descoblirPoupanca(): string {
        return'poupanca'
    }

}

export class ContaCorrente extends Conta {
    constructor(nome: string, senha: number, idade: number, cpf: number, tipoconta: number) {
        super(nome, senha, idade, cpf, tipoconta)
        this.conta=true
    }

    public jurosAnual(): void {
        let valorJuros = rl.questionInt('Digite o valor que deseja aplicar: ')
        let tempo = rl.questionInt('Digite o tempo em anos: ')
        let juros = valorJuros * 0.05 * tempo
        console.log(`Seu juros é ${juros}`)
    }

    public getContaCorrente(): void {
        console.log(this.saldo)
    }

    public setContaCorrente(): void {
        this.saldo = rl.questionInt('Digite o valor que deseja depositar: ')

        console.log(`Seu novo saldo é ${this.saldo}`)
    }
    public descoblirCorrente(): string {
        return 'Corrente'
    }
}


//let novaConta = criarConta(cliente)
export function addConta(user: Conta): void {
    this.bancoContas.push(user)
}

//na transferencia você irá ter de printar todas as contas e escolher uma para transferir (usando o find)
//passar a conta por parâmetro e o valor também

//menus:
//menu 1) cadastro e login
//menu 2) menu da conta corrente ou conta poupança - fazer verificação do tipo de conta (if else)
//menu 3) atividades da conta: saque, transf, deposito etc
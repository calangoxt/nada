import { ContaCorrente, Conta, ContaPoupanca, bancoContas, addConta } from "./conta";

var rl = require('readline-sync');
let contaCorrente = new ContaCorrente('', 0, 0, 0, 0)
let contaPoupanca = new ContaPoupanca('', 0, 0, 0, 0)
cadastro()
function cadastro() {
    console.log(`Voce esta se cadastrando na conta`)

}
function criarConta(): void {

    let opt = rl.questionInt(`
        1 - Conta Corrente
        2 - Conta Poupanca
        0 - Finalizar
    `)

    switch (opt) {
        case 0:
            console.log("Encerrando criação de conta");
            process.exit(0)
        case 1:
            let novaContaC = new ContaCorrente(usuario.nome, usuario.senha, 0, usuario.idade, usuario.cpf)
            console.log(`Conta Corrente criada com sucesso`)
            bancoContas.push(novaContaC)
            menu2()
        case 2:
            let novaContaP = new ContaPoupanca(usuario.nome, usuario.senha, 0, usuario.idade, usuario.cpf)
            console.log(`Conta Poupança criada com sucesso`)
            menu3(novaContaP)
            bancoContas.push(novaContaP)
    }
}

function menu2() {
    while (true) {
        console.log(`
        1- Deposito
        2- Saque
        3- Trasferencia
        4- Gerar extrato`
        )
        let option = rl.questionInt('Digite o numero: ')
        switch (option) {
            case 1:
                contaCorrente.deposito()
                break
            case 2:
                contaCorrente.saque()
                break
            case 3:
                let procurar = rl.question('Digite o nome do usuario: ')
                let nome = bancoContas.filter((user) => procurar == user)
                contaCorrente.transferencias(nome[0])
                break
            case 4:
                contaCorrente.geraExtrato()
                break
            case 0:
                process.exit(0)
            default:
                console.log('Digite algo valido');

                break
        }
    }
}
function menu3(ContaPoupanca) {
    console.log(
        `
        1- Depositos
        2- Saques
        3- Rendimentos
        4- Juros 
        5- Trasferencia
        6- Gerar extrato
        `
    )
    let option = rl.questionInt('Digite o numero: ')
    switch (option) {
        case 1:
            contaPoupanca.deposito()
            break
        case 2:
            ContaPoupanca.saque()
            break
        case 3:
            ContaPoupanca.rendimentos()
            break
        case 4:
            ContaPoupanca.jurosPoupanca()
            break
        case 5:
            let procurar = rl.question('Digite o nome do usuario: ')
            let nome = bancoContas.filter((user) => procurar == bancoContas)
            contaPoupanca.transferencias(nome[0])
            break
        case 6:
            contaPoupanca.geraExtrato()
            break
        case 0:
            process.exit(0)
        default:
            console.log('Digite algo valido');

            break
    }
}





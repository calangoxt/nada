import { ContaCorrente, ContaPoupanca, Conta } from "./conta"


let rl = require("readline-sync")
//criar array para guardar contas
let arrayContas: Array<Conta> = []

//menu inicial para criar contas e guardar
function menuPrincipal(): void {
    while (true) {
        let opcao = rl.questionInt(`
            1 - Cadastrar
            2 - Logar
            3 - Sair
        `)
        switch (opcao) {
            case 1: //nome, cpf, idade e senha, o saldo é zerado no inicio cadastrar e dar push no arrayContas, precisa ser por return - Cadastro de Cliente
                //o cliente tem que escolher entre criar conta poupança ou corrente
                let nomeCliente = rl.question(`Insira seu nome: `)
                let idadeCliente = rl.questionInt(`Insira sua idade: `)
                let cpfCliente = rl.questionInt(`Insira seu cpf: `)
                let senhaCliente = rl.questionInt(`Insira sua senha: `)
                let tipoconta = rl.questionInt(`Insira 1-para conta corrente 2-para conta poupanca: `)
                if (1 === tipoconta) {
                    let usuario = new ContaCorrente(nomeCliente, idadeCliente, cpfCliente, senhaCliente, tipoconta)
                    arrayContas.push(usuario)
                    contaCorrenteMenu(usuario)
                } else if (2 === tipoconta) {
                    let usuario = new ContaPoupanca(nomeCliente, idadeCliente, cpfCliente, senhaCliente, tipoconta)
                    arrayContas.push(usuario)
                    contaPoupancaMenu(usuario)
                } else {
                    console.log(`escolha uma opção valida`)
                }
                break
            case 2: //criar função para logar e verificar se existe no arrayContas
                let loginUser = rl.question("Insira seu username: ")
                let passUser = rl.questionInt("Insira seu password: ")
                let login = arrayContas.find((user) => loginUser == user.nome)

                //verificar o tipo da conta
                if (login?.tipoconta === 1) {
                    console.log(`${loginUser} logou com sucesso`);
                    contaCorrenteMenu(login)
                } else if (login?.tipoconta === 2) {
                    console.log(`${loginUser} logou com sucesso`);
                    contaPoupancaMenu(login)
                } else {
                    console.log(`Conta n existe`);
                    menuPrincipal()
                }
                break
            case 3:
                process.exit(0)
        }
    }
}



function contaCorrenteMenu(conta) {
    while (true) {
        console.log(`
        1- Deposito
        2- Saque
        3- Trasferencia
        4- Gerar extrato
        5- voltar para o menu principal`
        )
        let option = rl.questionInt('Digite o numero: ')
        switch (option) {
            case 1:
                conta.deposito()
                break
            case 2:
                conta.saque()
                break
            case 3:
                let procurar = rl.question('Digite o nome do usuario: ')
                let nome = arrayContas.find((user) => procurar == user.nome)
                conta.transferencias(nome)
                break
            case 4:
                conta.geraExtrato()
                break
            case 5:
                menuPrincipal()
                break
            case 0:
                process.exit(0)
            default:
                console.log('Digite algo valido');

                break
        }
    }
}
function contaPoupancaMenu(conta) {
    while (true) {
        console.log(
            `
        1- Depositos
        2- Saques
        3- Rendimentos
        4- Juros 
        5- Trasferencia
        6- Gerar extrato
        7- voltar para o menu principal
        `
        )
        let option = rl.questionInt('Digite o numero: ')
        switch (option) {
            case 1:
                conta.deposito()
                break
            case 2:
                conta.saque()
                break
            case 3:
                conta.rendimentos()
                break
            case 4:
                conta.jurosPoupanca()
                break
            case 5:
                let procurar = rl.question('Digite o nome do usuario: ')
                let nome = arrayContas.filter((user) => procurar == arrayContas)
                conta.transferencias(nome[0])
                break
            case 6:
                conta.geraExtrato()
                break
            case 7:
                menuPrincipal()
                break
            case 0:
                process.exit(0)
            default:
                console.log('Digite algo valido');
                break
        }
    }
}

menuPrincipal()
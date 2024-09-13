"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = require("./conta");
var rl = require("readline-sync");
//criar array para guardar contas
var arrayContas = [];
//menu inicial para criar contas e guardar
function menuPrincipal() {
    var _loop_1 = function () {
        var opcao = rl.questionInt("\n            1 - Cadastrar\n            2 - Logar\n            3 - Sair\n        ");
        switch (opcao) {
            case 1: //nome, cpf, idade e senha, o saldo é zerado no inicio cadastrar e dar push no arrayContas, precisa ser por return - Cadastro de Cliente
                //o cliente tem que escolher entre criar conta poupança ou corrente
                var nomeCliente = rl.question("Insira seu nome: ");
                var idadeCliente = rl.questionInt("Insira sua idade: ");
                var cpfCliente = rl.questionInt("Insira seu cpf: ");
                var senhaCliente = rl.questionInt("Insira sua senha: ");
                var tipoconta = rl.questionInt("Insira 1-para conta corrente 2-para conta poupanca: ");
                if (1 === tipoconta) {
                    var usuario = new conta_1.ContaCorrente(nomeCliente, idadeCliente, cpfCliente, senhaCliente, tipoconta);
                    arrayContas.push(usuario);
                    contaCorrenteMenu(usuario);
                }
                else if (2 === tipoconta) {
                    var usuario = new conta_1.ContaPoupanca(nomeCliente, idadeCliente, cpfCliente, senhaCliente, tipoconta);
                    arrayContas.push(usuario);
                    contaPoupancaMenu(usuario);
                }
                else {
                    console.log("escolha uma op\u00E7\u00E3o valida");
                }
                break;
            case 2: //criar função para logar e verificar se existe no arrayContas
                var loginUser_1 = rl.question("Insira seu username: ");
                var passUser = rl.questionInt("Insira seu password: ");
                var login = arrayContas.find(function (user) { return loginUser_1 == user.nome; });
                //verificar o tipo da conta
                if ((login === null || login === void 0 ? void 0 : login.tipoconta) === 1) {
                    console.log("".concat(loginUser_1, " logou com sucesso"));
                    contaCorrenteMenu(login);
                }
                else if ((login === null || login === void 0 ? void 0 : login.tipoconta) === 2) {
                    console.log("".concat(loginUser_1, " logou com sucesso"));
                    contaPoupancaMenu(login);
                }
                else {
                    console.log("Conta n existe");
                    menuPrincipal();
                }
                break;
            case 3:
                process.exit(0);
        }
    };
    while (true) {
        _loop_1();
    }
}
function contaCorrenteMenu(conta) {
    var _loop_2 = function () {
        console.log("\n        1- Deposito\n        2- Saque\n        3- Trasferencia\n        4- Gerar extrato\n        5- voltar para o menu principal");
        var option = rl.questionInt('Digite o numero: ');
        switch (option) {
            case 1:
                conta.deposito();
                break;
            case 2:
                conta.saque();
                break;
            case 3:
                var procurar_1 = rl.question('Digite o nome do usuario: ');
                var nome = arrayContas.find(function (user) { return procurar_1 == user.nome; });
                conta.transferencias(nome);
                break;
            case 4:
                conta.geraExtrato();
                break;
            case 5:
                menuPrincipal();
                break;
            case 0:
                process.exit(0);
            default:
                console.log('Digite algo valido');
                break;
        }
    };
    while (true) {
        _loop_2();
    }
}
function contaPoupancaMenu(conta) {
    var _loop_3 = function () {
        console.log("\n        1- Depositos\n        2- Saques\n        3- Rendimentos\n        4- Juros \n        5- Trasferencia\n        6- Gerar extrato\n        7- voltar para o menu principal\n        ");
        var option = rl.questionInt('Digite o numero: ');
        switch (option) {
            case 1:
                conta.deposito();
                break;
            case 2:
                conta.saque();
                break;
            case 3:
                conta.rendimentos();
                break;
            case 4:
                conta.jurosPoupanca();
                break;
            case 5:
                var procurar_2 = rl.question('Digite o nome do usuario: ');
                var nome = arrayContas.filter(function (user) { return procurar_2 == arrayContas; });
                conta.transferencias(nome[0]);
                break;
            case 6:
                conta.geraExtrato();
                break;
            case 7:
                menuPrincipal();
                break;
            case 0:
                process.exit(0);
            default:
                console.log('Digite algo valido');
                break;
        }
    };
    while (true) {
        _loop_3();
    }
}
//lógica de transferencia:
//buscar contas dentro do array de contas
//menu conta poupança
//menu conta corrente
menuPrincipal();

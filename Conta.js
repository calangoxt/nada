"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = exports.ContaPoupanca = exports.Conta = exports.bancoContas = void 0;
exports.addConta = addConta;
var rl = require('readline-sync');
//erica, liuji, isabela, eduarda, miguel, pedro, francisco e alexandre 
exports.bancoContas = [];
var Conta = /** @class */ (function () {
    function Conta(nome, senha, idade, cpf, tipoconta) {
        this.historico = [];
        this.nome = nome;
        this.senha = senha;
        this.saldo = 0;
        this.idade = idade;
        this.cpf = cpf;
        this.tipoconta = tipoconta;
    }
    Conta.prototype.setSaldo = function () {
        this.saldo = rl.questionInt('Digite o valor do seu deposito: ');
        console.log("O seu saldo \u00E9 ".concat(this.saldo));
    };
    Conta.prototype.getSaldo = function () {
        console.log("Seu saldo \u00E9 ".concat(this.saldo));
    };
    Conta.prototype.saque = function () {
        var valorSaque = rl.questionInt('Digite o valor que deseja sacar: ');
        if (valorSaque <= this.saldo) {
            this.saldo -= valorSaque;
            this.historico.push(valorSaque);
            console.log("Seu novo saldo \u00E9 ".concat(this.saldo));
        }
        else {
            console.log('Saldo insuficiente');
        }
    };
    Conta.prototype.deposito = function () {
        var valorDeposito = rl.questionInt('Digite o valor que deseja depositar: ');
        this.saldo += valorDeposito;
        console.log("Seu novo saldo \u00E9 ".concat(this.saldo));
    };
    Conta.prototype.transferencias = function (outraConta) {
        var valorTransferencia = rl.questionInt('Digite o valor que deseja transferir: ');
        if (this.saldo >= valorTransferencia) {
            this.saldo -= valorTransferencia;
            outraConta.saldo += valorTransferencia;
            console.log("A quantia de ".concat(valorTransferencia, " foi transferida. Seu novo saldo \u00E9 ").concat(this.saldo));
        }
        else {
            console.log('Saldo insuficiente');
        }
    };
    Conta.prototype.geraExtrato = function () {
        console.log("Cliente :".concat(this.nome, " \n o saldo do cliente \u00E9: ").concat(this.saldo, ", \n Numero da Conta: ").concat(this.cpf));
    };
    return Conta;
}());
exports.Conta = Conta;
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(nome, senha, idade, cpf, tipoconta) {
        var _this = _super.call(this, nome, senha, idade, cpf, tipoconta) || this;
        _this.conta = false;
        return _this;
    }
    ContaPoupanca.prototype.jurosPoupanca = function () {
        var valorPoupanca = rl.questionInt('Digite o valor que deseja aplicar: ');
        var tempo = rl.questionInt('Digite o tempo em anos: ');
        var juros = valorPoupanca * 0.05 * tempo;
        console.log("Seu juros \u00E9 ".concat(juros));
    };
    ContaPoupanca.prototype.rendimentos = function () {
        var valorRendimento = rl.questionInt('Digite o valor que deseja aplicar: ');
        var tempo = rl.questionInt('Digite o tempo em anos: ');
        var rendimento = valorRendimento * 0.50 * tempo;
        console.log("Seu rendimento \u00E9 ".concat(rendimento));
    };
    ContaPoupanca.prototype.getSaldo = function () {
        console.log("Seu saldo \u00E9 ".concat(this.saldo));
    };
    ContaPoupanca.prototype.descoblirPoupanca = function () {
        return 'poupanca';
    };
    return ContaPoupanca;
}(Conta));
exports.ContaPoupanca = ContaPoupanca;
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(nome, senha, idade, cpf, tipoconta) {
        var _this = _super.call(this, nome, senha, idade, cpf, tipoconta) || this;
        _this.conta = true;
        return _this;
    }
    ContaCorrente.prototype.jurosAnual = function () {
        var valorJuros = rl.questionInt('Digite o valor que deseja aplicar: ');
        var tempo = rl.questionInt('Digite o tempo em anos: ');
        var juros = valorJuros * 0.05 * tempo;
        console.log("Seu juros \u00E9 ".concat(juros));
    };
    ContaCorrente.prototype.getContaCorrente = function () {
        console.log(this.saldo);
    };
    ContaCorrente.prototype.setContaCorrente = function () {
        this.saldo = rl.questionInt('Digite o valor que deseja depositar: ');
        console.log("Seu novo saldo \u00E9 ".concat(this.saldo));
    };
    ContaCorrente.prototype.descoblirCorrente = function () {
        return 'Corrente';
    };
    return ContaCorrente;
}(Conta));
exports.ContaCorrente = ContaCorrente;
//let novaConta = criarConta(cliente)
function addConta(user) {
    this.bancoContas.push(user);
}
//na transferencia você irá ter de printar todas as contas e escolher uma para transferir (usando o find)
//passar a conta por parâmetro e o valor também
//menus:
//menu 1) cadastro e login
//menu 2) menu da conta corrente ou conta poupança - fazer verificação do tipo de conta (if else)
//menu 3) atividades da conta: saque, transf, deposito etc

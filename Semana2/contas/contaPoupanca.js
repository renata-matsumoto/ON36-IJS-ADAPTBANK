"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const contaCliente_1 = require("./contaCliente");
class ContaPoupanca extends contaCliente_1.ContaCliente {
    constructor(taxaJuros, id, cliente, saldo) {
        super(id, cliente, saldo);
        this.taxaJuros = taxaJuros;
    }
    transferencia(valor, contaDestino) {
        this.saldo -= valor;
        contaDestino.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
    aplicarTaxaJuros() {
        this.saldo += this.saldo * this.taxaJuros;
    }
}
exports.ContaPoupanca = ContaPoupanca;

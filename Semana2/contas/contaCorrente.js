"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const contaCliente_1 = require("./contaCliente");
class ContaCorrente extends contaCliente_1.ContaCliente {
    constructor(limiteChequeEspecial, id, cliente, saldo) {
        super(id, cliente, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    transferencia(valor, contaDestino) {
        this.saldo -= valor;
        contaDestino.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
    validarLimiteChequeEspecial(valor) {
        if (this.saldo - valor < -this.validarLimiteChequeEspecial) {
            console.log("Limite de Saldo excedido.");
        }
    }
}
exports.ContaCorrente = ContaCorrente;

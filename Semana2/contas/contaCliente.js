"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCliente = void 0;
class ContaCliente {
    constructor(id, cliente, saldo) {
        this.id = id;
        this.cliente = cliente;
        this.saldo = saldo;
    }
    transferencia(valor, contaDestino) {
        this.saldo -= valor;
        contaDestino.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor;
    }
}
exports.ContaCliente = ContaCliente;

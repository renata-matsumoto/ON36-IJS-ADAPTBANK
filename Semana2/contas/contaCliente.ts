import { Cliente } from "../cliente/cliente";

export abstract class ContaCliente {
  id: number;
  cliente: Cliente;
  saldo: number;

  constructor(id: number, cliente: Cliente, saldo: number) {
    this.id = id;
    this.cliente = cliente;
    this.saldo = saldo;
  }

  transferencia(valor: number, contaDestino: ContaCliente ) {
    this.saldo -= valor;
    contaDestino.saldo += valor;
  }

  saque(valor: number) {
    this.saldo -= valor;
  }
}
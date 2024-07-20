import { Cliente } from "../cliente/cliente";
import { ContaCliente } from "./contaCliente";

export class ContaPoupanca extends ContaCliente {
  taxaJuros: number;

  constructor(taxaJuros: number, id: number, cliente: Cliente, saldo: number) {
    super(id, cliente, saldo)
    this.taxaJuros = taxaJuros;
  }

  transferencia(valor: number, contaDestino: ContaCliente ) {
    this.saldo -= valor;
    contaDestino.saldo += valor;
  }

  saque(valor: number) {
    this.saldo -= valor;
  }
  
  aplicarTaxaJuros(){
    this.saldo += this.saldo * this.taxaJuros;
  }
}

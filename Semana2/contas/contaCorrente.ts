import { Cliente } from "../cliente/cliente";
import { ContaCliente } from "./contaCliente";

export class ContaCorrente extends ContaCliente {
  limiteChequeEspecial: number;
 

  constructor(limiteChequeEspecial: number, id: number, cliente: Cliente, saldo: number) {
    super(id, cliente, saldo)
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  transferencia(valor: number, contaDestino: ContaCliente ) {
    this.saldo -= valor;
    contaDestino.saldo += valor;
  }

  saque(valor: number) {
    this.saldo -= valor;
  }

  validarLimiteChequeEspecial(valor: number) {
    if(this.saldo - valor < -this.validarLimiteChequeEspecial){
      console.log("Limite de Saldo excedido.")
    }
  }
}

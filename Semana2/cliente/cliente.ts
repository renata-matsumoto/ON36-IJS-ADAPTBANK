export class Cliente {
  id: number;
  nomeCompleto: string;
  endereco: string;
  telefone: number;
  cpf: number;

  constructor(id: number, nomeCompleto: string, endereco: string, telefone: number, cpf: number) {
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.endereco = endereco;
    this.telefone = telefone;
    this.cpf = cpf;
    
  }
}
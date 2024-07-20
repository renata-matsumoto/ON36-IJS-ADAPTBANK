"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(id, nomeCompleto, endereco, telefone, cpf) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
    }
}
exports.Cliente = Cliente;

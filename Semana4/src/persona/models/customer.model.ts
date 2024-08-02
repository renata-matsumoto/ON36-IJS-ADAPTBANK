import { Account } from "src/accounts/models/account.interface";
import { PersonaType } from '../enums/persona-type.enum';
import { Persona } from "./persona.interface";

export class Customer implements Persona {
  type = PersonaType.customer;
  constructor(
    public id: number,
    public fullName: string,
    public address: string,
    public phone: string,
    public cpf: string,
    public accountId: Account['id'],
  ) {}
}

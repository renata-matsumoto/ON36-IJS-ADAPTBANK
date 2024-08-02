import { Account } from 'src/accounts/models/account.interface';
import { PersonaType } from '../enums/persona-type.enum';
import { Persona } from './persona.interface';

export class Customer extends Persona {
  constructor(
    public id: number,
    public fullName: string,
    public address: string,
    public phone: string,
    public cpf: string,
    public accountId: Account['id'],
    public type: PersonaType.customer,
  ) {
    super(id, fullName, type);
  }
}

import { Account } from 'src/accounts/models/account.interface';
import { PersonaType } from '../enums/persona-type.enum';
import { Persona } from './persona.interface';
import { Customer } from './customer.model';

export class Manager implements Persona {
  type = PersonaType.manager;
  constructor(
    public id: number,
    public fullName: string,
    public customerId: Customer['id'],
  ) {}
}

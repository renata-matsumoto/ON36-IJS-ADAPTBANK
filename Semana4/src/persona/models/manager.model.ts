import { PersonaType } from '../enums/persona-type.enum';
import { Persona } from './persona.interface';
import { Customer } from './customer.model';

export class Manager extends Persona {
  constructor(
    public id: number,
    public fullName: string,
    public customerId: Customer['id'],
    public type: PersonaType.manager,
  ) {
    super(id, fullName, type);
  }
}

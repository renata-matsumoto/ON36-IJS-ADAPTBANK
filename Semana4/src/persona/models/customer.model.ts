import { PersonaType } from '../enums/persona-type.enum';
import { Persona } from './persona.interface';

export class Customer extends Persona {
  constructor(
    public id: number,
    public fullName: string,
    public address: string,
    public phone: string,
    public cpf: string,
    public accountId: number,
  ) {
    super(id, fullName, PersonaType.customer);
  }
}

import { PersonaType } from '../enums/persona-type.enum';
import { Persona } from './persona.interface';

export class Manager extends Persona {
  constructor(
    public id: number,
    public fullName: string,
    public customerId: number,
  ) {
    super(id, fullName, PersonaType.manager);
  }
}

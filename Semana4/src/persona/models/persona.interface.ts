import { PersonaType } from '../enums/persona-type.enum';

export class Persona {
  constructor(
    public id: number,
    public fullName: string,
    public typePersona: PersonaType,
  ) {}
}

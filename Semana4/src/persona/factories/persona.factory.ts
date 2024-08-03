import { Injectable } from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { Manager } from '../models/manager.model';
import { Persona } from '../models/persona.interface';
import { PersonaType } from '../enums/persona-type.enum';

@Injectable()
export class PersonaFactory {
  createPersona(
    typePersona: PersonaType,
    id: number,
    accountId: number, // Certifique-se de que é number
    address: string,
    customerId: number, // Certifique-se de que é number
    cpf: string,
    fullName: string,
    phone: string,
  ): Persona {
    switch (typePersona) {
      case PersonaType.customer:
        return new Customer(id, fullName, address, phone, cpf, accountId);
      case PersonaType.manager:
        return new Manager(id, fullName, customerId);
      default:
        throw new Error('Invalid persona type');
    }
  }
}

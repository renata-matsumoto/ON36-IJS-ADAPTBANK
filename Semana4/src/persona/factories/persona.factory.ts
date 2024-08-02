import { Injectable } from '@nestjs/common';
import { PersonaType } from '../enums/persona-type.enum';
import { Persona } from '../models/persona.interface';
import { Customer } from '../models/customer.model';
import { Account } from 'src/accounts/models/account.interface';
import { Manager } from '../models/manager.model';

@Injectable()
export class PersonaFactory {
  createPersona(
    type: PersonaType,
    id: number,
    accountId: Account['id'],
    address: string,
    customerId: Customer['id'],
    cpf: string,
    fullName: string,
    phone: string,
  ): Persona {
    switch (type) {
      case PersonaType.customer:
        return new Customer(id, accountId, address, cpf, fullName, phone, type);
      case PersonaType.manager:
        return new Manager(id, customerId, fullName, type);
      default:
        throw new Error('Invalid persona type');
    }
  }
}

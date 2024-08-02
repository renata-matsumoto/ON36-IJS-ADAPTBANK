import { Customer } from 'src/persona/models/customer.model';
import { AccountType } from '../enums/account-type.enum';

export class Account {
  constructor(
    public id: number,
    public customerId: Customer['id'],
    public balance: number,
    public type: AccountType,
  ) {}
}

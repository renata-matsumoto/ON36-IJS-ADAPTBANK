import { AccountType } from '../enums/account-type.enum';

export class Account {
  transfer(amount: number, destinationAccount: Account) {
    throw new Error('Method not implemented.');
  }
  withdrawal(amount: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    public id: number,
    public customerId: CustomerId,
    public balance: number,
    public type: AccountType,
  ) {}
}

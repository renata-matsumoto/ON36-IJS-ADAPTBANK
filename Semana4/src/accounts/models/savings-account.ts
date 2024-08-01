import { AccountType } from '../enums/account-type.enum';
import { Account } from './account.interface';

export class SavingsAccount implements Account {
  type = AccountType.savingsAccount;
  public interestRate: number;
  constructor(
    public id: number,
    public customerId: CustomerId,
    public balance: number,
  ) {}
}

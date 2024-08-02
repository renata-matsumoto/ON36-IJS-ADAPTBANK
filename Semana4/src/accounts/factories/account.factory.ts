import { Injectable } from '@nestjs/common';
import { AccountType } from '../enums/account-type.enum';
import { CheckingAccount } from '../models/checking-account';
import { SavingsAccount } from '../models/savings-account';
import { Customer } from 'src/persona/models/customer.model';
import { Account } from '../models/account.interface';

@Injectable()
export class AccountFactory {
  createAccount(
    type: AccountType,
    id: number,
    customerId: Customer['id'],
    balance: number,
  ): Account {
    switch (type) {
      case AccountType.checkingAccount:
        return new CheckingAccount(id, customerId, balance);
      case AccountType.savingsAccount:
        return new SavingsAccount(id, customerId, balance);
      default:
        throw new Error('Invalid account type');
    }
  }
}

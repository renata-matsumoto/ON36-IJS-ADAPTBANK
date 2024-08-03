import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AccountFactory } from './factories/account.factory';
import { Account } from './models/account.interface';
import * as path from 'path';
import * as fs from 'fs';
import { AccountType } from './enums/account-type.enum';

@Injectable()
export class AccountsService {
  private readonly filePath = path.resolve('src/accounts/data/accounts.json');
  private idCounter: number;

  constructor(private readonly accountFactory: AccountFactory) {
    const accounts = this.readAccounts();
    this.idCounter =
      accounts.length > 0 ? accounts[accounts.length - 1].id + 1 : 1;
  }

  private readAccounts(): Account[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Account[];
  }

  private writeAccounts(accounts: Account[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  findById(id: number): Account {
    const accounts = this.readAccounts();
    const account = accounts.find((account) => account.id === id);

    if (!account) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada.`);
    }
    return account;
  }

  getTotalBalance(): number {
    const accounts = this.readAccounts();
    return accounts.reduce((total, account) => total + account.balance, 0);
  }

  getBalanceByAccountId(id: number): number {
    const account = this.findById(id);
    return account.balance;
  }

  updateBalance(id: number, newBalance: number): Account {
    const accounts = this.readAccounts();
    const accountUpdate = accounts.find((account) => account.id === Number(id));

    if (!accountUpdate) {
      throw new NotFoundException('Accoount not found');
    }

    accountUpdate.balance = newBalance;
    this.writeAccounts(accounts);
    return accountUpdate;
  }

  createAccount(
    customerId: number,
    balance: number,
    type: AccountType,
    isManager: boolean,
  ): Account {
    if (isManager) {
      throw new BadRequestException('Only managers can create accounts.');
    }
    const accounts = this.readAccounts();
    const newAccount = this.accountFactory.createAccount(
      type,
      this.idCounter,
      customerId,
      balance,
    );
    accounts.push(newAccount);
    this.writeAccounts(accounts);
    return newAccount;
  }

  findAll(): Account[] {
    return this.readAccounts();
  }

  getAccountType(): string[] {
    return Object.values(AccountType);
  }

  updateAccountType(id: number, newType: AccountType): Account {
    const accounts = this.readAccounts();
    const account = this.findById(id);
    account.type = newType;
    this.writeAccounts(accounts);
    return account;
  }

  deleteAccount(id: number): void {
    const accounts = this.readAccounts();
    const accountIndex = accounts.findIndex(
      (account) => account.id === Number(id),
    );

    if (accountIndex < 0) {
      throw new NotFoundException('Conta não encontrada');
    }
    accounts.splice(accountIndex, 1);
    this.writeAccounts(accounts);
  }

  deposit(id: number, amount: number): Account {
    const account = this.findById(id);
    if (amount <= 0) {
      throw new BadRequestException('O valor do depósito deve ser positivo.');
    }
    account.balance += amount;
    this.writeAccounts(this.readAccounts());
    return account;
  }

  withdraw(id: number, amount: number): Account {
    const account = this.findById(id);
    if (amount <= 0) {
      throw new BadRequestException('O valor da retirada deve ser positivo.');
    }
    if (account.balance < amount) {
      throw new BadRequestException('Saldo insuficiente.');
    }
    account.balance -= amount;
    this.writeAccounts(this.readAccounts());
    return account;
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Customer } from '../models/customer.model';
import { AccountsService } from 'src/accounts/accounts.service';


@Injectable()
export class CustomerService {
  private readonly filePath = path.resolve('src/persona/data/customer.json');
  private idCounter: number;

  private readCustomer(): Customer[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Customer[];
  }

  private writeCustomers(customers: Customer[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(customers, null, 2), 'utf8');
  }

  constructor(private readonly accountsService: AccountsService) {}

  getBalance(customerId: number): number {
    const account = this.findAccountByCustomerId(customerId);
    return this.accountsService.getBalanceByAccountId(account.id);
  }

  deposit(customerId: number, amount: number): void {
    if (amount <= 0) {
      throw new BadRequestException('O valor do depósito deve ser positivo.');
    }
    const account = this.findAccountByCustomerId(customerId);
    this.accountsService.deposit(account.id, amount);
  }

  withdraw(customerId: number, amount: number): void {
    if (amount <= 0) {
      throw new BadRequestException('O valor da retirada deve ser positivo.');
    }
    const account = this.findAccountByCustomerId(customerId);
    this.accountsService.withdraw(account.id, amount);
  }

  private findAccountByCustomerId(customerId: number): { id: number } {
    const customers = this.readCustomer();
    const customer = customers.find((cust) => cust.id === customerId);

    if (!customer) {
      throw new NotFoundException(
        `Cliente com ID ${customerId} não encontrado.`,
      );
    }

    const account = this.accountsService
      .findAll()
      .find((acc) => acc.customerId === customerId);

    if (!account) {
      throw new NotFoundException(
        `Conta não encontrada para o cliente com ID ${customerId}.`,
      );
    }

    return account;
  }
}

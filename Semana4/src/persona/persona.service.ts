import { Injectable, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Customer } from './models/customer.model';

@Injectable()
export class PersonaService {
  private readonly filePath = path.resolve('src/customer/data/customer.json');
  private idCounter: number;
  accountService: any;

  private readCustomer(): Customer[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Customer[];
  }

  private writeCustomers(customers: Customer[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(customers, null, 2), 'utf8');
  }

  getTotalBalance(accountId: number, balance: number): number {
    const account = this.accountService.findById(accountId);
    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return account.reduce((total, account) => total + account.balance, 0);

  }
}

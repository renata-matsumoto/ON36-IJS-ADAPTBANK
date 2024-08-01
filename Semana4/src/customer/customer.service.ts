import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Customer } from './model/customer.model';

@Injectable()
export class CustomerService {
  private readonly filePath = path.resolve('src/customer/data/customer.json');
  private idCounter: number;

  private readCustomer(): Customer[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Customer[];
  }

  private writeCustomers(customers: Customer[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(customers, null, 2), 'utf8');
  }

  getTotalBalance(accountId: number, balance: number): number {
    const accounts = this.accountService
  }
}
